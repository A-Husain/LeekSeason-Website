interface FooterProps {
  currentPage?: string;
}

export default function Footer({ currentPage = 'home' }: FooterProps) {
  return (
    <footer className="border-t py-6 bg-[#E6E6E6] border-[#C0C0C0]/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center space-y-2">
          <p className="text-sm text-[#1a1a1a]">
            Copyright © 2025 LeekSeason LLC | <button className="hover:text-[#06bdff] transition-colors">Privacy Policy</button> | <button className="hover:text-[#06bdff] transition-colors">Terms of Service</button>
          </p>
          <p className="text-sm text-[#2C2C2C]">
            LeekSeason LLC is a marketing and consulting agency based in Minnetonka, MN.
          </p>
        </div>
      </div>
    </footer>
  );
}
