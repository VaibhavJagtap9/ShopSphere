import React from 'react';
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io5';
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className="bg-rabbit-red text-white text-sm">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        
        {/* Social Media Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.facebook.com" // 👉 Meta/Facebook link
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>

        {/* Center Message */}
        <div className="flex-grow text-center">
          <span className="font-medium tracking-wide">
            🚚 We Ship Worldwide - Fast & Reliable Shipping!
          </span>
        </div>

        {/* Contact Number */}
        <div className="hidden md:block">
          <a
            href="tel:+919876543210"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            📞 +91 98765 43210
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
