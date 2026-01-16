import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    MessageSquare,
    Headphones,
    Globe,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
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
        setFormData({
            ...formData,
            [name]: value,
        });
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
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
            <div className="relative overflow-hidden bg-gradient-to-br from-teal-600 to-blue-600">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
                </div>

                <div className="relative py-24 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-7xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
                            <MessageSquare className="h-5 w-5 text-white" />
                            <span className="text-white font-semibold">
                                24/7 Support Available
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl md:text-2xl text-teal-50 max-w-4xl mx-auto leading-relaxed">
                            We are here to help and answer any questions you might have. We
                            look forward to hearing from you.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-20">
                <div className="grid lg:grid-cols-3 gap-8 mb-16 mt-20">
                    <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="bg-gradient-to-br from-teal-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <Phone className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Call Us Anytime
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Available Mon-Sat, 9 AM - 6 PM
                        </p>
                        <a
                            href="tel:+911234567890"
                            className="text-teal-600 font-bold text-xl hover:text-teal-700 transition block mb-3"
                        >
                            +91 7309759015
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="text-gray-700 font-semibold hover:text-teal-600 transition block"
                        >
                            +91 7309759015
                        </a>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500">Emergency: 24/7 Available</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="bg-gradient-to-br from-purple-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <Mail className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Email Support
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">
                            Response within 24 hours
                        </p>
                        <a
                            href="mailto:info@visioncare.com"
                            className="text-purple-600 font-bold text-xl hover:text-purple-700 transition block mb-3 break-all"
                        >
                            info@maddhehsiyaeyecare.com
                        </a>
                        <a
                            href="mailto:support@visioncare.com"
                            className="text-gray-700 font-semibold hover:text-purple-600 transition block break-all"
                        >
                            support@visioncare.com
                        </a>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500">General Inquiries Welcome</p>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <MapPin className="h-10 w-10 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                            Visit Our Clinic
                        </h3>
                        <p className="text-gray-600 mb-6 text-lg">Come see us in person</p>
                        <p className="text-orange-600 font-bold text-lg leading-relaxed">
                            Baghauli Bazar ,Khalilabad ,Sant kabir Nagar ,Uttar Pradesh
                        </p>
                        <div className="mt-6 pt-6 border-t border-gray-200">
                            <p className="text-sm text-gray-500">Free Parking Available</p>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12 mb-16">
                    <div className="lg:col-span-3">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="bg-gradient-to-br from-teal-500 to-blue-500 p-3 rounded-xl shadow-lg">
                                    <MessageSquare className="h-8 w-8 text-white" />
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold text-gray-900">
                                        Send us a Message
                                    </h2>
                                    <p className="text-gray-600 text-lg">
                                        Fill out the form and we will get back to you
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2 text-lg">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className={`w-full px-5 py-4 border-2 ${errors.name ? "border-red-400" : "border-gray-200"
                                                } rounded-xl focus:border-teal-600 focus:outline-none transition text-lg`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-2">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2 text-lg">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className={`w-full px-5 py-4 border-2 ${errors.email ? "border-red-400" : "border-gray-200"
                                                } rounded-xl focus:border-teal-600 focus:outline-none transition text-lg`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2 text-lg">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className={`w-full px-5 py-4 border-2 ${errors.phone ? "border-red-400" : "border-gray-200"
                                                } rounded-xl focus:border-teal-600 focus:outline-none transition text-lg`}
                                            placeholder="+91 9696607477"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-gray-700 font-semibold mb-2 text-lg">
                                            Subject *
                                        </label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            className={`w-full px-5 py-4 border-2 ${errors.subject ? "border-red-400" : "border-gray-200"
                                                } rounded-xl focus:border-teal-600 focus:outline-none transition text-lg`}
                                            placeholder="How can we help?"
                                        />
                                        {errors.subject && (
                                            <p className="text-red-500 text-sm mt-2">
                                                {errors.subject}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-semibold mb-2 text-lg">
                                        Your Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className={`w-full px-5 py-4 border-2 ${errors.message ? "border-red-400" : "border-gray-200"
                                            } rounded-xl focus:border-teal-600 focus:outline-none transition resize-none text-lg`}
                                        placeholder="Tell us more about your inquiry or any questions you have..."
                                    />
                                    {errors.message && (
                                        <p className="text-red-500 text-sm mt-2">
                                            {errors.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-8 py-5 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all flex items-center justify-center gap-3"
                                >
                                    <Send className="h-6 w-6" />
                                    Send Message
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-8 text-white shadow-2xl">
                            <div className="flex items-center gap-3 mb-6">
                                <Clock className="h-10 w-10" />
                                <h3 className="text-2xl font-bold">Working Hours</h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                                    <span className="font-semibold text-lg">Monday - Sunday</span>
                                    <span className="text-teal-100 font-medium">
                                        9:00 AM - 6:00 PM
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-white/20">
                                    <span className="font-semibold text-lg">Sunday</span>
                                    <span className="text-teal-100 font-medium">
                                        10:00 AM - 4:00 PM
                                    </span>
                                </div>

                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 mt-6">
                                    <p className="text-sm text-teal-50 leading-relaxed">
                                        <strong className="text-white">Emergency Services:</strong>{" "}
                                        Available 24/7 for urgent eye care needs. Call us anytime!
                                    </p>
                                </div>
                            </div>
                        </div>

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
                                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-100">
                                    <CheckCircle className="h-7 w-7 text-teal-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">
                                            24/7 Customer Support
                                        </p>
                                        <p className="text-gray-600">
                                            Our team is always ready to assist you
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-purple-50 rounded-xl border border-gray-100">
                                    <CheckCircle className="h-7 w-7 text-purple-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">
                                            Fast Response Time
                                        </p>
                                        <p className="text-gray-600">We respond within 24 hours</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 p-4 bg-gradient-to-br from-gray-50 to-orange-50 rounded-xl border border-gray-100">
                                    <CheckCircle className="h-7 w-7 text-orange-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="font-bold text-gray-900 text-lg">
                                            Expert Guidance
                                        </p>
                                        <p className="text-gray-600">
                                            Professional advice from specialists
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <Globe className="h-8 w-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Follow Us</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Stay connected on social media
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-xl hover:shadow-lg transform hover:scale-110 transition"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-br from-sky-400 to-blue-500 p-4 rounded-xl hover:shadow-lg transform hover:scale-110 transition"
                >
                  <Twitter className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-br from-pink-500 to-purple-600 p-4 rounded-xl hover:shadow-lg transform hover:scale-110 transition"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-xl hover:shadow-lg transform hover:scale-110 transition"
                >
                  <Linkedin className="h-6 w-6 text-white" />
                </a>
              </div>
            </div> */}
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="p-10 bg-gradient-to-r from-teal-600 to-blue-600">
                        <h2 className="text-4xl font-bold text-white mb-3">
                            Find Us on Map
                        </h2>
                        <p className="text-xl text-teal-50">
                            Visit our clinic for the best eye care services in Baghauli
                        </p>
                    </div>
                    <div className="relative h-[500px] bg-gray-100">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.40818290085681!2d83.06502607485903!3d26.834401979843314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39912fe8deedb809%3A0x5b191aece2476ad4!2sBaghauli!5e1!3m2!1sen!2sin!4v1759519351587!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                    </div>
                    <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 border-t border-gray-200">
                        <div className="flex flex-wrap gap-6 justify-center items-center">
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="bg-orange-100 p-3 rounded-xl">
                                    <MapPin className="h-6 w-6 text-orange-600" />
                                </div>
                                <span className="font-bold text-lg">
                                    Baghauli Bazar ,Khalilabad,Uttar Pradesh
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="bg-purple-100 p-3 rounded-xl">
                                    <Phone className="h-6 w-6 text-purple-600" />
                                </div>
                                <span className="font-bold text-lg">+91 7309759015</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showSuccess && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center">
                        <div className="bg-gradient-to-br from-teal-500 to-blue-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg animate-bounce">
                            <CheckCircle className="h-12 w-12 text-white" strokeWidth={3} />
                        </div>
                        <h3 className="text-4xl font-bold text-gray-900 mb-4">
                            Message Sent Successfully!
                        </h3>
                        <p className="text-gray-600 mb-3 text-xl">
                            Thank you for reaching out to us.
                        </p>
                        <p className="text-gray-600 mb-8 text-lg">
                            We will get back to you within 24 hours at{" "}
                            <span className="font-bold text-teal-600">{formData.email}</span>
                        </p>
                        <button
                            onClick={() => setShowSuccess(false)}
                            className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition"
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