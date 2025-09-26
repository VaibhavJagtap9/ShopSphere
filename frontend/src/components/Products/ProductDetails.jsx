import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import ProductGrid from './ProductGrid';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductDetails,
  fetchSimilarProducts,
} from '../../redux/slice/productsSlice';
import { addToCart } from '../../redux/slice/cartSlice';

const ProductDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, loading, error, similarProducts } = useSelector(
    (state) => state.products
  );
  const { user, guestId } = useSelector((state) => state.auth);

  const [mainImage, setMainImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const productFetchId = productId || id;

  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts({ id: productFetchId }));
    }
  }, [dispatch, productFetchId]);

  useEffect(() => {
    if (selectedProduct?.images?.length > 0) {
      setMainImage(
        `${import.meta.env.VITE_BACKEND_URL}${selectedProduct.images[0].url}`
      );
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    setQuantity((prev) => {
      if (action === 'plus') return prev + 1;
      if (action === 'minus') return prev > 1 ? prev - 1 : 1;
      return prev;
    });
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error('Please select size and color before adding to cart.', {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisabled(true);

    dispatch(
      addToCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId: user?._id,
      })
    )
      .then(() => {
        toast.success('✅ Product Added to cart!', { duration: 1000 });
      })
      .finally(() => {
        setIsButtonDisabled(false);
      });
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (error) return <p className="text-red-500 text-center py-10">Error: {error}</p>;

  return (
    <div className="p-6">
      {selectedProduct && (
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-2xl shadow-md">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Side - Images */}
            <div className="lg:w-1/2 flex flex-col md:flex-row gap-6">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto">
                {selectedProduct.images?.map((image, index) => (
                  <img
                    key={index}
                    src={`${import.meta.env.VITE_BACKEND_URL}${image.url}`}
                    alt={image.altText || `Thumbnail ${index}`}
                    className={`w-20 h-20 object-cover rounded-lg cursor-pointer border transition hover:scale-105 ${
                      mainImage ===
                      `${import.meta.env.VITE_BACKEND_URL}${image.url}`
                        ? 'border-2 border-black'
                        : 'border border-gray-300'
                    }`}
                    onClick={() =>
                      setMainImage(`${import.meta.env.VITE_BACKEND_URL}${image.url}`)
                    }
                  />
                ))}
              </div>

              {/* Main Image */}
              <div className="flex-1">
                <img
                  src={mainImage}
                  alt={selectedProduct.images?.[0]?.altText || 'Main Product'}
                  className="w-full h-[500px] object-cover rounded-xl shadow-md"
                />
              </div>
            </div>

            {/* Right Side - Product Info */}
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-bold mb-3">{selectedProduct.name}</h1>

              <div className="flex items-center gap-3 mb-4">
                {selectedProduct.originalPrice && (
                  <span className="text-lg text-gray-500 line-through">
                    ${selectedProduct.originalPrice}
                  </span>
                )}
                <span className="text-2xl font-semibold text-indigo-600">
                  ${selectedProduct.price}
                </span>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <p className="font-medium text-gray-700">Color:</p>
                <div className="flex gap-3 mt-2">
                  {selectedProduct.colors?.map((color, index) => {
                    const colorImage =
                      selectedProduct.images?.[index] &&
                      `${import.meta.env.VITE_BACKEND_URL}${selectedProduct.images[index].url}`;

                    return (
                      <button
                        key={color}
                        onClick={() => {
                          setSelectedColor(color);
                          if (colorImage) setMainImage(colorImage);
                        }}
                        className={`w-9 h-9 rounded-full border transition ${
                          selectedColor === color
                            ? 'ring-2 ring-indigo-500 scale-110'
                            : 'border-gray-300'
                        }`}
                        style={{ backgroundColor: color.toLowerCase() }}
                      />
                    );
                  })}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <p className="font-medium text-gray-700">Size:</p>
                <div className="flex gap-2 mt-2">
                  {selectedProduct.sizes?.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg border text-sm font-medium transition ${
                        selectedSize === size
                          ? 'bg-indigo-600 text-white shadow'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-8">
                <p className="font-medium text-gray-700">Quantity:</p>
                <div className="flex items-center gap-4 mt-2">
                  <button
                    onClick={() => handleQuantityChange('minus')}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg hover:bg-gray-300"
                  >
                    -
                  </button>
                  <span className="text-lg">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange('plus')}
                    className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-lg hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={isButtonDisabled}
                className={`w-full py-3 rounded-lg text-lg font-semibold transition ${
                  isButtonDisabled
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow hover:opacity-90'
                }`}
              >
                {isButtonDisabled ? 'Adding...' : '🛒 Add to Cart'}
              </button>

              {/* Characteristics */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Product Details</h3>
                <table className="w-full text-sm text-gray-700">
                  <tbody>
                    <tr>
                      <td className="py-2 font-medium">Brand</td>
                      <td>{selectedProduct.brand}</td>
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Material</td>
                      <td>{selectedProduct.material}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          <div className="mt-20">
            <h2 className="text-2xl text-center font-bold mb-6">
              You May Also Like
            </h2>
            <ProductGrid
              products={similarProducts}
              loading={loading}
              error={error}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
