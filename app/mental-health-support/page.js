export default function MentalHealthSupportPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Mental Health Support
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Compassionate support, guidance, and pathways to mental health care
          across the United Kingdom.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Intro */}
        <p className="text-lg leading-relaxed">
          Mental health challenges can affect anyone, especially during periods
          of housing instability, abuse, trauma, or social isolation.
          <strong> BeyondShelter UK </strong> exists to help individuals find
          understanding, reassurance, and access to trusted mental health
          support services throughout the UK.
        </p>

        {/* Who We Support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Who Can Access Mental Health Support
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>People experiencing homelessness or housing insecurity</li>
            <li>Survivors of domestic abuse or exploitation</li>
            <li>Individuals experiencing anxiety, depression, or emotional distress</li>
            <li>Young people leaving care or facing instability</li>
            <li>Anyone feeling overwhelmed, isolated, or unsupported</li>
          </ul>
        </div>

        {/* How We Help */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Supports Mental Wellbeing
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Emotional Support & Listening
              </h3>
              <p>
                Helping individuals feel heard and supported during difficult
                moments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Referrals to Mental Health Services
              </h3>
              <p>
                Connecting people to NHS services, charities, and community
                mental health organisations.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Crisis Guidance
              </h3>
              <p>
                Providing direction to urgent mental health help when immediate
                support is needed.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Ongoing Support Pathways
              </h3>
              <p>
                Helping individuals understand long-term support options and
                recovery resources.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2 text-red-700">
            In a Mental Health Crisis?
          </h2>
          <p className="leading-relaxed">
            If you or someone else is in immediate danger, call
            <strong> 999 </strong> right now.
          </p>
          <p className="leading-relaxed mt-2">
            You can also contact:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>
              <strong>NHS 111</strong> – for urgent mental health help
            </li>
            <li>
              <strong>Samaritans:</strong> 116 123 (free, 24/7)
            </li>
            <li>
              <strong>Shout:</strong> Text <strong>85258</strong> for free,
              confidential support
            </li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Are Not Alone
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Reaching out is a brave first step. BeyondShelter UK is here to help
            guide you toward the mental health support you deserve.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Mental Health Support
          </a>
        </div>
      </div>
    </section>
  );
}
