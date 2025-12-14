export default function LegalSupportPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Legal Support
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Helping vulnerable individuals understand their rights and access
          legal help across the United Kingdom.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Intro */}
        <p className="text-lg leading-relaxed">
          Legal issues can be overwhelming—especially during times of crisis.
          People facing homelessness, domestic abuse, exploitation, or housing
          disputes often struggle to access clear and reliable legal guidance.
          <strong> BeyondShelter UK </strong> helps individuals understand their
          rights and connect with appropriate legal support services.
        </p>

        {/* Areas of Support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Areas Where Legal Support May Help
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Housing and eviction issues</li>
            <li>Homelessness applications and council duties</li>
            <li>Domestic abuse protection and safety orders</li>
            <li>Immigration and residency concerns</li>
            <li>Employment exploitation and unfair treatment</li>
            <li>Accessing benefits and welfare support</li>
          </ul>
        </div>

        {/* How We Help */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Supports You
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Clear Legal Guidance
              </h3>
              <p>
                Helping you understand your legal options and what steps may be
                available to you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Trusted Referrals
              </h3>
              <p>
                Connecting you with legal aid providers, charities, and support
                organisations across the UK.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Housing & Tenancy Advice
              </h3>
              <p>
                Support for people facing eviction, unsafe housing, or unlawful
                treatment by landlords.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Protection & Safety Pathways
              </h3>
              <p>
                Guidance for individuals seeking protection from abuse,
                exploitation, or harassment.
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2 text-yellow-800">
            Important Information
          </h2>
          <p className="leading-relaxed">
            BeyondShelter UK does not provide direct legal representation.
            However, we help individuals access appropriate legal advice,
            legal aid services, and specialist organisations equipped to help.
          </p>
        </div>

        {/* Emergency */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2 text-red-700">
            If You Are in Immediate Danger
          </h2>
          <p className="leading-relaxed">
            Call <strong>999</strong> immediately. If you are unable to speak,
            dial 999 and press <strong>55</strong> when prompted.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Get Legal Guidance and Support
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            You do not have to face legal challenges alone. Reach out to
            BeyondShelter UK and let us help guide you toward the right support.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Request Help
          </a>
        </div>
      </div>
    </section>
  );
}
