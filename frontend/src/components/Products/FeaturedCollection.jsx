import React from "react";
import { Link } from "react-router-dom";
import featured from "../../assets/featured.jpeg";

const FeaturedCollection = () => {
  return (
    <section className="py-16 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-gradient-to-r from-green-50 to-green-100 rounded-3xl shadow-xl overflow-hidden">
        {/* Left Content */}
        <div className="lg:w-1/2 p-10 text-center lg:text-left">
          <h2 className="text-sm font-medium text-green-700 uppercase tracking-wide mb-3">
            Comfort and Style
          </h2>
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-gray-900">
            Apparel made for your <span className="text-green-600">everyday life</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
            Discover high-quality, comfortable clothing that effortlessly blends 
            fashion and function. Designed to make you look and feel great every day.
          </p>
          <Link
            to="/collections/all"
            className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-medium shadow hover:bg-gray-900 hover:scale-105 transform transition-all duration-300"
          >
            Shop Now →
          </Link>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 relative overflow-hidden">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105 lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
