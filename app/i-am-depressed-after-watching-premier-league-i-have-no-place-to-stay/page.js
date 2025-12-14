export const metadata = {
  title:
    "I Am Depressed and Have No Place to Stay in the UK | Help & Shelter Support",
  description:
    "If you feel depressed, overwhelmed, and have no place to stay in the UK, this page explains where to get emotional support, emergency housing, and confidential help.",
};

export default function DepressedAfterPremierLeagueNoPlaceToStay() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* HERO */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          I Am Depressed and I Have No Place to Stay
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          Feeling alone, overwhelmed, or hopeless can happen to anyone.
          You deserve safety, support, and a place to rest.
        </p>
      </div>

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Validation */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            What You Are Feeling Is Valid
          </h2>
          <p className="leading-relaxed">
            Feeling depressed while dealing with housing instability can be
            emotionally exhausting. You are not weak for feeling this way, and
            you are not alone. Many people experience deep emotional distress
            when they have nowhere safe to stay.
          </p>
        </div>

        {/* Immediate Safety */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            If You Feel Overwhelmed or Unsafe Right Now
          </h2>
          <p className="leading-relaxed text-red-800">
            If you feel like you might harm yourself or cannot cope, please
            reach out immediately. Help is available 24/7.
          </p>
          <ul className="list-disc pl-6 mt-3 text-red-800">
            <li><strong>Samaritans:</strong> 116 123 (24 hours, free)</li>
            <li><strong>Shout:</strong> Text <strong>85258</strong> for support</li>
            <li><strong>Emergency:</strong> Call <strong>999</strong> if you are in danger</li>
          </ul>
        </div>

        {/* Housing Help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            If You Have No Place to Stay Tonight
          </h2>
          <p className="leading-relaxed mb-4">
            Having nowhere to stay can increase anxiety and depression.
            Emergency housing options may be available to you even if your
            situation feels complicated.
          </p>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Local council emergency housing services</li>
            <li>Night shelters and temporary accommodation</li>
            <li>Homelessness charities and outreach teams</li>
            <li>Faith and community-based shelters</li>
          </ul>
        </div>

        {/* Mental Health */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Mental Health Support Is Important
          </h2>
          <p className="leading-relaxed">
            Depression can make everything feel heavier. Talking to someone
            trained to listen can help you regain clarity and emotional balance.
            You do not need to handle this alone.
          </p>
        </div>

        {/* Practical Steps */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            What You Can Do Next
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Contact your local council for emergency housing assessment</li>
            <li>Speak to a mental health or crisis helpline</li>
            <li>Reach out to a trusted charity or support organisation</li>
            <li>If possible, stay somewhere safe while seeking help</li>
          </ul>
        </div>

        {/* Reassurance */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            This Moment Does Not Define Your Future
          </h2>
          <p className="leading-relaxed">
            Even if everything feels uncertain right now, things can change.
            Support, shelter, and care are available. Reaching out today is a
            positive and courageous step.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Confidential Help Now
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Beyond Shelter connects people in crisis with housing support,
            emotional care, and trusted UK services.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-bs_blue text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition"
          >
            Get Help
          </a>
        </div>

      </div>
    </section>
  );
}
