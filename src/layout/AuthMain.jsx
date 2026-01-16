import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AuthMain = ({ inner, name }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [phase, setPhase] = useState("enter");

    const handleRouteChange = (path) => {
        if (path === location.pathname) return;

        setPhase("exit");

        setTimeout(() => {
            navigate(path);
            setPhase("enter");
        }, 400);
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-100 md:p-6 p-3 relative overflow-hidden">
            <div className="w-full max-w-6xl flex md:gap-12 gap-0 relative z-10">
                <div className="w-1/2 md:flex flex-col justify-center hidden">
                    <Link to="/" className="flex items-center gap-3 mb-8">
                        <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center shadow-md">
                            <svg
                                className="w-7 h-7 text-black"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                            </svg>
                        </div>
                        <span className="text-3xl font-bold text-slate-900">
                            {name || "ShopMate"}
                        </span>
                    </Link>

                    {/* Headline */}
                    <h1 className="text-5xl font-bold text-slate-900 mb-5 leading-tight">
                        Shop Smarter.
                        <br />
                        <span className="text-yellow-500">Live Better.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-slate-600 text-lg leading-relaxed max-w-md mb-10">
                        Discover premium products, enjoy seamless checkout, and track your
                        orders with ease. Your shopping experience just got an upgrade.
                    </p>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-3 gap-4">

                        {[
                            { value: "50K+", label: "Happy Customers" },
                            { value: "24/7", label: "Support" },
                            { value: "Fast", label: "Delivery" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-xl p-4 border border-slate-200 shadow-sm text-center"
                            >
                                <div className="text-2xl font-bold text-slate-900 mb-1">
                                    {item.value}
                                </div>
                                <div className="text-yellow-500 text-sm font-semibold">
                                    {item.label}
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* RIGHT SIDE (Animated Form) */}
                <div className="md:w-1/2 w-full flex items-center justify-center md:min-h-auto rounded-3xl overflow-hidden">
                    <div
                        className={`
              w-full max-w-xl bg-white p-8 rounded-3xl
              border border-slate-200 shadow-xl
              transition-all duration-400 ease-in-out
              ${phase === "enter"
                                ? "translate-x-0 opacity-100"
                                : "translate-x-10 opacity-0"
                            }
            `}
                    >
                        {React.cloneElement(inner, {
                            onNavigate: handleRouteChange,
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthMain;
