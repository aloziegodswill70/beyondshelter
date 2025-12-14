export const metadata = {
  title:
    "Immigrants Stranded but Need Help in the UK | Emergency Support & Shelter",
  description:
    "If you are an immigrant stranded in the UK without housing, money, or support, this page explains where to get help, shelter options, and urgent assistance available.",
};

export default function ImmigrantsStrandedButNeedHelpInUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          Immigrants Stranded but Need Help in the UK
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          Being stranded in a new country can feel overwhelming. Help and
          support are available — you are not alone.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Understanding */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            If You Are Stranded as an Immigrant
          </h2>
          <p className="leading-relaxed">
            Many immigrants find themselves stranded due to housing loss,
            immigration challenges, financial hardship, or lack of local
            support. These situations are more common than you may think, and
            help exists regardless of your background.
          </p>
        </div>

        {/* Immediate Needs */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-3 text-red-700">
            Urgent Help If You Have Nowhere to Stay
          </h2>
          <p className="leading-relaxed text-red-800">
            If you are sleeping outside, staying temporarily with strangers, or
            feel unsafe, it is important to seek emergency accommodation and
            support immediately.
          </p>
        </div>

        {/* Help Available */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Help Available for Immigrants in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Emergency shelters and temporary accommodation</li>
            <li>Charities supporting migrants and asylum seekers</li>
            <li>Local council homelessness services</li>
            <li>Food banks and emergency financial assistance</li>
            <li>Legal advice and immigration guidance services</li>
          </ul>
        </div>

        {/* Housing */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Housing and Shelter Options
          </h2>
          <p className="leading-relaxed">
            Depending on your situation, you may be eligible for emergency
            housing, hostel placement, or charity-supported accommodation.
            Councils and non-profit organisations can help assess your needs and
            guide you to available options.
          </p>
        </div>

        {/* Immigration Status */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Immigration Status and Support
          </h2>
          <p className="leading-relaxed">
            Even if your immigration status is uncertain, you can still seek
            help. Many organisations provide confidential support and do not
            share your information without consent.
          </p>
        </div>

        {/* Emotional Support */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Emotional and Mental Health Support
          </h2>
          <p className="leading-relaxed">
            Being stranded can cause fear, stress, and isolation. Speaking to a
            trained support worker or counsellor can help you cope and make
            informed decisions during this difficult time.
          </p>
        </div>

        {/* Emergency */}
        <div className="bg-red-50 border border-red-300 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            If You Are in Immediate Danger
          </h3>
          <p className="leading-relaxed text-red-800">
            If you feel unsafe right now or have no shelter for tonight, contact
            emergency services or an emergency housing provider immediately.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Help Is Available — Even If You Feel Stranded
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Beyond Shelter helps immigrants and vulnerable individuals connect
            with housing, legal guidance, and crisis support across the UK.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-bs_blue text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition"
          >
            Get Help Now
          </a>
        </div>

      </div>
    </section>
  );
}
