import logoImage from '../logo.svg';

interface LogoProps {
    className?: string;
    onNavigate: (page: string) => void;
}

export default function Logo({ className = "", onNavigate }: LogoProps) {
    return (
        <button
            onClick={() => onNavigate('home')}
            className={`flex items-center cursor-pointer hover:opacity-80 transition-opacity ${className}`}
        >
            <img
                src={logoImage}
                alt="LeekSeason Logo"
                className="h-12 w-auto object-contain"
            />
        </button>
    );
}
