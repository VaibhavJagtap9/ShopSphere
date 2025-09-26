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
    <div className="max-w-4xl mx-auto p-8">
      {/* ✅ Main Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-emerald-700">
            🎉 Thank You for Your Order!
          </h1>
          <p className="text-gray-500 mt-2">
            Your order has been placed successfully.
          </p>
        </div>

        {checkout && (
          <>
            {/* Order Info */}
            <div className="flex justify-between items-start border-b pb-6 mb-8">
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  Order ID:{" "}
                  <span className="text-emerald-600">{checkout._id}</span>
                </h2>
                <p className="text-gray-500 text-sm">
                  Placed on {new Date(checkout.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium text-gray-700">
                  Estimated Delivery
                </p>
                <p className="text-emerald-600 font-semibold">
                  {calculateEstimateDelivery(checkout.createdAt)}
                </p>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-4 mb-10">
              {checkout.checkoutItems.map((item) => {
                const imageUrl = item.image?.startsWith("http")
                  ? item.image
                  : `${backendURL}${item.image}`;

                return (
                  <div
                    key={item.productId}
                    className="flex items-center bg-gray-50 rounded-xl p-4 shadow-sm"
                  >
                    <img
                      src={imageUrl || "/placeholder.png"}
                      alt={item.name || "Product"}
                      className="w-16 h-16 object-cover rounded-lg mr-4 border"
                    />
                    <div>
                      <h4 className="text-md font-semibold text-gray-800">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {item.color} • {item.size}
                      </p>
                    </div>
                    <div className="ml-auto text-right">
                      <p className="text-md font-semibold text-gray-800">
                        ${item.price}
                      </p>
                      <p className="text-sm text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Payment & Delivery */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  💳 Payment
                </h4>
                <p className="text-gray-600">PayPal</p>
              </div>

              <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-gray-800">
                  🚚 Delivery Address
                </h4>
                <p className="text-gray-600">
                  {checkout.shippingAddress.address}
                </p>
                <p className="text-gray-600">
                  {checkout.shippingAddress.city},{" "}
                  {checkout.shippingAddress.country}
                </p>
              </div>
            </div>

            {/* Back to Shop */}
            <div className="mt-10 text-center">
              <button
                onClick={() => navigate("/")}
                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-xl shadow-md transition"
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
