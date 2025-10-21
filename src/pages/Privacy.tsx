import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
    onNavigate: (page: string) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
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
                        Privacy Policy
                    </h1>
                    <p className="text-sm sm:text-base text-[#C0C0C0] mb-8">
                        Effective Date: October 2025
                    </p>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            LeekSeason LLC ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or engage our services.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">1. Information We Collect</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We collect information you voluntarily provide, such as your name, email, phone number, and company details when you inquire about our services or complete forms. We may also collect limited technical information automatically (browser type, pages visited, IP address) to improve site performance.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">2. How We Use Your Information</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We use the information we collect to respond to inquiries, deliver and improve our services, process payments, and communicate relevant updates. We do not sell or rent your personal information.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">3. Data Protection and Security</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We maintain appropriate administrative, technical, and physical safeguards to protect your information from unauthorized access, disclosure, or misuse.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">4. Cookies and Analytics</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We may use cookies or similar technologies to enhance user experience and analyze site performance. You may disable cookies in your browser settings if you prefer.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">5. Third-Party Services</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            Our website may include links to external platforms (e.g., payment processors such as Square). We are not responsible for the privacy practices of those third parties.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">6. Your Rights</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            You may request access, correction, or deletion of your personal data by contacting us at{' '}
                            <a href="mailto:contact@leekseason.com" className="text-[#06bdff] hover:text-[#05a5e6] transition-colors">
                                contact@leekseason.com
                            </a>.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">7. Updates to This Policy</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We may update this Privacy Policy periodically. The revised version will be posted on this page with an updated effective date.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">8. Contact Us</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            If you have any questions about this Privacy Policy, please contact:<br />
                            LeekSeason LLC<br />
                            12800 Whitewater Dr<br />
                            STE 100<br />
                            Minnetonka, MN 55343-9347<br />
                            USA<br />
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
