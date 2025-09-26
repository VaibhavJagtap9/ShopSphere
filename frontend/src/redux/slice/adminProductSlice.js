import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = `${import.meta.env.VITE_BACKEND_URL}`;
const USER_TOKEN = `Bearer ${localStorage.getItem("userToken")}`;

// Async thunk to fetch products (admin view)
export const fetchAdminProducts = createAsyncThunk(
  "adminProducts/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/api/products`, {
        headers: { Authorization: USER_TOKEN },
      });
      console.log("📦 Admin Products Fetched:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error Fetching Products:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Error fetching products" });
    }
  }
);

// Async function to create a new product
export const createProduct = createAsyncThunk(
  "adminProducts/createProduct",
  async (productData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/api/products`, productData, {
        headers: { Authorization: USER_TOKEN },
      });
      console.log("✅ Product Created:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error Creating Product:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Error creating product" });
    }
  }
);

// Async thunk to update an existing product
export const updateProduct = createAsyncThunk(
  "adminProducts/updateProduct",
  async ({ id, productData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${API_URL}/api/products/${id}`, productData, {
        headers: { Authorization: USER_TOKEN },
      });
      console.log(`🔄 Product Updated (ID: ${id}):`, response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Error Updating Product:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Error updating product" });
    }
  }
);

// Async thunk to delete a product
export const deleteProduct = createAsyncThunk(
  "adminProducts/deleteProduct",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${API_URL}/api/products/${id}`, {
        headers: { Authorization: USER_TOKEN },
      });
      console.log(`🗑️ Product Deleted (ID: ${id})`);
      return id;
    } catch (error) {
      console.error("❌ Error Deleting Product:", error.response?.data || error.message);
      return rejectWithValue(error.response?.data || { message: "Error deleting product" });
    }
  }
);

const adminProductSlice = createSlice({
  name: "adminProducts",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Products
      .addCase(fetchAdminProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log("⏳ Fetching admin products...");
      })
      .addCase(fetchAdminProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        console.log("📊 Products in State:", state.products);
      })
      .addCase(fetchAdminProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || action.error.message;
        console.error("❌ Fetch Products Rejected:", state.error);
      })

      // Create Product
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        console.log("✅ Product Added to State:", action.payload);
      })

      // Update Product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((product) => product._id === action.payload._id);
        if (index !== -1) {
          state.products[index] = action.payload;
          console.log("🔄 Product Updated in State:", action.payload);
        } else {
          console.warn("⚠️ Updated product not found in state:", action.payload);
        }
      })

      // Delete Product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((product) => product._id !== action.payload);
        console.log("🗑️ Product Removed from State (ID):", action.payload);
      });
  },
});

export default adminProductSlice.reducer;
