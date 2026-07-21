import React from 'react';
import { Trophy, Calendar, MapPin, Users, Award, ShieldAlert, Check, ArrowRight, Dribbble } from 'lucide-react';
import { patronBio } from '../data/mockData';

interface SimyTournamentProps {
  onNavigate: (pageId: string) => void;
}

export default function SimyTournament({ onNavigate }: SimyTournamentProps) {
  const tournamentStats = [
    { value: '16', label: 'Elite Teams Competing' },
    { value: '300+', label: 'U18 Athletes Screened' },
    { value: '12+', label: 'Registered International Scouts' },
    { value: '7 Days', label: 'Intense Soccer Drama' }
  ];

  const highlights = [
    {
      title: 'Scouting Pathways',
      desc: 'Top European and domestic academy directors are invited, giving youth soccer players clear avenues for national team trials and international trials.'
    },
    {
      title: 'Kit Sponsorship',
      desc: 'With support from Simeon "Simy" Nwankwo, every participating team is provided premium soccer boots, custom tactical vests, and complete water hydration support.'
    },
    {
      title: 'Character Development',
      desc: 'Participants attend professional player workshops covering anti-doping, media training, and mental health management.'
    }
  ];

  const tournamentHistory = [
    { year: '2025', champion: 'Nnewi United Youth Academy', runnerUp: 'Anambra Golden Boys', mvp: 'Emeka Chibuzor (Scouted)' },
    { year: '2024', champion: 'Onitsha Stars FC', runnerUp: 'TNF Youth Stars', mvp: 'Obinna Eze (Joined Local Pro League)' },
    { year: '2023', champion: 'Awka City Warriors', runnerUp: 'Nnewi United Youth Academy', mvp: 'Sani Musa (Academy trial)' }
  ];

  return (
    <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
      {/* Dynamic Soccer Event Hero */}
      <section className="relative py-28 bg-brand text-white overflow-hidden border-b border-brand-hover">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/tournament.jpg"
            alt="Young Soccer match action"
            className="w-full h-full object-cover opacity-25"
          />
          {/* Subtle green overlay lines */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/95 to-brand/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-accent text-brand font-mono text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
              <Trophy className="w-3.5 h-3.5 inline" />
              SIMY NWANKWO SPONSORED EVENT
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
              SIMY Nwankwo Annual <span className="text-accent">U18 Tournament</span>.
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed font-light mb-8">
              Southeastern Nigeria’s premier scouting battlefield for exceptionally talented Under-18 football players. Created by international Serie A Forward, Simeon "Simy" Nwankwo, to uplift Nigeria’s soccer youth.
            </p>

            <div className="flex flex-wrap gap-6 text-xs text-gray-300 font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-accent" />
                <span>November 10 - November 18, 2026</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-accent" />
                <span>TNF Central Arena, Anambra State</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Board */}
      <section className="relative z-20 -mt-10 max-w-5xl mx-auto px-4">
        <div className="bg-white border border-brand/10 rounded-2xl p-6 sm:p-10 shadow-lg grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-brand/10">
          {tournamentStats.map((stat, idx) => (
            <div key={idx} className="pt-4 md:pt-0 first:pt-0">
              <span className="block font-display font-black text-3xl text-brand">{stat.value}</span>
              <span className="block font-sans text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Purpose & Talent Pipeline split */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Image Column */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/player.jpg"
                  alt="Players in huddle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-brand text-white p-6 rounded-2xl shadow-xl max-w-xs hidden sm:block">
                <span className="font-display font-extrabold text-lg text-accent block">Scouting Trials</span>
                <p className="font-sans text-[11px] text-gray-300 mt-2 leading-relaxed">
                  Every game has registered agents screening tactical execution, discipline, and endurance.
                </p>
              </div>
            </div>

            {/* Right Information Column */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em] mb-4">
                THE OBJECTIVE
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand tracking-tight mb-6">
                Creating tangible pathways for youth talent
              </h2>
              <p className="font-sans text-sm text-gray-600 mb-8 leading-relaxed font-light">
                For a young boy in Nigeria, playing in the SIMY Nwankwo U18 Cup is a potential life-changing moment. We bring together licensed coaches, medical advisors, and community leaders to organize a completely free, highly regulated league that enforces sports safety guidelines, visual anti-drug statements, and fair team match rules.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full mb-8">
                {highlights.slice(0, 2).map((hl, i) => (
                  <div key={i} className="bg-neutral-bg p-5 rounded-xl border border-brand/5">
                    <h3 className="font-display font-bold text-sm text-brand mb-2">{hl.title}</h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">{hl.desc}</p>
                  </div>
                ))}
              </div>

              {/* Character feature list */}
              <div className="space-y-3 w-full">
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Mandatory participant registration for youth age transparency (Strict U18 guidelines).</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-500">
                  <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span>Licensed medical staff, first-aid, and sports physical therapy clinics in attendance.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SIMY'S ENDORSEMENT BIO */}
      <section className="py-24 bg-neutral-bg border-y border-brand/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 md:p-16 rounded-3xl border border-brand/10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Patron Avatar */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent/20 shadow-lg">
                  <img
                    src={patronBio.image}
                    alt="Simeon Nwankwo Simy"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Endorsement words */}
              <div className="lg:col-span-8 flex flex-col items-start text-left">
                <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em] mb-3">
                  A WORD FROM THE PATRON
                </span>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand mb-4">
                  Simeon "Simy" Nwankwo
                </h3>
                <p className="font-sans text-xs text-gray-400 font-semibold tracking-wide uppercase mb-6">
                  Super Eagles Striker & Italian Serie A Veteran Forward
                </p>
                <p className="font-sans text-sm text-gray-500 italic leading-relaxed mb-6">
                  "I look at these young boys and see my own childhood in Nigeria. Giving back through this tournament is not a choice—it is a sacred responsibility. Through TNF, we provide these athletes with scouts, uniforms, physical healthcare checkups, and strict educational mentoring, so that whatever their athletic destination is, they stand prepared for life."
                </p>
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-1 font-display font-bold text-brand hover:text-accent transition-colors text-xs tracking-wider uppercase cursor-pointer"
                >
                  Read Leadership Story
                  <ArrowRight className="w-3.5 h-3.5 text-accent" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Champions Table */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand tracking-tight mb-3">
              SIMY Nwankwo Cup History
            </h2>
            <p className="font-sans text-xs sm:text-sm text-gray-400">
              Honoring past victors, outstanding local talents, and scouted MVPs.
            </p>
          </div>

          <div className="overflow-x-auto rounded-xl border border-brand/10 shadow-sm">
            <table className="w-full font-sans text-xs text-left text-gray-500 bg-white min-w-[500px]">
              <thead className="bg-brand text-white font-display text-[10px] uppercase tracking-widest font-bold">
                <tr>
                  <th className="px-6 py-4">Year</th>
                  <th className="px-6 py-4">Champion</th>
                  <th className="px-6 py-4">Runner-Up</th>
                  <th className="px-6 py-4">Tournament MVP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand/10">
                {tournamentHistory.map((h, i) => (
                  <tr key={i} className="hover:bg-brand/5 transition-colors">
                    <td className="px-6 py-4 font-bold text-brand">{h.year}</td>
                    <td className="px-6 py-4 font-semibold text-gray-700">{h.champion}</td>
                    <td className="px-6 py-4">{h.runnerUp}</td>
                    <td className="px-6 py-4 text-brand font-medium">{h.mvp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-20 text-center bg-brand text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4">
            Help sponsor a team's kit or travel logistics
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-300 mb-8 leading-relaxed font-light">
            You can sponsor an entire youth team participating in the SIMY Nwankwo Cup, providing them with sports gear, dietary counseling, and secure travel.
          </p>
          <button
            onClick={() => onNavigate('donate')}
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
          >
            Sponsor Participating Teams
          </button>
        </div>
      </section>
    </div>
  );
}
