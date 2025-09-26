import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ----------------- Helpers -----------------
const loadCartFromStorage = () => {
  try {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : { products: [] };
  } catch {
    return { products: [] };
  }
};

const saveCartToStorage = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch {
    console.warn("Failed to save cart in localStorage");
  }
};

// ----------------- Async Thunks -----------------

// Fetch cart
export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ userId, guestId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        { params: { userId, guestId } }
      );
      return data.cart || data; // Ensure correct shape
    } catch (error) {
      console.error("Error fetching cart:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to fetch cart");
    }
  }
);

// Add item
export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity, size, color, guestId, userId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        { productId, quantity, size, color, guestId, userId }
      );
      return data.cart || data;
    } catch (error) {
      console.error("Error adding to cart:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to add to cart");
    }
  }
);

// Update item quantity
export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ productId, quantity, guestId, userId, size, color }, { rejectWithValue }) => {
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        { productId, quantity, guestId, userId, size, color }
      );
      return data.cart || data;
    } catch (error) {
      console.error("Error updating cart item quantity:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to update item quantity");
    }
  }
);

// Remove item
export const removeFromCart = createAsyncThunk(
  "cart/removeFromCart",
  async ({ productId, guestId, userId, size, color }, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart`,
        { data: { productId, guestId, userId, size, color } }
      );
      return data.cart || data;
    } catch (error) {
      console.error("Error removing from cart:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to remove item");
    }
  }
);

// Merge guest cart into user cart
export const mergeCart = createAsyncThunk(
  "cart/mergeCart",
  async ({ guestId, userId }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/cart/merge`,
        { guestId, userId },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );
      return data.cart || data;
    } catch (error) {
      console.error("Error merging cart:", error);
      return rejectWithValue(error.response?.data?.message || "Failed to merge cart");
    }
  }
);

// ----------------- Slice -----------------
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromStorage(),
    loading: false,
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.cart = { products: [] };
      localStorage.removeItem("cart");
    },
  },
  extraReducers: (builder) => {
    const setPending = (state) => {
      state.loading = true;
      state.error = null;
    };
    const setFulfilled = (state, action) => {
      state.loading = false;
      state.cart = action.payload;
      saveCartToStorage(action.payload);
    };
    const setRejected = (state, action) => {
      state.loading = false;
      state.error = action.payload;
    };

    builder
      .addCase(fetchCart.pending, setPending)
      .addCase(fetchCart.fulfilled, setFulfilled)
      .addCase(fetchCart.rejected, setRejected)

      .addCase(addToCart.pending, setPending)
      .addCase(addToCart.fulfilled, setFulfilled)
      .addCase(addToCart.rejected, setRejected)

      .addCase(updateCartItemQuantity.pending, setPending)
      .addCase(updateCartItemQuantity.fulfilled, setFulfilled)
      .addCase(updateCartItemQuantity.rejected, setRejected)

      .addCase(removeFromCart.pending, setPending)
      .addCase(removeFromCart.fulfilled, setFulfilled)
      .addCase(removeFromCart.rejected, setRejected)

      .addCase(mergeCart.pending, setPending)
      .addCase(mergeCart.fulfilled, setFulfilled)
      .addCase(mergeCart.rejected, setRejected);
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
