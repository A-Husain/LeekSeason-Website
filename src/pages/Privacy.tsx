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
                        Effective Date: December 2025
                    </p>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            LeekSeason LLC ("we," "our," or "us") respects your privacy and is committed to handling personal information responsibly. This Privacy Policy explains how we collect, use, disclose, and safeguard information when you visit our website or engage our services.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">1. Information We Collect</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            We may collect the following categories of information:
                        </p>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed list-disc list-outside space-y-2 ml-6 pl-4">
                            <li>Information you voluntarily provide (e.g., name, email address, phone number, company information).</li>
                            <li>Information related to billing, account activity, or participation in our service programs.</li>
                            <li>Documentation submitted for account verification or dispute resolution.</li>
                            <li>Limited technical information collected automatically, such as browser type, IP address, pages visited, and device information.</li>
                        </ul>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">2. How We Use Your Information</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            We use the information we collect to:
                        </p>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed list-disc list-outside space-y-2 ml-6 pl-4">
                            <li>Provide and manage our services.</li>
                            <li>Process account activity, billing, and client program participation.</li>
                            <li>Communicate with clients regarding service updates, inquiries, or account matters.</li>
                            <li>Review and respond to account-related disputes in accordance with our obligations under the Fair Credit Reporting Act (FCRA).</li>
                            <li>Improve website functionality and client experience.</li>
                        </ul>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We do not sell or rent your personal information.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">3. Credit Reporting & Compliance</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            If you participate in eligible billing or account programs, certain account-related information may be furnished to national credit reporting agencies as part of our standard servicing process.
                        </p>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed list-disc list-outside space-y-2 ml-6 pl-4">
                            <li>We report only in accordance with applicable laws, including the Fair Credit Reporting Act (FCRA).</li>
                            <li>If you believe information we furnished is inaccurate, you may submit a dispute through our Account Dispute Resolution process. We will review and respond in accordance with FCRA requirements.</li>
                        </ul>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">4. Data Protection and Security</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We maintain administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, disclosure, alteration, or misuse. These safeguards are appropriate to the nature and sensitivity of the data we maintain.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">5. Cookies and Analytics</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We may use cookies or similar technologies to enhance functionality and analyze website performance. You may disable cookies through your browser settings; however, doing so may impact certain features.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">6. Information Sharing</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            We may share information with trusted third-party service providers who support our operational or administrative functions (e.g., payment processors, hosting providers). These third parties are permitted to use information only as necessary to provide services to us.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We do not share personal information with unrelated third parties except as required by law.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">7. Your Rights</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            You may request access, correction, or deletion of your personal information by contacting us at{' '}
                            <a href="mailto:contact@leekseason.com" className="text-[#06bdff] hover:text-[#05a5e6] transition-colors">
                                contact@leekseason.com
                            </a>.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            You also have the right to dispute account information furnished to a credit bureau and may do so through our designated Account Dispute Resolution page.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">8. Updates to This Policy</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We may update this Privacy Policy periodically. Any revisions will be posted on this page with a new effective date.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">9. Contact Us</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            If you have any questions about this Privacy Policy or your personal information, please contact:<br />
                            LeekSeason LLC<br />
                            Attn: Compliance Department<br />
                            12800 Whitewater Dr, STE 100<br />
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
