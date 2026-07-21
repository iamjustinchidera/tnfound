import React from 'react';

export default function Privacy() {
  return (
    <div className="pt-24 animate-fade-in bg-neutral-bg min-h-screen">
      <section className="py-20 border-b border-brand/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <span className="font-mono text-xs font-bold text-brand uppercase tracking-[0.25em] mb-4 block">
            LEGAL STATEMENT
          </span>
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-brand tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="font-sans text-[11px] text-gray-400 uppercase tracking-widest font-mono">
            LAST UPDATED: JULY 20, 2026
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 prose prose-neutral font-sans text-xs sm:text-sm text-gray-600 leading-relaxed font-light space-y-6">
          <p>
            The Tochukwu Nwankwo Foundation ("TNF", "we", "us", or "our") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we handle information gathered when you visit our website, sign up for newsletters, submit contact requests, or make online donations.
          </p>

          <h2 className="font-display font-bold text-lg text-brand pt-4">1. Information We Collect</h2>
          <p>
            We may collect personal details such as your name, email address, phone number, and physical mailing address when you interact with our forms, volunteer applications, or donation portals. All financial transaction detail processing is securely handled by our verified payment gateway partners (such as Stripe or local Nigerian banking networks). TNF never processes or stores your card numbers directly.
          </p>

          <h2 className="font-display font-bold text-lg text-brand pt-4">2. How We Use Your Information</h2>
          <p>
            We use collected data strictly to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process and confirm your online donations or program sponsorships.</li>
            <li>Send donation receipts, tax-compliance certificates, and quarterly impact reports.</li>
            <li>Respond directly to inquiries, tutoring registrations, and volunteering applications.</li>
            <li>Provide critical administrative or safety notices related to our sports tournaments.</li>
          </ul>

          <h2 className="font-display font-bold text-lg text-brand pt-4">3. Child Protection & Safeguarding Data</h2>
          <p>
            Given our core focus on youth and child-safe environments, we do not publicly disclose identifiable details, full names, or classroom performance worksheets of minors enrolled in our football or tutoring academies without written parent or legal guardian consent. All internal athletic rosters are guarded by strict access control measures.
          </p>

          <h2 className="font-display font-bold text-lg text-brand pt-4">4. Sharing Your Information</h2>
          <p>
            TNF does not sell, rent, or lease donor or contact details to third-party commercial marketing entities. We only share information with trusted operational partners (such as email service providers or legal auditors) strictly necessary to run the foundation's non-profit programs.
          </p>

          <h2 className="font-display font-bold text-lg text-brand pt-4">5. Your Legal Rights</h2>
          <p>
            You have the right to request access to your personal details, request corrections to spelling or outdated addresses, or opt-out of our monthly newsletter communications at any time by contacting us directly at <strong className="text-brand">contact@tnfound.com</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
