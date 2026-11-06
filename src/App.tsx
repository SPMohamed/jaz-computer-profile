import React, { useState, useEffect } from 'react';
import { Header, PageId } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { QuickEnquiryModal } from './components/common/QuickEnquiryModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ProductsPage } from './pages/ProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { CctvSolutionsPage } from './pages/CctvSolutionsPage';
import { ClientsPage } from './pages/ClientsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState('General Product / Service Enquiry');

  // Handle URL hash changes for deep linking & back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 'about', 'products', 'services', 
        'cctv', 'clients', 'gallery', 'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    // On mount check hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (context?: string) => {
    if (context) {
      setEnquirySubject(context);
    }
    setEnquiryModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-brand-navy-dark text-slate-800 dark:text-brand-silver font-sans transition-colors duration-200">
      {/* Sticky Header with Logo, Navigation, Calls & Theme Toggle */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {currentPage === 'home' && (
          <HomePage onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'about' && (
          <AboutPage onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'products' && (
          <ProductsPage onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'services' && (
          <ServicesPage onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'cctv' && (
          <CctvSolutionsPage onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'clients' && (
          <ClientsPage onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'gallery' && (
          <GalleryPage onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />

      {/* Persistent Floating WhatsApp Help Button */}
      <FloatingWhatsApp />

      {/* Global Quick Enquiry & Quote Modal */}
      <QuickEnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultSubject={enquirySubject}
      />
    </div>
  );
}

export default App;
