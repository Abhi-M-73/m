import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  Eye,
  Truck,
  Shield,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Check,
  Plus,
  Minus,
  Ruler,
  Upload,
} from "lucide-react";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("medium");
  const [hasPrescription, setHasPrescription] = useState(false);
  const [prescriptionType, setPrescriptionType] = useState("upload");
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("description");

  const product = {
    id: 1,
    name: "Premium Aviator Gold Frame",
    price: 2999,
    originalPrice: 3999,
    rating: 4.8,
    reviews: 124,
    inStock: true,
    sku: "AVI-GOLD-001",
    brand: "VisionLux",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&h=800&fit=crop",
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&h=800&fit=crop",
      // "https://images.unsplash.com/photo-1606923829579-0cb981a83e2e?w=800&h=800&fit=crop",
    ],
    colors: [
      { name: "black", hex: "#000000", label: "Matte Black" },
      { name: "gold", hex: "#FFD700", label: "Gold" },
      { name: "silver", hex: "#C0C0C0", label: "Silver" },
      { name: "brown", hex: "#8B4513", label: "Tortoise Brown" },
    ],
    sizes: [
      { name: "small", width: "48mm", label: "Small" },
      { name: "medium", width: "52mm", label: "Medium" },
      { name: "large", width: "56mm", label: "Large" },
    ],
    features: [
      "UV400 Protection",
      "Polarized Lenses",
      "Anti-Scratch Coating",
      "Lightweight Frame",
      "Adjustable Nose Pads",
      "Spring Hinges",
    ],
    specifications: {
      "Frame Material": "Stainless Steel",
      "Lens Material": "Polycarbonate",
      "Frame Width": "140mm",
      "Lens Width": "52mm",
      "Bridge Width": "18mm",
      "Temple Length": "145mm",
      Weight: "28g",
    },
  };

  const relatedProducts = [
    {
      id: 2,
      name: "Classic Wayfarer",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Round Vintage",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=400&h=400&fit=crop",
      rating: 4.9,
    },
    {
      id: 4,
      name: "Sport Edition",
      price: 3499,
      image:
        "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Cat Eye Elegant",
      price: 2799,
      image:
        "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop",
      rating: 4.6,
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      rating: 5,
      date: "2 days ago",
      comment:
        "Excellent quality! The gold finish is premium and the fit is perfect. Highly recommended!",
      verified: true,
    },
    {
      id: 2,
      name: "Priya Patel",
      rating: 5,
      date: "1 week ago",
      comment:
        "Best purchase ever. Got so many compliments. The polarized lenses work great.",
      verified: true,
    },
    {
      id: 3,
      name: "Amit Kumar",
      rating: 4,
      date: "2 weeks ago",
      comment:
        "Good product but delivery took a bit long. Quality is great though!",
      verified: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-5">
      <div className="bg-white border-b border-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a href="/" className="hover:text-teal-600">
              Home
            </a>
            <span>/</span>
            <a href="/products" className="hover:text-teal-600">
              Products
            </a>
            <span>/</span>
            <span className="text-gray-900 font-semibold">
              Aviator Gold Frame
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Image Gallery */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-4">
              <div className="relative aspect-square">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
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
                {selectedImage < product.images.length - 1 && (
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
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`bg-white rounded-lg overflow-hidden border-2 transition ${selectedImage === idx
                      ? "border-teal-600"
                      : "border-transparent hover:border-gray-300"
                    }`}
                >
                  <img
                    src={img}
                    alt={`View ${idx + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8">
              {/* Brand & SKU */}
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                  {product.brand}
                </span>
                <span className="text-gray-500 text-sm">
                  SKU: {product.sku}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                        }`}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">
                  {product.rating}
                </span>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                <span className="text-4xl font-bold text-teal-600">
                  ₹{product.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
                <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {Math.round(
                    (1 - product.price / product.originalPrice) * 100
                  )}
                  % OFF
                </span>
              </div>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Color:{" "}
                  <span className="text-teal-600">
                    {
                      product.colors.find((c) => c.name === selectedColor)
                        ?.label
                    }
                  </span>
                </h3>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-full border-2 transition ${selectedColor === color.name
                          ? "border-teal-600 scale-110"
                          : "border-gray-300 hover:border-gray-400"
                        }`}
                      style={{ backgroundColor: color.hex }}
                      title={color.label}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">Size</h3>
                  <button className="text-teal-600 text-sm font-semibold flex items-center gap-1 hover:underline">
                    <Ruler className="h-4 w-4" />
                    Size Guide
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size.name}
                      onClick={() => setSelectedSize(size.name)}
                      className={`py-3 px-4 rounded-lg border-2 transition ${selectedSize === size.name
                          ? "border-teal-600 bg-teal-50 text-teal-700"
                          : "border-gray-300 hover:border-gray-400"
                        }`}
                    >
                      <div className="font-semibold capitalize">
                        {size.label}
                      </div>
                      <div className="text-xs text-gray-600">{size.width}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Prescription Option */}
              <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasPrescription}
                    onChange={(e) => setHasPrescription(e.target.checked)}
                    className="w-5 h-5 text-teal-600 rounded"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      Add Prescription Lenses
                    </div>
                    <div className="text-sm text-gray-600">
                      Get custom lenses fitted to your glasses
                    </div>
                  </div>
                </label>

                {hasPrescription && (
                  <div className="mt-4 space-y-3">
                    <div className="flex gap-3">
                      <button
                        onClick={() => setPrescriptionType("upload")}
                        className={`flex-1 py-2 px-4 rounded-lg border-2 transition ${prescriptionType === "upload"
                            ? "border-teal-600 bg-teal-50 text-teal-700"
                            : "border-gray-300"
                          }`}
                      >
                        <Upload className="h-4 w-4 mx-auto mb-1" />
                        <div className="text-sm font-semibold">
                          Upload Prescription
                        </div>
                      </button>
                      <button
                        onClick={() => setPrescriptionType("book")}
                        className={`flex-1 py-2 px-4 rounded-lg border-2 transition ${prescriptionType === "book"
                            ? "border-teal-600 bg-teal-50 text-teal-700"
                            : "border-gray-300"
                          }`}
                      >
                        <Eye className="h-4 w-4 mx-auto mb-1" />
                        <div className="text-sm font-semibold">
                          Book Eye Test
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-teal-600 transition flex items-center justify-center"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) =>
                      setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                    }
                    className="w-16 h-10 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-teal-600"
                  />
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border-2 border-gray-300 hover:border-teal-600 transition flex items-center justify-center"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <button className="w-full bg-teal-600 text-white py-4 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2 text-lg">
                  <ShoppingCart className="h-6 w-6" />
                  Add to Cart
                </button>
                <button className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition text-lg">
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

        {/* Product Details Tabs */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="flex gap-6 border-b mb-6">
            {["description", "specifications", "reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 px-2 font-semibold capitalize transition ${activeTab === tab
                    ? "text-teal-600 border-b-2 border-teal-600"
                    : "text-gray-600 hover:text-gray-900"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === "description" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Product Description
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Experience premium eyewear with our {product.name}. Crafted with
                precision and attention to detail, these glasses combine style
                with functionality. The classic aviator design never goes out of
                fashion, making them perfect for any occasion. Whether you're
                driving, at the beach, or just enjoying a sunny day, these
                glasses provide excellent protection and comfort.
              </p>
              <h4 className="font-bold text-gray-900 mb-3">Key Features:</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="bg-teal-100 rounded-full p-1">
                      <Check className="h-4 w-4 text-teal-600" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "specifications" && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Technical Specifications
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between py-3 border-b border-gray-200"
                  >
                    <span className="font-semibold text-gray-900">{key}:</span>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  Customer Reviews
                </h3>
                <button className="bg-teal-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-700 transition">
                  Write a Review
                </button>
              </div>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b border-gray-200 pb-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="font-semibold text-gray-900">
                            {review.name}
                          </span>
                          {review.verified && (
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-semibold flex items-center gap-1">
                              <Check className="h-3 w-3" />
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "text-gray-300"
                                }`}
                            />
                          ))}
                          <span className="text-sm text-gray-600">
                            {review.date}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition"
              >
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${i < Math.floor(product.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                          }`}
                      />
                    ))}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-teal-600">
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