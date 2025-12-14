export const metadata = {
  title: "Organizations That Can Help You With Shelter in the UK | Beyond Shelter UK",
  description:
    "Find organisations in the UK that can help with emergency shelter, housing advice, and support for people facing homelessness or housing crisis.",
};

export default function OrganizationsThatHelpWithShelterUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          Organizations That Can Help You With Shelter in the UK
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          If you are homeless, at risk of losing your home, or need emergency
          accommodation, there are organisations across the UK that can help.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Intro */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            You Do Not Have to Face This Alone
          </h2>
          <p className="leading-relaxed">
            Housing crises can happen suddenly due to eviction, abuse, financial
            hardship, or unexpected life events. In the UK, a range of charities,
            councils, and support organisations exist to help people find safe
            shelter and stability.
          </p>
        </div>

        {/* Local Councils */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Local Councils and Housing Services
          </h2>
          <p className="leading-relaxed mb-4">
            Local councils have legal duties to assist people who are homeless
            or at risk of homelessness.
          </p>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Emergency accommodation referrals</li>
            <li>Temporary housing placements</li>
            <li>Homelessness prevention services</li>
            <li>Housing advice and assessments</li>
          </ul>
        </div>

        {/* Charities */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Charities and Non-Profit Organisations
          </h2>
          <p className="leading-relaxed mb-4">
            Many UK charities specialise in helping people find shelter and
            rebuild their lives.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Homelessness charities offering shelter and outreach</li>
            <li>Domestic abuse refuges and safe housing</li>
            <li>Faith-based and community shelters</li>
            <li>Youth and women-specific housing support</li>
          </ul>
        </div>

        {/* Specialist Support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Specialist Support Services
          </h2>
          <p className="leading-relaxed mb-4">
            Some organisations focus on supporting people with specific needs
            or circumstances.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Migrant and refugee housing support</li>
            <li>Mental health supported accommodation</li>
            <li>Survivors of abuse and trafficking</li>
            <li>Young people leaving care</li>
          </ul>
        </div>

        {/* What to Do */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            What You Can Do Right Now
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Contact your local council housing department</li>
            <li>Reach out to homelessness or housing charities</li>
            <li>Seek emergency shelter if you have nowhere safe to stay</li>
            <li>Ask for help early before the situation worsens</li>
          </ul>
        </div>

        {/* Emergency */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            Immediate Danger or Crisis
          </h3>
          <p className="leading-relaxed text-red-800">
            If you are in immediate danger or have nowhere safe to sleep tonight,
            contact emergency services or an emergency shelter straight away.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Help Finding Shelter
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Support is available across the UK. You deserve safety, dignity,
            and a place to call home.
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
