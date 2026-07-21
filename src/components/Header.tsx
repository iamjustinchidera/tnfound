import React, { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { useBodyScrollLock } from '../utils/useBodyScrollLock';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useBodyScrollLock(isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'programs', label: 'Programs' },
    { id: 'events', label: 'Events' },
    { id: 'news', label: 'Stories' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'get-involved', label: 'Get Involved' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // The header is transparent only over the Home page's dark hero. Every other
  // page starts with a light gap under the header, so use light nav colors
  // exclusively when overlaying that dark hero (home + not yet scrolled).
  const overHero = currentPage === 'home' && !isScrolled;

  return (
    <>
      <header
        id="main-nav-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-bg/90 backdrop-blur-md py-3 shadow-md border-b border-brand/5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand Name */}
            <button
              id="header-logo-button"
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            >
              <div className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden shrink-0 transition-transform group-hover:scale-105">
                <img
                  src="/images/tnflogo.png"
                  alt="Tochukwu Nwankwo Foundation logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div>
                <span
                  className={`block font-display font-bold text-base tracking-tight leading-none ${
                    overHero ? 'text-white' : 'text-brand'
                  }`}
                >
                  TOCHUKWU NWANKWO
                </span>
                <span
                  className={`block font-sans text-[10px] tracking-[0.25em] font-semibold leading-none mt-1 ${
                    overHero ? 'text-gray-300' : 'text-gray-500'
                  }`}
                >
                  FOUNDATION
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id || (item.id === 'programs' && currentPage.startsWith('program-'));
                return (
                  <button
                    key={item.id}
                    id={`nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-full font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                      overHero
                        ? isActive
                          ? 'text-white bg-white/15 font-semibold'
                          : 'text-gray-200 hover:text-white hover:bg-white/10'
                        : isActive
                        ? 'text-brand bg-brand/5 font-semibold'
                        : 'text-gray-600 hover:text-brand hover:bg-black/5'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Donate CTA & Hamburger */}
            <div className="flex items-center gap-3">
              <button
                id="header-donate-cta"
                onClick={() => handleNavClick('donate')}
                className="hidden sm:flex items-center gap-2 bg-accent hover:bg-accent-hover text-brand font-sans font-bold px-5 py-2.5 rounded-full text-xs tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Heart className="w-3.5 h-3.5" />
                Donate
              </button>

              <button
                id="mobile-menu-hamburger"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className={`lg:hidden p-2 rounded-lg focus:outline-none cursor-pointer ${
                  overHero
                    ? 'text-white hover:bg-white/10'
                    : 'text-gray-600 hover:text-brand hover:bg-brand/5'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 bg-charcoal/95 backdrop-blur-md z-50 flex flex-col animate-fade-in lg:hidden"
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-4 py-5 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="/images/tnflogo.png"
                  alt="Tochukwu Nwankwo Foundation logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div>
                <span className="block font-display font-bold text-base tracking-tight text-white leading-none">
                  TOCHUKWU NWANKWO
                </span>
                <span className="block font-sans text-[10px] tracking-[0.25em] text-gray-400 font-semibold leading-none mt-1">
                  FOUNDATION
                </span>
              </div>
            </div>
            <button
              id="close-mobile-menu"
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Navigation Items */}
          <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col justify-between">
            <nav id="mobile-nav-links" className="flex flex-col gap-5">
              {navItems.map((item) => {
                const isActive = currentPage === item.id || (item.id === 'programs' && currentPage.startsWith('program-'));
                return (
                  <button
                    key={item.id}
                    id={`mobile-nav-item-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left text-2xl font-display font-bold tracking-tight py-2 transition-colors ${
                      isActive ? 'text-accent border-l-4 border-accent pl-3' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Menu Footer Action */}
            <div className="mt-8 flex flex-col gap-4">
              <button
                id="mobile-nav-donate-cta"
                onClick={() => handleNavClick('donate')}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-brand font-sans font-bold py-4 rounded-xl text-sm tracking-wider uppercase transition-all duration-200 cursor-pointer"
              >
                <Heart className="w-4 h-4" />
                Donate Now
              </button>
              <p className="text-center font-sans text-xs text-gray-500">
                Tochukwu Nwankwo Foundation © 2026. Registered NGO.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
