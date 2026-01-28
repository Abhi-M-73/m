import React, { useEffect, useState } from "react";
import { ShoppingCart, Heart, Eye, Star, Filter, X, Loader } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import ReusableButton from "../../components/ui/ReusableButton";
import { useQuery } from "@tanstack/react-query";
import { getAllUserProducts } from "../../api/product.api";

const AllProducts = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedGender, setSelectedGender] = useState("all");
    const [selectedColor, setSelectedColor] = useState("all");

    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [sortBy, setSortBy] = useState("all");
    const [showFilters, setShowFilters] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [page, setPage] = useState(1);

    const navigate = useNavigate();
    const location = useLocation();
    const { cat } = location.state || {};

    const { data, isLoading } = useQuery({
        queryKey: ["products", page],
        queryFn: () => getAllUserProducts({ page, limit: 12 }),
        keepPreviousData: true,
    });

    const categories = ["all", ...new Set(data?.products?.map(p => p?.category?.name))];
    const genders = ["all", ...new Set(data?.products?.map(p => p?.gender))];
    const colors = ["all", ...new Set(data?.products?.flatMap(p => p.variants.map(v => v.color)))];

    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    const filteredProducts = (data?.products || [])?.filter((product) => {
        if (selectedCategory !== "all" && product?.category?.name !== selectedCategory) return false;
        if (
            selectedGender !== "all" &&
            product?.gender !== selectedGender &&
            product?.gender !== "unisex"
        ) return false;
        if (selectedColor !== "all" && !product.variants.some((v) => v.color === selectedColor)) return false;
        if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
        return true;
    });


    const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.ratings?.count - a.ratings?.count;
        return 0;
    });

    useEffect(() => {
        if(cat) setSelectedCategory(cat)
    }, [cat])


    if (isLoading) return <Loader />

    return (
        <div className="min-h-screen bg-gray-50">
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
                        Shop now and get 30% off on selected items
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
                            <h3 className="font-semibold mb-3">Color</h3>
                            {colors.map(color => (
                                <label key={color} className="flex gap-2 items-center cursor-pointer">
                                    <input
                                        type="radio"
                                        checked={selectedColor === color}
                                        onChange={() => setSelectedColor(color)}
                                    />
                                    <span className="capitalize">
                                        {color === "all" ? "All Color" : color}
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
                                setSelectedColor("all");
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
                    <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-4 mb-6
                flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div className="font-semibold">
                            Total Products: <span>{filteredProducts.length}</span>
                        </div>
                        <div className="space-x-2">
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
                                <option value="all">All</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedProducts.map((product) => (
                            <div
                                key={product?._id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition"
                            >
                                <div className="relative">
                                    <img
                                        src={product?.images[0]?.url}
                                        className="w-full h-64 object-cover group-hover:scale-110 transition"
                                    />

                                    {product.tag && (
                                        <span className="absolute top-4 left-4 bg-yellow-400/60 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                                            {product.slug || "New"}
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
                                            onClick={() => navigate(`/product-details`, { state: product })}
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
                                                className={`h-4 w-4 ${i < Math.floor(product?.ratings?.average)
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-gray-300"
                                                    }`}
                                            />
                                        ))}
                                        <span className="text-sm text-gray-600 ml-1">
                                            {product?.ratings?.average} ({product?.ratings?.count})
                                        </span>
                                    </div>

                                    <h3 className="font-semibold text-lg mb-2">
                                        {product?.title}
                                    </h3>

                                    <div className="flex gap-2 mb-3">
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">
                                            {product?.category?.name}
                                        </span>
                                        <span className="text-xs bg-gray-100 px-2 py-1 rounded capitalize">
                                            {product?.gender}
                                        </span>
                                    </div>

                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="text-2xl font-bold text-[var(--btnColor)]">
                                            ₹{product?.discountPrice}
                                        </span>
                                        <span className="text-sm line-through text-gray-500">
                                            ₹{product?.price}
                                        </span>
                                        <span className="text-sm font-semibold text-red-500">
                                            {product?.discountPercent}% OFF
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

                    {/* Pagination */}
                    {data?.totalPages > 1 && (
                        <div className="flex justify-center mt-10 gap-2 flex-wrap">

                            {/* Prev */}
                            <button
                                onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                                disabled={page === 1}
                                className={`px-4 py-2 rounded-lg border border-gray-400
        ${page === 1
                                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                        : "bg-white hover:bg-gray-100"}
      `}
                            >
                                Prev
                            </button>

                            {/* Page Numbers */}
                            {Array.from({ length: data.totalPages }).map((_, index) => {
                                const pageNumber = index + 1;
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => setPage(pageNumber)}
                                        className={`px-4 py-2 rounded-lg border border-gray-400
                                        ${page === pageNumber
                                                ? "bg-[var(--btnColor)] text-white"
                                                : "bg-white hover:bg-gray-100"}
                                    `}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}

                            {/* Next */}
                            <button
                                onClick={() =>
                                    setPage(prev => Math.min(prev + 1, data.totalPages))
                                }
                                disabled={page === data.totalPages}
                                className={`px-4 py-2 rounded-lg border border-gray-400
                                ${page === data.totalPages
                                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                        : "bg-white hover:bg-gray-100"}
                                `}
                            >
                                Next
                            </button>

                        </div>
                    )}



                    {sortedProducts?.length === 0 && (
                        <div className="text-center py-10">
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
