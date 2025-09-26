import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from 'react-icons/hi2';
import { IoMdClose } from 'react-icons/io';
import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import CardDrawer from '../Layout/CardDrawer';

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);

  const cartItemCount =
    cart?.products?.reduce((total, product) => total + (product.quantity || 0), 0) || 0;

  const toggleNavDrawer = () => setNavDrawerOpen((prev) => !prev);
  const toggleCartDrawer = () => setDrawerOpen((prev) => !prev);

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-white/70 backdrop-blur-lg border-b border-gray-200">
        <div className="container mx-auto flex items-center justify-between py-3 px-6">
          
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent"
          >
            ShopSphere
          </Link>

          {/* Center - Search (desktop only) */}
          <div className="hidden lg:block w-1/3">
            <SearchBar />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {['Men', 'Women', 'Top Wear', 'Bottom Wear'].map((item) => (
              <Link
                key={item}
                to={`/collections/all?${item.includes('Wear') ? `category=${item}` : `gender=${item}`}`}
                className="relative text-sm font-medium uppercase tracking-wide text-gray-600 hover:text-black transition-colors duration-200 group"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Right - Icons */}
          <div className="flex items-center space-x-5">
            {user?.role === 'admin' && (
              <Link
                to="/admin"
                className="bg-black px-3 py-1.5 rounded-lg text-xs text-white font-semibold shadow hover:bg-gray-800 transition"
              >
                Admin
              </Link>
            )}

            {/* Profile */}
            <Link
              to="/profile"
              className="hover:scale-110 transition-transform"
            >
              <HiOutlineUser className="h-6 w-6 text-gray-700 hover:text-black" />
            </Link>

            {/* Cart */}
            <button
              onClick={toggleCartDrawer}
              className="relative hover:scale-110 transition-transform"
            >
              <HiOutlineShoppingBag className="h-6 w-6 text-gray-700 hover:text-black" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-rabbit-red text-white text-xs rounded-full px-1.5 py-0.5 shadow-md animate-bounce">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={toggleNavDrawer} className="md:hidden">
              <HiBars3BottomRight className="h-6 w-6 text-gray-700 hover:text-black" />
            </button>
          </div>
        </div>
      </nav>

      {/* Cart Drawer */}
      <CardDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Overlay */}
      {navDrawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleNavDrawer}
        />
      )}

      {/* Mobile Navigation */}
      <div
        className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-xl transform transition-transform duration-300 z-50 ${
          navDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black" />
          </button>
        </div>
        <div className="p-6">
          <nav className="space-y-6 text-lg font-medium">
            {['Men', 'Women', 'Top Wear', 'Bottom Wear'].map((item) => (
              <Link
                key={item}
                to={`/collections/all?${item.includes('Wear') ? `category=${item}` : `gender=${item}`}`}
                onClick={toggleNavDrawer}
                className="block text-gray-600 hover:text-black transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
