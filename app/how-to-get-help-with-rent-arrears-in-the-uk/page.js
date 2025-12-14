export const metadata = {
  title:
    "How to Get Help With Rent Arrears in the UK | Housing & Financial Support",
  description:
    "Struggling with rent arrears in the UK? Learn how to get housing support, grants, council help, and advice to avoid eviction.",
};

export default function HelpWithRentArrearsUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          How to Get Help With Rent Arrears in the UK
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          Falling behind on rent can be stressful, but help is available. Acting
          early can prevent eviction and homelessness.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">What Are Rent Arrears?</h2>
          <p className="leading-relaxed">
            Rent arrears happen when you miss rent payments. This can occur due to
            job loss, illness, rising costs, or unexpected life events.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Ways to Get Help With Rent Arrears</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Discretionary Housing Payments (DHP)</li>
            <li>Universal Credit housing support</li>
            <li>Local council homelessness prevention teams</li>
            <li>Charities offering emergency grants</li>
            <li>Negotiating a repayment plan with your landlord</li>
          </ul>
        </div>

        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">If You Are Facing Eviction</h2>
          <p className="leading-relaxed">
            Contact your local council immediately. By law, councils must help
            people at risk of homelessness. Early action increases your chances
            of staying housed.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-4">Organisations That Can Help</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Shelter UK:</strong> 0808 800 4444</li>
            <li><strong>Citizens Advice:</strong> Free housing advice</li>
            <li><strong>Local Council Housing Team</strong></li>
          </ul>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h3 className="text-xl font-bold text-red-700 mb-2">
            Don’t Ignore Rent Arrears
          </h3>
          <p className="text-red-800">
            Ignoring rent arrears can lead to eviction. Support is available —
            reaching out early can protect your home.
          </p>
        </div>

        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Housing Support Today
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Beyond Shelter helps people in the UK access housing advice,
            emergency support, and homelessness prevention services.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-bs_blue text-white px-10 py-4 rounded-xl font-semibold"
          >
            Get Help Now
          </a>
        </div>

      </div>
    </section>
  );
}
