export const metadata = {
  title:
    "How Much Is a Room in Manchester? | Rent Prices & Housing Help UK",
  description:
    "Find out how much a room costs in Manchester, average rent prices, affordable housing options, and where to get help if you cannot afford accommodation.",
};

export default function HowMuchIsRoomInManchester() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          How Much Is a Room in Manchester?
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          If you are looking for a room to rent in Manchester or struggling with
          housing costs, this guide explains current prices and where to get help.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Overview */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            Average Cost of Renting a Room in Manchester
          </h2>
          <p className="leading-relaxed">
            The cost of renting a room in Manchester varies depending on location,
            property type, and whether bills are included. Prices have increased
            in recent years due to high demand and limited housing supply.
          </p>
        </div>

        {/* Prices */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Typical Room Rent Prices
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Shared house or flat: £450 – £700 per month</li>
            <li>City centre rooms: £600 – £850 per month</li>
            <li>Outside city centre: £400 – £600 per month</li>
            <li>Rooms with bills included: usually higher monthly rent</li>
          </ul>
        </div>

        {/* Factors */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            What Affects the Cost of a Room?
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Location and proximity to the city centre</li>
            <li>Size and condition of the property</li>
            <li>Whether bills are included</li>
            <li>Length of tenancy and demand</li>
          </ul>
        </div>

        {/* Struggling */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            What If You Cannot Afford Rent?
          </h2>
          <p className="leading-relaxed text-red-800">
            If you are struggling to afford rent in Manchester, you are not alone.
            Help may be available through local councils, housing charities, and
            emergency accommodation services.
          </p>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Housing Help Available in Manchester
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Manchester City Council housing support</li>
            <li>Emergency accommodation and hostels</li>
            <li>Rent arrears advice and financial support</li>
            <li>Charities offering housing guidance</li>
            <li>Temporary and supported housing options</li>
          </ul>
        </div>

        {/* Advice */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Tips When Searching for a Room
          </h2>
          <p className="leading-relaxed">
            Always view properties before paying deposits, avoid requests for
            upfront payments without contracts, and seek advice if something
            feels unsafe or unclear.
          </p>
        </div>

        {/* Emergency */}
        <div className="bg-red-50 border border-red-300 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            If You Have Nowhere to Stay Tonight
          </h3>
          <p className="leading-relaxed text-red-800">
            If you are at risk of homelessness or have nowhere safe to stay,
            contact your local council or emergency housing services immediately.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help With Housing in Manchester?
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Beyond Shelter helps people find housing support, emergency shelter,
            and advice when rent becomes unaffordable.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-bs_blue text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition"
          >
            Get Housing Help
          </a>
        </div>

      </div>
    </section>
  );
}
