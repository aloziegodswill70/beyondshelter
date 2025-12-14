// File: app/domestic-abuse-support/page.js

export const metadata = {
  title: "Domestic Abuse Support | Beyond Shelter UK",
  description:
    "Get confidential help, emergency support, and safe shelter for victims of domestic abuse across the UK. Beyond Shelter provides crisis intervention, counselling, housing, and legal guidance.",
};

export default function DomesticAbuseSupport() {
  return (
    <div className="min-h-screen bg-white text-bs_navy">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-bs_gold/10 py-20 px-6 text-center">
        <h1 className="text-4xl font-extrabold text-bs_navy">
          Domestic Abuse Support in the UK
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-bs_navy/70">
          If you or someone you know is experiencing domestic abuse, Beyond
          Shelter provides confidential, judgement-free support 24/7. You are
          not alone — we are here to help.
        </p>
      </section>

      {/* ================= WHAT WE HELP WITH ================= */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-bs_navy mb-6">
          What We Can Help You With
        </h2>

        <div className="space-y-5 text-bs_navy/80 leading-relaxed">
          <p>
            Domestic abuse can happen to anyone — women, men, young people,
            the elderly, LGBTQ+, immigrants, and people with disabilities.
            Beyond Shelter provides immediate and long-term support aimed at
            protecting your safety, wellbeing, and right to live free from
            violence.
          </p>

          <p>We provide assistance for:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>Physical, emotional, psychological, or verbal abuse</li>
            <li>Sexual assault or coercion</li>
            <li>Financial abuse or being controlled financially</li>
            <li>Stalking, harassment, and digital abuse</li>
            <li>Forced marriage and honour-based violence</li>
            <li>Emergency relocation and safe housing</li>
          </ul>
        </div>
      </section>

      {/* ================= HOW WE SUPPORT YOU ================= */}
      <section className="bg-bs_gold/10 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-bs_navy mb-6">
            How Beyond Shelter Supports You
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-bs_navy/80">
            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold">Emergency Crisis Help</h3>
              <p className="mt-3">
                Our crisis team is available to help you leave unsafe
                environments, report abuse, or access emergency shelter.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold">Safe Temporary Housing</h3>
              <p className="mt-3">
                We provide short-term and long-term accommodation for survivors
                escaping abusive households.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold">Legal & Police Guidance</h3>
              <p className="mt-3">
                Get help navigating restraining orders, police reports, and
                domestic violence legal protections.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow">
              <h3 className="text-xl font-semibold">Counselling & Healing</h3>
              <p className="mt-3">
                Trauma-informed counselling, therapy, and emotional recovery
                support for individuals and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GET HELP NOW ================= */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-bs_navy">
          Need Help Right Now?
        </h2>

        <p className="mt-4 text-bs_navy/70 max-w-2xl mx-auto">
          If you feel unsafe, reach out immediately. We treat every message
          with urgency, confidentiality, and compassion.
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/contacts"
            className="px-8 py-3 bg-bs_navy text-white rounded-lg font-semibold hover:bg-bs_navy/90 transition"
          >
            Contact Beyond Shelter
          </a>

          <a
            href="tel:999"
            className="px-8 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Emergency — Call 999
          </a>
        </div>
      </section>
    </div>
  );
}
