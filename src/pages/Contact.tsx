import React, { useState } from 'react';
import { Mail, Phone, MapPin, Check, MessageSquare, ShieldCheck, Heart } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiries',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiries',
        message: ''
      });
      setTimeout(() => setSuccess(false), 8000);
    }
  };

  return (
    <div className="pt-24 animate-fade-in bg-white min-h-screen">
      {/* Editorial Header */}
      <section className="py-16 md:py-24 border-b border-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              DIRECT CHANNELS
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl text-brand tracking-tight mt-3 mb-6">
              Connect With the Foundation
            </h1>
            <p className="font-sans text-base text-gray-500 leading-relaxed font-light">
              Do you want to sponsor, register an athlete, volunteer, or partner? Leave our administrative team a direct memo below.
            </p>
          </div>
        </div>
      </section>

      {/* Dual Column Content */}
      <section className="py-20 bg-neutral-bg/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Direct Contact Info & Map Card */}
            <div className="lg:col-span-5 space-y-10">
              <div>
                <span className="font-mono text-xs font-bold text-brand uppercase tracking-widest mb-4 block">
                  FOUNDATION OFFICES
                </span>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand tracking-tight mb-6">
                  Our Headquarters & Support Desks
                </h2>
                
                {/* Specific Contacts list */}
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand text-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-brand-hover">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-brand">Physical Office Address</h4>
                      <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed font-light">
                        House 10, Ajibade Crescent,<br />
                        Ambassador Ville, Lugbe, Abuja
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand text-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-brand-hover">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-brand">Email Correspondence</h4>
                      <p className="font-sans text-xs text-gray-500 mt-1 font-light">
                        <a href="mailto:contact@tnfound.com" className="text-accent font-semibold hover:underline">contact@tnfound.com</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-brand text-accent rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-brand-hover">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-brand">Phone Line</h4>
                      <p className="font-sans text-xs text-gray-500 mt-1 font-light">
                        <a href="tel:+2347030385129" className="text-accent font-semibold hover:underline">+234 703 038 5129</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nigeria Flag / Registered Seal Block */}
              <div className="bg-brand text-white p-6 rounded-2xl border border-brand-hover">
                <div className="flex items-center gap-3 mb-3">
                  <ShieldCheck className="w-5 h-5 text-accent" />
                  <strong className="font-display font-bold text-sm uppercase">Regulatory Legitimacy</strong>
                </div>
                <p className="font-sans text-[11px] text-gray-300 leading-normal font-light">
                  Tochukwu Nwankwo Foundation is legally registered in Nigeria with the Corporate Affairs Commission (CAC Registration Number: CAC/IT/189025). Every donation qualifies for tax exemption.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-brand/5 shadow-sm">
              {success ? (
                <div className="bg-brand text-accent p-8 rounded-2xl flex flex-col items-center text-center animate-fade-in">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl uppercase tracking-wider">Message Sent Successfully!</h3>
                  <p className="font-sans text-xs text-white/90 mt-2 font-light max-w-md leading-relaxed">
                    Thank you for writing to us. Your memo has been logged into our administration queue. One of our support managers will reach out to your email address shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="font-display font-bold text-lg text-brand mb-6 border-b border-brand/5 pb-2 uppercase tracking-wide flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-accent" /> Write Us a Memo
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-display text-xs text-brand uppercase font-bold mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Emeka Okafor"
                        className="w-full bg-neutral-bg border border-brand/10 text-brand placeholder-gray-400 text-xs px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-xs text-brand uppercase font-bold mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="emeka@gmail.com"
                        className="w-full bg-neutral-bg border border-brand/10 text-brand placeholder-gray-400 text-xs px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-display text-xs text-brand uppercase font-bold mb-2">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-neutral-bg border border-brand/10 text-brand text-xs px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand"
                    >
                      <option>General Inquiries</option>
                      <option>Sponsorship & Donations</option>
                      <option>Coaching / Volunteering Pathways</option>
                      <option>Youth Athlete Academy Admission</option>
                      <option>Corporate Partnership Proposals</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-display text-xs text-brand uppercase font-bold mb-2">
                      Your Detailed Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your question or dynamic proposal with us..."
                      className="w-full bg-neutral-bg border border-brand/10 text-brand placeholder-gray-400 text-xs px-4 py-3.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-brand resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand hover:bg-brand-hover text-white font-sans text-xs font-bold tracking-wider uppercase py-4 rounded-xl transition-colors cursor-pointer"
                  >
                    Send Direct Memo
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
