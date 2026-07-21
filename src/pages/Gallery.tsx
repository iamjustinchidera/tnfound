import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { Image, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { galleryData } from '../data/mockData';
import { useBodyScrollLock } from '../utils/useBodyScrollLock';

interface GalleryProps {
  onNavigate: (pageId: string) => void;
}

export default function Gallery({ onNavigate }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  useBodyScrollLock(lightboxIndex !== null);

  const categories = ['All', 'Football', 'Training', 'Tournaments', 'Education', 'Community', 'Events'];

  const filteredItems = galleryData.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const openLightbox = (itemIndex: number) => {
    // Find the actual index in the filtered array
    setLightboxIndex(itemIndex);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
      {/* Header section */}
      <section className="py-20 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.25em] mb-4 block">
                MEDIA ARCHIVE
              </span>
              <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand tracking-tight">
                Our Visual Journey
              </h1>
              <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mt-3">
                Glance through our active sports training sessions, educational tutoring setups, child-safe seminars, and community thanksgiving mass.
              </p>
            </div>

            {/* Scrolling categories menu */}
            <div className="flex overflow-x-auto gap-2 pb-2 scrollbar-none shrink-0 max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4.5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer border ${
                    activeCategory === cat
                      ? 'bg-brand text-white border-brand'
                      : 'bg-white text-gray-500 border-brand/10 hover:border-brand/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Grid of gallery pictures */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
            {filteredItems.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => openLightbox(idx)}
                className="break-inside-avoid bg-white rounded-2xl border border-brand/10 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer relative"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover indicator overlay */}
                  <div className="absolute inset-0 bg-brand/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white flex items-center justify-center">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Subtitle bar */}
                <div className="p-5 border-t border-brand/5">
                  <span className="font-mono text-[9px] text-accent font-bold uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-display font-bold text-sm text-brand leading-snug">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="font-sans text-[11px] text-gray-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-brand/10">
              <p className="text-gray-400 font-sans text-sm">No items found matching this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && createPortal(
        <div
          className="fixed inset-0 bg-charcoal/95 backdrop-blur-sm z-[60] flex flex-col justify-between p-6 select-none"
          onClick={closeLightbox}
        >
          {/* Lightbox Topbar */}
          <div className="flex items-center justify-between text-white shrink-0">
            <div>
              <span className="font-mono text-[10px] text-accent uppercase tracking-widest block">
                {filteredItems[lightboxIndex].category}
              </span>
              <h4 className="font-display font-bold text-lg">
                {filteredItems[lightboxIndex].title}
              </h4>
            </div>
            <button
              onClick={closeLightbox}
              className="p-2 rounded-full hover:bg-white/10 text-gray-300 hover:text-white cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Mid: Image & Controls */}
          <div className="flex-1 flex items-center justify-between my-4 relative">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white cursor-pointer shrink-0 z-10 mr-4"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              className="max-w-4xl max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10 flex items-center justify-center mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="w-full h-auto max-h-[70vh] object-contain"
                referrerPolicy="no-referrer"
              />
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white cursor-pointer shrink-0 z-10 ml-4"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Bottom description */}
          <div className="text-center text-gray-400 text-xs shrink-0 py-2">
            <p>{filteredItems[lightboxIndex].description || 'Tochukwu Nwankwo Foundation (TNF)'}</p>
            <span className="block text-[10px] text-gray-500 font-mono uppercase tracking-widest mt-1">
              IMAGE {lightboxIndex + 1} OF {filteredItems.length}
            </span>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
