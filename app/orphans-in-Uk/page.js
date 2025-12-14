export default function OrphansInUKPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Orphans in the UK
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Supporting vulnerable children and young people without parental care
          across the United Kingdom
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Intro */}
        <p className="text-lg leading-relaxed">
          In the United Kingdom, thousands of children live without the care and
          protection of their biological parents due to death, abandonment,
          abuse, neglect, or family breakdown. These children—often referred to
          as orphans or children without parental care—face increased risks of
          homelessness, exploitation, emotional trauma, and long-term
          instability. <strong>BeyondShelter UK</strong> exists to help bridge
          this gap by connecting vulnerable children and young people to support
          systems, safe environments, and hope for the future.
        </p>

        {/* Challenges */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Challenges Facing Orphans in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Unstable foster care or temporary placements</li>
            <li>High risk of homelessness after leaving care</li>
            <li>Mental health challenges and emotional trauma</li>
            <li>Exposure to abuse, neglect, or exploitation</li>
            <li>Limited access to long-term support systems</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Support Available for Orphans
          </h2>
          <p className="leading-relaxed">
            While local authorities and charities provide support through foster
            care, adoption services, and care homes, many young people still fall
            through the cracks—especially during transitions into adulthood.
            BeyondShelter UK works alongside trusted partners to connect
            individuals to housing, welfare support, and counselling services.
          </p>
        </div>

        {/* What We Do */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Helps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Emergency Assistance
              </h3>
              <p>
                Rapid connection to safe shelter and urgent child protection
                resources.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Guidance & Referrals
              </h3>
              <p>
                Directing children and guardians to trusted social services and
                charities.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Care Leaver Support
              </h3>
              <p>
                Helping young adults transition safely from care into
                independent living.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Advocacy & Awareness
              </h3>
              <p>
                Raising awareness and driving long-term solutions for vulnerable
                children.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Help a Vulnerable Child Today
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If you know a child or young person in urgent need of help, or if you
            want to support our mission, BeyondShelter UK is here for you.
          </p>
          <a
            href="/contacts"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Help or Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
