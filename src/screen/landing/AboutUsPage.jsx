const AboutUsPage = () => {
    return (
        <div className="bg-white text-black">
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

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out forwards;
                }

                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.6s ease-out forwards;
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

                .diagonal-split {
                    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
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
                }
            `}</style>

            <section className="min-h-screen flex items-center px-6 md:px-12 relative overflow-hidden grain">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
                    <div className="space-y-6 animate-fadeInUp">
                        <div className="flex items-center gap-4">
                            <div className="h-px w-16 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                            <span className="text-orange-400 text-sm tracking-[0.3em] uppercase font-semibold">Est. 2026</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">
                            Commerce
                            <br />
                            <span className="text-gradient">Reimagined</span>
                        </h1>

                        <p className="text-xl text-gray-500 leading-relaxed max-w-lg">
                            Where cutting-edge technology meets timeless shopping principles.
                            We're not building a store — we're crafting an experience.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full font-bold hover:shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
                                Explore Now
                            </button>
                            <button className="px-8 py-3 border-2 border-black rounded-full font-bold hover:bg-white/10 transition-all">
                                Our Story
                            </button>
                        </div>
                    </div>

                    <div className="relative animate-scaleIn" style={{ animationDelay: '0.2s' }}>
                        <img
                            src="https://i.pinimg.com/1200x/0c/7e/04/0c7e049eaf78ff4318760b2ee1d2a9c4.jpg"
                            alt="Shopping experience"
                            className="rounded-3xl w-full h-[600px] object-cover relative z-10 border-4 border-white/10"
                        />
                    </div>
                </div>
            </section>

            {/* STATS - Magazine Layout */}
            <section className="py-32 px-6 md:px-12 relative diagonal-split bg-gradient-to-br from-orange-950/20 to-transparent">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="border-glow p-8 rounded-2xl bg-white backdrop-blur-sm hover-lift">
                            <div className="text-7xl font-black mb-2 text-gradient">100+</div>
                            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-yellow-500 mb-3"></div>
                            <p className="text-gray-500 text-lg font-semibold">Premium Brands</p>
                        </div>

                        <div className="border-glow p-8 rounded-2xl bg-white backdrop-blur-sm hover-lift" style={{ animationDelay: '0.1s' }}>
                            <div className="text-7xl font-black mb-2 text-gradient">4.8</div>
                            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-yellow-500 mb-3"></div>
                            <p className="text-gray-500 text-lg font-semibold">Customer Rating</p>
                        </div>

                        <div className="border-glow p-8 rounded-2xl bg-white backdrop-blur-sm hover-lift" style={{ animationDelay: '0.2s' }}>
                            <div className="text-7xl font-black mb-2 text-gradient">48h</div>
                            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-yellow-500 mb-3"></div>
                            <p className="text-gray-500 text-lg font-semibold">Express Delivery</p>
                        </div>

                        <div className="border-glow p-8 rounded-2xl bg-white backdrop-blur-sm hover-lift" style={{ animationDelay: '0.3s' }}>
                            <div className="text-7xl font-black mb-2 text-gradient">24/7</div>
                            <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-yellow-500 mb-3"></div>
                            <p className="text-gray-500 text-lg font-semibold">Support Available</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* IMAGE + TEXT - Overlapping Design */}
            <section className="py-32 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8 lg:order-2">
                            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full">
                                <span className="text-orange-400 text-sm font-bold tracking-wider uppercase">Our Philosophy</span>
                            </div>

                            <h2 className="text-5xl md:text-6xl font-black leading-tight">
                                Built for the
                                <br />
                                <span className="text-gradient">Modern Era</span>
                            </h2>

                            <div className="space-y-6">
                                <p className="text-xl text-gray-500 leading-relaxed">
                                    We believe shopping should be intuitive, delightful, and personal.
                                    Every pixel, every interaction is designed with intention.
                                </p>
                                <p className="text-xl text-gray-500 leading-relaxed">
                                    From algorithmic recommendations to human-centered customer service,
                                    we blend the best of both worlds.
                                </p>
                            </div>

                            <div className="flex items-center gap-6 pt-6">
                                <div className="flex -space-x-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-red-400 border-2 border-[#0a0a0a]"></div>
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-200 to-orange-200 border-2 border-[#0a0a0a]"></div>
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-200 to-pink-200 border-2 border-[#0a0a0a]"></div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500">Trusted by forward-thinking customers</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative lg:order-1">
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
                                    alt="Modern retail"
                                    className="rounded-2xl w-full h-[500px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VALUES - Card Grid with Hover Effects */}
            <section className="py-10 px-6 md:px-12 bg-gradient-to-br from-white/5 to-white/10">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <h2 className="text-6xl md:text-7xl font-black mb-6">
                            Our <span className="text-gradient">Pillars</span>
                        </h2>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                            The non-negotiable principles that guide every decision we make
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Obsessive Quality",
                                desc: "Every product passes through rigorous curation. We'd rather say no than compromise.",
                                icon: "⚡"
                            },
                            {
                                title: "Radical Trust",
                                desc: "Zero hidden fees. Instant refunds. We earn your trust through actions, not words.",
                                icon: "🔒"
                            },
                            {
                                title: "Lightning Fast",
                                desc: "From click to doorstep in 48 hours. Speed isn't a feature, it's a standard.",
                                icon: "🚀"
                            }
                        ].map((pillar, idx) => (
                            <div key={idx} className="group relative hover-lift">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="relative bg-white shadow backdrop-blur-sm border-2 border-black/5 rounded-3xl p-10 group-hover:border-orange-500/50 transition-all duration-300">
                                    <div className="text-6xl mb-6">{pillar.icon}</div>
                                    <h3 className="text-3xl font-black mb-4">{pillar.title}</h3>
                                    <p className="text-gray-500 text-lg leading-relaxed">{pillar.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA - Bold Full-Width */}
            <section className="py-32 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl grain">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600"></div>
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iLjA1IiBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

                        <div className="relative z-10 text-center py-24 px-8">
                            <h2 className="text-5xl md:text-7xl text-white font-black mb-6 leading-tight">
                                Ready to Experience
                                <br />
                                the Difference?
                            </h2>
                            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                                Join the revolution. Shop smarter, faster, better.
                            </p>
                            <button className="md:px-12 px-8 py-5 bg-white text-orange-600 rounded-full font-black text-lg hover:bg-gray-100 transition-all hover:scale-110 shadow-2xl">
                                Start Shopping Now →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUsPage;