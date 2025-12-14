export default function IAmDepressedINeedHelpPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          I Am Depressed – I Need Help
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          You are not weak. You are not alone. Help is available, and you deserve support.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Understanding */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            Feeling Depressed Can Be Overwhelming
          </h2>
          <p className="leading-relaxed">
            Depression can affect how you feel, think, sleep, eat, and function daily.
            It may feel heavy, isolating, or endless — but it is not a personal failure.
            Many people experience depression, and support truly helps.
          </p>
        </div>

        {/* Immediate danger */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            If You Are in Immediate Danger
          </h2>
          <p>
            If you are in the UK and feel unsafe or at risk right now, please call
            <strong> 999 </strong> immediately.
          </p>
          <p className="mt-2">
            If speaking is difficult, dial 999 and press <strong>55</strong> when prompted.
          </p>
        </div>

        {/* Signs */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Common Signs of Depression
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Persistent sadness, emptiness, or hopelessness</li>
            <li>Loss of interest in things you once enjoyed</li>
            <li>Low energy or constant fatigue</li>
            <li>Difficulty sleeping or sleeping too much</li>
            <li>Feeling worthless or guilty</li>
            <li>Withdrawing from people</li>
          </ul>
        </div>

        {/* What helps */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            What Can Help Right Now
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Talking to someone you trust</li>
            <li>Seeking professional mental health support</li>
            <li>Reaching out to confidential helplines</li>
            <li>Getting enough rest and nourishment</li>
            <li>Remembering that recovery is possible</li>
          </ul>
        </div>

        {/* UK support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Free Mental Health Support in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Samaritans:</strong> Call <strong>116 123</strong> (24/7)
            </li>
            <li>
              <strong>Shout:</strong> Text <strong>85258</strong> for free confidential support
            </li>
            <li>
              <strong>NHS 111:</strong> Ask for urgent mental health help
            </li>
            <li>
              <strong>Mind UK:</strong> Information and local mental health services
            </li>
          </ul>
        </div>

        {/* BeyondShelter */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Support You
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Safe, non-judgmental emotional support</li>
            <li>Guidance to trusted mental health organisations</li>
            <li>Help connecting housing and wellbeing support</li>
            <li>Compassionate listening when you need it most</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Matter. Help Is Available.
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Depression does not define you. Taking this step shows strength.
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
