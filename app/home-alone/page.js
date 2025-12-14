export default function HomeAlonePage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Home Alone
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Being home alone should feel safe. If it doesn’t, help and support are available.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Reassurance */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            Feeling Unsafe While Home Alone
          </h2>
          <p className="leading-relaxed">
            Some people feel anxious, threatened, or vulnerable when they are alone at home.
            This can be due to fear, past experiences, harassment, stalking, or unsafe living
            conditions. Your feelings are valid, and you deserve to feel protected.
          </p>
        </div>

        {/* Immediate danger */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            If You Are in Immediate Danger
          </h2>
          <p>
            Call <strong>999</strong> right away.
          </p>
          <p className="mt-2">
            If speaking is not safe, dial 999 and press <strong>55</strong> when asked.
          </p>
        </div>

        {/* Guidance */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            What You Can Do Right Now
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Ensure doors and windows are securely locked</li>
            <li>Stay in well-lit areas of your home</li>
            <li>Keep your phone charged and nearby</li>
            <li>Reach out to someone you trust</li>
            <li>Contact support services if fear persists</li>
          </ul>
        </div>

        {/* UK Support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Confidential Support in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li><strong>Samaritans:</strong> 116 123 (24/7 emotional support)</li>
            <li><strong>Shout:</strong> Text <strong>85258</strong> for silent help</li>
            <li><strong>National Domestic Abuse Helpline:</strong> 0808 2000 247</li>
          </ul>
        </div>

        {/* BeyondShelter */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Support You
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Safe guidance when you feel vulnerable</li>
            <li>Connections to emergency housing or shelter</li>
            <li>Mental health and emotional support pathways</li>
            <li>Confidential help without judgment</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Are Not Alone
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Feeling unsafe at home is serious. Support is available, and reaching out is a strong first step.
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
