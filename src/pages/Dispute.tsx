import { ArrowLeft, ArrowRight } from 'lucide-react';

interface DisputeProps {
    onNavigate: (page: string) => void;
}

export default function Dispute({ onNavigate }: DisputeProps) {
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
                        Account Dispute Resolution
                    </h1>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We are committed to maintaining accurate account information and supporting a clear, fair dispute process in accordance with the Fair Credit Reporting Act (FCRA). If you believe information related to your account is inaccurate, incomplete, or requires review, you may submit a dispute through the process outlined below. Our team will conduct a reasonable investigation and provide a timely response once your dispute has been received and evaluated.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">How to Submit a Dispute</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            To initiate a dispute, please include the following information:
                        </p>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed list-disc list-inside space-y-2 ml-4">
                            <li>Your full name</li>
                            <li>Current mailing address</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>The specific account or program in question</li>
                            <li>A clear description of the information you believe is inaccurate</li>
                            <li>Any supporting documentation you wish to provide</li>
                        </ul>

                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            Disputes may be submitted through the following methods:
                        </p>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed list-disc list-inside space-y-2 ml-4">
                            <li>
                                <strong className="text-white">Email:</strong>{' '}
                                <a href="mailto:contact@leekseason.com" className="text-[#06bdff] hover:text-[#05a5e6] transition-colors">
                                    contact@leekseason.com
                                </a>
                            </li>
                            <li>
                                <strong className="text-white">Mail:</strong><br />
                                <span className="ml-5">LeekSeason, LLC<br />
                                    <span className="ml-[1.25rem] block">Attn: Dispute Resolution Department</span>
                                    <span className="ml-[1.25rem] block">12800 Whitewater Dr Ste 100</span>
                                    <span className="ml-[1.25rem] block">Minnetonka, MN 55343-9347</span></span>
                            </li>
                        </ul>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">What Happens Next</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            Once we receive your dispute, we will:
                        </p>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed list-disc list-inside space-y-2 ml-4">
                            <li>Review the information you provided</li>
                            <li>Conduct a reasonable investigation</li>
                            <li>Contact you if additional documentation is needed</li>
                            <li>Update or verify the information in accordance with FCRA guidelines</li>
                            <li>Provide a written response upon completion of our review</li>
                        </ul>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            If the disputed information is furnished to a credit bureau, we will send any required updates or corrections to the applicable bureau(s) after the investigation concludes.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">Important Information</h2>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed list-disc list-inside space-y-2 ml-4">
                            <li>Submitting a dispute does not guarantee removal or modification of account information.</li>
                            <li>Only information that is inaccurate, incomplete, or unable to be verified will be corrected.</li>
                            <li>We cannot alter accurate information that reflects your true account performance.</li>
                            <li>You may also dispute information directly with the credit bureaus.</li>
                        </ul>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">Additional Rights Under the FCRA</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            Consumers have the right to:
                        </p>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed list-disc list-inside space-y-2 ml-4">
                            <li>Obtain a free copy of their credit report from each bureau annually</li>
                            <li>Dispute inaccurate information with both the furnisher and the credit bureau</li>
                            <li>Receive written notice of investigation results</li>
                            <li>Request that the furnisher report corrections to all bureaus to which it furnished the information</li>
                        </ul>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            For full details regarding your rights, visit:{' '}
                            <a href="https://www.consumerfinance.gov/learnmore" target="_blank" rel="noopener noreferrer" className="text-[#06bdff] hover:text-[#05a5e6] transition-colors">
                                www.consumerfinance.gov/learnmore
                            </a>
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">Need Assistance?</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            If you have questions about the dispute process or need help preparing your submission, please contact our Compliance Team for guidance.
                        </p>

                        <div className="mt-8 pt-8 border-t border-[#C0C0C0]/20 text-center">
                            <button
                                onClick={() => onNavigate('contact')}
                                className="group inline-flex items-center justify-center gap-2 bg-[#1a1a1a] border border-[#06bdff] text-[#06bdff] px-6 py-2.5 font-medium text-xs tracking-wide hover:bg-[#06bdff] hover:text-white transition-colors"
                            >
                                Contact Us
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

