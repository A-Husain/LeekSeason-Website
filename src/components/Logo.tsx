import logoImage from '../logo.png';

interface LogoProps {
    className?: string;
    onNavigate: (page: string) => void;
}

export default function Logo({ className = "", onNavigate }: LogoProps) {
    return (
        <div className={`flex items-center gap-0.1 ${className}`}>
            {/* Logo Image - Non-clickable */}
            <div className="w-12 h-12 flex items-center justify-center">
                <img
                    src={logoImage}
                    alt="LeekSeason Logo"
                    className="max-w-full max-h-full object-contain"
                />
            </div>

            {/* LEEKSEASON Text - Clickable and hoverable */}
            <button
                onClick={() => onNavigate('home')}
                className="text-lg font-bold tracking-wider text-[#1a1a1a] hover:text-[#06bdff] transition-colors cursor-pointer"
            >
                LEEKSEASON
            </button>
        </div>
    );
}
