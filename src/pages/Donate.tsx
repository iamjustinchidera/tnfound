import React from 'react';
import { Heart, ShieldCheck, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface DonateProps {
  onNavigate: (pageId: string) => void;
}

export default function Donate({ onNavigate }: DonateProps) {
  return (
    <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
      {/* Page Header */}
      <section className="py-16 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.25em] mb-4 block">
              SUPPORT THE CAUSE
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand tracking-tight">
              Invest in Young Futures
            </h1>
            <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mt-3">
              100% of donations go directly to player equipment, tutoring stipends, WAEC/JAMB exam cards, and community play spaces. To keep giving personal and fully transparent, we handle every donation directly with our team.
            </p>
          </div>
        </div>
      </section>

      {/* Contact-to-Donate Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Primary: Contact the team */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-brand/10 p-8 sm:p-10 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-brand text-accent flex items-center justify-center shadow-md mb-6">
                <Heart className="w-7 h-7" />
              </div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand tracking-tight mb-3">
                For Donations, Contact Our Team
              </h2>
              <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mb-8">
                Whether it is a one-time gift, a monthly pledge, a corporate sponsorship, or sponsoring a specific child or team, simply reach out through any channel below. A member of our team will personally guide you through the process.
              </p>

              <div className="space-y-4">
                <a
                  href="tel:+2347030385129"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-brand/10 bg-neutral-bg hover:border-brand/40 transition-colors group"
                >
                  <span className="w-11 h-11 rounded-xl bg-brand text-accent flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">Call or WhatsApp</span>
                    <span className="block font-display font-bold text-brand text-base group-hover:text-brand-hover transition-colors">+234 703 038 5129</span>
                  </span>
                </a>

                <a
                  href="mailto:contact@tnfound.com"
                  className="flex items-center gap-4 p-4 rounded-2xl border border-brand/10 bg-neutral-bg hover:border-brand/40 transition-colors group"
                >
                  <span className="w-11 h-11 rounded-xl bg-brand text-accent flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">Email Us</span>
                    <span className="block font-display font-bold text-brand text-base group-hover:text-brand-hover transition-colors">contact@tnfound.com</span>
                  </span>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl border border-brand/10 bg-neutral-bg">
                  <span className="w-11 h-11 rounded-xl bg-brand text-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <span>
                    <span className="block font-mono text-[9px] text-gray-400 font-bold uppercase tracking-widest">Visit Us</span>
                    <span className="block font-sans font-medium text-brand text-sm leading-snug">House 10, Ajibade Crescent, Ambassador Ville, Lugbe, Abuja</span>
                  </span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('contact')}
                className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-sm tracking-wider uppercase px-8 py-4 rounded-full transition-colors cursor-pointer"
              >
                Send Us a Message
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Sidebar: trust block */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-brand text-white rounded-3xl p-8 relative overflow-hidden border border-brand-hover">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />

                <h3 className="font-display font-bold text-xl text-white mb-6">
                  Giving You Can Trust
                </h3>

                <ul className="space-y-4">
                  <li className="flex gap-3 items-start text-xs text-gray-300 leading-relaxed">
                    <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Registered NGO / non-profit. Every donation receives an official, tax-compliant receipt.</span>
                  </li>
                  <li className="flex gap-3 items-start text-xs text-gray-300 leading-relaxed">
                    <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Handled personally by our team, so your gift is directed exactly where you intend.</span>
                  </li>
                  <li className="flex gap-3 items-start text-xs text-gray-300 leading-relaxed">
                    <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span>Transparent quarterly audit updates are shared with every donor on fund allocation.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl border border-brand/10 p-6 sm:p-8">
                <span className="font-mono text-[9px] text-gray-400 font-bold uppercase tracking-wider block mb-2">
                  Every Gift Counts
                </span>
                <h4 className="font-display font-bold text-brand text-sm mb-3">Where Your Support Goes</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
                  From soccer boots and training kits to school notebooks, exam fees, tutoring stipends, and renovated community pitches, your generosity directly shapes the future of a young Nigerian athlete and student.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
