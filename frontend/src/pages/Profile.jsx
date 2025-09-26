import React, { useEffect } from "react";
import MyOrderPage from "./MyOrderPage";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slice/authSlice";
import { clearCart } from "../redux/slice/cartSlice"; // ✅ ensure path is correct

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex-grow container mx-auto p-6">
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
          {/* Left Section: Profile Card */}
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="w-24 h-24 rounded-full bg-emerald-100 flex items-center justify-center text-3xl font-bold text-emerald-600 mb-4 shadow">
                {user?.name?.charAt(0).toUpperCase()}
              </div>

              {/* User Info */}
              <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">
                {user?.name}
              </h1>
              <p className="text-gray-500 text-sm md:text-base mb-6">
                {user?.email}
              </p>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Right Section: Orders */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="bg-white shadow-xl rounded-2xl p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                📦 My Orders
              </h2>
              <MyOrderPage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
