import React, { useState } from "react";
import { ShoppingCart, Heart, Eye, Star, Filter, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AllProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedGender, setSelectedGender] = useState("all");
    const [selectedShape, setSelectedShape] = useState("all");
    const [priceRange, setPriceRange] = useState([0, 10000]);
    const [sortBy, setSortBy] = useState("featured");
    const [showFilters, setShowFilters] = useState(false);
    const [favorites, setFavorites] = useState([]);

    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Classic Aviator Gold",
            price: 2999,
            originalPrice: 3999,
            image:
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
            category: "sunglasses",
            gender: "unisex",
            shape: "aviator",
            rating: 4.8,
            reviews: 124,
            tag: "Best Seller",
        },
        {
            id: 2,
            name: "Modern Round Black",
            price: 1999,
            originalPrice: 2499,
            image:
                "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=400&h=400&fit=crop",
            category: "eyeglasses",
            gender: "unisex",
            shape: "round",
            rating: 4.9,
            reviews: 98,
            tag: "New",
        },
        {
            id: 3,
            name: "Sport Pro Blue",
            price: 3499,
            originalPrice: 4499,
            image:
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
            category: "sports",
            gender: "men",
            shape: "rectangular",
            rating: 4.7,
            reviews: 67,
            tag: "Sale",
        },
        {
            id: 4,
            name: "Elegant Cat Eye Rose",
            price: 2499,
            originalPrice: 2999,
            image:
                "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop",
            category: "eyeglasses",
            gender: "women",
            shape: "cat-eye",
            rating: 4.9,
            reviews: 156,
            tag: "Trending",
        },
        {
            id: 5,
            name: "Wayfarer Classic",
            price: 2799,
            originalPrice: 3299,
            image:
                "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop",
            category: "sunglasses",
            gender: "unisex",
            shape: "wayfarer",
            rating: 4.8,
            reviews: 201,
            tag: "Best Seller",
        },

        {
            id: 8,
            name: "Retro Oval Brown",
            price: 1799,
            originalPrice: 2299,
            image:
                "https://images.unsplash.com/photo-1591076482161-42ce6da69f67?w=400&h=400&fit=crop",
            category: "eyeglasses",
            gender: "unisex",
            shape: "oval",
            rating: 4.7,
            reviews: 78,
            tag: "New",
        },
    ];

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    const filteredProducts = products.filter((product) => {
        if (selectedCategory !== "all" && product.category !== selectedCategory)
            return false;
        if (
            selectedGender !== "all" &&
            product.gender !== selectedGender &&
            product.gender !== "unisex"
        )
            return false;
        if (selectedShape !== "all" && product.shape !== selectedShape)
            return false;
        if (product.price < priceRange[0] || product.price > priceRange[1])
            return false;
        return true;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
    });

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="relative h-[300px] flex items-center justify-center">

                {/* Background Image */}
                <img
                    src="https://i.pinimg.com/736x/1a/a9/ff/1aa9ffeab3885dd14e2e7b194363d3cf.jpg"
                    alt="Eyewear"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Yellow Overlay */}
                <div className="absolute inset-0 bg-yellow-500/60"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Premium Eyewear Collection
                    </h1>
                    <p className="text-xl text-yellow-100">
                        Discover your perfect style from 500+ designer frames
                    </p>
                </div>

            </div>


            <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Filters Sidebar */}
                    <div
                        className={`${showFilters ? "block" : "hidden"
                            } lg:block lg:w-64 flex-shrink-0`}
                    >
                        <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                                    <Filter className="h-5 w-5" />
                                    Filters
                                </h2>
                                <button
                                    onClick={() => setShowFilters(false)}
                                    className="lg:hidden p-1 hover:bg-gray-100 rounded"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Category Filter */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Category</h3>
                                <div className="space-y-2">
                                    {["all", "eyeglasses", "sunglasses", "sports"].map((cat) => (
                                        <label
                                            key={cat}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="category"
                                                checked={selectedCategory === cat}
                                                onChange={() => setSelectedCategory(cat)}
                                                className="w-4 h-4 text-teal-600"
                                            />
                                            <span className="text-gray-700 capitalize">
                                                {cat === "all" ? "All Products" : cat}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Gender Filter */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Gender</h3>
                                <div className="space-y-2">
                                    {["all", "men", "women", "unisex"].map((gen) => (
                                        <label
                                            key={gen}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="gender"
                                                checked={selectedGender === gen}
                                                onChange={() => setSelectedGender(gen)}
                                                className="w-4 h-4 text-teal-600"
                                            />
                                            <span className="text-gray-700 capitalize">
                                                {gen === "all" ? "All" : gen}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Shape Filter */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">Shape</h3>
                                <div className="space-y-2">
                                    {[
                                        "all",
                                        "round",
                                        "square",
                                        "rectangular",
                                        "aviator",
                                        "cat-eye",
                                        "wayfarer",
                                        "oval",
                                    ].map((shape) => (
                                        <label
                                            key={shape}
                                            className="flex items-center gap-2 cursor-pointer"
                                        >
                                            <input
                                                type="radio"
                                                name="shape"
                                                checked={selectedShape === shape}
                                                onChange={() => setSelectedShape(shape)}
                                                className="w-4 h-4 text-teal-600"
                                            />
                                            <span className="text-gray-700 capitalize">
                                                {shape === "all"
                                                    ? "All Shapes"
                                                    : shape.replace("-", " ")}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Price Range */}
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-900 mb-3">
                                    Price Range
                                </h3>
                                <input
                                    type="range"
                                    min="0"
                                    max="10000"
                                    value={priceRange[1]}
                                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                                    className="w-full"
                                />
                                <div className="flex justify-between text-sm text-gray-600 mt-2">
                                    <span>₹0</span>
                                    <span>₹{priceRange[1]}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    setSelectedCategory("all");
                                    setSelectedGender("all");
                                    setSelectedShape("all");
                                    setPriceRange([0, 10000]);
                                }}
                                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-semibold hover:bg-gray-200 transition"
                            >
                                Clear All Filters
                            </button>
                        </div>
                    </div>

                    {/* Products Grid */}
                    <div className="flex-1">
                        {/* Toolbar */}
                        <div className="bg-white rounded-2xl shadow-lg p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={() => setShowFilters(!showFilters)}
                                    className="lg:hidden flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold"
                                >
                                    <Filter className="h-4 w-4" />
                                    Filters
                                </button>
                                <span className="text-gray-700">
                                    <span className="font-semibold">{sortedProducts.length}</span>{" "}
                                    Products Found
                                </span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="text-gray-700 text-sm">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="price-low">Price: Low to High</option>
                                    <option value="price-high">Price: High to Low</option>
                                    <option value="rating">Top Rated</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sortedProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition duration-300"
                                >
                                    <div className="relative overflow-hidden bg-gray-100">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                                        />

                                        {/* Tags */}
                                        {product.tag && (
                                            <div className="absolute top-4 left-4">
                                                <span
                                                    className={`px-3 py-1 rounded-full text-sm font-semibold ${product.tag === "Sale"
                                                            ? "bg-red-500 text-white"
                                                            : product.tag === "New"
                                                                ? "bg-blue-500 text-white"
                                                                : product.tag === "Best Seller"
                                                                    ? "bg-yellow-500 text-gray-900"
                                                                    : product.tag === "Premium"
                                                                        ? "bg-purple-500 text-white"
                                                                        : "bg-teal-500 text-white"
                                                        }`}
                                                >
                                                    {product.tag}
                                                </span>
                                            </div>
                                        )}

                                        {/* Favorite Button */}
                                        <button
                                            onClick={() => toggleFavorite(product.id)}
                                            className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
                                        >
                                            <Heart
                                                className={`h-5 w-5 ${favorites.includes(product.id)
                                                        ? "fill-red-500 text-red-500"
                                                        : "text-gray-600"
                                                    }`}
                                            />
                                        </button>

                                        {/* Quick Actions */}
                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition duration-300 flex gap-2">
                                            <button
                                                onClick={() => navigate(`/products/details`)}
                                                className="bg-white text-teal-600 px-4 py-2 rounded-lg font-semibold shadow-lg hover:bg-teal-600 hover:text-white transition"
                                            >
                                                Quick View
                                            </button>
                                        </div>
                                    </div>

                                    <div className="p-4">
                                        {/* Rating */}
                                        <div className="flex items-center gap-1 mb-2">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className={`h-4 w-4 ${i < Math.floor(product.rating)
                                                            ? "fill-yellow-400 text-yellow-400"
                                                            : "text-gray-300"
                                                        }`}
                                                />
                                            ))}
                                            <span className="text-sm text-gray-600 ml-1">
                                                {product.rating} ({product.reviews})
                                            </span>
                                        </div>

                                        {/* Product Name */}
                                        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">
                                            {product.name}
                                        </h3>

                                        {/* Category & Gender */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded capitalize">
                                                {product.category}
                                            </span>
                                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded capitalize">
                                                {product.gender}
                                            </span>
                                        </div>

                                        {/* Price */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <span className="text-2xl font-bold text-teal-600">
                                                ₹{product.price}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through">
                                                ₹{product.originalPrice}
                                            </span>
                                            <span className="text-sm font-semibold text-red-500">
                                                {Math.round(
                                                    (1 - product.price / product.originalPrice) * 100
                                                )}
                                                % OFF
                                            </span>
                                        </div>

                                        {/* Add to Cart Button */}
                                        <button className="w-full bg-teal-600 text-white py-2.5 rounded-lg font-semibold hover:bg-teal-700 transition flex items-center justify-center gap-2">
                                            <ShoppingCart className="h-5 w-5" />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {sortedProducts.length === 0 && (
                            <div className="text-center py-16">
                                <div className="bg-white rounded-2xl shadow-lg p-12">
                                    <Eye className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                        No Products Found
                                    </h3>
                                    <p className="text-gray-600 mb-6">
                                        Try adjusting your filters to see more results
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSelectedCategory("all");
                                            setSelectedGender("all");
                                            setSelectedShape("all");
                                            setPriceRange([0, 10000]);
                                        }}
                                        className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
                                    >
                                        Clear All Filters
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProducts;