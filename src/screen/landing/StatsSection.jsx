import React, { useEffect, useState } from "react";
import { Users, TrendingUp, Award, BarChart3 } from "lucide-react";

const StatCard = ({ Icon, value, label, duration = 2000, index }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => setIsVisible(true), []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end =
      typeof value === "number"
        ? value
        : parseInt(value.replace(/\D/g, ""), 10);

    if (!end || end <= 0) return;

    const incrementTime = Math.floor(duration / end);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration, isVisible]);

  const suffix =
    typeof value === "string" && !/\d+$/.test(value)
      ? value.replace(/[0-9]/g, "")
      : "";

  return (
    <div
      className="group relative"
      style={{
        animation: isVisible
          ? `slideUp 0.6s ease-out ${index * 0.1}s both`
          : "none",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Glow */}
      <div className="absolute inset-0 bg-yellow-400/20 blur-xl opacity-0 group-hover:opacity-100 transition" />

      <div className="relative bg-white border border-slate-200 rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all group-hover:-translate-y-2">

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="p-4 bg-yellow-100 rounded-2xl">
            <Icon className="w-9 h-9 text-[var(--btnColor)]" />
          </div>
        </div>

        {/* Value */}
        <div className="text-center mb-2">
          <div className="text-4xl font-extrabold text-slate-900">
            {count}
            <span className="text-xl ml-1 text-[var(--btnColor)]">{suffix}</span>
          </div>
        </div>

        {/* Label */}
        <p className="text-slate-600 text-sm text-center font-semibold tracking-wide uppercase">
          {label}
        </p>

        {/* Bottom Line */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--btnColor)] to-transparent opacity-0 group-hover:opacity-100 transition rounded-b-3xl" />
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    { Icon: Users, value: 250, label: "Happy Customers" },
    { Icon: Award, value: 120, label: "Premium Brands" },
    { Icon: TrendingUp, value: 98, label: "Customer Satisfaction (%)" },
    { Icon: BarChart3, value: 300, label: "Orders Delivered" },
  ];

  return (
    <section id="about" className="bg-gradient-to-b from-white to-slate-50 py-20 px-6 lg:px-20">

      {/* Header */}
      <div className="text-center mb-16">
        <span className="inline-block px-5 py-2 bg-yellow-100 text-[var(--btnColor)] rounded-full text-sm font-semibold mb-4">
          Our Achievements
        </span>

        <h2 className="text-4xl font-bold">
          Trusted by <span className="text-[var(--btnColor)]">Thousands</span>
        </h2>

        <p className="mt-4 text-slate-600 text-lg max-w-2xl mx-auto">
          We deliver premium quality products with fast service and secure shopping experience.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} index={index} />
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
