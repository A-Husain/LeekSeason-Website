import { ArrowRight, Clock, Check } from 'lucide-react';

interface ConsultationsProps {
    onNavigate: (page: string, packageType?: string) => void;
}

const consultations = [
    {
        id: '30min',
        name: '30-Minute Consultation',
        price: '$100',
        duration: '30 minutes',
        description: 'A focused strategy session designed for clients who need quick, actionable insight.',
        idealFor: 'Addressing a specific marketing or branding challenge, reviewing current strategies, or gaining clarity on next steps.',
        includes: [
            'Focused strategy session',
            'Quick, actionable insights',
            'Concise deliverable summary',
            'Key takeaways emailed after session'
        ],
    },
    {
        id: '1hour',
        name: '1-Hour Consultation',
        price: '$200',
        duration: '1 hour',
        description: 'A deep-dive consultation for clients who want in-depth strategic guidance, campaign analysis, or high-level brand direction.',
        idealFor: 'Refining multi-channel marketing plans, understanding audience positioning, or shaping long-term growth strategies.',
        includes: [
            'Deep-dive strategic guidance',
            'Campaign analysis',
            'High-level brand direction',
            'Detailed follow-up email',
            'Insights and recommendations',
            'Next-step priorities'
        ],
    },
];

export default function Consultations({ onNavigate }: ConsultationsProps) {
    return (
        <div className="min-h-screen bg-[#2C2C2C] pt-32 pb-24 px-4 sm:px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide text-white mb-4 sm:mb-6 md:mb-8 px-2">
                        Strategic Consultations
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed font-light px-2">
                        Get expert guidance tailored to your specific needs. Choose from focused 30-minute sessions or comprehensive 1-hour deep-dives to accelerate your marketing strategy.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16">
                    {consultations.map((consultation) => (
                        <div
                            key={consultation.id}
                            className="bg-[#1a1a1a] border border-[#C0C0C0]/30 transition-all duration-300 hover:border-[#06bdff] hover:shadow-2xl hover:shadow-[#06bdff]/10 flex flex-col"
                        >
                            <div className="p-6 sm:p-8 flex-1 flex flex-col">
                                <div className="mb-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <Clock className="text-[#06bdff]" size={20} />
                                        <span className="text-sm text-[#06bdff] font-medium">{consultation.duration}</span>
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-wide">
                                        {consultation.name}
                                    </h3>
                                    <p className="text-xl sm:text-2xl font-bold text-[#06bdff] mb-4">
                                        {consultation.price}
                                    </p>
                                    <p className="text-xs text-[#C0C0C0] leading-relaxed mb-4">
                                        {consultation.description}
                                    </p>
                                    <p className="text-xs text-[#C0C0C0] leading-relaxed">
                                        <span className="font-medium text-white">Ideal for:</span> {consultation.idealFor}
                                    </p>
                                </div>

                                <div className="border-t border-[#C0C0C0]/20 pt-4 sm:pt-6 mb-6 sm:mb-8 flex-1">
                                    <h4 className="text-sm font-bold text-white mb-3">Includes:</h4>
                                    <ul className="space-y-2">
                                        {consultation.includes.map((item, index) => (
                                            <li key={index} className="flex items-start gap-2">
                                                <Check className="text-[#06bdff] flex-shrink-0 mt-0.5" size={14} />
                                                <span className="text-xs text-[#C0C0C0]">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <button
                                    onClick={() => onNavigate('plan', consultation.id)}
                                    className="w-full bg-[#06bdff] text-white py-2 sm:py-3 font-medium text-xs tracking-wide hover:bg-[#05a5e6] transition-colors shadow-lg shadow-[#06bdff]/20 hover:shadow-[#06bdff]/40 mt-auto"
                                >
                                    Book Consultation
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-[#1a1a1a] border border-[#C0C0C0]/30 p-6 sm:p-8 mb-12">
                    <h2 className="text-lg sm:text-xl font-bold text-white mb-4">How to Book</h2>
                    <div className="space-y-3 text-sm text-[#C0C0C0]">
                        <p>1. Select your preferred consultation option above</p>
                        <p>2. Complete secure checkout through Square</p>
                        <p>3. LeekSeason LLC will contact you within 48 hours to schedule your consultation at a mutually convenient time</p>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        onClick={() => onNavigate('services')}
                        className="group inline-flex items-center gap-2 bg-[#06bdff] text-white px-6 py-2.5 font-medium text-xs tracking-wide hover:bg-[#05a5e6] transition-colors shadow-lg shadow-[#06bdff]/20 hover:shadow-[#06bdff]/40"
                    >
                        View Full Service Packages
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
