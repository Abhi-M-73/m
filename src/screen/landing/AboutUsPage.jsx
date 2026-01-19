import { useState } from "react";
import {
    Eye,
    Award,
    Users,
    Heart,
    Shield,
    Sparkles,
    Target,
    Clock,
    Star,
    CheckCircle2,
    Zap,
    TrendingUp,
} from "lucide-react";

const AboutUsPage = () => {
    const [appointmentOpen, setAppointmentOpen] = useState(false);

    // 📊 E-commerce Stats
    const stats = [
        {
            icon: Users,
            value: "1M+",
            label: "Happy Customers",
            color: "from-teal-500 to-teal-600",
        },
        {
            icon: Heart,
            value: "50K+",
            label: "5-Star Reviews",
            color: "from-purple-500 to-purple-600",
        },
        {
            icon: Award,
            value: "100+",
            label: "Top Brands",
            color: "from-orange-500 to-orange-600",
        },
        {
            icon: Clock,
            value: "24/7",
            label: "Customer Support",
            color: "from-green-500 to-green-600",
        },
    ];

    // 💎 Brand Values
    const values = [
        {
            icon: Eye,
            title: "Quality Products",
            description:
                "We carefully curate premium products from trusted brands to ensure top quality for our customers.",
            color: "teal",
        },
        {
            icon: Heart,
            title: "Customer First",
            description:
                "Your satisfaction is our priority. We offer easy returns, fast delivery, and reliable support.",
            color: "purple",
        },
        {
            icon: Shield,
            title: "Secure Shopping",
            description:
                "We use advanced security measures to protect your data and ensure safe transactions.",
            color: "blue",
        },
    ];

    // 🕒 Company Journey
    const milestones = [
        {
            year: "2018",
            event: "Brand Founded",
            description: "Started with a vision to make online shopping simple and affordable",
        },
        {
            year: "2020",
            event: "10K Orders",
            description: "Crossed 10,000 successful orders across India",
        },
        {
            year: "2021",
            event: "Mobile App Launch",
            description: "Launched our Android & iOS shopping app",
        },
        {
            year: "2023",
            event: "100+ Brands",
            description: "Partnered with 100+ premium brands",
        },
        {
            year: "2025",
            event: "1M Customers",
            description: "Reached 1 million happy customers",
        },
    ];

    // 👥 Team (E-commerce Team)
    const team = [
        {
            name: "Rohit Sharma",
            role: "Founder & CEO",
            experience: "12+ years",
            image:
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
        },
        {
            name: "Neha Verma",
            role: "Head of Marketing",
            experience: "8+ years",
            image:
                "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
        },
        {
            name: "Amit Patel",
            role: "Operations Manager",
            experience: "10+ years",
            image:
                "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
        },
        {
            name: "Sneha Kapoor",
            role: "Customer Experience Lead",
            experience: "7+ years",
            image:
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
        },
    ];

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">

                {/* Hero */}
                <div className="relative h-[250px] flex items-center justify-center">
                    <img
                        src="https://i.pinimg.com/736x/1a/a9/ff/1aa9ffeab3885dd14e2e7b194363d3cf.jpg"
                        alt="Ecommerce"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-yellow-500/50"></div>
                    <div className="relative z-10 text-center px-4">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            About Our Store
                        </h1>
                        <p className="text-xl text-yellow-100">
                            Your one-stop destination for premium online shopping
                        </p>
                    </div>
                </div>

                {/* Story */}
                <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-16 items-center">
                    <img
                        src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                        className="rounded-3xl shadow-2xl w-full"
                    />

                    <div>
                        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6 font-semibold">
                            <Target className="h-5 w-5" />
                            Our Story
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Redefining Online Shopping Experience
                        </h2>

                        <p className="text-gray-600 text-lg mb-6">
                            Our e-commerce platform was built with one simple goal: to make
                            premium products accessible to everyone at the best prices.
                        </p>

                        <p className="text-gray-600 text-lg mb-6">
                            We partner with trusted brands, ensure fast delivery, and provide
                            secure payments so you can shop with confidence.
                        </p>

                        <p className="text-gray-600 text-lg">
                            Today, we proudly serve millions of customers across India with
                            a wide range of fashion, electronics, accessories, and lifestyle
                            products.
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32 px-4">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-xl text-center"
                            >
                                <div className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                    <Icon className="h-10 w-10 text-white" />
                                </div>
                                <div className="text-5xl font-bold mb-3">{stat.value}</div>
                                <div className="text-gray-600 font-semibold">{stat.label}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Values */}
                <div className="max-w-7xl mx-auto px-4 mb-32 text-start">
                    <h2 className="text-4xl text-center font-bold mb-6">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((value, index) => {
                            const Icon = value.icon;
                            return (
                                <div key={index} className="bg-white p-8 rounded-3xl shadow-xl">
                                    <div className={`bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                                        <Icon className="h-8 w-8 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-yellow-500  to-yellow-700 rounded-3xl p-12 text-center text-white shadow-2xl max-w-7xl mx-auto mb-20">
                    <Zap className="h-16 w-16 mx-auto mb-6" />
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Start Shopping Today
                    </h2>
                    <p className="text-xl mb-8">
                        Explore thousands of products at unbeatable prices
                    </p>
                    <button className="bg-white text-[var(--btnColor)] px-10 py-4 rounded-xl font-semibold">
                        Browse Products
                    </button>
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;
