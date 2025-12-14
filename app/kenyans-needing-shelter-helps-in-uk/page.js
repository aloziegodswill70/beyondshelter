export const metadata = {
  title:
    "Kenyans Needing Shelter Help in the UK | Housing & Emergency Support",
  description:
    "Support and shelter options for Kenyans in the UK facing homelessness, housing crisis, or emergency situations. Learn where to get help and safe accommodation.",
};

export default function KenyansNeedingShelterHelpInUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          Kenyans Needing Shelter Help in the UK
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          If you are a Kenyan living in the UK and facing housing difficulties,
          homelessness, or crisis, help and support are available.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Overview */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            You Are Not Alone
          </h2>
          <p className="leading-relaxed">
            Many Kenyans in the UK experience housing challenges due to job loss,
            visa issues, relationship breakdowns, or unexpected emergencies.
            These situations can be distressing, but there are organisations and
            services ready to help.
          </p>
        </div>

        {/* Emergency Help */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-3 text-red-700">
            Urgent Shelter Assistance
          </h2>
          <p className="leading-relaxed text-red-800">
            If you have nowhere safe to stay tonight, it is important to seek
            emergency accommodation immediately through local councils,
            charities, or trusted support organisations.
          </p>
        </div>

        {/* Available Support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Help Available for Kenyans in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Emergency shelters and temporary housing</li>
            <li>Local council homelessness services</li>
            <li>Community and migrant support organisations</li>
            <li>Food banks and crisis support services</li>
            <li>Advice on housing rights and legal options</li>
          </ul>
        </div>

        {/* Housing Options */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Housing and Accommodation Options
          </h2>
          <p className="leading-relaxed">
            Depending on your situation, you may be eligible for emergency
            housing, short-term accommodation, or supported housing programmes.
            Assessments are usually carried out to determine the best option for
            your safety and wellbeing.
          </p>
        </div>

        {/* Immigration & Rights */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Immigration Status and Support
          </h2>
          <p className="leading-relaxed">
            Even if your immigration status is uncertain, you can still seek
            help. Many services offer confidential advice and support without
            judgement.
          </p>
        </div>

        {/* Emotional Support */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Emotional and Mental Health Support
          </h2>
          <p className="leading-relaxed">
            Housing instability can take a toll on your mental health. Speaking
            with trained professionals or support workers can help reduce stress
            and guide you through the next steps.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-300 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            If You Are in Immediate Danger
          </h3>
          <p className="leading-relaxed text-red-800">
            If you feel unsafe or are at risk right now, contact emergency
            services or a local emergency housing provider immediately.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Support and Shelter Today
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Beyond Shelter connects Kenyans and other vulnerable individuals in
            the UK with housing support, guidance, and crisis services.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-bs_blue text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition"
          >
            Request Help Now
          </a>
        </div>

      </div>
    </section>
  );
}
