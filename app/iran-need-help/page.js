export default function IranNeedHelpPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Iran – I Need Help
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Support, guidance, and humanitarian help for people affected by crisis,
          displacement, or fear.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Understanding */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            You Are Not Alone
          </h2>
          <p className="leading-relaxed">
            People may need help due to conflict, displacement, family separation,
            fear, trauma, or unsafe living conditions. Reaching out for support is
            a brave and important step.
          </p>
        </div>

        {/* Immediate danger */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            If You Are in Immediate Danger
          </h2>
          <p>
            If you are currently in the UK and face immediate danger, call
            <strong> 999 </strong> right away.
          </p>
          <p className="mt-2">
            If speaking is unsafe, dial 999 and press <strong>55</strong> when asked.
          </p>
        </div>

        {/* Types of help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Types of Support Available
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Emergency shelter and housing guidance</li>
            <li>Mental health and trauma-informed support</li>
            <li>Legal and asylum-related signposting</li>
            <li>Confidential emotional support</li>
            <li>Community and humanitarian assistance referrals</li>
          </ul>
        </div>

        {/* UK & international support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Support Services You Can Contact
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Samaritans (UK):</strong> 116 123 – 24/7 emotional support
            </li>
            <li>
              <strong>Shout:</strong> Text <strong>85258</strong> for confidential support
            </li>
            <li>
              <strong>British Red Cross:</strong> Help for refugees and displaced persons
            </li>
            <li>
              <strong>UNHCR:</strong> Refugee and asylum support services
            </li>
          </ul>
        </div>

        {/* BeyondShelter role */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Help
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Confidential guidance in times of distress</li>
            <li>Referrals to trusted support organisations</li>
            <li>Help navigating housing and safety options</li>
            <li>Emotional support without judgment</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Help Is Available
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            No matter your background or situation, you deserve safety, dignity,
            and support.
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
