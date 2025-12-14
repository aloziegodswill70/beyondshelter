export const metadata = {
  title: "Premier League 2025 | UK Football, Community & Social Impact",
  description:
    "Premier League 2025 in the UK – exploring football culture, community influence, and how sport connects people while supporting social awareness and vulnerable groups.",
};

export default function PremierLeague2025() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          Premier League 2025
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          The Premier League 2025 season continues to shape football culture,
          unite communities, and influence social conversations across the UK.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Intro */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            Premier League 2025 in the UK
          </h2>
          <p className="leading-relaxed">
            The Premier League remains one of the most watched sporting
            competitions globally. In 2025, football continues to be more than
            entertainment — it is a powerful platform that brings together
            people from all backgrounds across the United Kingdom.
          </p>
        </div>

        {/* Season Focus */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Football, Fans, and Community
          </h2>
          <p className="leading-relaxed mb-4">
            Premier League clubs in 2025 are deeply connected to their local
            communities, using football to promote unity, wellbeing, and
            inclusion.
          </p>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Community outreach and youth programmes</li>
            <li>Mental health and wellbeing awareness</li>
            <li>Anti-discrimination and inclusion initiatives</li>
            <li>Support for local charities and vulnerable people</li>
          </ul>
        </div>

        {/* Social Awareness */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Using Sport to Raise Awareness
          </h2>
          <p className="leading-relaxed">
            In 2025, football continues to be a powerful voice for social
            responsibility. Conversations around housing insecurity, domestic
            abuse, and mental health are increasingly visible through community
            programmes connected to sport.
          </p>
        </div>

        {/* Connection to BeyondShelter */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Beyond Football: Supporting People in Need
          </h2>
          <p className="leading-relaxed">
            BeyondShelter UK recognises how popular platforms like football can
            help amplify important messages. Strong communities, built through
            shared interests, can become safer spaces for those facing crisis
            or homelessness.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Community Support Matters
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            When communities stand together, people in crisis are not left
            behind. Learn how support can make a difference.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-bs_blue text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition"
          >
            Get Support
          </a>
        </div>

      </div>
    </section>
  );
}
