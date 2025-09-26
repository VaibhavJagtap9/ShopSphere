import React, { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";
import { useParams } from "react-router";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsByFilters } from "../redux/slice/productsSlice";

const CollectionPage = () => {
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  const queryParams = Object.fromEntries([...searchParams]);
  const SidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProductsByFilters({ collection, ...queryParams }));
  }, [dispatch, collection, searchParams]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (SidebarRef.current && !SidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4 lg:p-6">
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-4">
        <button
          onClick={toggleSidebar}
          className="border px-4 py-2 flex items-center gap-2 rounded-lg shadow-sm bg-white hover:bg-gray-50"
        >
          <FaFilter /> Filters
        </button>
      </div>

      {/* Filter Sidebar */}
      <div
        ref={SidebarRef}
        className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          fixed inset-y-0 z-50 left-0 w-72 bg-white shadow-lg overflow-y-auto 
          transition-transform duration-300 lg:static lg:translate-x-0 
          rounded-lg`}
      >
        <FilterSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold uppercase mb-4">
          {collection ? collection : "All Collection"}
        </h2>

        {/* Sort Option */}
        <div className="mb-4">
          <SortOptions />
        </div>

        {/* Product Grid */}
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default CollectionPage;
