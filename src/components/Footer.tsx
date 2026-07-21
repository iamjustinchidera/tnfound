import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const handleLinkClick = (pageId: string) => {
    onNavigate(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-charcoal text-gray-300 pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand details */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center overflow-hidden shrink-0">
                <img
                  src="/images/tnflogo.png"
                  alt="Tochukwu Nwankwo Foundation logo"
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              <div>
                <span className="block font-display font-bold text-sm tracking-tight text-white leading-none">
                  TOCHUKWU NWANKWO
                </span>
                <span className="block font-sans text-[9px] tracking-[0.25em] text-gray-400 font-semibold leading-none mt-1">
                  FOUNDATION
                </span>
              </div>
            </div>
            <p className="font-sans text-sm text-gray-400 leading-relaxed">
              We believe every young person deserves an opportunity to discover their potential, develop their talents, and build a better future.
            </p>
            {/* Social media — Instagram only */}
            <div className="flex flex-wrap gap-5 mt-3 items-center">
              <a
                href="https://www.instagram.com/the_tnfoundation?igsh=YmpnbGNyYjMycmtk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
                <span className="font-sans text-sm">@the_tnfoundation</span>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Map */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-6 border-l-2 border-accent pl-3">
              Foundation
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-accent transition-colors cursor-pointer">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('programs')} className="hover:text-accent transition-colors cursor-pointer">
                  Our Work & Programs
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('events')} className="hover:text-accent transition-colors cursor-pointer">
                  Upcoming Events
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('news')} className="hover:text-accent transition-colors cursor-pointer">
                  Latest News & Stories
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('gallery')} className="hover:text-accent transition-colors cursor-pointer">
                  Media Gallery
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('get-involved')} className="hover:text-accent transition-colors cursor-pointer">
                  Get Involved / Volunteer
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Programs Focus Area */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-6 border-l-2 border-accent pl-3">
              Focus Areas
            </h4>
            <ul className="flex flex-col gap-3 font-sans text-sm">
              <li>
                <button onClick={() => handleLinkClick('program-football-development')} className="hover:text-accent transition-colors cursor-pointer">
                  Football Development
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('program-education-tutoring')} className="hover:text-accent transition-colors cursor-pointer">
                  Education & Tutoring
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('program-health-wellbeing')} className="hover:text-accent transition-colors cursor-pointer">
                  Health & Wellbeing
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('program-community-development')} className="hover:text-accent transition-colors cursor-pointer">
                  Community Development
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('program-youth-empowerment')} className="hover:text-accent transition-colors cursor-pointer">
                  Youth Empowerment
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('tournament')} className="hover:text-accent transition-colors cursor-pointer text-accent font-semibold">
                  SIMY Nwankwo Tournament
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact Address */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-4 border-l-2 border-accent pl-3">
                Newsletter
              </h4>
              <p className="font-sans text-xs text-gray-400 mb-4 leading-relaxed">
                Stay updated with our latest local campaigns, stories, and football academy updates.
              </p>
              <form onSubmit={handleSubscribe} className="relative flex">
                <input
                  type="email"
                  required
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 text-xs px-4 py-3 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent"
                />
                <button
                  type="submit"
                  className="bg-accent hover:bg-accent-hover text-brand px-4 py-3 rounded-r-lg flex items-center justify-center transition-colors cursor-pointer"
                >
                  {subscribed ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                </button>
              </form>
              {subscribed && (
                <span className="text-[11px] text-accent mt-2 block animate-fade-in">
                  Thank you! You have been subscribed.
                </span>
              )}
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-2.5 text-xs text-gray-400">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>House 10, Ajibade Crescent, Ambassador Ville, Lugbe, Abuja</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-400">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a href="mailto:contact@tnfound.com" className="hover:text-accent transition-colors">contact@tnfound.com</a>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-gray-400">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:+2347030385129" className="hover:text-accent transition-colors">+234 703 038 5129</a>
              </div>
            </div>
          </div>
        </div>

        {/* Lower row: Copyright and Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-gray-500 text-center md:text-left">
            &copy; 2026 Tochukwu Nwankwo Foundation (TNF). All rights reserved.
          </p>
          <div className="flex gap-6 font-sans text-xs text-gray-500">
            <button onClick={() => handleLinkClick('privacy')} className="hover:text-accent transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => handleLinkClick('terms')} className="hover:text-accent transition-colors cursor-pointer">
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
