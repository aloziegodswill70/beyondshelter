export default function IWasRapedHelpPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          I Need Help – I Was Raped
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          What happened was not your fault. You deserve care, safety, and
          support.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Reassurance */}
        <p className="text-lg leading-relaxed">
          If you have experienced rape or sexual assault, you are not alone.
          Many people feel fear, shock, confusion, or shame after such an
          experience—but responsibility always lies with the person who harmed
          you. <strong>BeyondShelter UK</strong> exists to help you find support,
          safety, and compassionate guidance.
        </p>

        {/* Immediate Safety */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2 text-red-700">
            Are You in Immediate Danger?
          </h2>
          <p className="leading-relaxed">
            If you are in immediate danger or feel unsafe right now, please call
            <strong> 999 </strong> immediately.
          </p>
          <p className="leading-relaxed mt-2">
            If you cannot speak, dial 999 and press <strong>55</strong> when
            prompted.
          </p>
        </div>

        {/* What You Can Do */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            What You Can Do Next
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Seek medical care if you need it</li>
            <li>Talk to someone you trust</li>
            <li>Reach out to confidential support services</li>
            <li>Consider reporting when and if you feel ready</li>
            <li>Access emotional and housing support if needed</li>
          </ul>
        </div>

        {/* Support Services */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Confidential Support in the UK
          </h2>

          <div className="space-y-4">
            <p>
              You can get free, confidential help from specialist organisations:
            </p>

            <ul className="list-disc pl-6 space-y-3">
              <li>
                <strong>Rape Crisis England & Wales:</strong> 0808 802 9999
                (12pm–2:30pm & 7pm–9:30pm)
              </li>
              <li>
                <strong>Sexual Assault Referral Centres (SARCs):</strong>
                Medical and emotional support, with or without reporting
              </li>
              <li>
                <strong>Samaritans:</strong> 116 123 (24/7 emotional support)
              </li>
              <li>
                <strong>Shout:</strong> Text <strong>85258</strong> for free,
                confidential support
              </li>
            </ul>
          </div>
        </div>

        {/* How BeyondShelter Helps */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            How BeyondShelter UK Can Help
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Compassionate listening and guidance</li>
            <li>Referrals to trusted rape and abuse support services</li>
            <li>Help accessing emergency housing if you feel unsafe at home</li>
            <li>Connections to mental health and counselling support</li>
            <li>Ongoing assistance at your pace</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Are Not Alone
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            You deserve support, understanding, and care. Reach out to
            BeyondShelter UK and let us help you take the next step toward safety
            and healing.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Support Now
          </a>
        </div>
      </div>
    </section>
  );
}
