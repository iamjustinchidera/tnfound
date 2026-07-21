import React from 'react';
import { BookOpen, Heart, Users, Award, Dribbble, ArrowRight } from 'lucide-react';
import { programsData } from '../data/mockData';

interface ProgramsProps {
  onNavigate: (pageId: string) => void;
}

export default function Programs({ onNavigate }: ProgramsProps) {
  return (
    <div className="pt-24 animate-fade-in bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              Core Framework
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-brand tracking-tight mt-3 mb-6">
              Our Active Programs & Social Initiatives
            </h1>
            <p className="font-sans text-base text-gray-500 leading-relaxed font-light">
              To support Nigerian youth effectively, we maintain a integrated ecosystem that connects sports with education, physical safeguarding, and parent-teacher collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* Program Grid Section */}
      <section className="py-20 bg-neutral-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {programsData.map((prog, index) => {
              // Icon Map
              let Icon = Dribbble;
              if (prog.id === 'education-tutoring') Icon = BookOpen;
              if (prog.id === 'health-wellbeing') Icon = Heart;
              if (prog.id === 'youth-empowerment') Icon = Award;
              if (prog.id === 'community-development') Icon = Users;

              return (
                <div
                  key={prog.id}
                  className="bg-white rounded-3xl border border-brand/5 shadow-sm p-8 sm:p-10 flex flex-col justify-between group hover:shadow-md transition-all duration-300 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 rounded-bl-full pointer-events-none group-hover:bg-brand/10 transition-colors" />
                  
                  <div>
                    {/* Header line */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-brand text-accent flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] tracking-widest text-accent font-bold uppercase">
                          TNF Program {index + 1}
                        </span>
                        <h2 className="font-display font-bold text-xl sm:text-2xl text-brand leading-none">
                          {prog.title}
                        </h2>
                      </div>
                    </div>

                    <p className="font-sans text-xs sm:text-sm text-gray-400 font-semibold mb-4 italic">
                      {prog.subtitle}
                    </p>

                    <p className="font-sans text-sm text-gray-500 leading-relaxed mb-8 font-light">
                      {prog.description}
                    </p>

                    {/* Key Goals List */}
                    <div className="space-y-3 mb-8">
                      <h4 className="font-display font-bold text-xs text-brand uppercase tracking-wider">
                        Program Objectives
                      </h4>
                      <ul className="space-y-2">
                        {prog.goals.slice(0, 2).map((goal, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-gray-500 font-light">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions & Metrics Row */}
                  <div className="border-t border-brand/5 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex gap-6">
                      {prog.impactMetrics.slice(0, 2).map((metric, idx) => (
                        <div key={idx}>
                          <span className="block font-display font-bold text-lg text-brand leading-none">
                            {metric.value}
                          </span>
                          <span className="block font-sans text-[10px] text-gray-400 mt-1 uppercase">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => onNavigate(`program-${prog.id}`)}
                      className="inline-flex items-center gap-2 bg-brand text-white hover:bg-brand-hover font-sans text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full transition-colors cursor-pointer w-full sm:w-auto justify-center"
                    >
                      Explore Program
                      <ArrowRight className="w-3.5 h-3.5 text-accent" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-20 bg-brand text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <span className="font-mono text-xs font-bold text-accent tracking-[0.2em] uppercase mb-4 block">
            HOW YOU CAN HELP
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
            Support an Initiative or Sponsor school fees
          </h2>
          <p className="font-sans text-sm text-gray-300 mb-10 leading-relaxed font-light">
            Every donation is directly mapped to active programs—whether purchasing sports kits, funding teacher stipends, or equipping community tutoring classes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => onNavigate('donate')}
              className="bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-colors cursor-pointer"
            >
              Donate Now
            </button>
            <button
              onClick={() => onNavigate('get-involved')}
              className="bg-white/10 hover:bg-white/15 border border-white/20 text-white font-sans font-bold text-xs tracking-wider uppercase px-8 py-4 rounded-full transition-colors cursor-pointer"
            >
              Partner With Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
