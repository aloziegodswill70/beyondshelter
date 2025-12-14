export default function NeedHelpPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Need Help?
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          You are not alone. Beyond Shelter UK is here to support you through
          difficult times.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Intro */}
        <p className="text-lg leading-relaxed">
          If you are experiencing homelessness, domestic abuse, housing
          insecurity, or emotional distress, help is available. BeyondShelter UK
          exists to provide guidance, emergency support, and trusted referrals
          to people across the United Kingdom who are facing crisis situations.
        </p>

        {/* Who Can Get Help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Support</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>People experiencing homelessness or rough sleeping</li>
            <li>Victims of domestic abuse or violence</li>
            <li>Individuals facing eviction or housing crisis</li>
            <li>Young people leaving care with nowhere to stay</li>
            <li>Those in emotional distress needing urgent guidance</li>
          </ul>
        </div>

        {/* How We Help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">How We Can Help You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Emergency Guidance
              </h3>
              <p>
                We help you understand your immediate options and connect you
                with emergency services and shelters.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Housing Referrals
              </h3>
              <p>
                Support in finding safe accommodation, councils, and housing
                organisations near you.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Abuse Support Pathways
              </h3>
              <p>
                Confidential help and referrals for those experiencing domestic
                or sexual abuse.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-2">
                Emotional Support
              </h3>
              <p>
                Compassionate listening and direction to trusted helplines and
                mental health services.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2 text-red-700">
            In Immediate Danger?
          </h2>
          <p className="leading-relaxed">
            If you are in immediate danger or fear for your safety, please call
            <strong> 999 </strong> right now. If you cannot speak, dial 999 and
            press 55 when prompted.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Reach Out for Help Today
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Taking the first step can be hard, but support is available. Contact
            BeyondShelter UK and let us help guide you to safety and stability.
          </p>
          <a
            href="/contacts"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Contact BeyondShelter UK
          </a>
        </div>
      </div>
    </section>
  );
}
