import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { storiesData } from '../data/mockData';
import { initialsAvatar } from '../utils/avatar';

interface NewsStoriesProps {
  onNavigate: (pageId: string) => void;
}

export default function NewsStories({ onNavigate }: NewsStoriesProps) {
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const selectedStory = storiesData.find((s) => s.id === selectedStoryId);

  const categories = ['All', 'Football', 'Education', 'Community'];

  const filteredStories = storiesData.filter((story) => {
    if (categoryFilter === 'All') return true;
    return story.category === categoryFilter;
  });

  // Handle viewing full details
  if (selectedStory) {
    return (
      <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
        <section className="py-12 border-b border-brand/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <button
              onClick={() => setSelectedStoryId(null)}
              className="inline-flex items-center gap-2 text-brand hover:text-accent font-sans text-xs tracking-wider uppercase mb-8 cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to News & Stories
            </button>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 mb-4 font-mono font-bold uppercase tracking-wider">
              <span className="px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px]">
                {selectedStory.category}
              </span>
              <span>{selectedStory.date}</span>
              <span>•</span>
              <span>{selectedStory.readTime}</span>
            </div>

            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand tracking-tight mb-8 leading-tight">
              {selectedStory.title}
            </h1>

            {/* Author Profile Card */}
            <div className="flex items-center gap-4 p-4 bg-white border border-brand/10 rounded-2xl mb-12">
              <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 border border-brand/10">
                <img
                  src={selectedStory.author.avatar}
                  alt={selectedStory.author.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = initialsAvatar(selectedStory.author.name);
                  }}
                />
              </div>
              <div>
                <span className="block font-display font-bold text-xs text-brand leading-none">
                  {selectedStory.author.name}
                </span>
                <span className="block font-sans text-[10px] text-gray-400 mt-1 leading-none">
                  {selectedStory.author.role} • TNF Contributor
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Large Image Header */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
          <div className="aspect-video rounded-3xl overflow-hidden shadow-md">
            <img
              src={selectedStory.image}
              alt={selectedStory.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* Article Body */}
        <article className="pb-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-neutral">
            <div className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed font-light space-y-6">
              {selectedStory.content.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </article>

        {/* Editorial Footnote */}
        <section className="py-16 bg-brand text-white text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="font-display font-bold text-xl text-white mb-2">Help us write more success stories</h3>
            <p className="font-sans text-xs text-gray-300 leading-relaxed mb-6 font-light">
              By supporting our sports-for-development programs, you provide kids with the equipment, nutrition, and schooling necessary to achieve their educational and athletic goals.
            </p>
            <button
              onClick={() => {
                setSelectedStoryId(null);
                onNavigate('donate');
              }}
              className="px-6 py-2.5 bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-xs uppercase tracking-wider rounded-full transition-colors cursor-pointer"
            >
              Support Our Work
            </button>
          </div>
        </section>
      </div>
    );
  }

  // Listing View
  return (
    <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
      {/* Editorial Header */}
      <section className="py-20 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.25em] mb-4 block">
                TNF NEWS & BLOG
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand tracking-tight">
                Editorial & Success Stories
              </h1>
              <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mt-3">
                Read direct success stories from our local educational centers, junior soccer academies, and community workshops.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-4 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider border transition-all cursor-pointer ${
                    categoryFilter === cat
                      ? 'bg-brand text-white border-brand'
                      : 'bg-white text-gray-500 border-brand/10 hover:border-brand/40'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid listing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                id={`story-card-${story.id}`}
                className="bg-white rounded-2xl border border-brand/10 overflow-hidden flex flex-col justify-between group hover:border-brand/30 transition-all duration-300 shadow-sm"
              >
                <div>
                  <div className="h-56 relative overflow-hidden">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-brand text-accent font-mono text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                        {story.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-[11px] text-gray-400 mb-3 font-mono">
                      <span>{story.date}</span>
                      <span>•</span>
                      <span>{story.readTime}</span>
                    </div>

                    <h2 className="font-display font-bold text-lg sm:text-xl text-brand mb-3 leading-snug group-hover:text-brand-hover transition-colors line-clamp-2">
                      {story.title}
                    </h2>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed font-light line-clamp-3">
                      {story.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-4 border-t border-brand/5 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-brand/10 shrink-0">
                      <img
                        src={story.author.avatar}
                        alt={story.author.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = initialsAvatar(story.author.name);
                        }}
                      />
                    </div>
                    <span className="font-sans text-[10px] font-semibold text-gray-500">
                      {story.author.name}
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedStoryId(story.id)}
                    className="inline-flex items-center gap-1 font-display font-bold text-[10px] tracking-widest uppercase text-brand hover:text-accent transition-colors cursor-pointer"
                  >
                    Read Story
                    <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-brand/10">
              <p className="text-gray-400 font-sans text-sm">No stories found matching this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
