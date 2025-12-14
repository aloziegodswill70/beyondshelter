// File: app/emergency-housing-rent-in-uk/page.js

export const metadata = {
  title: "Emergency Housing & Rent Support in the UK | Beyond Shelter UK",
  description:
    "Get urgent emergency housing, rent support, temporary accommodation, and homelessness assistance in the UK. Learn how to access council housing, rent help, crisis payments, shelters and emergency accommodation.",
};

export default function EmergencyHousingRentInUK() {
  return (
    <div className="min-h-screen bg-white text-bs_navy">

      {/* ================= HERO ================= */}
      <section className="bg-bs_blue text-white py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold">
          Emergency Housing & Rent Help in the UK
        </h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto opacity-95">
          If you’re facing eviction, rent arrears, homelessness, or unsafe
          living conditions, urgent support is available. Find emergency
          accommodation, crisis rent help, and council housing options here.
        </p>
      </section>

      {/* ================= MAIN CONTENT ================= */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold mb-6">
          What to Do if You Need Emergency Housing Right Now
        </h2>

        <p className="text-bs_navy/75 mb-10">
          Thousands of people across the UK experience sudden homelessness,
          eviction threats, relationship breakdowns, domestic abuse, landlord
          issues, or financial emergencies. You are not alone — help is
          available immediately.
        </p>

        {/* EMERGENCY OPTIONS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Local Council */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Contact Your Local Council</h3>
            <p className="mt-2 text-bs_navy/70">
              Councils are legally required to help people at risk of becoming
              homeless within 56 days.
            </p>
            <p className="mt-4 font-semibold text-bs_blue">
              Search: “Find my local council UK”
            </p>
          </div>

          {/* Shelter UK */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Shelter UK Emergency Housing Line</h3>
            <p className="mt-2 text-bs_navy/70">
              Free housing advice for anyone facing homelessness or rent issues.
            </p>
            <p className="mt-4 text-2xl font-bold">0808 800 4444</p>
          </div>

          {/* Domestic Abuse */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Emergency Housing for Domestic Abuse Victims</h3>
            <p className="mt-2 text-bs_navy/70">
              Women's Aid and councils can arrange refuge accommodation within hours.
            </p>
            <p className="mt-4 text-2xl font-bold text-urgentRed">
              National Helpline: 0808 2000 247
            </p>
          </div>

          {/* Homeless Shelter */}
          <div className="border rounded-2xl p-6 shadow-sm">
            <h3 className="text-xl font-bold">Find a Homeless Shelter Near You</h3>
            <p className="mt-2 text-bs_navy/70">
              Emergency beds, hot meals, and crisis support.
            </p>
            <p className="mt-4 font-semibold text-bs_blue">Search: Homeless shelters near me</p>
          </div>
        </div>

        {/* ================= RENT SUPPORT ================= */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-4">
            Emergency Rent Support in the UK
          </h2>
          <p className="text-bs_navy/75 mb-8">
            If you’re struggling to pay rent because of job loss, reduced
            income, or unexpected bills, you may qualify for financial support.
          </p>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Discretionary Housing Payment */}
            <div className="border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold">Discretionary Housing Payments (DHP)</h3>
              <p className="mt-2 text-bs_navy/70">
                Extra money from your council to help with rent shortfalls.
              </p>
            </div>

            {/* Universal Credit */}
            <div className="border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold">Universal Credit Housing Element</h3>
              <p className="mt-2 text-bs_navy/70">
                Helps cover part of your rent — available to most low-income
                households.
              </p>
            </div>

            {/* Crisis Grant */}
            <div className="border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold">Local Welfare Crisis Support</h3>
              <p className="mt-2 text-bs_navy/70">
                Emergency grants for urgent housing needs, food, heating, and
                essential items.
              </p>
            </div>

            {/* Rent Arrears */}
            <div className="border rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold">Support for Rent Arrears</h3>
              <p className="mt-2 text-bs_navy/70">
                Debt advisors can negotiate with your landlord and stop you from
                being evicted.
              </p>
            </div>
          </div>
        </div>

        {/* ================= BEYOND SHELTER CTA ================= */}
        <div className="mt-20 p-8 bg-bs_gold/20 rounded-2xl">
          <h2 className="text-2xl font-bold">Beyond Shelter UK Support</h2>
          <p className="mt-3 text-bs_navy/80">
            We help vulnerable people in the UK access safe housing, emergency
            accommodation, and emotional support. If you are experiencing
            homelessness or feel unsafe where you live, reach out to us.
          </p>

          <div className="mt-6">
            <a
              href="/urgent-help"
              className="inline-block bg-bs_navy text-white py-3 px-8 rounded-lg font-semibold hover:bg-bs_navy/90 transition"
            >
              Get Urgent Help
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER CTA ================= */}
      <section className="text-center py-20 bg-bs_navy text-white px-6">
        <h2 className="text-3xl font-bold">Need Emergency Housing?</h2>
        <p className="opacity-90 mt-3 max-w-2xl mx-auto">
          Whether you're facing eviction, abuse, or financial crisis — you can
          get help today.
        </p>

        <a
          href="/donate"
          className="mt-8 inline-block bg-bs_gold text-bs_navy font-semibold py-3 px-10 rounded-lg hover:bg-bs_gold/90 transition"
        >
          Support Our Mission
        </a>
      </section>
    </div>
  );
}
