export default function StrandedInUKWithNoHouse() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          Stranded in the UK With No House
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          If you are currently in the UK without a place to stay, you are not
          alone. Help, guidance, and emergency support options are available.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Intro */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            Feeling Lost or Abandoned?
          </h2>
          <p className="leading-relaxed">
            Being stranded in the UK with no housing can be frightening and
            overwhelming. This situation may affect migrants, asylum seekers,
            students, visitors, or residents who have suddenly lost their
            accommodation. BeyondShelter UK exists to help you understand your
            options and find support.
          </p>
        </div>

        {/* Who This Affects */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Who This Situation Can Affect
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>People evicted unexpectedly</li>
            <li>New arrivals or migrants with no accommodation</li>
            <li>Asylum seekers or refugees awaiting decisions</li>
            <li>Victims of abuse forced to leave home</li>
            <li>Students or workers whose housing arrangements collapsed</li>
          </ul>
        </div>

        {/* Immediate Steps */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            What You Can Do Right Now
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Seek emergency shelter or temporary accommodation</li>
            <li>Contact a homelessness or housing advice service</li>
            <li>Reach out to a trusted friend, community group, or charity</li>
            <li>Keep important documents safe and accessible</li>
            <li>Do not stay in unsafe or exploitative environments</li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Housing and Support Options in the UK
          </h2>
          <p className="leading-relaxed mb-4">
            In the UK, help may be available even if you feel you have nowhere
            else to turn. Support can include emergency accommodation, housing
            advice, crisis support, and referrals to specialist services.
          </p>
          <p className="leading-relaxed">
            BeyondShelter UK provides information, signposting, and guidance to
            help you move from crisis to safety.
          </p>
        </div>

        {/* Safety Notice */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            If You Are in Immediate Danger
          </h3>
          <p className="leading-relaxed text-red-800">
            If you are at risk right now, contact emergency services
            immediately. Your safety is the most important thing.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Help and Housing Support
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            You deserve a safe place to stay. Support is available, and help can
            start today.
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
