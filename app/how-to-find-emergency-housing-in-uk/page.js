export const metadata = {
  title:
    "How to Find Emergency Housing in the UK | Immediate Shelter Options",
  description:
    "Learn how to find emergency housing in the UK if you are homeless or at risk. Get guidance on shelters, councils, and urgent accommodation.",
};

export default function EmergencyHousingUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-white text-center px-4">
          How to Find Emergency Housing in the UK
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          If you have nowhere safe to stay, emergency housing options are available
          across the UK.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-12">
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">Emergency Housing Explained</h2>
          <p>
            Emergency housing provides immediate, short-term accommodation for
            people facing homelessness or unsafe living conditions.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Where to Get Emergency Housing</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Local council homelessness teams</li>
            <li>Emergency shelters and hostels</li>
            <li>Charities supporting housing crises</li>
            <li>Domestic abuse refuge services</li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            If You Need Housing Tonight
          </h2>
          <p className="text-red-800">
            Contact your local council immediately or seek emergency support
            services if you are at risk.
          </p>
        </div>

        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Find Safe Housing Now
          </h2>
          <a
            href="/need-help"
            className="bg-bs_blue text-white px-10 py-4 rounded-xl font-semibold"
          >
            Get Emergency Help
          </a>
        </div>
      </div>
    </section>
  );
}
