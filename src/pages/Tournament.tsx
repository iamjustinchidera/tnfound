import React from 'react';
import { Trophy, Calendar, Users, Award, ShieldAlert, Star, ArrowRight } from 'lucide-react';
import { eventsData } from '../data/mockData';

interface TournamentProps {
  onNavigate: (pageId: string) => void;
}

export default function Tournament({ onNavigate }: TournamentProps) {
  // Find tournament event data
  const tournamentEvent = eventsData.find(e => e.id === 'simy-nwankwo-tournament-2026');

  const historyPoints = [
    {
      year: '2022',
      title: 'Inception of the U18 Tournament',
      description: 'Simeon "Simy" Nwankwo partnered with the foundation to kick off the first 8-team trial play tournament, providing complete kits and direct cash funding.'
    },
    {
      year: '2024',
      title: 'Expansion to 16 Clubs',
      description: 'The competition doubled in scale, drawing team delegations from across 4 distinct southern states, and introducing licensing requirements for coaches.'
    },
    {
      year: '2025',
      title: 'International Scouting Inflow',
      description: 'Multiple international agents attended the tournament, resulting in 4 youth athletes receiving professional invitations and fully funded academy contracts.'
    }
  ];

  return (
    <div className="pt-24 animate-fade-in bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="bg-brand text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/40 text-accent px-4 py-1.5 rounded-full mb-6 font-mono text-[10px] tracking-widest uppercase font-bold">
              <Trophy className="w-3.5 h-3.5" />
              SIMY NWANKWO PATRONAGE
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
              SIMY Nwankwo Annual U18 Scouting Tournament
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 font-light leading-relaxed">
              Discover the premier Under-18 soccer tournament in southeastern Nigeria, bringing together 16 elite regional clubs, professional scouts, and life-changing development contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative Split */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Photo Grid */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/player.jpg"
                  alt="U18 Soccer player kicking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-1/2 aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-brand p-6 text-white flex flex-col justify-center hidden sm:flex">
                <span className="block font-display font-extrabold text-3xl text-accent">16</span>
                <span className="block font-sans text-[10px] tracking-widest uppercase mt-2">Elite Regional Clubs Battling</span>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em] mb-4">
                THE OBJECTIVE
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand tracking-tight mb-6">
                Purpose & Scouting Pathways
              </h2>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 font-light">
                Grandly backed by Italian Serie A footballer Simeon "Simy" Nwankwo, this annual Under-18 championship goes beyond standard football competition. The primary purpose is to provide talented regional youngsters who train under demanding circumstances with a pristine, well-structured, professional showcase.
              </p>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-8 font-light">
                By covering travel subsidies, complete kits, hydration, medical support, and official referees, TNF removes every operational barrier. This ensures scouts from Europe and regional professional teams can focus on what matters: discovering stellar talent and matching them with legal, safe, fully funded academy contracts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                <div className="p-5 bg-neutral-bg/60 border border-brand/5 rounded-2xl">
                  <strong className="block font-display text-sm text-brand mb-1">Who Can Participate</strong>
                  <span className="block font-sans text-xs text-gray-500">Affiliated Under-18 clubs meeting the academic and coaching standards.</span>
                </div>
                <div className="p-5 bg-neutral-bg/60 border border-brand/5 rounded-2xl">
                  <strong className="block font-display text-sm text-brand mb-1">Strict Safe Play</strong>
                  <span className="block font-sans text-xs text-gray-500">Every team signs our youth protection and fair-play charters.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-24 bg-neutral-bg/30 border-y border-brand/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em]">
              THE JOURNEY
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand tracking-tight mt-3">
              Championship History & Timeline
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {historyPoints.map((point, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-brand/5 shadow-sm relative group hover:border-accent transition-colors">
                <span className="font-display font-extrabold text-4xl text-accent/25 block mb-4 group-hover:text-accent transition-colors">
                  {point.year}
                </span>
                <h3 className="font-display font-bold text-lg text-brand mb-3">
                  {point.title}
                </h3>
                <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Active Tournament Event Banner */}
      {tournamentEvent && (
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-brand-hover shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7">
                <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase block mb-4">
                  UPCOMING COMPETITION
                </span>
                <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
                  {tournamentEvent.title}
                </h2>
                <p className="font-sans text-sm text-gray-300 leading-relaxed mb-6 font-light">
                  {tournamentEvent.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-6 font-sans text-xs text-gray-300 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-accent" />
                    <span>{tournamentEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-accent" />
                    <span>{tournamentEvent.location}</span>
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('events')}
                  className="px-6 py-3 bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
                >
                  Event Details & Ticketing
                </button>
              </div>
              <div className="lg:col-span-5 aspect-video rounded-2xl overflow-hidden border border-white/10">
                <img
                  src={tournamentEvent.image}
                  alt={tournamentEvent.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      <section className="py-20 bg-brand text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-white tracking-tight mb-4">
            Help Us Fund Next Year’s Championship Kits
          </h2>
          <p className="font-sans text-sm text-gray-300 font-light mb-8 leading-relaxed">
            By donating, you sponsor training balls, professional medical referees, player feeding programs, and transportation logistics for distant regional teams.
          </p>
          <button
            onClick={() => onNavigate('donate')}
            className="px-8 py-4 bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
          >
            Donate / Sponsor a Team
          </button>
        </div>
      </section>
    </div>
  );
}
