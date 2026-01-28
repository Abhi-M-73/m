import { useQuery } from "@tanstack/react-query";
import { Star, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getAllUserProducts } from "../../api/product.api";
import Loader from "../../components/ui/Loader";

const FeaturedProducts = () => {
    const navigate = useNavigate();

    const { data, isLoading } = useQuery({
        queryKey: ["featuredProducts"],
        queryFn: getAllUserProducts,
    });

    if (isLoading) return <Loader />;

    return (
        <section className="py-5 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Featured Collection
                    </h2>
                    <p className="text-lg text-gray-600">
                        Check out our collection of top-selling products. We have a wide range of styles and sizes to fit any taste.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {data?.products?.map((product) => (
                        <div key={product?._id} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl bg-gray-100 mb-4">
                                <img
                                    src={product?.images[0]?.url}
                                    alt={product?.images[0]?.alt}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-black">
                                    {product?.category?.name}
                                </div>
                                <button
                                    onClick={() => navigate(`/product-details`, { state: product })}
                                    className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white text-black px-6 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300"
                                >
                                    Quick View
                                </button>
                            </div>
                            <div className="flex items-center gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < Math.floor(product?.ratings?.average)
                                            ? "fill-[var(--btnColor)] text-[var(--btnColor)]"
                                                : "text-gray-300"
                                            }`}
                                    />
                                ))}
                                <span className="text-sm text-gray-600 ml-2">
                                    ({product?.ratings?.count})
                                </span>
                            </div>
                            <h3 className="font-semibold text-lg text-gray-900 mb-1">
                                {product?.title}
                            </h3>
                            <p className="text-2xl font-bold text-[var(--btnColor)]">
                                ₹{product?.price}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p
                        onClick={() => navigate("/products")}
                        className="inline-flex items-center gap-2 text-black underline font-semibold hover:gap-4 transition-all"
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