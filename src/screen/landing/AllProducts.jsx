import React, { useState } from "react";
import { ShoppingCart, Heart, Eye, Star, Filter, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReusableButton from "../../components/ui/ReusableButton";

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
            image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
            category: "sunglasses",
            gender: "unisex",
            shape: "aviator",
            rating: 4.8,
            reviews: 124,
            tag: "Best Seller",
        },
        {
            id: 2,
            name: "Premium White Sneakers",
            price: 3499,
            originalPrice: 4499,
            image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
            category: "shoes",
            gender: "men",
            shape: "sneakers",
            rating: 4.9,
            reviews: 210,
            tag: "Trending",
        },
        {
            id: 3,
            name: "Stylish Denim Jacket",
            price: 2799,
            originalPrice: 3599,
            image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=400&h=400&fit=crop",
            category: "clothing",
            gender: "unisex",
            shape: "jacket",
            rating: 4.7,
            reviews: 95,
            tag: "New",
        },
        {
            id: 4,
            name: "Luxury Analog Watch",
            price: 5999,
            originalPrice: 7499,
            image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
            category: "watches",
            gender: "men",
            shape: "round",
            rating: 4.8,
            reviews: 180,
            tag: "Premium",
        },
        {
            id: 5,
            name: "Wireless Bluetooth Headphones",
            price: 3999,
            originalPrice: 4999,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
            category: "electronics",
            gender: "unisex",
            shape: "over-ear",
            rating: 4.9,
            reviews: 320,
            tag: "Best Seller",
        },
        {
            id: 6,
            name: "Modern Round Black Glasses",
            price: 1999,
            originalPrice: 2499,
            image: "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=400&h=400&fit=crop",
            category: "eyeglasses",
            gender: "unisex",
            shape: "round",
            rating: 4.9,
            reviews: 98,
            tag: "New",
        },
        {
            id: 7,
            name: "Smart Fitness Band",
            price: 2499,
            originalPrice: 3299,
            image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
            category: "electronics",
            gender: "unisex",
            shape: "band",
            rating: 4.6,
            reviews: 150,
            tag: "Popular",
        },
        {
            id: 8,
            name: "Casual Cotton T-Shirt",
            price: 999,
            originalPrice: 1499,
            image: "https://images.unsplash.com/photo-1520974735194-8c9f40d32e0b?w=400&h=400&fit=crop",
            category: "clothing",
            gender: "men",
            shape: "tshirt",
            rating: 4.5,
            reviews: 75,
            tag: "Sale",
        },
        {
            id: 9,
            name: "Elegant Handbag",
            price: 3299,
            originalPrice: 4299,
            image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop",
            category: "bags",
            gender: "women",
            shape: "handbag",
            rating: 4.8,
            reviews: 134,
            tag: "Trending",
        },
        {
            id: 10,
            name: "Sport Running Shoes",
            price: 3799,
            originalPrice: 4799,
            image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400&h=400&fit=crop",
            category: "shoes",
            gender: "men",
            shape: "sports",
            rating: 4.9,
            reviews: 190,
            tag: "Pro Choice",
        },
        {
            id: 11,
            name: "Designer Sunglasses",
            price: 2599,
            originalPrice: 3299,
            image: "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=400&fit=crop",
            category: "sunglasses",
            gender: "unisex",
            shape: "wayfarer",
            rating: 4.8,
            reviews: 201,
            tag: "Best Seller",
        },
        {
            id: 12,
            name: "Wireless Gaming Mouse",
            price: 2199,
            originalPrice: 2999,
            image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d9?w=400&h=400&fit=crop",
            category: "electronics",
            gender: "unisex",
            shape: "mouse",
            rating: 4.7,
            reviews: 160,
            tag: "Hot Deal",
        },
    ];

    // ✅ Dynamic Filters (ONLY CHANGE)
    const categories = ["all", ...new Set(products.map(p => p.category))];
    const genders = ["all", ...new Set(products.map(p => p.gender))];
    const shapes = ["all", ...new Set(products.map(p => p.shape))];

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    const filteredProducts = products.filter((product) => {
        if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
        if (
            selectedGender !== "all" &&
            product.gender !== selectedGender &&
            product.gender !== "unisex"
        ) return false;
        if (selectedShape !== "all" && product.shape !== selectedShape) return false;
        if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
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
            {/* Hero */}
            <div className="relative h-[250px] flex items-center justify-center">
                <img
                    src="https://i.pinimg.com/736x/1a/a9/ff/1aa9ffeab3885dd14e2e7b194363d3cf.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-yellow-500/50"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Premium Collection
                    </h1>
                    <p className="text-xl text-yellow-100">
                        Discover our exclusive collection of premium collection
                    </p>
                </div>
            </div>

            <div className="max-w-[90%] mx-auto py-8 flex flex-col lg:flex-row gap-8">

                {/* Sidebar */}
                <div className={`${showFilters ? "block" : "hidden"} lg:block lg:w-64`}>
                    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">

                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold flex items-center gap-2">
                                <Filter className="h-5 w-5" /> Filters
                            </h2>
                            <button onClick={() => setShowFilters(false)} className="lg:hidden">
                                <X />
                            </button>
                        </div>

                        {/* Category */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Category</h3>
                            {categories.map(cat => (
                                <label key={cat} className="flex gap-2 items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={selectedCategory === cat}
                                        onChange={() => setSelectedCategory(cat)}
                                    />
                                    <span className="capitalize">
                                        {cat === "all" ? "All Products" : cat}
                                    </span>
                                </label>
                            ))}
                        </div>

                        {/* Gender */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Gender</h3>
                            {genders.map(gen => (
                                <label key={gen} className="flex gap-2 items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={selectedGender === gen}
                                        onChange={() => setSelectedGender(gen)}
                                    />
                                    <span className="capitalize">{gen}</span>
                                </label>
                            ))}
                        </div>

                        {/* Shape */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Shape</h3>
                            {shapes.map(shape => (
                                <label key={shape} className="flex gap-2 items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={selectedShape === shape}
                                        onChange={() => setSelectedShape(shape)}
                                    />
                                    <span className="capitalize">
                                        {shape === "all" ? "All Shapes" : shape}
                                    </span>
                                </label>
                            ))}
                        </div>

                        {/* Price */}
                        <div className="mb-6">
                            <h3 className="font-semibold mb-3">Price Range</h3>
                            <input
                                type="range"
                                min="0"
                                max="10000"
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
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
                            className="w-full bg-gray-100 py-2 rounded-lg font-semibold"
                        >
                            Clear All Filters
                        </button>
                    </div>
                </div>

                {/* Products */}
                <div className="flex-1">

                    {/* Toolbar */}
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-4 mb-6 flex items-center justify-between">
                        <div className="font-semibold">
                            Total Products: <span>{filteredProducts.length}</span>
                        </div>
                        <div>
                            <button
                                onClick={() => setShowFilters(!showFilters)}
                                className="lg:hidden bg-[var(--btnColor)] text-white px-4 py-2 rounded-lg"
                            >
                                <Filter className="h-4 w-4 inline mr-2" />
                                Filters
                            </button>

                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="border border-gray-300 px-4 py-2 rounded-lg"
                            >
                                <option value="featured">Featured</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="rating">Top Rated</option>
                            </select>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition"
                            >
                                <div className="relative">
                                    <img
                                        src={product.image}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition"
                                    />

                                    {product.tag && (
                                        <span className="absolute top-4 left-4 bg-yellow-400/60 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                            {product.tag}
                                        </span>
                                    )}

                                    <button
                                        onClick={() => toggleFavorite(product.id)}
                                        className="absolute top-4 right-4 bg-white p-2 rounded-full shadow"
                                    >
                                        <Heart
                                            className={`h-5 w-5 ${favorites.includes(product.id)
                                                ? "fill-red-500 text-red-500"
                                                : "text-gray-600"
                                                }`}
                                        />
                                    </button>

                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition">
                                        <button
                                            onClick={() => navigate(`/products/details`)}
                                            className="bg-white px-4 py-2 rounded-lg font-semibold"
                                        >
                                            Quick View
                                        </button>
                                    </div>
                                </div>

                                <div className="p-4">
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

                                    <h3 className="font-semibold text-lg mb-2">
                                        {product.name}
                                    </h3>

                                    <div className="flex gap-2 mb-3">
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">
                                            {product.category}
                                        </span>
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">
                                            {product.gender}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-2xl font-bold text-[var(--btnColor)]">
                                            ₹{product.price}
                                        </span>
                                        <span className="text-sm line-through text-gray-500">
                                            ₹{product.originalPrice}
                                        </span>
                                        <span className="text-sm font-semibold text-red-500">
                                            {Math.round(
                                                (1 - product.price / product.originalPrice) * 100
                                            )}
                                            % OFF
                                        </span>
                                    </div>

                                    <ReusableButton
                                        label="Add to Cart"
                                        // onClick={handleLogin}
                                        // loading={isPending}
                                        // disabled={isPending}
                                        icon={ShoppingCart}
                                        variant="primary"
                                        type="button"
                                    />

                                    {/* <button className="w-full bg-[var(--btnColor)] text-white py-2.5 rounded-lg font-semibold flex justify-center gap-2">
                                        <ShoppingCart className="h-5 w-5" />
                                        Add to Cart
                                    </button> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    {sortedProducts.length === 0 && (
                        <div className="text-center py-16">
                            <Eye className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                            <h3 className="text-2xl font-bold mb-2">No Products Found</h3>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
