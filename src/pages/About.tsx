import React from 'react';
import { Target, Compass, Award, Shield, User, Heart, Star, Check } from 'lucide-react';
import { founderBio, patronBio } from '../data/mockData';

interface AboutProps {
  onNavigate: (pageId: string) => void;
}

export default function About({ onNavigate }: AboutProps) {
  const values = [
    {
      title: 'Integrity First',
      description: 'We believe that character on the football pitch reflects character in life. Our coaches enforce strict truthfulness, accountability, and fair play in all interactions.',
      icon: Shield
    },
    {
      title: 'Active Inclusion',
      description: 'Regardless of economic background, gender, or starting athletic capability, we provide equal learning and development paths for every young child.',
      icon: Heart
    },
    {
      title: 'Strive for Excellence',
      description: 'We push our students to excel in their academic tutoring, secondary school exams, and physical soccer skills. Standard results require absolute effort.',
      icon: Star
    }
  ];

  return (
    <div className="pt-24 animate-fade-in">
      {/* 1. HERO BANNER */}
      <section className="bg-brand text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-[0.25em] mb-4 block">
            ABOUT US
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none mb-6">
            Molding the Future, <span className="text-accent">One Athlete</span> at a Time.
          </h1>
          <p className="font-sans text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Discover the origins, values, and leadership that drive the Tochukwu Nwankwo Foundation's sport-for-development initiatives.
          </p>
        </div>
      </section>

      {/* 2. CORE ORIGIN STORY */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Authentic imagery of classrooms & fields */}
            <div className="lg:col-span-6 space-y-6">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/images/child-reading.jpg"
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="/images/back-to-school.jpg"
                    alt="Happy child studying"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-md bg-accent flex flex-col justify-center p-6 text-brand">
                  <span className="font-display font-black text-3xl sm:text-4xl">82%</span>
                  <p className="font-sans text-xs font-semibold uppercase tracking-wider mt-2">
                    Academy school connection rate
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Origin copy */}
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em] mb-4">
                THE GENESIS
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand tracking-tight mb-6">
                Why We Exist & The Challenges We Face
              </h2>
              <p className="font-sans text-sm text-gray-600 mb-6 leading-relaxed">
                In many regional communities across southeastern Nigeria, talented youths harbor grand dreams of playing professional football. However, without structural sports pathways, adequate nutritional guidelines, or athletic safety rules, these dreams often run cold.
              </p>
              <p className="font-sans text-sm text-gray-600 mb-8 leading-relaxed">
                Even more concerning is how athletic training is often prioritised at the expense of primary and secondary schooling, leaving retired or unplaced youngsters without essential literacy or job skills. The Tochukwu Nwankwo Foundation was created to destroy this division. We exist to provide kids with a top-grade sporting ecosystem, while holding them to stringent educational and tutoring support goals.
              </p>

              {/* Approach list */}
              <div className="space-y-4">
                {[
                  'Professional Academy Scouting pathways with no tuition fees.',
                  'Rigorous after-school worksheets, homework checkups, and library centers.',
                  'Physical wellness guidance, child protection protocols, and local parents roundtables.'
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 text-xs text-gray-500">
                    <div className="w-5 h-5 rounded-full bg-brand/10 text-brand flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MISSION, VISION, VALUES */}
      <section className="py-24 bg-neutral-bg border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* Mission Box */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-brand text-accent flex items-center justify-center shrink-0 shadow-md">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-brand mb-4">Our Mission</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  To empower and protect young Nigerians by providing professional football coaching, strict academic tutoring support, local healthcare education, and community safe arenas. We align parents, tutors, and sports coaches to establish a safety ring that allows every participant to grow safely.
                </p>
              </div>
            </div>

            {/* Vision Box */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm flex gap-6 items-start">
              <div className="w-12 h-12 rounded-2xl bg-brand text-accent flex items-center justify-center shrink-0 shadow-md">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-display font-bold text-2xl text-brand mb-4">Our Vision</h3>
                <p className="font-sans text-sm text-gray-500 leading-relaxed">
                  A society where every child, regardless of their family's economic status, is given a balanced, trustworthy platform to discover their athletic talents, excel in their academic lessons, and confidently transition into productive adulthood.
                </p>
              </div>
            </div>
          </div>

          {/* Values Row */}
          <div>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand text-center tracking-tight mb-12">
              Our Core Foundation Values
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <div key={i} className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-accent/10 text-brand flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-brand mb-3">{val.title}</h4>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOUNDER & LEADERSHIP PROFILE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em]">
              LEADERSHIP
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand tracking-tight mt-3 mb-4">
              The Visionaries Behind TNF
            </h2>
            <p className="font-sans text-sm text-gray-400">
              Meet our founder, board advisory team, and athletic benefactors who drive our programmatic strategy forward.
            </p>
          </div>

          {/* Founder Split Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
            {/* Founder Image */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={founderBio.image}
                  alt={founderBio.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-brand text-white p-4 rounded-xl shadow-lg border border-white/10">
                <span className="block font-display font-bold text-base leading-none">{founderBio.name}</span>
                <span className="block font-sans text-[10px] text-accent font-semibold tracking-widest mt-1.5 uppercase">{founderBio.title}</span>
              </div>
            </div>

            {/* Founder Bio Copy */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.15em] mb-3">
                MEET THE FOUNDER
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand mb-6">
                Tochukwu Nwankwo
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 font-light">
                {founderBio.bio}
              </p>
              <div className="p-5 bg-neutral-bg border border-gray-100 rounded-2xl w-full">
                <p className="font-sans text-xs text-brand italic font-medium leading-relaxed">
                  "Talent is universal in Nigeria, but structure is not. We believe football and rigorous tutoring must walk hand-in-hand to produce the resilient citizens our nation deserves."
                </p>
              </div>
            </div>
          </div>

          {/* Patron Split Detail */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Patron Bio Copy - Left for order on big screen */}
            <div className="lg:col-span-7 order-2 lg:order-1 flex flex-col items-start">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.15em] mb-3">
                OUR PATRON
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-brand mb-6">
                Simeon 'Simy' Nwankwo
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed mb-6 font-light">
                {patronBio.bio}
              </p>
              <div className="p-5 bg-neutral-bg border border-gray-100 rounded-2xl w-full">
                <p className="font-sans text-xs text-brand italic font-medium leading-relaxed">
                  "I was once a kid running on these exact pitches in Nigeria. Knowing there is a foundation like TNF safeguarding kids and keeping them in schools makes every ounce of our support completely worthwhile."
                </p>
              </div>
            </div>

            {/* Patron Image - Right on big screen */}
            <div className="lg:col-span-5 order-1 lg:order-2 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src={patronBio.image}
                  alt={patronBio.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-brand text-white p-4 rounded-xl shadow-lg border border-white/10">
                <span className="block font-display font-bold text-base leading-none">{patronBio.name}</span>
                <span className="block font-sans text-[10px] text-accent font-semibold tracking-widest mt-1.5 uppercase">{patronBio.title}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. APPROACH OVERVIEW */}
      <section className="py-24 bg-neutral-bg border-t border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em] mb-4 block">
            OUR MODEL
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand tracking-tight mb-6">
            A Multi-Tiered Sports & Development Approach
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            By coordinating athletic drills, customized school worksheets, pediatric hygiene guidelines, parent safeguarding roundtables, and vocational tool funding, TNF ensures that youth development is structurally supported from every angle.
          </p>
          <button
            onClick={() => onNavigate('programs')}
            className="px-8 py-4 bg-brand hover:bg-brand-hover text-white font-sans font-bold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
          >
            Explore Programs In-Depth
          </button>
        </div>
      </section>
    </div>
  );
}
