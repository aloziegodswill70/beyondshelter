export const metadata = {
  title: "Premier League UK | Community, Awareness & Social Impact",
  description:
    "Explore the Premier League in the UK and how football culture connects communities, raises awareness, and supports social causes including homelessness and vulnerable people.",
};

export default function PremierLeagueUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          Premier League UK
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          Football is more than a game in the UK. The Premier League connects
          communities, inspires hope, and creates opportunities for social
          change.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Intro */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            The Role of the Premier League in UK Society
          </h2>
          <p className="leading-relaxed">
            The Premier League is one of the most followed football leagues in
            the world. Beyond entertainment, it plays a significant role in
            bringing people together across cultures, backgrounds, and
            communities throughout the United Kingdom.
          </p>
        </div>

        {/* Community Impact */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Community and Social Impact
          </h2>
          <p className="leading-relaxed mb-4">
            Football clubs across the Premier League support community
            programmes that address important social issues.
          </p>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Youth engagement and education initiatives</li>
            <li>Community outreach and inclusion programmes</li>
            <li>Mental health awareness campaigns</li>
            <li>Support for vulnerable individuals and families</li>
          </ul>
        </div>

        {/* Awareness */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Raising Awareness Through Sport
          </h2>
          <p className="leading-relaxed">
            Sport has the power to shine a light on social challenges such as
            homelessness, abuse, and mental health struggles. Community-led
            conversations inspired by football can encourage compassion,
            understanding, and action.
          </p>
        </div>

        {/* Connection to BeyondShelter */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Football, Community, and Support
          </h2>
          <p className="leading-relaxed">
            BeyondShelter UK recognises the influence of popular culture in
            spreading awareness. By connecting conversations around football
            with social responsibility, communities can work together to
            support people facing hardship.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Supporting Communities Beyond the Game
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Strong communities create safer lives. Learn how you can support
            people in need across the UK.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-bs_blue text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition"
          >
            Find Support
          </a>
        </div>

      </div>
    </section>
  );
}
