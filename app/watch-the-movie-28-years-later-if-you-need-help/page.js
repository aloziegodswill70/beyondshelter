export default function WatchTheMovie28YearsLaterIfYouNeedHelp() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Watch the Movie “28 Years Later” — If You Need Help
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          When stories of survival remind us that help, connection, and hope still matter.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">

        {/* Intro */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Stories That Reflect Real Struggles</h2>
          <p className="leading-relaxed">
            Films like <em>28 Years Later</em> explore survival, isolation, fear, and resilience.
            While fictional, these themes can mirror real-life experiences of homelessness,
            trauma, mental health challenges, or feeling alone.
          </p>
        </div>

        {/* Why it resonates */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Why This Film Can Feel Personal</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Feelings of isolation and uncertainty</li>
            <li>Searching for safety in unsafe conditions</li>
            <li>The importance of human connection</li>
            <li>Hope during crisis and recovery</li>
          </ul>
          <p className="leading-relaxed mt-4">
            If watching this movie brings up difficult emotions, it’s okay to pause, step back,
            and reach out for support.
          </p>
        </div>

        {/* Gentle support message */}
        <div className="bg-[#FFF7E0] border border-[#D4AF37] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            If You’re Struggling After Watching
          </h2>
          <p className="leading-relaxed">
            Strong emotional reactions are normal. What matters most is knowing you don’t have to
            face difficult feelings alone. Support is available in the UK right now.
          </p>
        </div>

        {/* Where to get help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Where You Can Get Help in the UK</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Samaritans:</strong> 116 123 (24/7 emotional support)</li>
            <li><strong>Shout:</strong> Text <strong>85258</strong> for confidential text support</li>
            <li><strong>Shelter UK:</strong> Housing advice if you’re at risk of homelessness</li>
            <li><strong>Your GP or NHS 111:</strong> Mental health support options</li>
          </ul>
        </div>

        {/* BeyondShelter role */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Support You
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Guidance if you feel overwhelmed or unsafe</li>
            <li>Support with housing and crisis situations</li>
            <li>Referrals to trusted UK organisations</li>
            <li>Compassionate, confidential help</li>
          </ul>
        </div>

        {/* Emergency */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            If You Are in Immediate Danger
          </h2>
          <p className="leading-relaxed">
            Call <strong>999</strong> right away.  
            If speaking is unsafe, call <strong>999</strong> and press <strong>55</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Don’t Have to Go Through This Alone
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If a film, memory, or situation has made things feel overwhelming, help is available.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Help Now
          </a>
        </div>

      </div>
    </section>
  );
}
