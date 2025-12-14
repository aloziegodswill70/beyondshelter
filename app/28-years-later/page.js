export default function TwentyEightYearsLaterPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          28 Years Later
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Exploring themes of survival, isolation, and humanity in the UK through film.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Overview */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            About 28 Years Later
          </h2>
          <p className="leading-relaxed">
            <strong>28 Years Later</strong> continues the legacy of the acclaimed British
            post-apocalyptic film series that began with <em>28 Days Later</em>.
            Set in the UK, the story explores how people adapt, survive, and rebuild
            in the aftermath of a long-lasting crisis.
          </p>
        </div>

        {/* Themes */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Key Themes Explored
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Survival and resilience in extreme conditions</li>
            <li>Isolation, fear, and mental health challenges</li>
            <li>Community breakdown and rebuilding</li>
            <li>The importance of human connection</li>
            <li>Moral choices during crisis</li>
          </ul>
        </div>

        {/* Relevance */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why These Stories Matter
          </h2>
          <p className="leading-relaxed">
            Films like <strong>28 Years Later</strong> reflect real human emotions
            experienced during hardship — fear, loss, hope, and the need for shelter
            and safety. These themes closely connect with the realities faced by
            people experiencing homelessness, displacement, or trauma.
          </p>
        </div>

        {/* Wellbeing note */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Looking After Your Wellbeing
          </h2>
          <p className="leading-relaxed">
            Post-apocalyptic films can be intense and emotionally triggering.
            If watching such content brings up anxiety, fear, or distress,
            it is okay to pause and seek support.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Need Support or Someone to Talk To?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If you are feeling overwhelmed or unsafe, help is available.
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
