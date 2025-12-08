import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'HOME', page: 'home' },
    { label: 'SERVICES', page: 'services' },
    { label: 'CONSULTATIONS', page: 'consultations' },
    { label: 'ACCESS', page: 'access' },
    { label: 'CONTACT', page: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b transition-colors bg-[#E6E6E6]/95 border-[#C0C0C0]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Logo onNavigate={onNavigate} />
          </div>

          <div className="hidden md:flex items-center space-x-12">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`text-sm font-medium tracking-widest transition-colors ${currentPage === item.page
                  ? 'text-[#06bdff]'
                  : 'text-[#1a1a1a] hover:text-[#06bdff]'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#1a1a1a]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-[#E6E6E6] border-[#C0C0C0]/40">
          <div className="px-6 py-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => {
                  onNavigate(item.page);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left text-sm font-medium tracking-widest transition-colors ${currentPage === item.page
                  ? 'text-[#06bdff]'
                  : 'text-[#1a1a1a] hover:text-[#06bdff]'
                  }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
