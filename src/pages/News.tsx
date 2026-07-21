import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Calendar, User, Clock, ArrowRight, X, ChevronRight, Share2 } from 'lucide-react';
import { storiesData } from '../data/mockData';
import { NewsStory } from '../types';
import { initialsAvatar } from '../utils/avatar';
import { useBodyScrollLock } from '../utils/useBodyScrollLock';

export default function News() {
  const [selectedStory, setSelectedStory] = useState<NewsStory | null>(null);
  useBodyScrollLock(!!selectedStory);

  return (
    <div className="pt-24 animate-fade-in bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              TNF CHRONICLES
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-brand tracking-tight mt-3 mb-6">
              Latest Foundation Stories & Academy Updates
            </h1>
            <p className="font-sans text-base text-gray-500 leading-relaxed font-light">
              Explore our local field success, academic breakthroughs, volunteer chronicles, and direct statements from the Board of Trustees.
            </p>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-20 bg-neutral-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {storiesData.map((story) => (
              <div
                key={story.id}
                className="bg-white rounded-3xl border border-brand/5 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group cursor-pointer"
                onClick={() => setSelectedStory(story)}
              >
                <div>
                  {/* Photo cover */}
                  <div className="h-56 overflow-hidden relative">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    {/* Category Label */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand text-accent font-mono text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full">
                        {story.category}
                      </span>
                    </div>
                  </div>

                  {/* Body details */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 font-sans text-[11px] text-gray-400 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {story.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {story.readTime}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl text-brand mb-3 group-hover:text-brand-hover transition-colors leading-tight line-clamp-2">
                      {story.title}
                    </h3>

                    <p className="font-sans text-xs text-gray-500 leading-relaxed font-light line-clamp-3 mb-6">
                      {story.excerpt}
                    </p>
                  </div>
                </div>

                {/* Card Footer author row */}
                <div className="p-6 border-t border-brand/5 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={story.author.avatar}
                      alt={story.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-accent/25 shrink-0"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = initialsAvatar(story.author.name);
                      }}
                    />
                    <div>
                      <span className="block font-display font-bold text-brand text-xs">
                        {story.author.name}
                      </span>
                      <span className="block font-sans text-[10px] text-gray-400">
                        {story.author.role}
                      </span>
                    </div>
                  </div>

                  <span className="w-8 h-8 rounded-full bg-brand/5 group-hover:bg-brand group-hover:text-white text-brand flex items-center justify-center transition-all">
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DISTRACTION-FREE STORY OVERLAY MODAL */}
      {selectedStory && createPortal(
        <div className="fixed inset-0 bg-charcoal/90 backdrop-blur-md z-[60] overflow-y-auto overscroll-contain flex justify-center py-10 px-4 animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-3xl overflow-hidden shadow-2xl relative flex flex-col h-fit">
            
            {/* Header / Hero Cover of Article */}
            <div className="relative h-[320px] bg-charcoal">
              <img
                src={selectedStory.image}
                alt={selectedStory.title}
                className="w-full h-full object-cover opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
              
              {/* Back close button */}
              <button
                onClick={() => setSelectedStory(null)}
                aria-label="Close article"
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-charcoal/80 text-white flex items-center justify-center hover:bg-black transition-colors focus:outline-none cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 max-w-2xl">
                <span className="bg-brand text-accent font-mono text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-3 inline-block">
                  {selectedStory.category}
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand tracking-tight leading-tight">
                  {selectedStory.title}
                </h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 sm:p-10">
              {/* Author and Date row */}
              <div className="flex items-center justify-between border-b border-brand/5 pb-6 mb-8 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <img
                    src={selectedStory.author.avatar}
                    alt={selectedStory.author.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-accent"
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = initialsAvatar(selectedStory.author.name);
                    }}
                  />
                  <div>
                    <span className="block font-display font-bold text-brand text-sm">
                      {selectedStory.author.name}
                    </span>
                    <span className="block font-sans text-xs text-gray-400">
                      {selectedStory.author.role} • TNF Authority
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-gray-400">
                  <span>{selectedStory.date}</span>
                  <span>•</span>
                  <span>{selectedStory.readTime}</span>
                </div>
              </div>

              {/* Story Paragraphs */}
              <div className="space-y-6 font-sans text-sm sm:text-base text-gray-600 font-light leading-relaxed whitespace-pre-line">
                {selectedStory.content.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Close Button Row */}
              <div className="mt-12 pt-8 border-t border-brand/5 flex items-center justify-between">
                <span className="font-mono text-xs text-gray-400">Tochukwu Nwankwo Foundation © 2026</span>
                <button
                  onClick={() => setSelectedStory(null)}
                  className="bg-brand hover:bg-brand-hover text-white px-6 py-3 rounded-full font-sans text-xs font-bold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
