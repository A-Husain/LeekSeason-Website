import { ArrowRight } from 'lucide-react';

interface AboutProps {
    onNavigate: (page: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
    return (
        <div className="min-h-screen bg-[#2C2C2C] pt-32 pb-24 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide text-[#06bdff] mb-4 sm:mb-6 md:mb-8 px-2">
                        ABOUT LEEKSEASON LLC
                    </h1>
                </div>

                <div className="space-y-12 sm:space-y-16">
                    {/* About LeekSeason LLC */}
                    <section>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed mb-4 text-center">
                            LeekSeason LLC is a consulting and marketing firm founded in 2019, delivering structured, high-quality solutions for clients who value clarity, discretion, and results. Our work is centered on thoughtful strategy, refined execution, and professional systems designed to support sustainable growth.
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed text-center">
                            We serve clients through tailored engagements that reflect their specific goals, scope, and operating needs—never through one-size-fits-all offerings.
                        </p>
                    </section>

                    {/* What We Do */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#06bdff] mb-4 sm:mb-6 tracking-wide text-center">
                            WHAT WE DO
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed mb-4 text-center">
                            We provide consulting, marketing strategy, digital resources, and related professional services designed to support business development and long-term positioning. Each engagement is approached with careful planning, defined deliverables, and a focus on practical outcomes.
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed text-center">
                            To support the delivery of our services, we offer structured billing and account arrangements that align with the nature and scope of each engagement. These arrangements are designed to provide flexibility while maintaining transparency and operational integrity.
                        </p>
                    </section>

                    {/* Our Philosophy */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#06bdff] mb-4 sm:mb-6 tracking-wide text-center">
                            OUR PHILOSOPHY
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed mb-4 text-center">
                            We believe effective consulting begins with understanding. Our approach is grounded in close collaboration, precise documentation, and solutions curated specifically for each client's objectives. We prioritize quality over volume and structure over improvisation.
                        </p>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed text-center">
                            Every engagement is designed intentionally—reflecting the complexity, scale, and priorities of the work involved.
                        </p>
                    </section>

                    {/* Leadership Vision */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#06bdff] mb-4 sm:mb-6 tracking-wide text-center">
                            LEADERSHIP VISION
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed text-center">
                            LeekSeason LLC is guided by leadership committed to building a firm defined by professionalism, adaptability, and long-term value. Our vision is to maintain a standard of service where strategy, execution, and accountability are seamlessly aligned—allowing clients to engage with confidence and clarity.
                        </p>
                    </section>

                    {/* Our Commitment */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#06bdff] mb-4 sm:mb-6 tracking-wide text-center">
                            OUR COMMITMENT
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed mb-4 text-center">
                            We are committed to:
                        </p>
                        <ul className="space-y-2 sm:space-y-3 mb-6 text-center">
                            <li className="text-xs sm:text-sm md:text-base text-[#C0C0C0]">
                                <span className="text-[#06bdff] mr-2">•</span>
                                Transparent communication
                            </li>
                            <li className="text-xs sm:text-sm md:text-base text-[#C0C0C0]">
                                <span className="text-[#06bdff] mr-2">•</span>
                                Ethical business practices
                            </li>
                            <li className="text-xs sm:text-sm md:text-base text-[#C0C0C0]">
                                <span className="text-[#06bdff] mr-2">•</span>
                                Responsible handling of client information
                            </li>
                            <li className="text-xs sm:text-sm md:text-base text-[#C0C0C0]">
                                <span className="text-[#06bdff] mr-2">•</span>
                                Clear processes and expectations
                            </li>
                            <li className="text-xs sm:text-sm md:text-base text-[#C0C0C0]">
                                <span className="text-[#06bdff] mr-2">•</span>
                                A refined, client-focused experience
                            </li>
                        </ul>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed text-center">
                            Our goal is to provide an environment where clients can engage premium services supported by structured systems and dependable operations.
                        </p>
                    </section>

                    {/* Learn More */}
                    <section>
                        <h2 className="text-base sm:text-lg md:text-xl font-bold text-[#06bdff] mb-4 sm:mb-6 tracking-wide text-center">
                            LEARN MORE
                        </h2>
                        <p className="text-xs sm:text-sm md:text-base text-[#C0C0C0] leading-relaxed mb-6 sm:mb-8 text-center">
                            Clients interested in how our services and account arrangements work together may explore our Access page or contact us to discuss an engagement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => onNavigate('access')}
                                className="group inline-flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#06bdff] text-[#06bdff] px-6 py-2.5 font-medium text-xs tracking-wide hover:bg-[#06bdff] hover:text-white transition-colors"
                            >
                                Explore Access
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </button>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="group inline-flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#06bdff] text-[#06bdff] px-6 py-2.5 font-medium text-xs tracking-wide hover:bg-[#06bdff] hover:text-white transition-colors"
                            >
                                Contact Us
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

