import { ArrowRight, CheckCircle } from 'lucide-react';

interface ConfirmationProps {
  onNavigate: (page: string) => void;
}

export default function Confirmation({ onNavigate }: ConfirmationProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C2C2C] via-[#1f1f1f] to-[#2C2C2C] flex items-center justify-center px-4 sm:px-6 pt-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-6 sm:mb-8">
          <CheckCircle className="mx-auto text-[#06bdff]" size={60} strokeWidth={1.5} />
        </div>

        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wide text-white mb-4 sm:mb-6 px-2">
          Thank You. Your Strategy Begins Now.
        </h1>

        <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#C0C0C0] mb-8 sm:mb-12 leading-relaxed font-light max-w-xl mx-auto px-2">
          We've received your submission and payment details. A member of the LeekSeason team will reach out within 48 hours to begin your onboarding process.
        </p>

        <button
          onClick={() => onNavigate('home')}
          className="group inline-flex items-center gap-2 bg-[#06bdff] text-white px-6 py-2.5 font-medium text-xs tracking-wide hover:bg-[#05a5e6] transition-colors shadow-lg shadow-[#06bdff]/20 hover:shadow-[#06bdff]/40"
        >
          Return Home
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
        </button>
      </div>
    </div>
  );
}
