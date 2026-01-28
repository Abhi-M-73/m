import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    MessageSquare,
    Headphones,
} from "lucide-react";
import { useState } from "react";

const ContactUsPage = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [showSuccess, setShowSuccess] = useState(false);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone is required";
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
            newErrors.phone = "Phone number is invalid";
        }
        if (!formData.subject.trim()) newErrors.subject = "Subject is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setShowSuccess(true);
            setTimeout(() => {
                setShowSuccess(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
            }, 3500);
        }
    };

    return (
        <div className="bg-white text-black min-h-screen">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@400;500;700&display=swap');
                
                * {
                    font-family: 'DM Sans', sans-serif;
                }
                
                h1, h2, h3 {
                    font-family: 'Playfair Display', serif;
                }

                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }

                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-pulse-slow {
                    animation: pulse 3s ease-in-out infinite;
                }

                .text-gradient {
                    background: linear-gradient(135deg, #FFD700, #FFA500, #FF6347);
                    -webkit-background-clip: text;
                    background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                .grain {
                    position: relative;
                    overflow: hidden;
                }

                .grain::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
                    pointer-events: none;
                    z-index: 1;
                }

                .hover-lift {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .hover-lift:hover {
                    transform: translateY(-8px);
                }

                .border-glow {
                    position: relative;
                }

                .border-glow::before {
                    content: '';
                    position: absolute;
                    inset: -2px;
                    border-radius: inherit;
                    padding: 2px;
                    background: linear-gradient(135deg, #FFD700, #FFA500);
                    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                    opacity: 0;
                    transition: opacity 0.3s;
                }

                .border-glow:hover::before {
                    opacity: 1;
                    border-radius: 25px;
                }
            `}</style>

            {/* HERO */}
            <section className="relative h-[40vh] flex items-center justify-center overflow-hidden grain">
                <div className="absolute inset-0">
                    <img
                        src="https://i.pinimg.com/736x/1a/a9/ff/1aa9ffeab3885dd14e2e7b194363d3cf.jpg"
                        alt="Contact"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-900/60 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
                </div>

                <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                    <div className="inline-block mb-3 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                        <span className="text-orange-400 text-sm font-bold tracking-wider uppercase">Get in Touch</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl text-white font-black mb-4 leading-tight">
                        Let's <span className="text-gradient">Connect</span>
                    </h1>
                    
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 pb-20 relative z-20">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="border-glow hover-lift">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 shadow backdrop-blur-xl rounded-3xl p-8 border border-black/10">
                            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                                <Phone className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-black mb-3">Call Us</h3>
                            <p className="text-gray-400 mb-6">Mon–Sat, 9 AM – 6 PM</p>
                            <a
                                href="tel:+917309759015"
                                className="text-2xl font-bold text-gradient hover:opacity-80 transition block mb-4"
                            >
                                +91 7309759015
                            </a>
                            <div className="h-px w-full bg-gradient-to-r from-orange-500/50 to-transparent mb-4"></div>
                            <p className="text-sm text-gray-500">Order & Delivery Support</p>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="border-glow hover-lift">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 shadow-sm backdrop-blur-xl rounded-3xl p-8 border border-black/10">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                                <Mail className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-black mb-3">Email Us</h3>
                            <p className="text-gray-400 mb-6">Response within 24 hours</p>
                            <a
                                href="mailto:support@yourstore.com"
                                className="text-xl font-bold text-gradient hover:opacity-80 transition block mb-4 break-all"
                            >
                                support@yourstore.com
                            </a>
                            <div className="h-px w-full bg-gradient-to-r from-orange-500/50 to-transparent mb-4"></div>
                            <p className="text-sm text-gray-500">Product & Refund Queries</p>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="border-glow hover-lift">
                        <div className="bg-gradient-to-br from-white/10 to-white/5 shadow-sm backdrop-blur-xl rounded-3xl p-8 border border-black/10">
                            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl">
                                <MapPin className="h-8 w-8 text-white" />
                            </div>
                            <h3 className="text-2xl font-black mb-3">Visit Us</h3>
                            <p className="text-gray-400 mb-6">Business Center</p>
                            <p className="text-lg font-semibold text-orange-400 leading-relaxed mb-4">
                                Danish Nagar, Bhopal, M.P.
                            </p>
                            <div className="h-px w-full bg-gradient-to-r from-orange-500/50 to-transparent mb-4"></div>
                            <p className="text-sm text-gray-500">Customer Service Office</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORM + SIDEBAR */}
            <section className="md:max-w-7xl w-full mx-auto px-6 md:px-12 mb-5">
                <div className="grid lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="bg-white shadow backdrop-blur-xl rounded-3xl md:p-8 p-5 border border-black/10">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl">
                                    <MessageSquare className="h-7 w-7 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-black">Send a Message</h2>
                                    <p className="text-gray-400 text-md">We'll respond within 24 hours</p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-white/5 border border-gray-300 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
                                            placeholder="John Doe"
                                        />
                                        {errors.name && (
                                            <p className="text-red-400 text-sm mt-2">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-white/5 border border-gray-300 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-400 text-sm mt-2">{errors.email}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-white/5 border border-gray-300 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
                                            placeholder="+91 9696607477"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-400 text-sm mt-2">{errors.phone}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 bg-white/5 border border-gray-300 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition"
                                            placeholder="Order / Product / Refund"
                                        />
                                        {errors.subject && (
                                            <p className="text-red-400 text-sm mt-2">{errors.subject}</p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-bold mb-3 text-sm uppercase tracking-wider text-gray-400">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className="w-full px-5 py-4 bg-white/5 border border-gray-300 rounded-xl text-white placeholder-gray-500 focus:border-orange-500 focus:outline-none transition resize-none"
                                        placeholder="Tell us about your query..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-400 text-sm mt-2">{errors.message}</p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                                >
                                    <Send className="h-5 w-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="space-y-8">
                        <div className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 rounded-3xl p-8 text-white shadow-sm grain">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="h-10 w-10" />
                                <h3 className="text-2xl font-black">Support Hours</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                                    <span className="font-semibold">Mon - Sat</span>
                                    <span className="font-bold">9 AM - 6 PM</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-gray-300">
                                    <span className="font-semibold">Sunday</span>
                                    <span className="font-bold">10 AM - 4 PM</span>
                                </div>
                                <p className="text-sm text-white/80 pt-2">
                                    Order & delivery support available during working hours.
                                </p>
                            </div>
                        </div>

                        <div className="bg-white shadow backdrop-blur-xl rounded-3xl p-8 border border-black/10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center shadow-xl">
                                    <Headphones className="h-6 w-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-black">Quick Support</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-3 p-4 bg-white/5 rounded-xl border border-black/10">
                                    <CheckCircle className="h-6 w-6 text-teal-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold mb-1">Order Assistance</p>
                                        <p className="text-gray-400 text-sm">Help with tracking & delivery</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 p-4 bg-white/5 rounded-xl border border-black/10">
                                    <CheckCircle className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold mb-1">Easy Returns</p>
                                        <p className="text-gray-400 text-sm">Simple refund process</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 p-4 bg-white/5 rounded-xl border border-black/10">
                                    <CheckCircle className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold mb-1">Product Support</p>
                                        <p className="text-gray-400 text-sm">Get help choosing products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-6">
                    <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] border border-white/20 rounded-3xl shadow-2xl max-w-lg w-full p-12 text-center grain relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 rounded-3xl"></div>

                        <div className="relative z-10">
                            <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse-slow">
                                <CheckCircle className="h-14 w-14 text-white" />
                            </div>
                            <h3 className="text-5xl font-black mb-4">
                                Message <span className="text-gradient">Sent!</span>
                            </h3>
                            <p className="text-gray-400 text-lg mb-8">
                                Our support team will contact you within 24 hours.
                            </p>
                            <button
                                onClick={() => setShowSuccess(false)}
                                className="w-full px-8 py-5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl font-black text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                            >
                                Got it!
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUsPage;