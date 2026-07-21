import React from 'react';
import { ArrowLeft, BookOpen, Heart, Users, Award, Dribbble, Check, ChevronRight } from 'lucide-react';
import { programsData } from '../data/mockData';

interface ProgramDetailProps {
  programId: string;
  onNavigate: (pageId: string) => void;
}

export default function ProgramDetail({ programId, onNavigate }: ProgramDetailProps) {
  const program = programsData.find((p) => p.id === programId);

  if (!program) {
    return (
      <div className="pt-32 text-center bg-neutral-bg min-h-screen">
        <p className="text-gray-500 font-sans">Program not found.</p>
        <button
          onClick={() => onNavigate('programs')}
          className="mt-4 px-6 py-2 rounded-full bg-brand text-white font-sans text-xs uppercase"
        >
          Back to Programs
        </button>
      </div>
    );
  }

  // Choose correct icon
  let Icon = Dribbble;
  if (program.id === 'education-tutoring') Icon = BookOpen;
  if (program.id === 'health-wellbeing') Icon = Heart;
  if (program.id === 'youth-empowerment') Icon = Award;
  if (program.id === 'community-development') Icon = Users;

  return (
    <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
      {/* Dynamic Header */}
      <section className="relative py-24 bg-brand text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src={program.heroImage}
            alt={program.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-brand/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onNavigate('programs')}
            className="inline-flex items-center gap-2 text-accent/80 hover:text-accent font-sans text-xs tracking-wider uppercase mb-8 cursor-pointer group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to All Programs
          </button>

          <div className="max-w-3xl flex flex-col items-start">
            <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 text-accent flex items-center justify-center mb-6">
              <Icon className="w-6 h-6" />
            </div>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-4">
              {program.title}
            </h1>
            <p className="font-mono text-xs font-bold text-accent uppercase tracking-[0.2em] mb-6">
              {program.subtitle}
            </p>
            <p className="font-sans text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              {program.description}
            </p>
          </div>
        </div>
      </section>

      {/* Grid Content: Editorial Splitting like Apexdent */}
      <section className="py-20 bg-white border-b border-brand/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left Main Copy Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em] mb-3 block">
                  PROGRAM DESCRIPTION
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand tracking-tight mb-4">
                  How the {program.title} program works
                </h2>
                <p className="font-sans text-sm text-gray-600 leading-relaxed font-light">
                  {program.fullDescription}
                </p>
              </div>

              {/* Goals Block */}
              <div className="bg-neutral-bg rounded-2xl border border-brand/10 p-8 sm:p-10">
                <h3 className="font-display font-bold text-lg text-brand mb-6 border-b border-brand/5 pb-4">
                  Detailed Operational Goals:
                </h3>
                <ul className="space-y-4">
                  {program.goals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-500">
                      <div className="w-5 h-5 rounded-full bg-brand/5 border border-brand/15 text-brand flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-relaxed">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Meta Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Target Audience */}
              <div className="bg-white rounded-2xl border border-brand/10 p-6 sm:p-8">
                <span className="font-mono text-[10px] text-gray-400 font-bold uppercase tracking-wider block mb-2">
                  Target Demographic
                </span>
                <h4 className="font-display font-bold text-brand text-lg mb-3">Who It Supports</h4>
                <p className="font-sans text-xs text-gray-500 leading-relaxed font-light">
                  {program.audience}
                </p>
              </div>

              {/* Impact Metrics box */}
              <div className="bg-brand text-white rounded-2xl p-8 shadow-md border border-brand-hover relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:12px_12px]" />
                <h4 className="font-display font-bold text-white text-base tracking-tight mb-6 relative z-10">
                  TNF Tracked Metrics
                </h4>
                <div className="grid grid-cols-2 gap-8 relative z-10">
                  {program.impactMetrics.map((m, idx) => (
                    <div key={idx} className="border-l border-white/10 pl-4">
                      <span className="block font-display font-bold text-2xl text-accent">{m.value}</span>
                      <span className="block font-sans text-[10px] text-gray-400 uppercase tracking-wider mt-1">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specific detail conditional for Special Features */}
              {program.id === 'football-development' && (
                <div className="bg-accent/10 border border-accent/30 rounded-2xl p-6 sm:p-8">
                  <h4 className="font-display font-bold text-brand text-sm mb-2">SIMY Nwankwo Tournament Link</h4>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed mb-4">
                    Many players scouted through this program participate in our annual U18 scouting cup.
                  </p>
                  <button
                    onClick={() => onNavigate('tournament')}
                    className="inline-flex items-center gap-1 font-sans font-bold text-xs uppercase text-brand hover:text-accent transition-colors cursor-pointer"
                  >
                    View SIMY Tournament
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {program.id === 'education-tutoring' && (
                <div className="bg-brand/5 border border-brand/10 rounded-2xl p-6 sm:p-8">
                  <h4 className="font-display font-bold text-brand text-sm mb-2">Our Strict "No School, No Play" policy</h4>
                  <p className="font-sans text-xs text-gray-600 leading-relaxed">
                    Our coaching team checks players' classroom attendance worksheets weekly. Underperforming athletes receive immediate tutoring support.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Action panel */}
      <section className="py-20 text-center bg-neutral-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand tracking-tight mb-4">
            Help us widen the impact of {program.title}
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-500 mb-8 leading-relaxed font-light">
            Sponsorship directly covers equipment purchases, voluntary tutor coordination, exam scholarship costs, and parent protection seminars.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('donate')}
              className="px-6 py-3 bg-brand hover:bg-brand-hover text-white font-sans font-bold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
            >
              Donate Directly
            </button>
            <button
              onClick={() => onNavigate('get-involved')}
              className="px-6 py-3 bg-white hover:bg-neutral-bg border border-brand/20 text-brand font-sans font-semibold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
            >
              Get Involved
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
