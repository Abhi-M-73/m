"use client";
import React from "react";

const OtpInputWithButton = ({
    label = "OTP",
    name = "otp",
    value,
    onChange,
    placeholder = "Enter OTP",
    required = false,
    disabled = false,
    icon: Icon,
    buttonLabel = "Send OTP",
    onButtonClick,
    loading = false,
    className = "",
}) => {
    const commonInputClass =
        "bg-transparent flex-1 outline-none text-slate-800 placeholder-slate-400 text-sm disabled:cursor-not-allowed " +
        className;

    return (
        <div className="w-full">
            {label && (
                <label
                    htmlFor={name}
                    className="block text-md font-medium mb-2 text-slate-700"
                >
                    {label} {required && <span className="text-red-500">*</span>}
                </label>
            )}

            {/* Outer container */}
            <div className="flex sm:flex-row sm:items-center gap-3 rounded-lg px-2 py-1 border border-gray-300 group">
                {/* Icon + Input block */}
                <div className="flex items-center gap-3 flex-1">
                    {Icon && (
                        <div className="bg-slate-50 p-2 rounded">
                            <Icon className="w-4 h-4 text-gray-500 group-focus-within:text-[var(--btnColor)]" />
                        </div>
                    )}

                    <input
                        id={name}
                        name={name}
                        type="number"
                        inputMode="numeric"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required={required}
                        disabled={disabled}
                        className={commonInputClass}
                    />
                </div>

                {/* OTP Button block */}
                <button
                    type="button"
                    onClick={onButtonClick}
                    disabled={disabled || loading}
                    className="sm:w-auto px-3 py-1  font-semibold rounded-md shine-effect relative bg-[var(--btnColor)] hover:bg-[var(--btnHoverColor)] text-black disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed overflow-hidden inline-flex items-center justify-center gap-2"
                >
                    {loading ? (
                        <>
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Sending...</span>
                        </>
                    ) : (
                        <span>{buttonLabel}</span>
                    )}
                </button>
            </div>

            <style>{`
        /* Shine animation layer */
        .shine-effect::before {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 120%;
          height: 100%;
          background: linear-gradient(
            120deg,
            transparent 0%,
            rgba(255,255,255,0.25) 50%,
            transparent 100%
          );
          transform: skewX(-20deg);
        }

        .shine-effect:hover::before {
          animation: shineMove 0.9s ease-out forwards;
        }

        @keyframes shineMove {
          0% { left: -120%; }
          100% { left: 120%; }
        }

        /* Spinner */
        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 3px solid rgba(255,255,255,0.3);
          border-top-color: white;
          border-radius: 9999px;
          animation: spin 0.6s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default OtpInputWithButton;
