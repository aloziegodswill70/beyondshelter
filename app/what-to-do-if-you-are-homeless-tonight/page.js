export default function WhatToDoIfYouAreHomelessTonight() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          What to Do If You Are Homeless Tonight
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Immediate steps you can take right now if you have nowhere safe to stay tonight in the UK.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">

        {/* Calm reassurance */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">You Are Not Alone</h2>
          <p className="leading-relaxed">
            If you are facing homelessness tonight, help is available. There are emergency services,
            councils, charities, and helplines across the UK that can support you immediately.
            Your safety matters.
          </p>
        </div>

        {/* Emergency danger */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            If You Are in Immediate Danger
          </h2>
          <p className="leading-relaxed">
            Call <strong>999</strong> right away if you feel unsafe or are at risk of harm.
            If you cannot speak safely, call <strong>999</strong> and press <strong>55</strong>.
          </p>
        </div>

        {/* Step 1 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            1. Contact Your Local Council Immediately
          </h2>
          <p className="leading-relaxed">
            Local councils in the UK have a legal duty to help people who are homeless or about
            to become homeless. Ask for the <strong>housing options</strong> or
            <strong> homelessness team</strong>.
          </p>
        </div>

        {/* Step 2 */}
        <div className="bg-[#FFF7E0] border border-[#D4AF37] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            2. Call Emergency Housing Helplines
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Shelter UK:</strong> 0808 800 4444 (free housing advice)</li>
            <li><strong>StreetLink:</strong> Report rough sleeping or get outreach support</li>
            <li><strong>Crisis:</strong> Support for people facing homelessness</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            3. Find Emergency Night Shelter or Safe Space
          </h2>
          <p className="leading-relaxed mb-3">
            Many areas have emergency night shelters, hostels, churches, or community centres
            offering short-term accommodation, especially during cold weather.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Ask your council about emergency accommodation</li>
            <li>Contact local homelessness charities</li>
            <li>Seek trusted community or faith-based shelters</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            4. If You Must Stay Outside Tonight
          </h2>
          <p className="leading-relaxed">
            If no immediate shelter is available, try to stay in a public, well-lit area.
            Keep warm, stay connected to your phone if possible, and seek help again early
            the next morning.
          </p>
        </div>

        {/* Vulnerable groups */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            Extra Help for Vulnerable People
          </h2>
          <p className="leading-relaxed">
            If you are pregnant, under 18, fleeing abuse, disabled, or have health needs,
            tell the council immediately. You may be entitled to priority emergency housing.
          </p>
        </div>

        {/* BeyondShelter support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            How BeyondShelter UK Can Help Tonight
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Guidance on emergency options</li>
            <li>Referrals to trusted UK support services</li>
            <li>Confidential and compassionate assistance</li>
            <li>Support for people at immediate risk</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If you are homeless tonight or unsure where to go, reach out for help immediately.
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
