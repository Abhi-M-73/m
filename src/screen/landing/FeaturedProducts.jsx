import { Star, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedProducts = () => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Classic Aviator",
            price: 2999,
            image:
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
            category: "Sunglasses",
            rating: 4.8,
        },
        {
            id: 2,
            name: "Modern Round",
            price: 1999,
            image:
                "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=400&h=400&fit=crop",
            category: "Eyeglasses",
            rating: 4.9,
        },
        {
            id: 3,
            name: "Sport Pro",
            price: 3499,
            image:
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
            category: "Sports",
            rating: 4.7,
        },
        {
            id: 4,
            name: "Elegant Cat Eye",
            price: 2499,
            image:
                "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop",
            category: "Women",
            rating: 4.9,
        },
        {
            id: 1,
            name: "Classic Aviator",
            price: 2999,
            image:
                "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop",
            category: "Sunglasses",
            rating: 4.8,
        },
        {
            id: 2,
            name: "Modern Round",
            price: 1999,
            image:
                "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=400&h=400&fit=crop",
            category: "Eyeglasses",
            rating: 4.9,
        },
        {
            id: 3,
            name: "Sport Pro",
            price: 3499,
            image:
                "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
            category: "Sports",
            rating: 4.7,
        },
        {
            id: 4,
            name: "Elegant Cat Eye",
            price: 2499,
            image:
                "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=400&fit=crop",
            category: "Women",
            rating: 4.9,
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