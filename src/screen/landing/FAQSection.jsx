import React, { useState } from "react";
import { ChevronDown, Zap } from "lucide-react";

const FAQItem = ({ question, answer, index, isOpen, onClick }) => {
  return (
    <div
      className="group relative mb-4"
      style={{
        animation: `slideUp 0.6s ease-out ${0.1 + index * 0.08}s both`,
      }}
    >
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <button onClick={onClick} className="w-full text-left relative">
        <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition" />

        <div
          className={`relative rounded-3xl border transition-all duration-300 px-5 py-5 md:px-6 md:py-6 ${isOpen
              ? "bg-white border-yellow-400 shadow-xl"
              : "bg-white border-slate-300 hover:border-yellow-300"
            }`}
        >
          {/* Question */}
          <div className="flex items-center justify-between gap-4">
            <h3
              className={`text-base sm:text-lg md:text-xl font-bold ${isOpen ? "text-yellow-600" : "text-slate-900"
                }`}
            >
              {question}
            </h3>

            <ChevronDown
              className={`w-5 h-5 text-yellow-500 transition-transform ${isOpen ? "rotate-180" : ""
                }`}
            />
          </div>

          {/* Answer */}
          {isOpen && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
                {answer}
              </p>
            </div>
          )}

          {/* Bottom Accent */}
          <div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent transition ${isOpen ? "opacity-100" : "opacity-0"
              }`}
          />
        </div>
      </button>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept UPI, credit/debit cards, net banking and wallet payments to make your shopping experience smooth and secure.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Orders are usually delivered within 3–7 working days depending on your location and product availability.",
    },
    {
      question: "Can I return or exchange a product?",
      answer:
        "Yes, we offer easy returns and exchanges on most products within the return window mentioned on the product page.",
    },
    {
      question: "Are your products authentic?",
      answer:
        "All our products are 100% genuine and sourced directly from verified brands and trusted suppliers.",
    },
    {
      question: "Is my payment information safe?",
      answer:
        "Yes, we use secure encryption and trusted payment gateways to protect your personal and payment details.",
    },
  ];

  return (
    <section id="faq" className="relative bg-gradient-to-b from-white to-slate-50 py-20 lg:py-24 overflow-hidden">
      <div className="relative w-full md:w-[70%] lg:w-[60%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-5 py-2 bg-yellow-100 text-[var(--btnColor)] rounded-full text-sm font-semibold mb-4">
            FAQ
          </span>

          <h2 className="text-4xl font-bold mb-5">
            Shopping
            <span className="text-[var(--btnColor)]"> Help Center</span>
          </h2>

          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Find quick answers about payments, delivery, returns and product authenticity.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-3 mb-16">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              index={index}
              isOpen={openIndex === index}
              onClick={() =>
                setOpenIndex(openIndex === index ? -1 : index)
              }
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-block max-w-3xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5">
              Start shopping with
              <span className="text-[var(--btnColor)]"> confidence</span>
            </h3>

            <p className="text-slate-600 text-lg mb-8">
              Shop premium products with full peace of mind. We ensure quality, safety and a smooth experience from checkout to delivery.
            </p>

            <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold text-base sm:text-lg rounded-full hover:shadow-xl hover:shadow-yellow-400/50 transition-all transform hover:scale-105">
              Start Shopping <Zap className="inline-block ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
