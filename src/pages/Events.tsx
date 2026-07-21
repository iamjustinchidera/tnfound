import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, MapPin, Clock, ArrowRight, Check, Sparkles } from 'lucide-react';
import { eventsData } from '../data/mockData';
import { useBodyScrollLock } from '../utils/useBodyScrollLock';

interface EventsProps {
  onNavigate: (pageId: string) => void;
}

export default function Events({ onNavigate }: EventsProps) {
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'past'>('all');
  const [selectedEvent, setSelectedEvent] = useState<typeof eventsData[0] | null>(null);
  useBodyScrollLock(!!selectedEvent);

  const filteredEvents = eventsData.filter((evt) => {
    if (filter === 'all') return true;
    return evt.status === filter;
  });

  return (
    <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
      {/* Page Header */}
      <section className="py-20 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.25em] mb-4 block">
                EVENTS & CAMPAIGNS
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand tracking-tight">
                Our Upcoming & Past Initiatives
              </h1>
              <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mt-3">
                Join our regional campaigns, watch our junior soccer matches, and help us distribute textbooks to local kids.
              </p>
            </div>

            {/* Segmented Filter Control like Apexdent */}
            <div className="flex bg-white border border-brand/10 p-1.5 rounded-full shrink-0">
              {(['all', 'upcoming', 'past'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`px-5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                    filter === tab ? 'bg-brand text-white' : 'text-gray-500 hover:text-brand'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Events */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-white rounded-3xl border border-brand/10 overflow-hidden flex flex-col justify-between group hover:border-brand/35 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="h-64 relative overflow-hidden">
                    <img
                      src={evt.image}
                      alt={evt.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-4 py-1.5 rounded-full font-mono text-[9px] font-bold uppercase tracking-widest ${
                        evt.status === 'upcoming' ? 'bg-accent text-brand' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {evt.status}
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-accent" />
                        <span>{evt.date}</span>
                      </div>
                      {evt.time && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-accent" />
                          <span>{evt.time}</span>
                        </div>
                      )}
                    </div>

                    <h2 className="font-display font-bold text-xl sm:text-2xl text-brand mb-3 leading-snug group-hover:text-brand-hover transition-colors">
                      {evt.title}
                    </h2>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed font-light mb-6">
                      {evt.description}
                    </p>

                    <div className="flex items-start gap-2 text-xs text-gray-400 bg-neutral-bg p-3.5 rounded-xl border border-brand/5">
                      <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span>{evt.location}</span>
                    </div>
                  </div>
                </div>

                <div className="px-8 pb-8 pt-4 border-t border-brand/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedEvent(evt)}
                    className="inline-flex items-center gap-1 font-display font-bold text-xs tracking-wider uppercase text-brand hover:text-accent transition-colors cursor-pointer"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </button>

                  {evt.status === 'upcoming' && (
                    <button
                      onClick={() => onNavigate('contact')}
                      className="text-[10px] font-sans font-bold uppercase tracking-widest text-accent hover:text-brand transition-colors cursor-pointer"
                    >
                      R.S.V.P • Join Us
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-brand/10">
              <p className="text-gray-400 font-sans text-sm">No events found matching this selection.</p>
            </div>
          )}
        </div>
      </section>

      {/* Detail Modal Component */}
      {selectedEvent && createPortal(
        <div className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full border border-brand/10 animate-fade-in flex flex-col max-h-[90vh]">
            <div className="h-48 relative shrink-0">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 cursor-pointer transition-colors"
                aria-label="Close details"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-6">
                <span className="font-mono text-[9px] text-accent font-bold uppercase tracking-widest">
                  {selectedEvent.date}
                </span>
                <h3 className="font-display font-bold text-xl sm:text-2xl text-white mt-1 leading-tight">
                  {selectedEvent.title}
                </h3>
              </div>
            </div>

            <div className="p-8 overflow-y-auto overscroll-contain space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5 text-xs text-gray-500">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />
                  <span>{selectedEvent.location}</span>
                </div>
                {selectedEvent.time && (
                  <div className="flex items-center gap-2.5 text-xs text-gray-500">
                    <Clock className="w-4 h-4 text-accent shrink-0" />
                    <span>{selectedEvent.time}</span>
                  </div>
                )}
              </div>

              <div className="prose prose-sm font-sans text-xs sm:text-sm text-gray-600 leading-relaxed font-light space-y-4">
                <p>{selectedEvent.fullDescription}</p>
              </div>

              <div className="pt-6 border-t border-brand/5 flex justify-end gap-3 shrink-0">
                <button
                  onClick={() => setSelectedEvent(null)}
                  className="px-5 py-2.5 rounded-full border border-brand/10 text-brand hover:bg-neutral-bg font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Close
                </button>
                {selectedEvent.status === 'upcoming' && (
                  <button
                    onClick={() => {
                      setSelectedEvent(null);
                      onNavigate('contact');
                    }}
                    className="px-5 py-2.5 rounded-full bg-brand hover:bg-brand-hover text-white font-sans font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    R.S.V.P / Contact Us
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* Featured Mass & Novelty Match Callout Banner */}
      <section className="py-24 bg-brand text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4 block">
            ANNUAL TRADITION
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Annual Thanksgiving Mass & Novelty Match
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            Every December 28th, our academy children, community traditional rulers, teachers, and coaches celebrate together. We hold mass to thank God, followed by an energetic friendly match with visiting scouts and legends.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
          >
            Sponsor/Attend This Celebration
          </button>
        </div>
      </section>
    </div>
  );
}
