// src/components/Admin/EditProductPage.jsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { updateProduct } from "../../redux/slice/adminProductSlice";
import { fetchProductDetails } from "../../redux/slice/productsSlice";
import { FaUpload } from "react-icons/fa";

const EditProductPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const { selectedProduct, loading, error } = useSelector(
    (state) => state.products || {}
  );

  const backendURL = import.meta.env.VITE_BACKEND_URL || "";

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [],
  });

  const [uploading, setUploading] = useState(false);

  // fetch product details when id changes
  useEffect(() => {
    if (id) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id]);

  // sync product state
  useEffect(() => {
    if (selectedProduct) {
      setProductData((prev) => ({
        ...prev,
        ...selectedProduct,
        sizes: Array.isArray(selectedProduct.sizes)
          ? selectedProduct.sizes
          : selectedProduct.sizes
          ? String(selectedProduct.sizes)
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean)
          : prev.sizes,
        colors: Array.isArray(selectedProduct.colors)
          ? selectedProduct.colors
          : selectedProduct.colors
          ? String(selectedProduct.colors)
              .split(",")
              .map((c) => c.trim())
              .filter(Boolean)
          : prev.colors,
        images: Array.isArray(selectedProduct.images)
          ? selectedProduct.images
          : prev.images,
        collections:
          selectedProduct.collections ||
          selectedProduct.collctions ||
          prev.collections,
      }));
    }
  }, [selectedProduct]);

  // generic change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: name === "price" || name === "countInStock" ? Number(value) : value,
    }));
  };

  const handleSizesChange = (e) => {
    const arr = e.target.value.split(",").map((s) => s.trim()).filter(Boolean);
    setProductData((prev) => ({ ...prev, sizes: arr }));
  };

  const handleColorsChange = (e) => {
    const arr = e.target.value.split(",").map((c) => c.trim()).filter(Boolean);
    setProductData((prev) => ({ ...prev, colors: arr }));
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const formData = new FormData();
    formData.append("image", file);

    try {
      setUploading(true);
      const { data } = await axios.post(`${backendURL}/api/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageUrl = data.imageUrl || data.url || data.path || "";

      setProductData((prev) => ({
        ...prev,
        images: [...(prev.images || []), { url: imageUrl, altText: "" }],
      }));
    } catch (err) {
      console.error("Image upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(updateProduct({ id, productData }));
      navigate("/admin/products");
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  if (loading) return <p className="text-gray-600 text-lg">Loading ...</p>;
  if (error) return <p className="text-red-500">Error: {String(error)}</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
          ✏️ Edit Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              value={productData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={productData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              rows={4}
              required
            />
          </div>

          {/* Grid fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Price */}
            <div>
              <label className="block font-medium mb-2 text-gray-700">Price</label>
              <input
                type="number"
                name="price"
                value={productData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Count in Stock */}
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Count in Stock
              </label>
              <input
                type="number"
                name="countInStock"
                value={productData.countInStock}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* SKU */}
            <div>
              <label className="block font-medium mb-2 text-gray-700">SKU</label>
              <input
                type="text"
                name="sku"
                value={productData.sku}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Sizes */}
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Sizes (comma-separated)
              </label>
              <input
                type="text"
                name="sizes"
                value={(productData.sizes || []).join(", ")}
                onChange={handleSizesChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>

            {/* Colors */}
            <div>
              <label className="block font-medium mb-2 text-gray-700">
                Colors (comma-separated)
              </label>
              <input
                type="text"
                name="colors"
                value={(productData.colors || []).join(", ")}
                onChange={handleColorsChange}
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 outline-none"
              />
            </div>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-2 text-gray-700">
              Upload Image
            </label>
            <div className="flex items-center gap-4">
              <label className="cursor-pointer flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                <FaUpload />
                <span>Choose File</span>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleImageUpload}
                  accept="image/*"
                />
              </label>
              {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
            </div>
            <div className="flex gap-4 mt-4 flex-wrap">
              {(productData.images || []).map((image, index) => {
                const imageUrl = image.url?.startsWith("http")
                  ? image.url
                  : `${backendURL}${image.url}`;
                return (
                  <div key={index} className="relative">
                    <img
                      src={imageUrl || "/placeholder.png"}
                      alt={image.altText || "Product Image"}
                      className="w-24 h-24 object-cover rounded-lg shadow-md border"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-green-700 transition shadow-md"
          >
            💾 Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;
