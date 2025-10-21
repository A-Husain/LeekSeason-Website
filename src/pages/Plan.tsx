import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface PlanProps {
  selectedPackage?: string;
  onNavigate: (page: string) => void;
}

const packageDetails: Record<string, { name: string; price: string; type: 'package' | 'consultation' | 'bundle'; description?: string }> = {
  basic: { name: 'Basic Package', price: '$2,500', type: 'package' },
  advanced: { name: 'Advanced Package', price: '$5,000', type: 'package' },
  elite: { name: 'Elite Package', price: '$10,000', type: 'package' },
  negotiated: { name: 'Negotiated Package', price: 'Custom Pricing', type: 'package' },
  '30min': { name: '30-Minute Consultation', price: '$100', type: 'consultation' },
  '1hour': { name: '1-Hour Consultation', price: '$200', type: 'consultation' },
  'basic-30min': {
    name: 'Basic Package + 30-Min Consultation',
    price: '$2,600',
    type: 'bundle',
    description: 'Basic Package with a 30-minute strategy consultation included'
  },
  'basic-1hour': {
    name: 'Basic Package + 1-Hour Consultation',
    price: '$2,700',
    type: 'bundle',
    description: 'Basic Package with a 1-hour deep-dive consultation included'
  },
  'advanced-30min': {
    name: 'Advanced Package + 30-Min Consultation',
    price: '$5,100',
    type: 'bundle',
    description: 'Advanced Package with a 30-minute strategy consultation included'
  },
  'advanced-1hour': {
    name: 'Advanced Package + 1-Hour Consultation',
    price: '$5,200',
    type: 'bundle',
    description: 'Advanced Package with a 1-hour deep-dive consultation included'
  },
  'elite-30min': {
    name: 'Elite Package + 30-Min Consultation',
    price: '$10,100',
    type: 'bundle',
    description: 'Elite Package with a 30-minute strategy consultation included'
  },
  'elite-1hour': {
    name: 'Elite Package + 1-Hour Consultation',
    price: '$10,200',
    type: 'bundle',
    description: 'Elite Package with a 1-hour deep-dive consultation included'
  },
};

export default function Plan({ selectedPackage, onNavigate }: PlanProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('confirmation');
  };

  const selectedPkg = selectedPackage ? packageDetails[selectedPackage] : null;
  const isConsultation = selectedPkg?.type === 'consultation';
  const isBundle = selectedPkg?.type === 'bundle';

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C2C2C] via-[#1f1f1f] to-[#2C2C2C] pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide text-white mb-6">
            {isConsultation ? 'Book Your Consultation.' : isBundle ? 'Complete Your Bundle.' : 'Finalize Your Strategy.'}
          </h1>
          <p className="text-lg text-[#C0C0C0] max-w-3xl mx-auto leading-relaxed font-light">
            {isConsultation
              ? "You've selected a consultation session designed to provide focused strategic guidance. Please review your chosen consultation below and confirm your details to proceed. We'll contact you within 48 hours to schedule your session."
              : isBundle
                ? "You've selected a comprehensive bundle that includes both a strategic package and consultation session. This combination provides maximum value and strategic guidance. Please review your bundle below and confirm your details to proceed."
                : "You've selected a LeekSeason plan designed to elevate your brand's presence and performance. Please review your chosen package below and confirm your details to proceed. Every plan begins with a tailored onboarding process to align goals, timelines, and deliverables — ensuring precision from the start."
            }
          </p>
        </div>

        <div className="bg-[#1a1a1a] border border-[#C0C0C0]/30 p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-wide">
            {isConsultation ? 'Selected Consultation Summary' : isBundle ? 'Selected Bundle Summary' : 'Selected Package Summary'}
          </h2>

          {selectedPkg ? (
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-[#C0C0C0]/20">
              <div>
                <h3 className="text-xl font-bold text-[#06bdff]">{selectedPkg.name}</h3>
                {selectedPkg.description && (
                  <p className="text-sm text-[#C0C0C0] mt-1">{selectedPkg.description}</p>
                )}
                <p className="text-sm text-[#C0C0C0] mt-1">
                  {isConsultation
                    ? 'We\'ll contact you within 48 hours to schedule your consultation at a mutually convenient time.'
                    : isBundle
                      ? 'Your bundle includes both the strategic package and consultation session. We\'ll contact you within 48 hours to schedule your consultation, and your package will begin immediately.'
                      : 'All plans include consultation and dedicated support during your project duration.'
                  }
                </p>
              </div>
              <p className="text-2xl font-bold text-white">{selectedPkg.price}</p>
            </div>
          ) : (
            <p className="text-[#C0C0C0] mb-6">
              No package selected. Please choose a package from the services page.
            </p>
          )}

          <button
            onClick={() => onNavigate(isConsultation ? 'consultations' : 'services')}
            className="text-[#06bdff] hover:text-[#05a5e6] font-medium transition-colors"
          >
            ← Edit Selection
          </button>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-[#C0C0C0]/30 p-8">
          <h2 className="text-2xl font-bold text-white mb-6 tracking-wide">
            {isConsultation ? 'Contact Information' : isBundle ? 'Client Information' : 'Client Information'}
          </h2>

          <div className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Company <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors"
              />
            </div>

            {!isConsultation && (
              <>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Billing Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors"
                    placeholder="Street Address"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-3 sm:col-span-1">
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors"
                      placeholder="City"
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-1">
                    <select
                      required
                      value={formData.state}
                      onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                      className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors"
                    >
                      <option value="" className="bg-[#2C2C2C] text-[#C0C0C0]">Select State</option>
                      <option value="AL" className="bg-[#2C2C2C]">Alabama</option>
                      <option value="AK" className="bg-[#2C2C2C]">Alaska</option>
                      <option value="AZ" className="bg-[#2C2C2C]">Arizona</option>
                      <option value="AR" className="bg-[#2C2C2C]">Arkansas</option>
                      <option value="CA" className="bg-[#2C2C2C]">California</option>
                      <option value="CO" className="bg-[#2C2C2C]">Colorado</option>
                      <option value="CT" className="bg-[#2C2C2C]">Connecticut</option>
                      <option value="DE" className="bg-[#2C2C2C]">Delaware</option>
                      <option value="FL" className="bg-[#2C2C2C]">Florida</option>
                      <option value="GA" className="bg-[#2C2C2C]">Georgia</option>
                      <option value="HI" className="bg-[#2C2C2C]">Hawaii</option>
                      <option value="ID" className="bg-[#2C2C2C]">Idaho</option>
                      <option value="IL" className="bg-[#2C2C2C]">Illinois</option>
                      <option value="IN" className="bg-[#2C2C2C]">Indiana</option>
                      <option value="IA" className="bg-[#2C2C2C]">Iowa</option>
                      <option value="KS" className="bg-[#2C2C2C]">Kansas</option>
                      <option value="KY" className="bg-[#2C2C2C]">Kentucky</option>
                      <option value="LA" className="bg-[#2C2C2C]">Louisiana</option>
                      <option value="ME" className="bg-[#2C2C2C]">Maine</option>
                      <option value="MD" className="bg-[#2C2C2C]">Maryland</option>
                      <option value="MA" className="bg-[#2C2C2C]">Massachusetts</option>
                      <option value="MI" className="bg-[#2C2C2C]">Michigan</option>
                      <option value="MN" className="bg-[#2C2C2C]">Minnesota</option>
                      <option value="MS" className="bg-[#2C2C2C]">Mississippi</option>
                      <option value="MO" className="bg-[#2C2C2C]">Missouri</option>
                      <option value="MT" className="bg-[#2C2C2C]">Montana</option>
                      <option value="NE" className="bg-[#2C2C2C]">Nebraska</option>
                      <option value="NV" className="bg-[#2C2C2C]">Nevada</option>
                      <option value="NH" className="bg-[#2C2C2C]">New Hampshire</option>
                      <option value="NJ" className="bg-[#2C2C2C]">New Jersey</option>
                      <option value="NM" className="bg-[#2C2C2C]">New Mexico</option>
                      <option value="NY" className="bg-[#2C2C2C]">New York</option>
                      <option value="NC" className="bg-[#2C2C2C]">North Carolina</option>
                      <option value="ND" className="bg-[#2C2C2C]">North Dakota</option>
                      <option value="OH" className="bg-[#2C2C2C]">Ohio</option>
                      <option value="OK" className="bg-[#2C2C2C]">Oklahoma</option>
                      <option value="OR" className="bg-[#2C2C2C]">Oregon</option>
                      <option value="PA" className="bg-[#2C2C2C]">Pennsylvania</option>
                      <option value="RI" className="bg-[#2C2C2C]">Rhode Island</option>
                      <option value="SC" className="bg-[#2C2C2C]">South Carolina</option>
                      <option value="SD" className="bg-[#2C2C2C]">South Dakota</option>
                      <option value="TN" className="bg-[#2C2C2C]">Tennessee</option>
                      <option value="TX" className="bg-[#2C2C2C]">Texas</option>
                      <option value="UT" className="bg-[#2C2C2C]">Utah</option>
                      <option value="VT" className="bg-[#2C2C2C]">Vermont</option>
                      <option value="VA" className="bg-[#2C2C2C]">Virginia</option>
                      <option value="WA" className="bg-[#2C2C2C]">Washington</option>
                      <option value="WV" className="bg-[#2C2C2C]">West Virginia</option>
                      <option value="WI" className="bg-[#2C2C2C]">Wisconsin</option>
                      <option value="WY" className="bg-[#2C2C2C]">Wyoming</option>
                    </select>
                  </div>
                  <div className="col-span-3 sm:col-span-1">
                    <input
                      type="text"
                      required
                      value={formData.zip}
                      onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                      className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors"
                      placeholder="ZIP"
                    />
                  </div>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                {isConsultation ? 'Consultation Notes' : 'Project Notes'} <span className="text-gray-400">(optional)</span>
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors resize-none"
                placeholder={isConsultation
                  ? "Share any specific challenges or topics you'd like to discuss during your consultation..."
                  : "Share any additional details about your project or goals..."
                }
              />
            </div>
          </div>

          <div className="border-t border-[#C0C0C0]/20 pt-6 mb-8">
            <p className="text-sm text-[#C0C0C0] text-center">
              {isConsultation
                ? "All payments are processed securely. We'll contact you within 48 hours to schedule your consultation."
                : isBundle
                  ? "All payments are processed securely. Your package will begin immediately, and we'll contact you within 48 hours to schedule your consultation session."
                  : "All payments are processed securely. You'll receive a confirmation email and onboarding guide within 24 hours."
              }
            </p>
          </div>

          <button
            type="submit"
            disabled={!selectedPkg}
            className="w-full group inline-flex items-center justify-center gap-3 bg-[#06bdff] text-white px-10 py-4 font-medium text-lg tracking-wide hover:bg-[#05a5e6] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-[#06bdff]/20 hover:shadow-[#06bdff]/40"
          >
            {isConsultation ? 'Book Consultation' : isBundle ? 'Complete Bundle' : 'Secure My Plan'}
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
