export default function MoviesInUKPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Movies in the UK
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Exploring films in the UK that raise awareness about homelessness,
          mental health, social justice, and human resilience.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Intro */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            Movies as a Tool for Awareness
          </h2>
          <p className="leading-relaxed">
            Film has long played an important role in highlighting real-life
            struggles and social issues. In the UK, many films explore themes
            such as homelessness, domestic abuse, poverty, mental health, and
            survival — issues closely aligned with BeyondShelter UK’s mission.
          </p>
        </div>

        {/* Categories */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Popular Movie Themes in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Homelessness and housing insecurity</li>
            <li>Mental health and emotional wellbeing</li>
            <li>Domestic abuse and recovery</li>
            <li>Migration, refugees, and displacement</li>
            <li>Community strength and resilience</li>
          </ul>
        </div>

        {/* Examples */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            UK Films That Spark Conversation
          </h2>
          <p className="mb-4">
            Many British films focus on everyday realities and social challenges,
            helping audiences understand life experiences different from their own.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Social realism dramas</li>
            <li>Independent British cinema</li>
            <li>Documentaries highlighting inequality</li>
            <li>Films about recovery, hope, and change</li>
          </ul>
        </div>

        {/* Wellbeing */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            Why These Stories Matter
          </h2>
          <p className="leading-relaxed">
            Watching and discussing meaningful films can increase empathy,
            reduce stigma, and encourage people to seek help or support others.
            Stories remind us that behind every struggle is a human being
            deserving of care and dignity.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Need Support or Someone to Talk To?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If a film or story brings up difficult emotions, support is available.
            You do not have to face things alone.
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
