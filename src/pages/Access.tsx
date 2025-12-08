import { ArrowRight } from 'lucide-react';

interface AccessProps {
    onNavigate: (page: string, packageType?: string) => void;
}

const options = [
    {
        id: 'installment',
        title: 'Installment Payment Program',
        description: 'Structured installment options are available for select consulting and marketing engagements. Clients may divide the cost of eligible services into scheduled monthly payments while receiving full access to the engagement from the start. These arrangements follow a fixed payment schedule and are designed to offer clarity and convenience for long-term projects.',
    },
    {
        id: 'membership',
        title: 'Membership Subscription Program',
        description: 'Our Membership Program provides continuing access to premium resources, strategic insights, and client-only materials. Membership is billed monthly and supports clients who value consistent guidance and ongoing development tools. This option offers a streamlined experience with predictable monthly billing.',
    },
    {
        id: 'revolving',
        title: 'Revolving Service Credit Line',
        description: 'Approved clients may receive a revolving credit line that can be used toward eligible services, digital products, and business resources. This flexible structure allows clients to engage services as needed while maintaining a reusable balance that refreshes with repayment activity.',
    },
    {
        id: 'bnpl',
        title: 'Buy Now, Pay Later (BNPL)',
        description: 'Certain digital products and consulting items may be accessed through short-term BNPL arrangements. These options allow eligible purchases to be divided into scheduled payments over a brief period, offering a simple and efficient way to manage smaller expenditures without delaying access.',
    },
    {
        id: 'leasing',
        title: 'Digital Equipment Leasing',
        description: 'For clients who require specialized digital tools to support their work, we offer leasing options for select equipment such as tablets, laptops, cameras, and related business devices. Each lease includes a defined term with fixed monthly payments, along with renewal or purchase options at the conclusion of the lease.',
    },
];

export default function Access({ onNavigate }: AccessProps) {
    return (
        <>
            <style>{`
                @media (min-width: 1024px) {
                    .brick-box-4 {
                        transform: translateX(calc(33.333% / 2 + 9rem));
                    }
                    .brick-box-5 {
                        transform: translateX(calc(33.333% / 2 + 9rem));
                    }
                }
            `}</style>
            <div className="min-h-screen bg-[#2C2C2C] pt-32 pb-24 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12 sm:mb-16 md:mb-20">
                        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide text-white mb-4 sm:mb-6 md:mb-8 px-2">
                            Flexible Billing & Account Arrangements
                        </h1>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed font-light px-2">
                            We offer a range of structured billing and account options designed to provide flexibility while maintaining the clarity and professionalism our clients expect. These arrangements support access to our consulting, digital services, and business tools through organized, predictable payment structures. Availability may vary depending on the engagement scope and client profile.
                        </p>
                        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed font-light px-2 mt-4">
                            Payment activity on eligible accounts may be reported to national credit bureaus as part of our standard servicing practices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
                        {options.map((option, index) => {
                            // Brick layout: offset boxes in second row to create staggered effect (only on large screens)
                            let positioningClass = '';
                            let brickClass = '';

                            if (index === 3) {
                                // First box in second row: half in col 1, half in col 2 (only on lg screens)
                                positioningClass = 'lg:col-span-1';
                                brickClass = 'brick-box-4';
                            } else if (index === 4) {
                                // Second box in second row: half in col 2, half in col 3 (only on lg screens)
                                positioningClass = 'lg:col-start-2 lg:col-span-1';
                                brickClass = 'brick-box-5';
                            }

                            return (
                                <div
                                    key={option.id}
                                    className={`bg-[#1a1a1a] border border-[#C0C0C0]/30 transition-all duration-300 hover:border-[#06bdff] hover:shadow-2xl hover:shadow-[#06bdff]/10 flex flex-col ${positioningClass} ${brickClass}`}
                                >
                                    <div className="p-6 sm:p-8 flex-1 flex flex-col">
                                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#06bdff] mb-4 tracking-wide">
                                            {option.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm text-[#C0C0C0] leading-relaxed">
                                            {option.description}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    <div className="max-w-4xl mx-auto mb-12">
                        <p className="text-xs sm:text-sm text-[#C0C0C0]/80 leading-relaxed text-center italic">
                            Note:
                        </p>
                        <p className="text-xs sm:text-sm text-[#C0C0C0]/80 leading-relaxed text-center mt-2 italic">
                            Account terms, eligibility, and reporting practices vary by program and client profile. Reporting is not guaranteed for every option and occurs in accordance with applicable guidelines and servicing standards.
                        </p>
                    </div>

                    <div className="text-center space-y-6">
                        <div>
                            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-4 tracking-wide">
                                Ready to Explore Your Options?
                            </h2>
                            <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#C0C0C0] mb-6 max-w-2xl mx-auto">
                                If you would like to discuss which arrangement best suits your engagement, please contact us.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => onNavigate('consultations')}
                                className="group inline-flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#06bdff] text-[#06bdff] px-6 py-2.5 font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-wide hover:bg-[#06bdff] hover:text-white transition-colors"
                            >
                                Schedule a Consultation
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </button>
                            <button
                                onClick={() => onNavigate('contact')}
                                className="group inline-flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#06bdff] text-[#06bdff] px-6 py-2.5 font-medium text-xs sm:text-sm md:text-base lg:text-lg tracking-wide hover:bg-[#06bdff] hover:text-white transition-colors"
                            >
                                Contact Us
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

