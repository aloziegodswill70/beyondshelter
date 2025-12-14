export default function SexualAssaultSupportPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          He Raped Me Because I Look Sexy in My UK Home Alone
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          What happened was not your fault — no matter how you looked, where you
          were, or who you were with.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Clear Message */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            Important Truth
          </h2>
          <p className="leading-relaxed">
            Rape and sexual assault are never caused by how someone looks,
            dresses, or where they are. Being alone, being at home, or feeling
            comfortable in your own space does <strong>not</strong> make you
            responsible for another person’s actions.
          </p>
        </div>

        {/* Reassurance */}
        <p className="text-lg leading-relaxed">
          If you have experienced sexual assault, you may be feeling shock,
          fear, shame, anger, or confusion. These feelings are common — but the
          blame lies entirely with the person who committed the crime.
          <strong> BeyondShelter UK </strong> exists to support you with care,
          safety, and guidance.
        </p>

        {/* Immediate Danger */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            Are You Safe Right Now?
          </h2>
          <p className="leading-relaxed">
            If you are in immediate danger, please call <strong>999</strong>
            now.
          </p>
          <p className="leading-relaxed mt-2">
            If you cannot speak, dial 999 and press <strong>55</strong> when
            prompted.
          </p>
        </div>

        {/* Support Options */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Confidential Support in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Rape Crisis England & Wales:</strong> 0808 802 9999
            </li>
            <li>
              <strong>Sexual Assault Referral Centres (SARCs):</strong> Medical,
              emotional, and forensic support
            </li>
            <li>
              <strong>Samaritans:</strong> 116 123 (24/7 emotional support)
            </li>
            <li>
              <strong>Shout:</strong> Text <strong>85258</strong> for free,
              confidential help
            </li>
          </ul>
        </div>

        {/* How BeyondShelter Helps */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Support You
          </h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>Safe, compassionate guidance without judgment</li>
            <li>Referrals to specialist sexual assault services</li>
            <li>Help accessing emergency housing if you feel unsafe</li>
            <li>Mental health and trauma-informed support pathways</li>
            <li>Support at your pace — no pressure to report</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Are Not to Blame
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            What happened does not define you. Help is available, and you
            deserve safety, care, and respect.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Help Now
          </a>
        </div>
      </div>
    </section>
  );
}
