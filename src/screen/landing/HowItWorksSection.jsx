import React from "react";
import { Users, Smartphone, Radio, TrendingUp, Zap } from "lucide-react";

const StepCard = ({ icon: Icon, title, description, index, isActive }) => {
  return (
    <div
      className="group relative flex flex-col items-center"
      style={{
        animation: `slideUp 0.6s ease-out ${0.2 + index * 0.15}s both`,
      }}
    >
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Card Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-blue-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative bg-gradient-to-br from-slate-900/70 to-slate-950/60 border border-gray-700 group-hover:border-yellow-500/40 rounded-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 backdrop-blur-sm w-full max-w-7xl flex flex-col items-center text-center shadow-lg shadow-yellow-500/5">
        {/* Icon */}
        <div className="flex justify-center mb-4 sm:mb-5">
          <div className="p-4 sm:p-5 bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 rounded-2xl group-hover:from-yellow-400/30 group-hover:to-yellow-500/20 transition-all duration-300">
            <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 transform group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>

        {/* Step Number */}
        <div className="text-xs sm:text-sm md:text-base font-bold text-yellow-400/60 group-hover:text-yellow-400 transition-colors mb-2 sm:mb-3">
          Step {index + 1}
        </div>

        {/* Content */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3">
          {title}
        </h3>
        <p className="text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed flex-grow">
          {description}
        </p>

        {/* Bottom Accent */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl" />
      </div>
    </div>
  );
};

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Users,
      title: "Join the MLM Network",
      description:
        "Register under your sponsor, create your account and get access to your personal MLM dashboard with all plan details.",
    },
    {
      icon: Smartphone,
      title: "Choose Your Investment Plan",
      description:
        "Select the package that fits your budget and income goals. Higher plans unlock bigger level income and bonus benefits.",
    },
    {
      icon: Radio,
      title: "Share & Build Your Team",
      description:
        "Invite new members using your referral link, guide them to activate their plans and grow a strong downline structure.",
    },
    {
      icon: TrendingUp,
      title: "Earn Multi-Level Income",
      description:
        "Earn direct referral bonuses, level income and performance rewards. Track payouts in real time and withdraw your earnings.",
    },
  ];

  return (
    <section id="how-it-works" className="relative bg-black text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* ===== Animated Background Layer ===== */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-black to-black pointer-events-none" />

      {/* Floating Gradient Blobs */}
      <div className="absolute w-[700px] h-[700px] bg-gradient-to-r from-yellow-500/20 to-blue-500/10 rounded-full blur-3xl top-[-200px] left-[-200px] animate-pulse-slow" />
      <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/10 to-yellow-400/20 rounded-full blur-3xl bottom-[-200px] right-[-200px] animate-pulse-slow" />

      {/* Animated Light Lines */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400/40 to-transparent animate-slide-horizontal opacity-40" />
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent animate-slide-horizontal-reverse opacity-40" />

      {/* Small glowing particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-400/50 rounded-full blur-sm"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${2 + Math.random() * 4}s ease-in-out infinite`,
            opacity: 0.4 + Math.random() * 0.4,
          }}
        ></div>
      ))}

      {/* Particle animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes slide-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes slide-horizontal-reverse {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
        .animate-slide-horizontal {
          animation: slide-horizontal 10s linear infinite;
        }
        .animate-slide-horizontal-reverse {
          animation: slide-horizontal-reverse 12s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
      `}</style>

      {/* ===== Section Content ===== */}
      <div className="relative md:w-[80%] w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-yellow-400 text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.25em] mb-3 sm:mb-4">
            Getting Started in MLM
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            How Our
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent">
              MLM Investment Plan Works
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Follow these simple steps to activate your investment, build your
            network and start earning consistent multi-level income with our
            structured MLM system.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 lg:mb-12">
              {/* Timeline */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-yellow-400/30 to-yellow-500/20 border-2 border-yellow-400 rounded-full flex items-center justify-center z-10 relative">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full"></div>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-[2px] sm:w-[3px] h-16 sm:h-20 md:h-24 bg-gradient-to-b from-yellow-400 to-yellow-400/20 mt-2"></div>
                )}
              </div>

              {/* Card */}
              <div className="flex-1 pb-6 sm:pb-8">
                <StepCard
                  icon={step.icon}
                  title={step.title}
                  description={step.description}
                  index={index}
                  isActive={true}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 sm:mt-16 lg:mt-20 text-center">
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-base sm:text-lg md:text-xl rounded-lg hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 transform hover:scale-105">
            Start Your MLM Journey <Zap className="inline-block ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
