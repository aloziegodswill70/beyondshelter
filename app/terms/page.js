export default function TermsPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* HEADER */}
      <div className="w-full bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Terms & Conditions
        </h1>
      </div>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8">
        <p>
          These Terms & Conditions govern your use of{" "}
          <strong>BeyondShelter.org.uk</strong> and all services provided by
          BeyondShelter UK. By accessing our website, you agree to comply with
          the terms outlined below.
        </p>

        <h2 className="text-2xl font-bold text-black">1. Acceptance of Terms</h2>
        <p>
          By using this website, you confirm your acceptance of these terms. If
          you do not agree, please discontinue use immediately.
        </p>

        <h2 className="text-2xl font-bold text-black">2. Service Disclaimer</h2>
        <p>
          BeyondShelter UK provides support, guidance, and emergency referral
          services. We do not replace police, medical agencies, or government
          authorities. All advice is informational and should not be considered
          legal or medical instruction.
        </p>

        <h2 className="text-2xl font-bold text-black">3. User Responsibility</h2>
        <p>
          Users must provide accurate information when requesting help. Misuse
          of our emergency support channels may lead to reporting to relevant
          authorities.
        </p>

        <h2 className="text-2xl font-bold text-black">4. Data Collection</h2>
        <p>
          We collect minimal personal data strictly for support and
          communication purposes. All data is handled in accordance with UK
          GDPR regulations.
        </p>

        <h2 className="text-2xl font-bold text-black">5. External Links</h2>
        <p>
          Our site may contain links to third-party organisations. We are not
          responsible for the content or actions of these external websites.
        </p>

        <h2 className="text-2xl font-bold text-black">6. Changes to Terms</h2>
        <p>
          BeyondShelter UK reserves the right to modify these Terms &
          Conditions at any time to comply with legal or operational changes.
        </p>
      </div>
    </section>
  );
}
