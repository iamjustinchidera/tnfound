import React from 'react';

export default function Terms() {
  return (
    <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
      <section className="py-20 border-b border-brand/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.25em] mb-4 block">
            TERMS OF SERVICE
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand tracking-tight mb-2">
            Terms & Conditions
          </h1>
          <p className="font-sans text-[11px] text-gray-400 uppercase tracking-widest font-mono">
            LAST UPDATED: JULY 20, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 prose prose-neutral font-sans text-xs sm:text-sm text-gray-600 leading-relaxed font-light space-y-6">
          <p>
            Welcome to the official website of the Tochukwu Nwankwo Foundation ("TNF", "we", "us", or "our"). By accessing or using this website, you agree to comply with and be bound by the following Terms & Conditions. If you do not agree to these terms, please refrain from using our services.
          </p>

          <h2 className="font-display font-bold text-lg text-brand pt-4">1. Use of Website</h2>
          <p>
            You agree to use this website solely for lawful purposes related to learning about our charitable mission, sponsoring our youth programs, or contacting our team. You are strictly prohibited from attempting to breach website security, transmit malicious script lines, or scrape private youth roster details.
          </p>

          <h2 className="font-display font-bold text-lg text-brand pt-4">2. Intellectual Property</h2>
          <p>
            All editorial copy, custom team graphics, brand logos, and photography displayed on this website are the property of TNF or our licensed partners. You may not republish, sell, or commercialize any content without written authorization from the TNF executive desk.
          </p>

          <h2 className="font-display font-bold text-lg text-brand pt-4">3. Donation Refunds</h2>
          <p>
            The Tochukwu Nwankwo Foundation is a registered non-profit organization. Donations made via our secure online portal are generally non-refundable. If you believe a processing or typing error occurred during your transaction, please contact us within 14 days at <strong className="text-brand">contact@tnfound.com</strong> to discuss resolution.
          </p>

          <h2 className="font-display font-bold text-lg text-brand pt-4">4. Under-18 Sport Regulations</h2>
          <p>
            Participation in our annual scouting tournaments and football academies is strictly governed by official sports federation bylaws, including age transparency rules and safeguarding codes of conduct. Attempting to falsify participant ages or academic enrollment papers will result in immediate disqualification and exclusion.
          </p>

          <h2 className="font-display font-bold text-lg text-brand pt-4">5. Governing Law</h2>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of the Federal Republic of Nigeria. Any disputes arising from your use of this website shall fall under the jurisdiction of the competent courts in Anambra State, Nigeria.
          </p>
        </div>
      </section>
    </div>
  );
}
