import { useEffect, useState } from "react";
import {
  Heart,
  Star,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Check,
  Plus,
  Minus,
  SkipBack,
  ArrowUpFromDot,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { getProductsByCategory } from "../../api/product.api";
import { useQuery } from "@tanstack/react-query";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  const [isFavorite, setIsFavorite] = useState(false);

  const location = useLocation();
  const product = location.state;
  const variants = product?.variants || [];
  const availableColors = [...new Set(variants.map(v => v.color))];
  const availableSizes = selectedColor
    ? [...new Set(
      variants.filter(v => v.color === selectedColor).map(v => v.size)
    )]
    : [];

  const maxStock = selectedVariant?.stock || 1;

  const { data: relatedProducts } = useQuery({
    queryKey: ["fetchProductDetails"],
    queryFn: () => getProductsByCategory(product?.category?._id),
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [product?._id]);


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="border-b max-w-[90%] w-full mx-auto border-gray-300 md:pt-10 pt-10">
        <button onClick={() => navigate(-1)} className="hover:text-[var(--btnColor)] flex items-center gap-2 mb-2">
          <ArrowUpFromDot className="-rotate-90" />
          Back
        </button>
      </div>

      <div className="max-w-[90%] mx-auto md:p-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
              <div className="relative aspect-square">
                <img
                  src={product?.images[selectedImage]?.url}
                  alt={product?.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="absolute top-4 right-4 bg-white p-3 rounded-full shadow-lg hover:scale-110 transition"
                >
                  <Heart
                    className={`h-6 w-6 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
                      }`}
                  />
                </button>

                {/* Navigation Arrows */}
                {selectedImage > 0 && (
                  <button
                    onClick={() => setSelectedImage(selectedImage - 1)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                )}
                {selectedImage < product?.images?.length - 1 && (
                  <button
                    onClick={() => setSelectedImage(selectedImage + 1)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-lg hover:bg-white transition"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                )}
              </div>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-4">
              {product?.images?.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`bg-white rounded-lg overflow-hidden border-2 transition ${selectedImage === idx
                    ? "border-[var(--btnColor)]"
                    : "border-transparent hover:border-gray-300"
                    }`}
                >
                  <img
                    src={img?.url}
                    alt={`View ${idx + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg md:p-8 p-5">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-yellow-100 text-[var(--btnColor)] px-3 py-1 rounded-full text-sm font-semibold ">
                  {product?.category?.name}
                </span>
              </div>

              <h1 className="text-3xl font-bold text-gray-900 mb-2 text-wrap">
                {product?.title}
              </h1>

              <p className="text-md text-gray-500 mb-4 text-wrap">
                {product?.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product?.ratings?.average)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">
                  ({product?.ratings?.count})
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-400">
                <span className="text-4xl font-bold text-[var(--btnColor)]">
                  ₹{product?.discountPrice}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ₹{product?.price}
                </span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {product?.discountPercent}
                  % OFF
                </span>
              </div>

              {/* Color Selection */}
              {availableColors.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Color: <span className="text-[var(--btnColor)]">{selectedColor || "Select"}</span>
                  </h3>

                  <div className="flex gap-3 flex-wrap">
                    {availableColors.map(color => (
                      <button
                        key={color}
                        onClick={() => {
                          setSelectedColor(color);
                          setSelectedSize("");
                          setSelectedVariant(null);
                        }}
                        className={`px-4 py-2 rounded-lg border-2 capitalize
                       ${selectedColor === color
                            ? "border-[var(--btnColor)] bg-yellow-50 text-[var(--btnColor)]"
                            : "border-gray-300 hover:border-gray-400"}
                       `}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection  */}
              {availableSizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Size: <span className="text-[var(--btnColor)]">{selectedSize || "Select"}</span>
                  </h3>

                  <div className="flex gap-3 flex-wrap">
                    {availableSizes.map(size => (
                      <button
                        key={size}
                        onClick={() => {
                          setSelectedSize(size);
                          const variant = variants.find(
                            v => v.color === selectedColor && v.size === size
                          );
                          setSelectedVariant(variant);
                        }}

                        className={`px-4 py-2 rounded-lg border-2 capitalize
                       ${selectedSize === size
                            ? "border-[var(--btnColor)] bg-yellow-50 text-[var(--btnColor)]"
                            : "border-gray-300 hover:border-gray-400"}
                       `}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}


              {selectedVariant && (
                <div className="mb-4 text-sm flex items-center gap-5">
                  <p className="text-gray-700 mb-2">
                    SKU: <span className="font-semibold">{selectedVariant.sku}</span>
                  </p>

                  {selectedVariant.stock > 0 ? (
                    <p className="text-green-600 font-semibold flex items-center gap-1">
                      <Check className="h-4 w-4" /> In Stock ({selectedVariant.stock})
                    </p>
                  ) : (
                    <p className="text-red-600 font-semibold">
                      Out of Stock
                    </p>
                  )}
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-[var(--btnColor)] transition flex items-center justify-center"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(
                        Math.min(Math.max(1, Number(e.target.value) || 1), maxStock)
                      )
                    }
                    className="w-16 h-10 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[var(--btnColor)]"
                  />
                  <button
                    onClick={() => setQuantity(q => Math.min(q + 1, maxStock))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-[var(--btnColor)] transition flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex md:flex-row flex-col items-center gap-5 mb-6">
                <button
                  disabled={!selectedVariant || selectedVariant.stock === 0}
                  className={`w-full py-3 rounded-lg font-semibold transition
                  ${!selectedVariant || selectedVariant.stock === 0
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-900 hover:bg-blue-800 text-white"}
                  `}
                >
                  Add to Cart
                </button>

                <button
                  className="w-full bg-yellow-600 text-white py-3 rounded-lg font-semibold hover:bg-yellow-700 transition text-lg"
                >
                  Buy Now
                </button>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t">
                <div className="text-center">
                  <div className="bg-teal-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Truck className="h-6 w-6 text-teal-600" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    Free Shipping
                  </div>
                  <div className="text-xs text-gray-600">
                    On orders above ₹999
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <RotateCcw className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    Easy Returns
                  </div>
                  <div className="text-xs text-gray-600">
                    30-day return policy
                  </div>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    2 Year Warranty
                  </div>
                  <div className="text-xs text-gray-600">
                    Manufacturing defects
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts?.product?.map((product) => (
              <div
                key={product?._id}
                onClick={() => navigate(`/product-details`, { state: product })}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition"
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={product?.images[0]?.url}
                    alt={product?.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < Math.floor(product.ratings.average)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-xl font-bold text-[var(--btnColor)]">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;