import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });

  const [priceRange, setPriceRange] = useState([0, 100]);

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = ["Red", "Blue", "Green", "Yellow", "Orange", "White", "Pink", "Black", "Gray"];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];
  const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"];
  const gender = ["Men", "Women"];

  // Sync filters with URL params
  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: Number(params.minPrice) || 0,
      maxPrice: Number(params.maxPrice) || 100,
    });
    setPriceRange([Number(params.minPrice) || 0, Number(params.maxPrice) || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value];
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const handleColorSelect = (color) => {
    const newFilters = { ...filters, color };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const handlePriceChange = (e) => {
    const newMax = Number(e.target.value);
    const newRange = [0, newMax];
    setPriceRange(newRange);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newMax };
    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","));
      } else if (newFilters[key] !== "" && newFilters[key] !== null && newFilters[key] !== undefined) {
        params.append(key, newFilters[key]);
      }
    });
    setSearchParams(params);
    navigate(`?${params.toString()}`);
  };

  return (
    <div className="w-64 bg-white rounded-xl shadow p-5 overflow-y-auto h-[calc(100vh-2rem)] sticky top-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Filters</h3>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Category</label>
        {categories.map((category) => (
          <label key={category} className="flex items-center mb-2 cursor-pointer hover:text-blue-600">
            <input
              type="radio"
              name="category"
              value={category}
              checked={filters.category === category}
              onChange={handleFilterChange}
              className="mr-2 accent-blue-500"
            />
            {category}
          </label>
        ))}
      </div>

      {/* Gender */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Gender</label>
        {gender.map((g) => (
          <label key={g} className="flex items-center mb-2 cursor-pointer hover:text-blue-600">
            <input
              type="radio"
              name="gender"
              value={g}
              checked={filters.gender === g}
              onChange={handleFilterChange}
              className="mr-2 accent-blue-500"
            />
            {g}
          </label>
        ))}
      </div>

      {/* Colors */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              onClick={() => handleColorSelect(color)}
              className={`w-8 h-8 rounded-full border-2 transition-transform ${
                filters.color === color ? "ring-2 ring-blue-500 scale-110" : "border-gray-300"
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
            />
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Size</label>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <label
              key={size}
              className={`text-sm px-2 py-1 border rounded cursor-pointer text-center ${
                filters.size.includes(size) ? "bg-blue-500 text-white border-blue-500" : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              <input
                type="checkbox"
                name="size"
                value={size}
                checked={filters.size.includes(size)}
                onChange={handleFilterChange}
                className="hidden"
              />
              {size}
            </label>
          ))}
        </div>
      </div>

      {/* Materials */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Material</label>
        {materials.map((material) => (
          <label key={material} className="flex items-center mb-2 cursor-pointer hover:text-blue-600">
            <input
              type="checkbox"
              name="material"
              value={material}
              checked={filters.material.includes(material)}
              onChange={handleFilterChange}
              className="mr-2 accent-blue-500"
            />
            {material}
          </label>
        ))}
      </div>

      {/* Brands */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">Brand</label>
        {brands.map((brand) => (
          <label key={brand} className="flex items-center mb-2 cursor-pointer hover:text-blue-600">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              checked={filters.brand.includes(brand)}
              onChange={handleFilterChange}
              className="mr-2 accent-blue-500"
            />
            {brand}
          </label>
        ))}
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-gray-700 font-medium mb-2">Price Range</label>
        <input
          type="range"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="w-full accent-blue-500 cursor-pointer"
        />
        <div className="flex justify-between text-gray-600 text-sm mt-1">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
