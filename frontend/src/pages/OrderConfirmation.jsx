import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { clearCart } from "../redux/slice/cartSlice";

const OrderConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);

  const backendURL = import.meta.env.VITE_BACKEND_URL || "";

  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/cart"); // ✅ redirect if no order found
    }
  }, [checkout, dispatch, navigate]);

  const calculateEstimateDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10);
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
      {/* ✅ Main Card */}
      <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-emerald-700">
            🎉 Thank You for Your Order!
          </h1>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Your order has been placed successfully.
          </p>
        </div>

        {checkout && (
          <>
            {/* Order Info */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start border-b pb-4 sm:pb-6 mb-6 sm:mb-8 gap-4 sm:gap-0">
              <div>
                <h2 className="text-base sm:text-lg font-semibold text-gray-800 break-words">
                  Order ID:{" "}
                  <span className="text-emerald-600">{checkout._id}</span>
                </h2>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Placed on {new Date(checkout.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-left sm:text-right">
                <p className="text-xs sm:text-sm font-medium text-gray-700">
                  Estimated Delivery
                </p>
                <p className="text-emerald-600 font-semibold text-sm sm:text-base">
                  {calculateEstimateDelivery(checkout.createdAt)}
                </p>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
              {checkout.checkoutItems.map((item) => {
                const imageUrl = item.image?.startsWith("http")
                  ? item.image
                  : `${backendURL}${item.image}`;

                return (
                  <div
                    key={item.productId}
                    className="flex flex-col sm:flex-row sm:items-center bg-gray-50 rounded-xl p-4 shadow-sm gap-3 sm:gap-4"
                  >
                    <img
                      src={imageUrl || "/placeholder.png"}
                      alt={item.name || "Product"}
                      className="w-20 h-20 object-cover rounded-lg border mx-auto sm:mx-0"
                    />
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="text-sm sm:text-md font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {item.color} • {item.size}
                      </p>
                    </div>
                    <div className="text-center sm:text-right">
                      <p className="text-sm sm:text-md font-semibold text-gray-800">
                        ${item.price}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment & Delivery */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 shadow-sm">
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
                  💳 Payment
                </h4>
                <p className="text-sm sm:text-base text-gray-600">PayPal</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 sm:p-5 shadow-sm">
                <h4 className="text-base sm:text-lg font-semibold mb-2 text-gray-800">
                  🚚 Delivery Address
                </h4>
                <p className="text-sm sm:text-base text-gray-600">
                  {checkout.shippingAddress.address}
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  {checkout.shippingAddress.city},{" "}
                  {checkout.shippingAddress.country}
                </p>
              </div>
            </div>

            {/* Back to Shop */}
            <div className="mt-8 sm:mt-10 text-center">
              <button
                onClick={() => navigate("/")}
                className="px-5 sm:px-6 py-2.5 sm:py-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm sm:text-base font-medium rounded-xl shadow-md transition"
              >
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderConfirmation;
