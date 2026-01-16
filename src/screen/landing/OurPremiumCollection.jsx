import { useEffect, useRef } from "react";

const OurPremiumCollection = () => {
    const scrollRef = useRef(null);

    const photos = [
        "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1577803645773-f96470509666?w=400&h=300&fit=crop",
        "https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=400&h=300&fit=crop",
    ];

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollAmount = 0;
        const scrollStep = 1;
        const scrollInterval = 30;

        const autoScroll = setInterval(() => {
            scrollAmount += scrollStep;
            if (scrollAmount >= scrollContainer.scrollWidth / 2) {
                scrollAmount = 0;
            }
            scrollContainer.scrollLeft = scrollAmount;
        }, scrollInterval);

        return () => clearInterval(autoScroll);
    }, []);


    return (
        <section section className="relative bg-white py-12 overflow-hidden" >
            <div className="mb-8 text-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                    Our Premium <span className="text-[var(--btnColor)]">Collection</span>
                </h2>
                <p className="text-gray-600 text-lg">
                    Discover the latest trends in eyewear fashion
                </p>
            </div>

            <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-hidden scroll-smooth"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {[...photos, ...photos].map((photo, idx) => (
                        <div key={idx} className="flex-shrink-0 w-80 h-64 relative group">
                            <div className="relative overflow-hidden rounded-2xl shadow-lg h-full">
                                <img
                                    src={photo}
                                    alt={`Eyewear ${idx + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="font-bold text-lg">Premium Frame</p>
                                        <p className="text-sm">View Details →</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default OurPremiumCollection;