import React from "react";
import { RiDeleteBin3Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  updateCartItemQuantity,
} from "../../redux/slice/cartSlice";

const CartContents = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  const backendURL = import.meta.env.VITE_BACKEND_URL || "";

  // Handle quantity change
  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(
        updateCartItemQuantity({
          productId,
          quantity: newQuantity,
          guestId,
          userId,
          size,
          color,
        })
      );
    }
  };

  // Handle removing item
  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  };

  return (
    <div>
      {cart?.products?.map((product) => {
        const productKey = `${product.productId}-${product.size}-${product.color}`;

        // Build proper image URL
        const imageUrl =
          product.image?.startsWith("http")
            ? product.image
            : `${backendURL}${product.image}`;

        return (
          <div
            key={productKey}
            className="flex items-start justify-between py-4 border-b"
          >
            {/* Left side: Image + details */}
            <div className="flex items-start">
              <img
                src={imageUrl || "/placeholder.png"}
                alt={product.name || "Product"}
                className="w-20 h-24 object-cover mr-4 rounded"
              />
              <div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500">
                  Size: {product.size || "-"} | Color: {product.color || "-"}
                </p>

                {/* Quantity buttons */}
                <div className="flex items-center mt-2">
                  <button
                    aria-label="Decrease quantity"
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        -1,
                        product.quantity,
                        product.size,
                        product.color
                      )
                    }
                    className="border rounded px-2 py-1 text-lg font-medium hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="mx-4">{product.quantity}</span>
                  <button
                    aria-label="Increase quantity"
                    onClick={() =>
                      handleAddToCart(
                        product.productId,
                        1,
                        product.quantity,
                        product.size,
                        product.color
                      )
                    }
                    className="border rounded px-2 py-1 text-lg font-medium hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right side: Price + delete */}
            <div className="text-right">
              <p className="font-semibold">
                ${Number(product.price || 0).toLocaleString()}
              </p>
              <button
                aria-label="Remove from cart"
                onClick={() =>
                  handleRemoveFromCart(
                    product.productId,
                    product.size,
                    product.color
                  )
                }
              >
                <RiDeleteBin3Line className="h-6 w-6 mt-2 text-red-600 hover:text-red-800" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartContents;
