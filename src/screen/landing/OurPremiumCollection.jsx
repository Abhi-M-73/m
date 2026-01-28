import { useQuery } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";
import { getAllCategories } from "../../api/category.api";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurPremiumCollection = () => {
    const isPausedRef = useRef(false);
    const scrollRef = useRef(null);
    const navigate = useNavigate();
    const [index, setIndex] = useState(0);

    const { data, isLoading } = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories,
    });

    useEffect(() => {
        if (!scrollRef.current || !data?.categories?.length) return;

        const container = scrollRef.current;
        const cardWidth = container.children[0].offsetWidth + 24; // width + gap
        const totalItems = data.categories.length;

        const interval = setInterval(() => {
            if (!isPausedRef.current) {
                setIndex(prev => (prev + 1) % totalItems);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [data?.categories?.length]);


    useEffect(() => {
        if (!scrollRef.current) return;

        const container = scrollRef.current;
        const cardWidth = container.children[0].offsetWidth + 24;

        container.scrollTo({
            left: index * cardWidth,
            behavior: "smooth", // 👈 slider smoothness
        });
    }, [index]);

    if (isLoading)
        return <Loader className="animate-spin mx-auto" />;

    return (
        <section className="relative bg-white py-12 overflow-hidden">
            {/* Heading */}
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    Our Premium <span className="text-[var(--btnColor)]">Collection</span>
                </h2>
                <p className="text-gray-600 text-lg">
                    Explore our exclusive collection of high-quality eyewear.
                </p>
            </div>

            <div className="relative">
                {/* Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

                {/* Scroll Container */}
                <div
                    ref={scrollRef}
                    onMouseEnter={() => (isPausedRef.current = true)}
                    onMouseLeave={() => (isPausedRef.current = false)}
                    className="flex gap-6 overflow-x-hidden"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {/* Duplicate items for infinite feel */}
                    {[...data.categories, ...data.categories].map((cat, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 w-80 h-64 group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl shadow-lg h-full">
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
                                            {cat.slug}
                                        </span>
                                    </div>

                                    <div
                                        onClick={() => navigate("/products", { state: { cat: cat.name } })}
                                        className="absolute bottom-4 left-4 text-white"
                                    >
                                        <p className="font-bold text-lg">{cat.name}</p>
                                        <p className="text-sm text-gray-200 line-clamp-2">
                                            {cat.description}
                                        </p>
                                        <p className="text-sm text-[var(--btnColor)] mt-1 font-semibold">
                                            View Details →
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPremiumCollection;
