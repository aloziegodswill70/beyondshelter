export const metadata = {
  title:
    "I Heard About BeyondShelter on BBC News — I Need Help | Beyond Shelter UK",
  description:
    "If you heard about BeyondShelter UK on BBC News and need help with housing, abuse, homelessness or crisis support in the UK, here’s how to get immediate and confidential assistance.",
};

export default function HeardAboutBeyondShelterOnBBCNewsINeedHelp() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          I Heard About BeyondShelter on BBC News — I Need Help
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          You’re here because you want help — and that’s a strong, brave first step.
          BeyondShelter UK is here to support you with safety, shelter, and confidential assistance.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Validation */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            You Are Not Alone
          </h2>
          <p className="leading-relaxed">
            If you are experiencing homelessness, abuse, fear, emotional distress,
            or crisis — hearing about help on BBC News is a connection to support
            that really exists. You deserve safety, compassion, and practical help.
          </p>
        </div>

        {/* Immediate Safety */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            If You Are in Immediate Danger
          </h2>
          <p className="leading-relaxed text-red-800">
            If you are unsafe right now or fear for your life, call <strong>999</strong>
            immediately. If speaking is unsafe, dial <strong>999</strong> and press <strong>55</strong>.
          </p>
        </div>

        {/* How We Help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            What BeyondShelter UK Can Help With
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Emergency housing and shelter referrals</li>
            <li>Support if you’re fleeing abuse or unsafe living situations</li>
            <li>Guidance for homelessness and urgent accommodation</li>
            <li>Emotional support and signposting to trusted services</li>
          </ul>
        </div>

        {/* Practical Steps */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            How to Get Help Right Now
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Contact your local council housing team for emergency support</li>
            <li>Reach out to homelessness charities for shelter options</li>
            <li>Speak with trained support workers confidentially</li>
            <li>Use trusted helplines if you need someone to talk to immediately</li>
          </ul>
        </div>

        {/* Support Services */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            UK Support Services You Can Contact
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li><strong>National Domestic Abuse Helpline:</strong> 0808 2000 247 (24/7)</li>
            <li><strong>Samaritans:</strong> 116 123 (24/7 emotional support)</li>
            <li><strong>Shout:</strong> Text <strong>85258</strong> for confidential support</li>
            <li><strong>Shelter UK:</strong> 0808 800 4444 (housing advice)</li>
            <li><strong>Local Council Housing Services:</strong> emergency housing assessments</li>
          </ul>
        </div>

        {/* Emotional Support */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Emotional Support & Wellbeing
          </h2>
          <p className="leading-relaxed">
            Crisis and trauma can impact your emotional health. There is no shame in
            reaching out for professional emotional support — even if you’re unsure
            what steps to take next.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Help Starts Here
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Whether you need shelter, emotional support, legal guidance, or someone
            to listen, BeyondShelter UK is here to help — confidentially and with care.
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
