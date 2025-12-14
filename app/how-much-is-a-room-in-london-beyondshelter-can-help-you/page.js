export const metadata = {
  title:
    "How Much Is a Room in London? BeyondShelter Can Help You | Housing Support UK",
  description:
    "Find out how much it costs to rent a room in London, why prices are rising, and how BeyondShelter UK can help if you cannot afford housing or are at risk of homelessness.",
};

export default function HowMuchIsARoomInLondonBeyondShelterCanHelpYou() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          How Much Is a Room in London?
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          London rent prices can be overwhelming. If you’re struggling to afford
          a room or facing homelessness, support is available.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Overview */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            Average Cost of a Room in London
          </h2>
          <p className="leading-relaxed">
            The cost of renting a room in London varies depending on the area,
            property type, and demand. Many people find prices difficult to
            manage, especially during financial hardship or sudden life changes.
          </p>
        </div>

        {/* Price Ranges */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Typical Room Prices (Approximate)
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Outer London: lower-cost shared accommodation</li>
            <li>Zone 3–4 areas: mid-range pricing depending on transport access</li>
            <li>Central London: higher prices with strong demand</li>
          </ul>
          <p className="mt-4 leading-relaxed">
            Prices often exclude bills, council tax, and deposits, making it
            harder for people on low income or in crisis.
          </p>
        </div>

        {/* Why Prices Are High */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Renting in London Is So Expensive
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>High demand for limited housing</li>
            <li>Rising living costs and inflation</li>
            <li>Upfront deposits and advance rent requirements</li>
            <li>Competition among renters</li>
          </ul>
        </div>

        {/* When You Can't Afford Housing */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-3 text-red-700">
            What If You Cannot Afford a Room?
          </h2>
          <p className="leading-relaxed text-red-800">
            If you cannot afford rent or are at risk of losing your housing, it
            is important to seek help immediately. Delaying can increase the
            risk of homelessness.
          </p>
        </div>

        {/* How BeyondShelter Helps */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            How BeyondShelter UK Can Help You
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Emergency housing and shelter referrals</li>
            <li>Guidance on affordable accommodation options</li>
            <li>Support if you are facing eviction or homelessness</li>
            <li>Signposting to councils and housing charities</li>
          </ul>
        </div>

        {/* Practical Steps */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Steps You Can Take Right Now
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Contact your local council housing department</li>
            <li>Seek advice from housing charities</li>
            <li>Ask about emergency or temporary accommodation</li>
            <li>Do not wait until you are completely without shelter</li>
          </ul>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-300 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            If You Have Nowhere to Stay Tonight
          </h3>
          <p className="leading-relaxed text-red-800">
            If you are in immediate danger or have no safe place to sleep,
            contact emergency services or local emergency housing providers
            straight away.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            You Don’t Have to Face This Alone
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            BeyondShelter UK helps people struggling with rent, housing costs,
            and homelessness find support and safe options.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-bs_blue text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition"
          >
            Get Housing Help Now
          </a>
        </div>

      </div>
    </section>
  );
}
