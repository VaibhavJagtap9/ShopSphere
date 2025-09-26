import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({ products = [], loading, error }) => {
  const backendURL = import.meta.env.VITE_BACKEND_URL || "";

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;
  if (!products || products.length === 0) return <p className="text-gray-500">No products found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const imageUrl = product?.images?.[0]?.url
          ? `${backendURL.replace(/\/$/, "")}/${product.images[0].url.replace(/^\//, "")}`
          : "/placeholder.png";

        const altText = product?.images?.[0]?.altText || product?.name || "Product Image";

        return (
          <Link key={product._id} to={`/product/${product._id}`} className="block">
            <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4">
              {/* Image */}
              <div className="w-full aspect-[3/4] flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden mb-3">
                <img
                  src={imageUrl}
                  alt={altText}
                  className="max-h-full max-w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "/placeholder.png";
                  }}
                />
              </div>

              {/* Product name */}
              <h3 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">{product.name}</h3>

              {/* Price */}
              <p className="text-blue-600 font-semibold">${product.price}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductGrid;
