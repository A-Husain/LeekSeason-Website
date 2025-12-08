import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Consultations from './pages/Consultations';
import Access from './pages/Access';
import Plan from './pages/Plan';
import Confirmation from './pages/Confirmation';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Dispute from './pages/Dispute';

type Page = 'home' | 'services' | 'consultations' | 'access' | 'plan' | 'confirmation' | 'contact' | 'privacy' | 'terms' | 'dispute';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedPackage, setSelectedPackage] = useState<string | undefined>();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleNavigate = (page: string, packageType?: string) => {
    setCurrentPage(page as Page);
    if (packageType) {
      setSelectedPackage(packageType);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      <main>
        {currentPage === 'home' && <Home onNavigate={handleNavigate} />}
        {currentPage === 'services' && <Services onNavigate={handleNavigate} />}
        {currentPage === 'consultations' && <Consultations onNavigate={handleNavigate} />}
        {currentPage === 'access' && <Access onNavigate={handleNavigate} />}
        {currentPage === 'plan' && (
          <Plan selectedPackage={selectedPackage} onNavigate={handleNavigate} />
        )}
        {currentPage === 'confirmation' && <Confirmation onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'privacy' && <Privacy onNavigate={handleNavigate} />}
        {currentPage === 'terms' && <Terms onNavigate={handleNavigate} />}
        {currentPage === 'dispute' && <Dispute onNavigate={handleNavigate} />}
      </main>

      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
