import React from "react";
import { DollarSign, Shield, Zap } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <div
      className="group relative"
      style={{
        animation: `slideUp 0.6s ease-out ${0.3 + index * 0.1}s both`,
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Glow */}
      <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition" />

      <div className="relative bg-white border border-slate-200 rounded-3xl p-6 lg:p-8 shadow-lg hover:shadow-2xl transition-all group-hover:-translate-y-2">

        {/* Icon */}
        <div className="mb-5">
          <div className="inline-flex p-4 bg-yellow-100 rounded-2xl">
            <Icon className="w-9 h-9 text-[var(--btnColor)]" />
          </div>
        </div>

        <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
          {title}
        </h3>

        <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
          {description}
        </p>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--btnColor)] to-transparent opacity-0 group-hover:opacity-100 transition rounded-b-3xl" />
      </div>
    </div>
  );
};

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Premium Pricing",
      description:
        "Get high-quality products at competitive prices with exclusive offers and seasonal discounts designed for smart shoppers.",
    },
    {
      icon: Shield,
      title: "Secure & Trusted Payments",
      description:
        "Your transactions are protected with industry-standard security, ensuring safe and reliable checkout every time.",
    },
    {
      icon: Zap,
      title: "Fast Delivery & Support",
      description:
        "Enjoy quick shipping, easy returns and 24/7 customer support for a smooth shopping experience.",
    },
  ];

  return (
    <section id="features" className="relative bg-gradient-to-b from-white to-slate-50 py-20 lg:py-24 overflow-hidden">
      <div className="relative w-full md:w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-5 py-2 bg-yellow-100 text-[var(--btnColor)] rounded-full text-sm font-semibold mb-4">
            Why Shop With Us
          </span>

          <h2 className="text-4xl font-bold mb-5">
            Premium Shopping
            <span className="text-[var(--btnColor)]"> Experience</span>
          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            We deliver high-quality products, secure payments and fast service to
            make your online shopping simple, safe and enjoyable.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="px-8 py-4 text-lg bg-[var(--btnColor)] text-black font-bold rounded-xl hover:shadow-lg hover:shadow-yellow-400/50 transition-all transform hover:scale-105">
            Start Shopping <Zap className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
