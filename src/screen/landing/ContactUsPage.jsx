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
import ReusableButton from "../../components/ui/ReusableButton";

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
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">

            {/* Hero */}
            <div className="relative h-[250px] flex items-center justify-center">
                <img
                    src="https://i.pinimg.com/736x/1a/a9/ff/1aa9ffeab3885dd14e2e7b194363d3cf.jpg"
                    alt="Contact"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-yellow-500/50"></div>
                <div className="relative z-10 text-center px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-yellow-100">
                        Have a question about your order, product, or delivery? We’re here to help!
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20">

                {/* Contact Cards */}
                <div className="grid lg:grid-cols-3 gap-8 mb-16 mt-20">

                    {/* Phone */}
                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                        <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <Phone className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Call Our Support Team
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Available Mon–Sat, 9 AM – 6 PM
                        </p>
                        <a
                            href="tel:+917309759015"
                            className="text-teal-600 font-bold text-xl hover:text-teal-700 transition block mb-3"
                        >
                            +91 7309759015
                        </a>
                        <p className="text-sm text-gray-500 mt-6 pt-6 border-t">
                            Order & Delivery Support
                        </p>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <Mail className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Email Support
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            We respond within 24 hours
                        </p>
                        <a
                            href="mailto:support@yourstore.com"
                            className="text-purple-600 font-bold text-xl hover:text-purple-700 transition block mb-3 break-all"
                        >
                            support@yourstore.com
                        </a>
                        <p className="text-sm text-gray-500 mt-6 pt-6 border-t">
                            Product & Refund Queries
                        </p>
                    </div>

                    {/* Address */}
                    <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <MapPin className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Our Office
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Business & Support Center
                        </p>
                        <p className="text-orange-600 font-bold text-lg leading-relaxed">
                            Baghauli Bazar, Khalilabad, Sant Kabir Nagar, Uttar Pradesh
                        </p>
                        <p className="text-sm text-gray-500 mt-6 pt-6 border-t">
                            Customer Service Office
                        </p>
                    </div>
                </div>

                {/* Form + Info */}
                <div className="grid lg:grid-cols-5 gap-12 mb-16">

                    {/* Form */}
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="bg-[var(--btnColor)] p-3 rounded-xl shadow-lg">
                                    <MessageSquare className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        Send Us a Message
                                    </h2>
                                    <p className="text-gray-600 text-lg">
                                        Ask about orders, products, or support
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-semibold mb-2">Full Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-semibold mb-2">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block font-semibold mb-2">Phone *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                                            placeholder="+91 9696607477"
                                        />
                                    </div>

                                    <div>
                                        <label className="block font-semibold mb-2">Subject *</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl"
                                            placeholder="Order / Product / Refund"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block font-semibold mb-2">Message *</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl resize-none"
                                        placeholder="Tell us about your query..."
                                    />
                                </div>

                                <ReusableButton
                                    label="Send Message"
                                    onClick={handleSubmit}
                                    // loading={isPending}
                                    // disabled={isPending}
                                    icon={Send}
                                    variant="primary"
                                    type="button"
                                    className="py-4"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Info */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Hours */}
                        <div className="bg-[var(--btnColor)] rounded-3xl p-8 text-white shadow-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="h-10 w-10" />
                                <h3 className="text-2xl font-bold">Support Hours</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-white/20 pb-4">
                                    <span>Monday - Saturday</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between border-b border-white/20 pb-4">
                                    <span>Sunday</span>
                                    <span>10:00 AM - 4:00 PM</span>
                                </div>
                                <p className="text-sm mt-6">
                                    Order & delivery support available during working hours.
                                </p>
                            </div>
                        </div>

                        {/* Support Features */}
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-gradient-to-br from-green-500 to-teal-500 p-3 rounded-xl shadow-lg">
                                    <Headphones className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900">
                                    Quick Support
                                </h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                                    <CheckCircle className="h-6 w-6 text-teal-600" />
                                    <div>
                                        <p className="font-bold">Order Assistance</p>
                                        <p className="text-gray-600">Help with tracking & delivery</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                                    <CheckCircle className="h-6 w-6 text-purple-600" />
                                    <div>
                                        <p className="font-bold">Easy Returns</p>
                                        <p className="text-gray-600">Simple refund process</p>
                                    </div>
                                </div>
                                <div className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                                    <CheckCircle className="h-6 w-6 text-orange-600" />
                                    <div>
                                        <p className="font-bold">Product Support</p>
                                        <p className="text-gray-600">Get help choosing products</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="p-10 bg-[var(--btnColor)]">
                        <h2 className="text-4xl font-bold text-white mb-3">
                            Our Office Location
                        </h2>
                        <p className="text-xl text-teal-50">
                            Visit our customer support center
                        </p>
                    </div>

                    <div className="relative h-[500px] bg-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.40818290085681!2d83.06502607485903!3d26.834401979843314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39912fe8deedb809%3A0x5b191aece2476ad4!2sBaghauli!5e1!3m2!1sen!2sin!4v1759519351587!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center">
                        <div className="bg-gradient-to-br from-teal-500 to-blue-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle className="h-12 w-12 text-white" />
                        </div>
                        <h3 className="text-4xl font-bold mb-4">
                            Message Sent Successfully!
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Our support team will contact you soon.
                        </p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold"
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ContactUsPage;
