import { ArrowLeft } from 'lucide-react';

interface TermsProps {
    onNavigate: (page: string) => void;
}

export default function Terms({ onNavigate }: TermsProps) {
    return (
        <div className="min-h-screen bg-[#1a1a1a] pt-32 pb-24 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={() => onNavigate('home')}
                    className="group inline-flex items-center gap-2 text-[#06bdff] hover:text-[#05a5e6] transition-colors mb-8"
                >
                    <ArrowLeft size={16} />
                    Back to Home
                </button>

                <div className="bg-[#2C2C2C] border border-[#C0C0C0]/30 shadow-xl p-6 sm:p-8 md:p-12">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide text-white mb-4">
                        Terms of Service
                    </h1>
                    <p className="text-sm sm:text-base text-[#C0C0C0] mb-8">
                        Effective Date: October 2025
                    </p>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            These Terms of Service ("Terms") govern your access to and use of the website and services operated by LeekSeason LLC ("we," "our," "us"). By accessing our site or purchasing a service package, you agree to these Terms.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">1. Services</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            LeekSeason LLC provides marketing and consulting services as described on our website. All engagements are subject to agreement on project scope, deliverables, and payment terms.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">2. Payment and Billing</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            Payment for services is due as stated on our pricing or proposal pages. By purchasing through our payment processor, you authorize us to charge your selected method of payment. Fees are non-refundable unless otherwise specified in writing.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">3. Intellectual Property</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            All content, materials, and designs on this site are the property of LeekSeason LLC or its licensors. You may not reproduce, distribute, or create derivative works without written permission.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">4. Client Responsibilities</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            Clients agree to provide timely information, approvals, and access necessary for LeekSeason LLC to perform services. Delays caused by incomplete information may affect timelines and deliverables.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">5. Limitation of Liability</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            To the fullest extent permitted by law, LeekSeason LLC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our website or services.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">6. Confidentiality</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            Both parties agree to maintain confidentiality regarding proprietary information shared during an engagement unless disclosure is required by law.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">7. Governing Law</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            These Terms shall be governed by and construed in accordance with the laws of the State of Minnesota, without regard to its conflict of law provisions.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">8. Changes to These Terms</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We may update these Terms from time to time. The most current version will always be posted on this page.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">9. Contact Us</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            For questions regarding these Terms, please contact:<br />
                            LeekSeason LLC<br />
                            Minnetonka, MN 55345<br />
                            <a href="mailto:contact@leekseason.com" className="text-[#06bdff] hover:text-[#05a5e6] transition-colors">
                                contact@leekseason.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
