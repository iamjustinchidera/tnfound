import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import ProgramDetail from './pages/ProgramDetail';
import SimyTournament from './pages/SimyTournament';
import Events from './pages/Events';
import NewsStories from './pages/NewsStories';
import Gallery from './pages/Gallery';
import GetInvolved from './pages/GetInvolved';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  // Derive the current page from the URL hash (e.g. "#/about" -> "about").
  const getPageFromHash = () => {
    if (typeof window === 'undefined') return 'home';
    const raw = window.location.hash.replace(/^#\/?/, '');
    return raw || 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash);

  // Navigating writes the page into the URL hash, which creates a browser
  // history entry — so the browser's Back / Forward buttons move between pages.
  const navigate = (pageId: string) => {
    if (getPageFromHash() === (pageId || 'home')) {
      setCurrentPage(pageId); // re-selecting the same page (e.g. logo click)
      return;
    }
    window.location.hash = pageId && pageId !== 'home' ? `/${pageId}` : '/';
  };

  // Keep page state in sync with the URL for Back/Forward, deep links & refresh.
  useEffect(() => {
    const onHashChange = () => setCurrentPage(getPageFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Smooth scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  // Handle routing / matching pages
  const renderCurrentPage = () => {
    if (currentPage === 'home') {
      return <Home onNavigate={navigate} />;
    }
    if (currentPage === 'about') {
      return <About onNavigate={navigate} />;
    }
    if (currentPage === 'programs') {
      return <Programs onNavigate={navigate} />;
    }
    if (currentPage.startsWith('program-')) {
      const programId = currentPage.replace('program-', '');
      return <ProgramDetail programId={programId} onNavigate={navigate} />;
    }
    if (currentPage === 'tournament') {
      return <SimyTournament onNavigate={navigate} />;
    }
    if (currentPage === 'events') {
      return <Events onNavigate={navigate} />;
    }
    if (currentPage === 'news') {
      return <NewsStories onNavigate={navigate} />;
    }
    if (currentPage === 'gallery') {
      return <Gallery onNavigate={navigate} />;
    }
    if (currentPage === 'get-involved') {
      return <GetInvolved onNavigate={navigate} />;
    }
    if (currentPage === 'donate') {
      return <Donate onNavigate={navigate} />;
    }
    if (currentPage === 'contact') {
      return <Contact onNavigate={navigate} />;
    }
    if (currentPage === 'privacy') {
      return <Privacy />;
    }
    if (currentPage === 'terms') {
      return <Terms />;
    }

    // Fallback to Home page
    return <Home onNavigate={navigate} />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 antialiased selection:bg-accent selection:text-brand">
      {/* Site-wide Header Navigation */}
      <Header currentPage={currentPage} onNavigate={navigate} />

      {/* Primary Dynamic Screen Layout */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Global Brand Footer */}
      <Footer onNavigate={navigate} />
    </div>
  );
}
