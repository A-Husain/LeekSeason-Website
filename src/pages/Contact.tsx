import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide text-white mb-3 sm:mb-4 md:mb-6 px-2">
            Let's Connect.
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white leading-relaxed font-light px-2">
            We value intentional partnerships. Share a few details about your brand and project, and a member of the LeekSeason team will reach out within 48 hours.
          </p>
        </div>

        {submitted ? (
          <div className="bg-[#C0C0C0] border border-[#06bdff] p-6 sm:p-8 text-center">
            <p className="text-base sm:text-lg text-[#E6E6E6] font-medium">
              Thank you for reaching out. We'll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-[#1a1a1a] border border-[#C0C0C0]/30 shadow-xl p-6 sm:p-8 md:p-12">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-[#06bdff] mb-2">
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
                <label className="block text-sm font-medium text-[#06bdff] mb-2">
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

              <div>
                <label className="block text-sm font-medium text-[#06bdff] mb-2">
                  Company <span className="text-[#C0C0C0]">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[#06bdff] mb-2">
                  Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#2C2C2C] border border-[#C0C0C0]/30 text-[#06bdff] focus:border-[#06bdff] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your brand and what you're looking to achieve..."
                />
              </div>

              <button
                type="submit"
                className="w-full group inline-flex items-center justify-center gap-2 bg-[#06bdff] text-white px-6 py-2.5 font-medium text-xs tracking-wide hover:bg-[#05a5e6] transition-colors shadow-lg shadow-[#06bdff]/20 hover:shadow-[#06bdff]/40"
              >
                Submit Inquiry
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-[#C0C0C0]/20 text-center">
              <p className="text-sm text-[#C0C0C0]">
                For press or partnership inquiries, email{' '}
                <a href="mailto:contact@leekseason.com" className="text-[#06bdff] hover:text-[#05a5e6] transition-colors">
                  contact@leekseason.com
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
