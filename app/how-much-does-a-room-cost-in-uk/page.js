export const metadata = {
  title: "How Much Does a Room Cost in the UK? | Rent Prices & Housing Help",
  description:
    "Learn how much it costs to rent a room in the UK, including average prices by city, factors that affect rent, and how Beyond Shelter can help if you cannot afford housing.",
};

export default function HowMuchDoesARoomCostInUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          How Much Does a Room Cost in the UK?
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          If you are searching for affordable housing or struggling with rent,
          understanding current room prices in the UK can help you plan your next step.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Overview */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            Average Cost of Renting a Room in the UK
          </h2>
          <p className="leading-relaxed">
            The cost of renting a room in the UK varies depending on location,
            demand, and living conditions. On average, rooms can range from
            affordable shared housing to higher-cost private rentals in major cities.
          </p>
        </div>

        {/* Price Breakdown */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Typical Room Prices by Area
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li><strong>London:</strong> £700 – £1,000+ per month</li>
            <li><strong>Manchester:</strong> £450 – £750 per month</li>
            <li><strong>Birmingham:</strong> £400 – £700 per month</li>
            <li><strong>Leeds & Sheffield:</strong> £350 – £600 per month</li>
            <li><strong>Smaller towns:</strong> £300 – £550 per month</li>
          </ul>
        </div>

        {/* Factors */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            What Affects the Cost of a Room?
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>City and neighbourhood</li>
            <li>Shared or private bathroom</li>
            <li>Bills included or excluded</li>
            <li>Furnished or unfurnished rooms</li>
            <li>Demand and availability</li>
          </ul>
        </div>

        {/* If You Can't Afford Rent */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            What If You Can’t Afford a Room?
          </h2>
          <p className="leading-relaxed text-red-800">
            Many people in the UK struggle to afford rent due to job loss,
            low income, relationship breakdowns, or unexpected crises.
            If you cannot afford housing, help is available.
          </p>
        </div>

        {/* Help Available */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Housing Help Available in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Emergency accommodation and shelters</li>
            <li>Local council housing assistance</li>
            <li>Rent arrears advice and support</li>
            <li>Charities offering temporary housing</li>
            <li>Benefits and housing guidance</li>
          </ul>
        </div>

        {/* Emotional Support */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Feeling Overwhelmed About Housing?
          </h2>
          <p className="leading-relaxed">
            Worrying about rent and housing can affect your mental health.
            Speaking with a support worker or housing adviser can help you
            understand your options and reduce stress.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help With Housing or Rent?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Beyond Shelter supports people across the UK who are struggling
            with housing costs, homelessness, or emergency accommodation.
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
