import { ArrowRight } from 'lucide-react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C2C2C] via-[#1a1a1a] to-[#000000] pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#06bdff] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-[#C0C0C0] rounded-full blur-[140px] opacity-25 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#06bdff] rounded-full blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/50 via-transparent to-[#2C2C2C]/30"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-8">
        <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider text-white mb-4 sm:mb-6 md:mb-8 leading-tight">
          PRECISION.<br />
          PRESENCE.<br />
          POWER.
        </h1>

        <p className="text-sm sm:text-base md:text-lg text-[#C0C0C0] mb-6 sm:mb-8 md:mb-12 font-light tracking-wide px-4">
          Where creativity meets intelligence.
        </p>

        <button
          onClick={() => onNavigate('services')}
          className="group inline-flex items-center gap-2 bg-[#06bdff] text-white px-6 py-2.5 font-medium text-xs tracking-wide hover:bg-[#05a5e6] transition-all duration-300 shadow-lg hover:shadow-2xl shadow-[#06bdff]/20"
        >
          Book a Package
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
        </button>
      </div>
    </div>
  );
}
