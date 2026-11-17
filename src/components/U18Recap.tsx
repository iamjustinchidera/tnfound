import React, { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight, ArrowUpRight, Expand } from 'lucide-react';
import { useBodyScrollLock } from '../utils/useBodyScrollLock';

interface U18RecapProps {
  onNavigate: (pageId: string) => void;
}

// One "frame" per photo from matchday. `span` drives the bento layout.
const frames = [
  {
    src: '/images/u18/the-lift.jpg',
    tag: 'The lift',
    caption:
      'Gold medal round his neck, the cup in both hands. The green side are the first ever TNF Under-18 champions.',
    alt: 'Player in a green TNF Under 18 Tournament jersey receiving the gold trophy at the presentation table',
    span: 'col-span-2 row-span-2',
    position: 'object-[center_35%]',
  },
  {
    src: '/images/u18/blue-side.jpg',
    tag: 'Blue side',
    caption: 'Lined up before kick-off, in shirts printed specially for the 1st edition.',
    alt: 'Team in blue kits posing with coaches before a match',
    span: 'col-span-2',
    position: 'object-center',
  },
  {
    src: '/images/u18/green-side.jpg',
    tag: 'Green side',
    caption: 'Same pitch, same printed shirts. A few hours later, these boys were champions.',
    alt: 'Team in green kits posing with coaches before a match',
    span: 'col-span-2',
    position: 'object-center',
  },
  {
    src: '/images/u18/officials.jpg',
    tag: 'Officials',
    caption: 'Referees, assistants and organisers in front of the Christ the King College stand.',
    alt: 'Match officials and organisers standing in front of the Christ the King College Onitsha stand',
    span: 'col-span-1 row-span-2',
    position: 'object-[center_60%]',
  },
  {
    src: '/images/u18/prize-table.jpg',
    tag: 'On the table',
    caption: 'The trophy, a row of medals and an Access Bank cheque for ₦500,000.',
    alt: 'Gold trophy and medals on a table above an Access Bank cheque for five hundred thousand naira',
    span: 'col-span-1 row-span-2',
    position: 'object-[center_45%]',
  },
  {
    src: '/images/u18/high-table.jpg',
    tag: 'High table',
    caption: 'Guests and organisers watching from the stand, with the prizes laid out in front of them.',
    alt: 'Guests seated in the stand behind the trophy, medals and prize cheque',
    span: 'col-span-2 row-span-2',
    position: 'object-[center_40%]',
  },
];

const ticket = [
  { k: 'Competition', v: 'TNF Under-18 Tournament' },
  { k: 'Edition', v: '01 / First ever' },
  { k: 'Venue', v: 'Christ the King College, Onitsha' },
  { k: 'Matchday', v: 'Wed 07 Oct 2026' },
  { k: 'Eligibility', v: 'Players aged 18 & under' },
];

const tickerItems = [
  'Full time',
  'TNF U18 · 1st edition',
  'CKC Onitsha',
  '07.10.2026',
  '₦500,000 prize',
  'Green side lift the cup',
  'See you at edition 02',
];

/** Faint pitch markings drawn in SVG so the section feels like it sits on grass lines. */
function PitchLines() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 w-full h-full text-white/[0.05] pointer-events-none"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="40" y="40" width="1120" height="720" />
      <line x1="600" y1="40" x2="600" y2="760" />
      <circle cx="600" cy="400" r="110" />
      <circle cx="600" cy="400" r="4" fill="currentColor" />
      <rect x="40" y="220" width="170" height="360" />
      <rect x="40" y="310" width="60" height="180" />
      <rect x="990" y="220" width="170" height="360" />
      <rect x="1100" y="310" width="60" height="180" />
      <path d="M210 330 A 90 90 0 0 1 210 470" />
      <path d="M990 330 A 90 90 0 0 0 990 470" />
    </svg>
  );
}

export default function U18Recap({ onNavigate }: U18RecapProps) {
  const [open, setOpen] = useState<number | null>(null);
  useBodyScrollLock(open !== null);

  const step = useCallback(
    (dir: 1 | -1) => setOpen((i) => (i === null ? i : (i + dir + frames.length) % frames.length)),
    []
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(null);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, step]);

  const current = open !== null ? frames[open] : null;

  return (
    <section id="u18-first-edition" className="relative bg-charcoal text-white overflow-hidden">
      <PitchLines />

      {/* Giant outlined watermark */}
      <span
        aria-hidden="true"
        className="absolute -top-6 sm:-top-10 right-0 sm:right-4 font-display font-bold leading-none text-[9rem] sm:text-[14rem] lg:text-[20rem] text-stroke-white opacity-40 select-none pointer-events-none tracking-tighter"
      >
        U18
      </span>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* ---------- Header + matchday ticket ---------- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="flex items-center gap-2 bg-accent text-brand font-mono text-[11px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                FT
              </span>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-[0.2em]">
                Matchday report · October 2026
              </span>
            </div>

            <h2 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[0.95] mb-6">
              Edition one is
              <br />
              <span className="text-accent">in the books.</span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-gray-300 leading-relaxed font-light max-w-xl mb-4">
              In October we took the{' '}
              <strong className="text-white font-semibold">Tochukwu Simeon Nwankwo Under-18 Tournament</strong>{' '}
              to the pitch at Christ the King College, Onitsha. It was the first one we've ever run.
            </p>
            <p className="font-sans text-sm text-gray-400 leading-relaxed font-light max-w-xl">
              There were kits printed for the occasion, proper match officials and a stand full of people
              watching. A trophy, gold medals and a{' '}
              <strong className="text-accent font-semibold">₦500,000 prize</strong> were waiting at the high
              table. The boys played for every one of them.
            </p>
          </div>

          {/* Ticket stub */}
          <div className="lg:col-span-5">
            <div className="relative bg-white text-charcoal rounded-2xl shadow-2xl rotate-0 lg:rotate-[1.5deg] hover:rotate-0 transition-transform duration-500">
              {/* perforation notches */}
              <span className="absolute -left-3 top-[68%] w-6 h-6 rounded-full bg-charcoal" />
              <span className="absolute -right-3 top-[68%] w-6 h-6 rounded-full bg-charcoal" />

              <div className="px-6 sm:px-7 pt-6 pb-5">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-brand">
                    Admit one · Matchday
                  </span>
                  <span className="font-mono text-[10px] text-gray-400">No. 001</span>
                </div>
                <dl className="space-y-2.5">
                  {ticket.map((row) => (
                    <div key={row.k} className="flex items-baseline justify-between gap-4 border-b border-dashed border-gray-200 pb-2.5 last:border-0 last:pb-0">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-gray-400 shrink-0">{row.k}</dt>
                      <dd className="font-display font-semibold text-sm text-brand text-right">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="border-t-2 border-dashed border-gray-200 px-6 sm:px-7 py-5 flex items-center justify-between gap-4">
                <div>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-gray-400">Prize purse</span>
                  <span className="block font-display font-bold text-3xl text-brand tracking-tight">₦500,000</span>
                </div>
                {/* decorative barcode */}
                <div aria-hidden="true" className="flex items-end gap-[2px] h-10">
                  {[3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 3, 1, 2, 1, 3, 1, 2].map((w, i) => (
                    <span key={i} className="bg-charcoal h-full" style={{ width: `${w}px` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Bento photo wall ---------- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[170px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {frames.map((f, i) => (
            <button
              key={f.src}
              type="button"
              onClick={() => setOpen(i)}
              className={`${f.span} group relative overflow-hidden rounded-2xl bg-brand text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent`}
              aria-label={`Open photo: ${f.tag}`}
            >
              <img
                src={f.src}
                alt={f.alt}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover ${f.position} transition-transform duration-700 ease-out group-hover:scale-[1.06]`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/20 to-transparent" />

              {/* frame number */}
              <span className="absolute top-3 left-3 font-mono text-[10px] font-bold tracking-widest bg-charcoal/70 backdrop-blur-sm text-accent px-2 py-1 rounded">
                U·{String(i + 1).padStart(2, '0')}
              </span>
              <span className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Expand className="w-3.5 h-3.5" />
              </span>

              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <span className="block font-display font-bold text-base sm:text-xl leading-tight">{f.tag}</span>
                <span className="hidden sm:block font-sans text-xs text-gray-300 leading-relaxed mt-1 max-w-sm max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {f.caption}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* ---------- Footer row ---------- */}
        <div className="mt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/10 pt-8">
          <p className="font-sans text-sm text-gray-400 max-w-lg">
            <span className="text-white font-semibold">Edition 02 is already on our minds.</span> If you'd like to put
            your name on a team's kit, the medals or the prize purse, we'd love to hear from you.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-xs tracking-wider uppercase transition-colors cursor-pointer"
          >
            Sponsor the next edition
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ---------- Scrolling scoreboard ticker ---------- */}
      <div className="relative z-10 border-t border-white/10 bg-accent text-brand overflow-hidden">
        <div className="flex w-max animate-marquee py-3">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
              {tickerItems.map((t) => (
                <span key={t} className="flex items-center font-mono text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap px-6">
                  {t}
                  <span className="ml-12 w-1.5 h-1.5 rotate-45 bg-brand" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- Lightbox ---------- */}
      {current &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] bg-charcoal/95 backdrop-blur-sm flex flex-col animate-fade-in"
            role="dialog"
            aria-modal="true"
            aria-label={current.tag}
            onClick={() => setOpen(null)}
          >
            <div className="flex items-center justify-between px-5 sm:px-8 py-5 text-white">
              <span className="font-mono text-xs tracking-widest text-accent">
                U·{String(open! + 1).padStart(2, '0')} <span className="text-gray-500">/ {String(frames.length).padStart(2, '0')}</span>
              </span>
              <button
                onClick={() => setOpen(null)}
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 min-h-0 flex items-center justify-center gap-2 sm:gap-6 px-2 sm:px-8">
              <button
                onClick={(e) => { e.stopPropagation(); step(-1); }}
                className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <img
                key={current.src}
                src={current.src}
                alt={current.alt}
                onClick={(e) => e.stopPropagation()}
                className="max-h-full max-w-full min-w-0 object-contain rounded-xl shadow-2xl animate-fade-in"
              />
              <button
                onClick={(e) => { e.stopPropagation(); step(1); }}
                className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="px-5 sm:px-8 py-6 text-center" onClick={(e) => e.stopPropagation()}>
              <span className="block font-display font-bold text-xl text-white">{current.tag}</span>
              <span className="block font-sans text-sm text-gray-400 mt-1 max-w-xl mx-auto">{current.caption}</span>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
