import React from 'react';
import { Heart, Users, Globe, BookOpen, Gift, ArrowRight, Mail } from 'lucide-react';

interface GetInvolvedProps {
  onNavigate: (pageId: string) => void;
}

export default function GetInvolved({ onNavigate }: GetInvolvedProps) {
  const supportPaths = [
    {
      title: 'Volunteer / Coach',
      desc: 'Join our local centers to offer academic tutoring, first-aid support, coach training, or youth safeguarding seminars.',
      icon: Users,
      cta: 'Join as Volunteer',
      target: 'contact'
    },
    {
      title: 'Partner with Us',
      desc: 'For football clubs, international academies, or school boards to establish scouting networks and student exchanges.',
      icon: Globe,
      cta: 'Discuss Partnership',
      target: 'contact'
    },
    {
      title: 'Sponsor sports gear',
      desc: 'Fund football boots, tournament kits, customized team vests, hydration supplies, or field renovation tools.',
      icon: Gift,
      cta: 'Sponsor Program',
      target: 'donate'
    },
    {
      title: 'Sponsor a young person',
      desc: 'Provide an annual scholarship covering school tuition fees, school books, exam registry costs, or daily tutoring support.',
      icon: BookOpen,
      cta: 'Support a Student',
      target: 'donate'
    }
  ];

  return (
    <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
      {/* Page Header */}
      <section className="py-20 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.25em] mb-4 block">
              PARTICIPATION
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-brand tracking-tight mb-6">
              Join Us in Creating <span className="text-gray-500">Opportunity</span>.
            </h1>
            <p className="font-sans text-sm sm:text-base text-gray-600 leading-relaxed font-light">
              We welcome individuals, corporate entities, international sports scout networks, and academic tutors. Together, we can maintain the safety ring around Nigerian youth.
            </p>
          </div>
        </div>
      </section>

      {/* Grid of involvement cards */}
      <section className="py-20 bg-white border-b border-brand/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {supportPaths.map((path, idx) => {
              const Icon = path.icon;
              return (
                <div
                  key={idx}
                  className="bg-neutral-bg rounded-2xl border border-brand/10 p-8 sm:p-10 flex flex-col justify-between hover:border-brand/30 transition-colors shadow-sm"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-brand/5 border border-brand/10 text-brand flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-brand mb-3">
                      {path.title}
                    </h3>
                    <p className="font-sans text-sm text-gray-500 leading-relaxed font-light mb-8">
                      {path.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => onNavigate(path.target)}
                    className="inline-flex items-center gap-1.5 font-display font-bold text-xs uppercase tracking-wider text-brand hover:text-accent transition-colors self-start cursor-pointer"
                  >
                    {path.cta}
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust Quote / Safeguarding Statement */}
      <section className="py-24 bg-brand text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight mb-4">
            Our Strict Child Safeguarding Code of Conduct
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl mx-auto mb-8 font-light">
            To ensure absolute safety, all volunteers, coaches, and tutors must sign and adhere to the TNF Child Protection Policy. We run active screening checks to maintain an exploitation-free environment for every boy and girl.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-6 py-3 bg-accent hover:bg-accent-hover text-brand font-sans font-bold text-xs tracking-wider uppercase rounded-full transition-colors cursor-pointer"
          >
            Review Safeguarding Policy / Apply
          </button>
        </div>
      </section>
    </div>
  );
}
