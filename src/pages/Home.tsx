import React from 'react';
import { ArrowRight, Trophy, BookOpen, Heart, Users, Award, Dribbble, ShieldCheck, ChevronRight } from 'lucide-react';
import { statsData, programsData, eventsData, testimonialsData } from '../data/mockData';
import { initialsAvatar } from '../utils/avatar';

interface HomeProps {
  onNavigate: (pageId: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const activePrograms = programsData.slice(0, 5);
  const featuredEvents = eventsData.filter(e => e.status === 'upcoming').slice(0, 2);
  const featuredStories = testimonialsData.slice(0, 3);

  return (
    <div className="animate-fade-in">
      {/* 1. CINEMATIC HERO SECTION */}
      <section id="home-hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal">
        {/* Background Image with Dark Vignette Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Young Nigerian football players celebrating"
            className="w-full h-full object-cover object-center opacity-40 scale-105 animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-charcoal/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-transparent opacity-90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 w-full flex flex-col items-start -translate-y-8 sm:translate-y-0">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl text-white tracking-tight leading-none max-w-4xl mb-6">
            Where athletic dreams meet <span className="text-accent">academic achievement</span>.
          </h1>

          <p className="font-sans text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10 leading-relaxed font-light">
            We believe every young person deserves an opportunity to discover their potential, develop their talents, and build a better future through football development, rigorous education, and child-safe communities.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              onClick={() => onNavigate('donate')}
              className="px-8 py-4 rounded-full bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-sm tracking-wider uppercase transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Support Our Mission
              <Heart className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('programs')}
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-sans font-medium text-sm tracking-wider uppercase border border-white/20 transition-all duration-200 backdrop-blur-sm cursor-pointer flex items-center justify-center gap-2"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. STATS / IMPACT SECTION */}
      <section id="impact-metrics" className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand text-white rounded-3xl p-8 md:p-12 shadow-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-4 divide-y sm:divide-y-0 lg:divide-x divide-white/10 border border-brand-hover">
          {statsData.map((stat, i) => (
            <div key={i} className="text-center pt-6 sm:pt-0 lg:px-4 first:pt-0 flex flex-col justify-center">
              <span className="block font-display font-extrabold text-4xl md:text-5xl text-accent tracking-tight mb-2">
                {stat.value}
              </span>
              <span className="block font-sans text-[11px] sm:text-xs text-gray-300 font-semibold uppercase tracking-wider leading-snug">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. ABOUT TNF SECTION */}
      <section id="about-intro" className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Col: Creative Image Montage */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/player.jpg"
                  alt="Boy on a sports field"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-1/2 aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block">
                <img
                  src="/images/child-reading.jpg"
                  alt="Sponsorship children reading"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Col: Mission text */}
            <div className="lg:col-span-7 flex flex-col items-start">
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em] mb-4">
                WHO WE ARE
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand tracking-tight mb-6">
                Tochukwu Nwankwo Foundation
              </h2>
              <p className="font-sans text-base text-gray-600 mb-8 leading-relaxed font-light">
                Founded with a fierce determination to build structured avenues for talent development and educational safety, the Tochukwu Nwankwo Foundation (TNF) combines the unifying power of sports with systemic mentorship. In partnership with community elders, parents, and schools, we create a thriving safety ring where young girls and boys aged 8 to 18 can play, learn, and grow safely.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10 w-full">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-lg text-brand mb-2">Our Mission</h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    To empower and guide young Nigerians through sports, rigorous schooling, child safeguarding frameworks, and local health access.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-lg text-brand mb-2">Our Vision</h3>
                  <p className="font-sans text-xs text-gray-500 leading-relaxed">
                    A society where every child, regardless of their starting place, is given the structural tools to discover their purpose and secure their future.
                  </p>
                </div>
              </div>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 font-display font-bold text-brand hover:text-brand-hover transition-colors text-sm tracking-wider uppercase cursor-pointer"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 text-accent" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR FOCUS AREAS */}
      <section id="focus-areas" className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em]">
              OUR WORK
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand tracking-tight mt-3 mb-6">
              Our Core Focus Areas
            </h2>
            <p className="font-sans text-sm text-gray-500 leading-relaxed">
              To support young people effectively, we maintain a multi-dimensional approach that nurtures the body, feeds the intellect, and safeguards the communal environment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activePrograms.map((prog) => {
              // Icon selector helper
              let Icon = Dribbble;
              if (prog.id === 'education-tutoring') Icon = BookOpen;
              if (prog.id === 'health-wellbeing') Icon = Heart;
              if (prog.id === 'youth-empowerment') Icon = Award;
              if (prog.id === 'community-development') Icon = Users;

              return (
                <div
                  key={prog.id}
                  className="bg-neutral-bg rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
                >
                  {/* Card Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={prog.heroImage}
                      alt={prog.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-brand text-accent rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-display font-bold text-xl text-brand mb-2 group-hover:text-brand-hover transition-colors">
                        {prog.title}
                      </h3>
                      <p className="font-sans text-xs text-gray-500 leading-relaxed mb-6">
                        {prog.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate(`program-${prog.id}`)}
                      className="inline-flex items-center gap-1.5 font-sans font-bold text-xs tracking-wider uppercase text-brand hover:text-accent transition-colors mt-auto text-left cursor-pointer"
                    >
                      Learn More
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FOOTBALL DEVELOPMENT SPLIT FEATURE */}
      <section id="football-split" className="py-24 bg-brand text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#dcae1d_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4 block">
                FLAGSHIP PATHWAY
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-6">
                Unlocking Athletic Potential on the Global Stage
              </h2>
              <p className="font-sans text-base text-gray-300 leading-relaxed mb-8 font-light">
                Through our continuous academy rosters and regional scouting modules, we empower over 1,000 active youngsters aged 8 to 18 with soccer coaching from licensed tactical mentors. Beyond physical endurance, our system molds athletes in deep life values—integrity, accountability, cooperative coordination, and global citizenship.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center mt-0.5 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block font-display text-sm text-white">Pathways & Scouting Contacts</strong>
                    <span className="font-sans text-xs text-gray-400">Continuous match screenings hosted by international scouting personnel.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center mt-0.5 shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <strong className="block font-display text-sm text-white">Full Gear Provision</strong>
                    <span className="font-sans text-xs text-gray-400">Boots, customized jerseys, soccer kits, and hydration supplies delivered entirely free of cost.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => onNavigate('program-football-development')}
                className="px-6 py-3 bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
              >
                Explore Football Development
              </button>
            </div>

            {/* Right Large Image Container */}
            <div className="lg:col-span-6 relative aspect-video lg:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="/images/football.jpg"
                alt="Youth player running drills"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-charcoal/95 backdrop-blur-sm p-5 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="block font-sans text-[10px] text-accent uppercase font-bold tracking-widest">TNF ACADEMY PATHWAY</span>
                  <span className="block font-display text-lg font-bold text-white mt-1">1,000+ Young Athletes Reached</span>
                </div>
                <span className="font-sans text-xs font-bold text-gray-300">Anambra State</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TOURNAMENT HIGHLIGHT (SIMY Cup) */}
      <section id="tournament-highlight" className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Col: Image & Badge */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src="/images/player.jpg"
                alt="SIMY cup action shot"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand/20 backdrop-brightness-50" />
              <div className="absolute top-6 left-6 bg-accent text-brand rounded-2xl px-5 py-3 font-display font-black text-center shadow-lg">
                <span className="block text-2xl leading-none">U18</span>
                <span className="block text-[10px] tracking-widest uppercase mt-1">ANNUAL CUP</span>
              </div>
            </div>

            {/* Right Col: Details */}
            <div className="lg:col-span-7 p-8 sm:p-12 md:p-16 flex flex-col justify-center items-start">
              <div className="flex items-center gap-2 mb-4 bg-brand/5 border border-brand/10 text-brand px-3.5 py-1 rounded-full font-sans text-xs font-semibold">
                <Trophy className="w-4 h-4 text-accent" />
                Featured Event Series
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand tracking-tight mb-4">
                SIMY Nwankwo Annual Under-18 Tournament
              </h2>
              <p className="font-sans text-sm text-gray-500 leading-relaxed mb-6">
                Sponsored and grandly patronized by professional footballer **Simeon "Simy" Nwankwo** (Italian Serie A forward & Super Eagles striker), our Under-18 Tournament plays host to 16 select elite football clubs. It is the premier grassroots pipeline in southeastern Nigeria for players to play in front of global agents and scouts.
              </p>
              <div className="grid grid-cols-2 gap-6 w-full mb-8">
                <div>
                  <span className="block font-display text-sm font-semibold text-brand">16 Elite Teams</span>
                  <span className="block font-sans text-xs text-gray-400 mt-1">Vying for regional glory & professional trial scouts.</span>
                </div>
                <div>
                  <span className="block font-display text-sm font-semibold text-brand">Professional Scouts</span>
                  <span className="block font-sans text-xs text-gray-400 mt-1">In attendance from European and local league circuits.</span>
                </div>
              </div>
              <button
                onClick={() => onNavigate('tournament')}
                className="inline-flex items-center gap-2 font-display font-bold text-brand hover:text-accent transition-colors text-xs tracking-wider uppercase cursor-pointer"
              >
                Learn More About The SIMY Cup
                <ArrowRight className="w-4 h-4 text-accent" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6b. COMMUNITY OUTREACH — WIDOW RELIEF */}
      <section id="widow-outreach" className="py-24 bg-brand text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image */}
            <div className="lg:col-span-6 relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="/images/widow.jpg"
                  alt="Simy Nwankwo beside bags of rice and foodstuffs donated to widows"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-brand p-5 rounded-2xl shadow-xl hidden sm:block max-w-[230px]">
                <span className="block font-display font-black text-3xl leading-none">Widows Fed</span>
                <span className="block font-sans text-[11px] font-bold uppercase tracking-widest mt-2">
                  Rice, foodstuffs &amp; essential relief
                </span>
              </div>
            </div>

            {/* Text with emphasis */}
            <div className="lg:col-span-6">
              <span className="font-mono text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4 block">
                COMMUNITY OUTREACH
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight text-white mb-6">
                Compassion Beyond the Pitch
              </h2>
              <p className="font-sans text-base sm:text-lg text-gray-200 leading-relaxed mb-6 font-light">
                Our mission has never stopped at the touchline. In a deeply personal outreach,{' '}
                <strong className="text-white font-semibold">the foundation stood with widows across the community</strong>{' '}
                &mdash; women who carry their families alone.
              </p>
              <p className="font-sans text-base text-gray-300 leading-relaxed mb-8 font-light">
                We personally distributed{' '}
                <strong className="text-accent font-bold">bags of rice, foodstuffs, and essential relief materials</strong>,
                bringing warmth, dignity, and real relief to the homes that needed it most.
              </p>

              <blockquote className="border-l-4 border-accent pl-5 py-1">
                <p className="font-display font-semibold text-lg sm:text-xl text-white italic leading-relaxed">
                  &ldquo;When you lift a widow, you lift an entire family &mdash; and a whole generation rises with her.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 7. UPCOMING EVENTS GRID */}
      <section id="upcoming-events" className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em]">
                GET INVOLVED
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-brand tracking-tight mt-3">
                Upcoming Activities & Events
              </h2>
            </div>
            <button
              onClick={() => onNavigate('events')}
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 font-display font-bold text-brand hover:text-accent text-xs tracking-wider uppercase transition-colors cursor-pointer"
            >
              View All Events
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredEvents.map((evt) => (
              <div
                key={evt.id}
                className="bg-neutral-bg rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col sm:flex-row group"
              >
                <div className="sm:w-1/3 h-48 sm:h-auto relative overflow-hidden shrink-0">
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="font-mono text-[10px] text-accent font-bold uppercase tracking-widest block mb-2">
                      {evt.date}
                    </span>
                    <h3 className="font-display font-bold text-lg text-brand mb-2 group-hover:text-brand-hover transition-colors">
                      {evt.title}
                    </h3>
                    <p className="font-sans text-xs text-gray-500 leading-relaxed mb-4 line-clamp-2">
                      {evt.description}
                    </p>
                  </div>
                  <button
                    onClick={() => onNavigate('events')}
                    className="inline-flex items-center gap-1 font-sans font-bold text-[11px] tracking-wider uppercase text-brand hover:text-accent transition-colors cursor-pointer"
                  >
                    Event Details
                    <ArrowRight className="w-3.5 h-3.5 text-accent" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS & STORIES */}
      <section id="stories-section" className="py-24 bg-neutral-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.2em]">
              TESTIMONIALS
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand tracking-tight mt-3 mb-4">
              Stories of Real Change
            </h2>
            <p className="font-sans text-sm text-gray-400">
              Hear directly from the mothers, academy students, and local educators whose futures have been supported by TNF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredStories.map((test) => (
              <div
                key={test.id}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col justify-between relative"
              >
                {/* Decorative quote mark */}
                <span className="absolute top-4 right-6 font-display font-bold text-7xl text-accent/10 pointer-events-none select-none">
                  “
                </span>
                
                <p className="font-sans text-sm text-gray-500 italic leading-relaxed mb-8 relative z-10">
                  "{test.quote}"
                </p>

                <div className="flex items-center gap-4 border-t border-gray-50 pt-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-accent/20">
                    <img
                      src={test.image}
                      alt={test.author}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = initialsAvatar(test.author);
                      }}
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-brand text-sm leading-tight">
                      {test.author}
                    </h4>
                    <span className="block font-sans text-[11px] text-gray-400 mt-0.5 leading-none">
                      {test.role} • {test.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. EMOTIONAL FINAL CALL TO ACTION */}
      <section id="emotional-cta" className="relative py-28 bg-brand text-white overflow-hidden text-center">
        {/* Ambient overlay background */}
        <div className="absolute inset-0">
          <img
            src="/images/health.jpg"
            alt="Smiling children"
            className="w-full h-full object-cover opacity-15 brightness-50"
          />
          <div className="absolute inset-0 bg-brand/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="font-mono text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4 block">
            JOIN THE EFFORT
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight leading-tight mb-6">
            Help us give every young person a chance to thrive.
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Your generous contribution or volunteer support fuels our soccer kits distribution, school textbooks procurement, regional teacher stipends, and community safe pitches renovation.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('donate')}
              className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-sm tracking-wider uppercase rounded-full transition-colors cursor-pointer"
            >
              Donate Financial Aid
            </button>
            <button
              onClick={() => onNavigate('get-involved')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-sans font-semibold text-sm tracking-wider uppercase rounded-full transition-colors cursor-pointer"
            >
              Partner / Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
