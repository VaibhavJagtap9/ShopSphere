import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import AdminSidebar from "./AdminSidebar";
import { Outlet } from "react-router";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-50">
      {/* ✅ Mobile Header */}
      <div className="flex md:hidden p-4 bg-emerald-600 text-white items-center justify-between shadow-md z-30">
        <button onClick={toggleSidebar}>
          <FaBars size={22} />
        </button>
        <h1 className="ml-4 text-lg font-semibold">Admin Dashboard</h1>
      </div>

      {/* ✅ Overlay (mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* ✅ Sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-30 shadow-lg`}
      >
        <div className="h-full flex flex-col">
          <div className="px-6 py-4 text-center border-b border-gray-700">
            <h2 className="text-xl font-bold text-emerald-400">
              ⚙️ Admin Panel
            </h2>
          </div>
          {/* Sidebar Component */}
          <AdminSidebar />
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="flex-grow p-6 md:p-8 overflow-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
