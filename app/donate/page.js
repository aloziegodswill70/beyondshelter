// File: app/donate/page.js

export const metadata = {
  title: "Donate | Beyond Shelter UK",
  description:
    "Support Beyond Shelter UK with a donation. Help provide safe shelter, crisis care, food, emergency assistance, and long-term support for the homeless and survivors of abuse across the UK.",
};

export default function Donate() {
  return (
    <div className="min-h-screen bg-white text-bs_navy">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-bs_gold/20 py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-bs_navy">
          Support Beyond Shelter UK
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-bs_navy/70">
          Your donation helps us provide emergency shelter, food, counselling,
          crisis response, and long-term support for vulnerable individuals
          across the United Kingdom.
        </p>
      </section>

      {/* ================= WHY DONATE ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Why Your Support Matters</h2>

        <p className="text-bs_navy/80 mb-6">
          Every day, people across the UK face homelessness, domestic abuse,
          sexual violence, hunger, and emotional trauma. Your generosity helps
          Beyond Shelter provide safety, dignity, and hope to individuals and
          families in crisis.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-bs_navy/80">
          <li>£10 helps provide a meal and hygiene essentials.</li>
          <li>£25 supports emergency crisis intervention.</li>
          <li>£50 helps fund a safe night of shelter.</li>
          <li>£100 supports counselling and trauma recovery services.</li>
          <li>£250+ helps relocate a survivor to safety.</li>
        </ul>
      </section>

      {/* ================= DONATION OPTIONS ================= */}
      <section className="bg-bs_gold/10 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-bs_navy text-center">
            Choose Your Donation
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Card 1 */}
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold">One-Time Donation</h3>
              <p className="mt-3 text-bs_navy/70">
                Make a single contribution to support emergency needs.
              </p>
              <a
                href="#"
                className="mt-6 inline-block py-3 px-6 bg-bs_navy text-white rounded-lg font-semibold hover:bg-bs_navy/90 transition"
              >
                Donate Once
              </a>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold">Monthly Support</h3>
              <p className="mt-3 text-bs_navy/70">
                Help sustain our long-term services with recurring donations.
              </p>
              <a
                href="#"
                className="mt-6 inline-block py-3 px-6 bg-bs_navy text-white rounded-lg font-semibold hover:bg-bs_navy/90 transition"
              >
                Donate Monthly
              </a>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow rounded-xl p-6 text-center">
              <h3 className="text-xl font-semibold">Emergency Relief</h3>
              <p className="mt-3 text-bs_navy/70">
                Directly support survivors fleeing violence or homelessness.
              </p>
              <a
                href="#"
                className="mt-6 inline-block py-3 px-6 bg-bs_navy text-white rounded-lg font-semibold hover:bg-bs_navy/90 transition"
              >
                Give Emergency Help
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= IMPACT STATEMENT ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-bs_navy">
          Every Donation Creates Impact
        </h2>

        <p className="mt-4 text-bs_navy/70 max-w-2xl mx-auto">
          Your contribution directly supports life-saving care —
          safe housing, therapy, food assistance, advocacy, and rebuilding
          lives. Thank you for helping us protect the vulnerable.
        </p>

        <a
          href="#"
          className="mt-8 inline-block py-4 px-10 bg-bs_gold text-bs_navy rounded-lg text-lg font-semibold hover:bg-bs_gold/90 transition"
        >
          Donate Now
        </a>
      </section>
    </div>
  );
}
