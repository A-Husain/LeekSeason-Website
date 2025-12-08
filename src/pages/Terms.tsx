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
                        Effective Date: December 2025
                    </p>

                    <div className="prose prose-invert max-w-none">
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            These Terms of Service ("Terms") govern your access to and use of the website and services provided by LeekSeason LLC ("we," "our," "us"). By accessing our site, engaging our services, or participating in any billing or account program, you agree to these Terms.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">1. Services</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            LeekSeason LLC provides consulting, marketing, digital resources, and related service offerings as described on our website. All engagements are subject to agreement on project scope, deliverables, timelines, and payment terms.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">2. Payment, Billing & Account Programs</h2>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed list-disc list-outside space-y-2 ml-6 pl-4">
                            <li>We offer various billing and account arrangements, including installment options, subscription programs, revolving service credit lines, short-term BNPL structures, and equipment leasing.</li>
                            <li>Eligibility for any program is determined at our discretion.</li>
                        </ul>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            By enrolling in a billing or account program, you authorize us (and our designated payment processor) to charge the payment method you provide according to the terms of the applicable agreement.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            Fees for services and programs are non-refundable unless otherwise stated in writing.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">3. Account Information & Credit Reporting</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            For clients participating in eligible billing or account programs, certain account-related information (such as payment history, account status, and balance information) may be furnished to national credit reporting agencies as part of our standard servicing process.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            We do not guarantee that participation in any program will improve or affect your credit profile.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            If you believe information we furnished is inaccurate, you may initiate a dispute through our Account Dispute Resolution process. We will investigate and respond in accordance with our obligations under the Fair Credit Reporting Act (FCRA).
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">4. Intellectual Property</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            All content, materials, digital products, and designs on this site are owned by LeekSeason LLC or its licensors. You may not copy, distribute, modify, or create derivative works without our express written consent.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">5. Client Responsibilities</h2>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed list-disc list-outside space-y-2 ml-6 pl-4">
                            <li>Clients agree to provide timely information, approvals, access, and documentation necessary for us to perform services or administer account programs.</li>
                            <li>Failure to provide required information may delay services or affect eligibility for certain programs.</li>
                        </ul>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            Clients are responsible for ensuring that any information submitted to us—particularly for billing or dispute purposes—is accurate and complete.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">6. Confidentiality</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We may exchange confidential or proprietary information during an engagement. Both parties agree to maintain confidentiality and use such information only for the purpose of fulfilling the engagement, unless disclosure is required by law.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">7. Limitation of Liability</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            To the fullest extent permitted by law, LeekSeason LLC shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of our website, services, or billing/account programs.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            Our total liability, if any, shall not exceed the amount paid to us for the specific service giving rise to the claim.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">8. Governing Law</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            These Terms shall be governed by and interpreted under the laws of the State of Minnesota, without regard to its conflict-of-law provisions.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">9. Updates to These Terms</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We may update these Terms periodically. The most current version will always be posted on this page with an updated effective date. Continued use of the website or our services constitutes acceptance of any updates.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">10. Prohibited Conduct</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            You agree not to use our website or services in any manner that:
                        </p>
                        <ul className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed list-disc list-outside space-y-2 ml-6 pl-4">
                            <li>Violates any applicable law, regulation, or contractual obligation;</li>
                            <li>Attempts to interfere with, disrupt, or compromise the security, functionality, or integrity of our systems, data, or networks;</li>
                            <li>Involves submitting false, misleading, or inaccurate information, including information related to billing, account programs, or dispute documentation;</li>
                            <li>Attempts to access accounts, services, or data not intended for you;</li>
                            <li>Infringes upon the intellectual property or proprietary rights of LeekSeason LLC or any third party;</li>
                            <li>Harasses, abuses, or threatens our team members or other clients;</li>
                            <li>Attempts to reverse-engineer, copy, or misuse any part of our digital products, materials, or platform.</li>
                        </ul>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            We reserve the right to restrict or terminate access to our services for any violation of this section.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">11. Severability</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            If any provision of these Terms is found to be invalid, unlawful, or unenforceable, that provision will be limited or removed to the minimum extent necessary so that the remaining provisions continue in full force and effect. The invalidity or unenforceability of any provision shall not affect the validity of the Terms as a whole.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">12. Entire Agreement</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            These Terms, together with any written service agreements, billing program terms, or policies linked on our website, constitute the entire agreement between you and LeekSeason LLC regarding your use of our website and services. They supersede any prior or contemporaneous understandings, communications, or agreements, whether written or oral. No modification to these Terms is binding unless made in writing and posted on this page or agreed to by us in writing.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">13. Arbitration Agreement</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            Any dispute, claim, or controversy arising out of or relating to these Terms, our services, or any billing or account program shall be resolved exclusively through binding arbitration, rather than in court. This agreement to arbitrate is governed by the Federal Arbitration Act ("FAA") and applies to all disputes between you and LeekSeason LLC.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            The arbitration will be conducted by a neutral arbitrator selected by mutual agreement of the parties. If the parties cannot agree on an arbitrator, either party may request that a court of competent jurisdiction appoint a neutral arbitrator in accordance with the FAA.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            The arbitration will follow simplified procedures designed to provide a fair, efficient, and cost-effective resolution. The arbitrator shall have the authority to award any relief available under applicable law, except that class actions, class arbitrations, and collective proceedings are not permitted. Each party will bear its own costs unless otherwise required by law.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-4 leading-relaxed">
                            By using our website or services, you agree that arbitration is the exclusive forum for resolving any dispute and that you waive the right to a trial by jury or participation in any class action or representative proceeding.
                        </p>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            Nothing in this section prevents either party from seeking temporary injunctive relief in court to preserve the status quo pending arbitration.
                        </p>

                        <h2 className="text-lg sm:text-xl font-bold text-white mb-3 mt-8">14. Contact Us</h2>
                        <p className="text-sm sm:text-base text-[#C0C0C0] mb-6 leading-relaxed">
                            For questions regarding these Terms, please contact:<br />
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
