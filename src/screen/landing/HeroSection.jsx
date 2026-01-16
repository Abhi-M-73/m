import { useState, useEffect } from "react";
import {
  ArrowRight,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Truck,
  ShieldCheck,
  Star,
} from "lucide-react";

const slides = [
  {
    img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    title: "Upgrade Your Style",
    desc: "Premium fashion for modern lifestyle.",
  },
  {
    img: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    title: "New Arrivals 2026",
    desc: "Fresh collections, premium quality.",
  },
  {
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    title: "Premium Footwear",
    desc: "Style meets comfort.",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[95vh] w-full overflow-hidden bg-white ">

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
            alt="slide"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <svg
        className="absolute -bottom-[1px] left-0 w-full z-10 block"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 40L60 50C120 60 240 80 360 85C480 90 600 80 720 70C840 60 960 50 1080 55C1200 60 1320 80 1380 90L1440 100V120H0V40Z"
          fill="white"
        />
      </svg>


      <div className="relative z-20 h-full flex items-center px-6 lg:px-20 text-white">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full mb-6">
            New Collection 2026
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {slides[current].title.split(" ")[0]}{" "}
            <span className="text-yellow-400">
              {slides[current].title.split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            {slides[current].desc}
          </p>
          <div className="mt-6 grid grid-cols-3 gap-4 text-sm text-slate-200">
            <div className="flex items-center gap-2">
              <Truck className="text-yellow-400" size={18} />
              Fast Delivery
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="text-yellow-400" size={18} />
              Secure Payment
            </div>
            <div className="flex items-center gap-2">
              <Star className="text-yellow-400" size={18} />
              Premium Quality
            </div>
          </div>
          <div className="mt-8 flex gap-4 flex-wrap">
            <button className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-xl shadow-lg hover:bg-yellow-400 transition-all flex items-center gap-2">
              Shop Now <ArrowRight />
            </button>
            <button className="px-8 py-3 border border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all flex items-center gap-2">
              <ShoppingBag size={18} /> Explore
            </button>
          </div>
        </div>
      </div>

      {/* Nav Buttons */}
      <button
        onClick={() =>
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-30"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full z-30"
      >
        <ChevronRight />
      </button>

      {/* Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${i === current ? "bg-yellow-400" : "bg-white/50"
              }`}
          />
        ))}
      </div>
    </section>
  );
}
