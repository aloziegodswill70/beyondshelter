export default function IranWomenInUKNeedHelpPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Iranian Women in the UK – Need Help
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Safe, confidential support for Iranian women facing hardship, trauma,
          housing insecurity, or isolation in the United Kingdom.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Reassurance */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            You Deserve Safety and Dignity
          </h2>
          <p className="leading-relaxed">
            Many Iranian women in the UK face unique challenges, including trauma,
            displacement, language barriers, housing instability, and emotional
            distress. Seeking help is a courageous step, and support is available.
          </p>
        </div>

        {/* Immediate danger */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            If You Are in Immediate Danger
          </h2>
          <p>
            If you are in the UK and are unsafe right now, please call
            <strong> 999 </strong> immediately.
          </p>
          <p className="mt-2">
            If speaking is not safe, dial 999 and press <strong>55</strong> when asked.
          </p>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Common Challenges Faced
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Housing or shelter insecurity</li>
            <li>Emotional distress, anxiety, or depression</li>
            <li>Isolation or lack of family support</li>
            <li>Difficulty accessing services or understanding systems</li>
            <li>Past trauma or unsafe living situations</li>
          </ul>
        </div>

        {/* Support available */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Support Available in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Emergency and temporary housing guidance</li>
            <li>Mental health and trauma-informed support</li>
            <li>Women-only support services</li>
            <li>Confidential emotional listening</li>
            <li>Legal and asylum signposting where appropriate</li>
          </ul>
        </div>

        {/* Trusted organisations */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Trusted UK Support Services
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Women’s Aid:</strong> Support for women experiencing abuse
            </li>
            <li>
              <strong>Samaritans:</strong> Call <strong>116 123</strong> (24/7 emotional support)
            </li>
            <li>
              <strong>Shout:</strong> Text <strong>85258</strong> for confidential support
            </li>
            <li>
              <strong>British Red Cross:</strong> Refugee and humanitarian support
            </li>
          </ul>
        </div>

        {/* BeyondShelter */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Help
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Confidential guidance without judgment</li>
            <li>Support finding safe housing options</li>
            <li>Referrals to women-focused services</li>
            <li>Emotional and practical support during crisis</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Are Welcome Here
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Your background does not limit your right to safety, care, and respect.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Support Now
          </a>
        </div>
      </div>
    </section>
  );
}
