import React, { useEffect, useRef, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const [newArrivals, setNewArrivals] = useState([]);

  // Fetch new arrivals
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        setNewArrivals(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNewArrivals();
  }, []);

  // Mouse drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUpOrLeave = () => setIsDragging(false);

  // Scroll with buttons
  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -300 : 300;
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  // Update scroll button state
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const leftScroll = container.scrollLeft;
      const canScrollMoreRight =
        leftScroll + container.clientWidth < container.scrollWidth;
      setCanScrollLeft(leftScroll > 0);
      setCanScrollRight(canScrollMoreRight);
    }
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      updateScrollButtons();
      container.addEventListener('scroll', updateScrollButtons);
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', updateScrollButtons);
      }
    };
  }, [newArrivals]);

  return (
    <section className="py-20 px-4 lg:px-0 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto text-center mb-14 relative">
        <h1 className="text-4xl font-extrabold tracking-tight mb-4 bg-gradient-to-r from-indigo-600 to-pink-500 bg-clip-text text-transparent">
          ✨ Explore New Arrivals
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* Scroll Buttons */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-3">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`p-3 rounded-full shadow-md border transition ${
              canScrollLeft
                ? 'bg-white text-indigo-600 hover:bg-indigo-50 hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FiChevronLeft className="text-2xl" />
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`p-3 rounded-full shadow-md border transition ${
              canScrollRight
                ? 'bg-white text-indigo-600 hover:bg-indigo-50 hover:scale-105'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
            }`}
          >
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className={`container mx-auto overflow-x-scroll flex space-x-6 pb-4 scrollbar-hide relative ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[250px] sm:min-w-[50%] lg:min-w-[30%] relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
          >
            <img
              src={
                product.images?.[0]?.url
                  ? `${import.meta.env.VITE_BACKEND_URL}${product.images[0].url}`
                  : '/placeholder.png'
              }
              alt={product.images?.[0]?.altText || product.name}
              className="w-full h-[450px] object-cover transform group-hover:scale-105 transition duration-500"
              draggable="false"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-black/20 text-white p-4 backdrop-blur-sm">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-semibold text-lg group-hover:text-pink-400 transition">
                  {product.name}
                </h4>
                <p className="mt-1 text-sm text-gray-200">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
