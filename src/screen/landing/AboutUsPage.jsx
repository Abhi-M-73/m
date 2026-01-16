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

    const stats = [
        {
            icon: Users,
            value: "50+",
            label: "Expert Doctors",
            color: "from-teal-500 to-teal-600",
        },
        {
            icon: Heart,
            value: "10,000+",
            label: "Happy Patients",
            color: "from-purple-500 to-purple-600",
        },
        {
            icon: Award,
            value: "15+",
            label: "Awards Won",
            color: "from-orange-500 to-orange-600",
        },
        {
            icon: Clock,
            value: "13+",
            label: "Years Experience",
            color: "from-green-500 to-green-600",
        },
    ];

    const values = [
        {
            icon: Eye,
            title: "Excellence",
            description:
                "We strive for excellence in everything we do, from patient care to utilizing the latest technology and medical advancements.",
            color: "teal",
        },
        {
            icon: Heart,
            title: "Compassion",
            description:
                "Every patient is treated with utmost care, respect, and understanding. Your comfort and well-being are our top priorities.",
            color: "purple",
        },
        {
            icon: Shield,
            title: "Integrity",
            description:
                "We maintain the highest standards of professional and ethical conduct, ensuring transparency in all our services.",
            color: "blue",
        },
    ];

    const milestones = [
        {
            year: "2010",
            event: "VisionCare Founded",
            description: "Started with a vision to revolutionize eye care in Bhopal",
        },
        {
            year: "2013",
            event: "First Award",
            description: "Recognized as Best Eye Care Clinic in Madhya Pradesh",
        },
        {
            year: "2016",
            event: "Expansion",
            description: "Opened 3 new branches across the city",
        },
        {
            year: "2020",
            event: "10K Patients Milestone",
            description: "Celebrated serving over 10,000 satisfied patients",
        },
        {
            year: "2023",
            event: "Technology Upgrade",
            description: "Introduced AI-powered diagnostic equipment",
        },
    ];

    const team = [
        {
            name: "Dr. Rajesh Kumar",
            role: "Chief Optometrist",
            experience: "20+ years",
            image:
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop",
        },
        {
            name: "Dr. Priya Sharma",
            role: "Pediatric Specialist",
            experience: "15+ years",
            image:
                "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop",
        },
        {
            name: "Dr. Amit Patel",
            role: "Retina Specialist",
            experience: "18+ years",
            image:
                "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop",
        },
        {
            name: "Dr. Sneha Verma",
            role: "Glaucoma Expert",
            experience: "12+ years",
            image:
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop",
        },
    ];

    return (
        <>
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
                                <Sparkles className="h-5 w-5 text-white" />
                                <span className="text-white font-semibold">
                                    Established 2010
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                                About VisionCare
                            </h1>
                            <p className="text-xl md:text-2xl text-teal-50 max-w-4xl mx-auto leading-relaxed">
                                Leading the way in comprehensive eye care with passion,
                                innovation, and unwavering commitment to your vision health.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                        <div className="relative">
                            <div className="relative z-10">
                                <img
                                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop"
                                    alt="VisionCare Clinic"
                                    className="rounded-3xl shadow-2xl w-full"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl p-8 shadow-2xl z-0 max-w-xs">
                                <div className="text-white">
                                    <div className="text-4xl font-bold mb-2">13+</div>
                                    <div className="text-teal-50">
                                        Years of Excellence in Eye Care
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full mb-6 font-semibold">
                                <Target className="h-5 w-5" />
                                Our Story
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Pioneering Excellence in Eye Care Since 2010
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                VisionCare was founded with a singular mission: to provide
                                world-class eye care services that are accessible, affordable,
                                and personalized to each patient's unique needs. What began as a
                                modest clinic with big dreams has evolved into one of Bhopal's
                                most trusted eye care providers.
                            </p>
                            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                                Our journey has been marked by continuous innovation, unwavering
                                commitment to patient care, and a deep-rooted passion for
                                preserving and enhancing vision. We combine state-of-the-art
                                technology with compassionate, personalized care to ensure the
                                best possible outcomes for every patient.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Today, we are proud to have a team of over 50 certified
                                optometrists and eye care specialists who share our vision of
                                making quality eye care accessible to all. Together, we have
                                served over 10,000 patients and continue to set new standards in
                                eye care excellence.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                        {stats.map((stat, index) => {
                            const Icon = stat.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-white rounded-2xl p-8 shadow-xl text-center transform hover:scale-105 transition-all duration-300 border border-gray-100"
                                >
                                    <div
                                        className={`bg-gradient-to-br ${stat.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                    >
                                        <Icon className="h-10 w-10 text-white" />
                                    </div>
                                    <div className="text-5xl font-bold text-gray-900 mb-3">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-600 font-semibold text-lg">
                                        {stat.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full mb-6 font-semibold">
                                <Star className="h-5 w-5" />
                                Our Values
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                What Drives Us Forward
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Our core values shape every decision we make and every service
                                we provide
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => {
                                const Icon = value.icon;
                                return (
                                    <div
                                        key={index}
                                        className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
                                    >
                                        <div
                                            className={`bg-gradient-to-br from-${value.color}-500 to-${value.color}-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                                        >
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                            {value.title}
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-semibold">
                                <TrendingUp className="h-5 w-5" />
                                Our Journey
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Milestones That Define Us
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                A timeline of growth, innovation, and unwavering commitment to
                                eye care
                            </p>
                        </div>

                        <div className="relative">
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 to-blue-500"></div>
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <div
                                        key={index}
                                        className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                                            }`}
                                    >
                                        <div
                                            className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"
                                                }`}
                                        >
                                            <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 inline-block border border-gray-100">
                                                <div className="text-teal-600 font-bold text-xl mb-2">
                                                    {milestone.year}
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                                    {milestone.event}
                                                </h3>
                                                <p className="text-gray-600">{milestone.description}</p>
                                            </div>
                                        </div>
                                        <div className="relative z-10">
                                            <div className="bg-gradient-to-br from-teal-500 to-blue-500 w-6 h-6 rounded-full shadow-lg"></div>
                                        </div>
                                        <div className="flex-1"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mb-32">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full mb-6 font-semibold">
                                <Users className="h-5 w-5" />
                                Our Team
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Meet Our Expert Doctors
                            </h2>
                            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                Certified professionals dedicated to your eye health and vision
                                care
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {team.map((member, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
                                >
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            {member.name}
                                        </h3>
                                        <p className="text-teal-600 font-semibold mb-2">
                                            {member.role}
                                        </p>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <CheckCircle2 className="h-4 w-4 text-green-500" />
                                            <span className="text-sm">
                                                {member.experience} Experience
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-teal-600 to-blue-600 rounded-3xl p-12 lg:p-16 text-center text-white shadow-2xl">
                        <Zap className="h-16 w-16 mx-auto mb-6" />
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Experience Premium Eye Care?
                        </h2>
                        <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
                            Join thousands of satisfied patients who trust VisionCare for
                            their eye health needs
                        </p>
                        <button
                            onClick={() => setAppointmentOpen(true)}
                            className="bg-white text-teal-600 px-10 py-4 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all text-lg"
                        >
                            Book Your Appointment Today
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUsPage;