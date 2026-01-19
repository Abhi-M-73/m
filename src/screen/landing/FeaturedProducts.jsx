import { Star, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
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

    return (
        <section className="py-5 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Featured Collection
                    </h2>
                    <p className="text-lg text-gray-600">
                        Handpicked styles for every face shape and personality
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-[var(--btnColor)]">
                                    {product.category}
                                </div>
                                <button
                                    onClick={() => navigate(`/product-details`)}
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-[var(--btnColor)] px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300"
                                >
                                    Quick View
                                </button>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < Math.floor(product.rating)
                                            ? "fill-[var(--btnColor)] text-[var(--btnColor)]"
                                                : "text-gray-300"
                                            }`}
                                    />
                                ))}
                                <span className="text-sm text-gray-600 ml-2">
                                    ({product.rating})
                                </span>
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">
                                {product.name}
                            </h3>
                            <p className="text-2xl font-bold text-[var(--btnColor)]">
                                ₹{product.price}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p
                        onClick={() => navigate("/products")}
                        className="inline-flex items-center gap-2 text-[var(--btnColor)] underline font-semibold hover:gap-4 transition-all"
                    >
                        View All Products
                        <ChevronRight className="h-5 w-5" />
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;