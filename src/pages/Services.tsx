import { ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string, packageType?: string) => void;
}

const packages = [
  {
    id: 'basic',
    name: 'Basic Package',
    price: '$2,500',
    description: 'Best for startups and emerging brands establishing their identity.',
    features: [
      'Brand positioning consultation (1 session)',
      'Social media strategy for up to 2 platforms',
      '1-month content calendar and creative direction',
      'Market and competitor analysis',
      'Marketing plan outline and roadmap',
      'One 30-minute post-launch refinement session',
    ],
  },
  {
    id: 'advanced',
    name: 'Advanced Package',
    price: '$5,000',
    description: 'Best for established businesses seeking growth and elevated brand experience.',
    features: [
      'Everything in Basic, plus:',
      'Full visual branding kit (logo, color palette, brand guide)',
      'Paid advertising setup and management (1 campaign)',
      'Analytics dashboard and insights report',
      'Conversion strategy audit',
      'Dedicated client support for 30 days post-project',
    ],
  },
  {
    id: 'elite',
    name: 'Elite Package',
    price: '$10,000',
    description: 'Best for brands seeking complete strategic transformation.',
    features: [
      'Everything in Advanced, plus:',
      'Marketing automation setup and CRM integration',
      'Executive-level brand and growth consulting (2 months)',
      'Complete website or sales funnel strategy',
      'Email marketing system and sequence development',
      'Long-term growth strategy and executive review session',
      'Private consulting access',
    ],
  },
  {
    id: 'negotiated',
    name: 'Negotiated Package',
    price: 'Custom Pricing',
    description: 'For complex or enterprise-level projects requiring bespoke solutions.',
    features: [
      'Fully customized scope and deliverables',
      'Flexible consulting hours and creative production options',
      'Confidential project terms and tailored proposal',
    ],
  },
];

export default function Services({ onNavigate }: ServicesProps) {
  return (
    <div className="min-h-screen bg-[#2C2C2C] pt-32 pb-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide text-white mb-4 sm:mb-6 md:mb-8 px-2">
            Strategic Partnerships. Designed for Impact.
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#C0C0C0] max-w-4xl mx-auto leading-relaxed font-light px-2">
            Every brand is unique — its strategy should be, too. At LeekSeason, we design tailored marketing and consulting solutions that align creative intelligence with measurable growth. Whether you're launching, refining, or scaling, each package is built to deliver clarity, presence, and performance at the level your business deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-[#1a1a1a] border transition-all duration-300 hover:shadow-2xl hover:shadow-[#06bdff]/10 flex flex-col ${pkg.featured
                ? 'border-[#06bdff] shadow-lg shadow-[#06bdff]/20'
                : 'border-[#C0C0C0]/30 hover:border-[#06bdff]'
                }`}
            >
              <div className="p-4 sm:p-6 md:p-8 flex-1 flex flex-col">
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 tracking-wide">
                    {pkg.name}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl font-bold text-[#06bdff] mb-2 sm:mb-4">
                    {pkg.price}
                  </p>
                  <p className="text-xs text-[#C0C0C0] leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="border-t border-[#C0C0C0]/20 pt-4 sm:pt-6 mb-6 sm:mb-8 flex-1">
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 sm:gap-3">
                        <Check className="text-[#06bdff] flex-shrink-0 mt-0.5" size={14} />
                        <span className="text-xs text-[#C0C0C0]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => onNavigate('plan', pkg.id)}
                  className="w-full bg-[#06bdff] text-white py-2 sm:py-3 font-medium text-xs tracking-wide hover:bg-[#05a5e6] transition-colors shadow-lg shadow-[#06bdff]/20 hover:shadow-[#06bdff]/40 mt-auto"
                >
                  Select Package
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-4">
          <button
            onClick={() => onNavigate('plan')}
            className="group inline-flex items-center gap-2 bg-[#06bdff] text-white px-6 py-2.5 font-medium text-xs tracking-wide hover:bg-[#05a5e6] transition-colors shadow-lg shadow-[#06bdff]/20 hover:shadow-[#06bdff]/40"
          >
            Let's Build Your Strategy
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
          </button>

          <div className="text-center">
            <p className="text-xs text-[#C0C0C0] mb-3">Want to add a consultation to your package?</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => onNavigate('plan', 'basic-30min')}
                className="group inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#06bdff] text-[#06bdff] px-4 py-2 font-medium text-xs tracking-wide hover:bg-[#06bdff] hover:text-white transition-colors"
              >
                Basic + 30min Consult
              </button>
              <button
                onClick={() => onNavigate('plan', 'basic-1hour')}
                className="group inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#06bdff] text-[#06bdff] px-4 py-2 font-medium text-xs tracking-wide hover:bg-[#06bdff] hover:text-white transition-colors"
              >
                Basic + 1hr Consult
              </button>
              <button
                onClick={() => onNavigate('plan', 'advanced-30min')}
                className="group inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#06bdff] text-[#06bdff] px-4 py-2 font-medium text-xs tracking-wide hover:bg-[#06bdff] hover:text-white transition-colors"
              >
                Advanced + 30min Consult
              </button>
              <button
                onClick={() => onNavigate('plan', 'advanced-1hour')}
                className="group inline-flex items-center gap-2 bg-[#1a1a1a] border border-[#06bdff] text-[#06bdff] px-4 py-2 font-medium text-xs tracking-wide hover:bg-[#06bdff] hover:text-white transition-colors"
              >
                Advanced + 1hr Consult
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
