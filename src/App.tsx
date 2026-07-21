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
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Smooth scroll to top on navigation change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [currentPage]);

  // Handle routing / matching pages
  const renderCurrentPage = () => {
    if (currentPage === 'home') {
      return <Home onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'about') {
      return <About onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'programs') {
      return <Programs onNavigate={setCurrentPage} />;
    }
    if (currentPage.startsWith('program-')) {
      const programId = currentPage.replace('program-', '');
      return <ProgramDetail programId={programId} onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'tournament') {
      return <SimyTournament onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'events') {
      return <Events onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'news') {
      return <NewsStories onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'gallery') {
      return <Gallery onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'get-involved') {
      return <GetInvolved onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'donate') {
      return <Donate onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'contact') {
      return <Contact onNavigate={setCurrentPage} />;
    }
    if (currentPage === 'privacy') {
      return <Privacy />;
    }
    if (currentPage === 'terms') {
      return <Terms />;
    }

    // Fallback to Home page
    return <Home onNavigate={setCurrentPage} />;
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 antialiased selection:bg-accent selection:text-brand">
      {/* Site-wide Header Navigation */}
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* Primary Dynamic Screen Layout */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Global Brand Footer */}
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
