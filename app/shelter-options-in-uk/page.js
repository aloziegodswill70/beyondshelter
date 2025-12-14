export default function ShelterOptionsInUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          Shelter Options in the UK
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          If you are homeless, at risk, or need safe accommodation, there are
          different shelter and housing options available across the UK.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Intro */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            Finding Safe Shelter
          </h2>
          <p className="leading-relaxed">
            Losing housing or needing emergency shelter can happen suddenly.
            Whether you are fleeing abuse, facing eviction, or have nowhere to
            sleep tonight, help may be available. Understanding your shelter
            options is the first step toward safety.
          </p>
        </div>

        {/* Emergency Shelters */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Emergency Shelters
          </h2>
          <p className="leading-relaxed mb-4">
            Emergency shelters provide immediate, short-term accommodation for
            people in crisis.
          </p>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Night shelters and hostels</li>
            <li>Emergency housing placements</li>
            <li>Refuges for survivors of domestic abuse</li>
            <li>Winter shelters during cold weather</li>
          </ul>
        </div>

        {/* Temporary Accommodation */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Temporary Accommodation
          </h2>
          <p className="leading-relaxed mb-4">
            Temporary accommodation may be provided while longer-term housing
            solutions are explored.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Local council temporary housing</li>
            <li>Charity-run accommodation</li>
            <li>Short-term supported housing</li>
            <li>Emergency hotel placements</li>
          </ul>
        </div>

        {/* Specialist Shelters */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Specialist Shelter Services
          </h2>
          <p className="leading-relaxed mb-4">
            Some shelters are designed to support specific needs or
            circumstances.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Women-only shelters and refuges</li>
            <li>Youth homelessness services</li>
            <li>Migrant and refugee support housing</li>
            <li>Mental health supported accommodation</li>
          </ul>
        </div>

        {/* What to Do */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            What You Can Do Right Now
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Seek emergency shelter if you have nowhere safe to stay</li>
            <li>Contact housing advice services or charities</li>
            <li>Reach out to your local council for housing support</li>
            <li>Keep important documents safe and accessible</li>
          </ul>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            Immediate Danger
          </h3>
          <p className="leading-relaxed text-red-800">
            If you are in immediate danger or unsafe right now, contact
            emergency services immediately.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Help Finding Shelter
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            You deserve a safe place to stay. Support services in the UK can help
            you find shelter and plan your next steps.
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
