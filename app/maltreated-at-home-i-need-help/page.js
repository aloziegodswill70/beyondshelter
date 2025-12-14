export default function MaltreatedAtHomeHelpPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Maltreated at Home – I Need Help
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          If you are being harmed, controlled, neglected, or mistreated at home,
          you are not alone — and it is not your fault.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Validation */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-yellow-700 mb-3">
            What You Are Experiencing Matters
          </h2>
          <p className="leading-relaxed">
            Maltreatment at home can include emotional abuse, physical harm,
            threats, isolation, neglect, or being made to feel afraid in your
            own living space. Home should be a place of safety — if it is not,
            you deserve help and protection.
          </p>
        </div>

        {/* Immediate Danger */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            Are You in Immediate Danger?
          </h2>
          <p className="leading-relaxed">
            If you are at risk right now, please call <strong>999</strong>
            immediately.
          </p>
          <p className="leading-relaxed mt-2">
            If you cannot speak safely, dial 999 and press <strong>55</strong>
            when prompted.
          </p>
        </div>

        {/* Understanding Maltreatment */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Maltreatment Can Look Like:
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Being hit, pushed, threatened, or intimidated</li>
            <li>Constant insults, humiliation, or control</li>
            <li>Being denied food, money, or medical care</li>
            <li>Feeling unsafe or trapped in your own home</li>
            <li>Living in fear of someone you live with</li>
          </ul>
        </div>

        {/* UK Support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Confidential Support Available in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>National Domestic Abuse Helpline:</strong> 0808 2000 247
              (24/7)
            </li>
            <li>
              <strong>Childline (under 19):</strong> 0800 1111
            </li>
            <li>
              <strong>Samaritans:</strong> 116 123 (emotional support)
            </li>
            <li>
              <strong>Shout:</strong> Text <strong>85258</strong> for silent help
            </li>
          </ul>
        </div>

        {/* BeyondShelter Help */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Help You
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Confidential, compassionate listening</li>
            <li>Guidance on leaving unsafe home situations</li>
            <li>Emergency housing and shelter referrals</li>
            <li>Mental health and trauma support pathways</li>
            <li>Help without pressure, judgment, or blame</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Deserve Safety and Care
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            What you are experiencing is real, and help is available. You do
            not have to face this alone.
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
