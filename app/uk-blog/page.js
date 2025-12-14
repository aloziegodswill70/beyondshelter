export default function UKBlog() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ================= HERO ================= */}
      <div className="bg-black py-16">
        <h1 className="text-4xl font-bold text-center text-[#D4AF37] px-4">
          BeyondShelter UK Blog
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          News, guidance, stories, and resources on housing, safety, wellbeing,
          and support services across the United Kingdom.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Intro */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-3">
            Information That Empowers
          </h2>
          <p className="leading-relaxed">
            The BeyondShelter UK Blog provides trusted, easy-to-understand
            information for individuals and families facing homelessness,
            abuse, migration challenges, housing insecurity, and mental health
            difficulties in the UK.
          </p>
        </div>

        {/* Blog Categories */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Topics We Cover
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Emergency Housing & Shelter",
              "Domestic Abuse Support",
              "Mental Health & Trauma Recovery",
              "Refugee & Migrant Support",
              "Legal Rights in the UK",
              "Community Outreach & Impact Stories",
            ].map((topic, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg mb-2">{topic}</h3>
                <p className="text-sm leading-relaxed">
                  Practical advice, real-world insights, and updates to help you
                  understand your options and rights.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        <div className="bg-[#FFF7E0] border border-[#D4AF37] rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-6">
            Featured UK Articles
          </h2>
          <ul className="space-y-4 list-disc pl-6">
            <li>What to do if you are homeless tonight in the UK</li>
            <li>Emergency housing options for women and children</li>
            <li>Your rights if facing eviction in England</li>
            <li>Where to get free mental health support in the UK</li>
            <li>How BeyondShelter supports vulnerable communities</li>
          </ul>
        </div>

        {/* Why Blog Matters */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why This Blog Exists
          </h2>
          <p className="leading-relaxed mb-4">
            Many people in crisis do not know where to turn or what support they
            are entitled to. This blog bridges that gap by offering clear,
            compassionate information without judgement.
          </p>
          <p className="leading-relaxed">
            Whether you are seeking help for yourself, supporting someone else,
            or learning about social issues in the UK, our blog is here for you.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-black rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Need Help Right Now?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If you are facing homelessness, abuse, or distress, you do not have
            to face it alone. Support is available.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-10 py-4 rounded-lg hover:opacity-90 transition"
          >
            Get Help Now
          </a>
        </div>

      </div>
    </section>
  );
}
