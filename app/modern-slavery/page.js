export default function ModernSlaveryPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Modern Slavery
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Raising awareness, supporting victims, and helping people escape
          exploitation across the United Kingdom.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Intro */}
        <p className="text-lg leading-relaxed">
          Modern slavery is a serious crime and a violation of human rights.
          It includes forced labour, human trafficking, domestic servitude,
          sexual exploitation, and other forms of coercion where individuals
          are controlled, threatened, or exploited for another person’s gain.
          Thousands of people in the UK are affected, often hidden in plain
          sight.
        </p>

        {/* Forms */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Forms of Modern Slavery
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Human trafficking</li>
            <li>Forced or bonded labour</li>
            <li>Domestic servitude</li>
            <li>Criminal exploitation</li>
            <li>Sexual exploitation</li>
          </ul>
        </div>

        {/* Signs */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Signs Someone May Be a Victim
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Appearing fearful, anxious, or withdrawn</li>
            <li>Being controlled by another person</li>
            <li>No access to personal documents or money</li>
            <li>Poor living conditions or unsafe work environments</li>
            <li>Working excessively long hours with little or no pay</li>
          </ul>
        </div>

        {/* How We Help */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Helps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Safe Guidance
              </h3>
              <p>
                Confidential advice for individuals who believe they may be
                experiencing exploitation.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Emergency Referrals
              </h3>
              <p>
                Connecting victims to trusted UK services, shelters, and
                authorities trained to respond safely.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Housing Support
              </h3>
              <p>
                Assistance in finding safe accommodation for those escaping
                exploitative environments.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">
                Awareness & Advocacy
              </h3>
              <p>
                Educating communities and supporting long-term solutions to
                prevent exploitation.
              </p>
            </div>
          </div>
        </div>

        {/* Emergency */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-2 text-red-700">
            If You Are in Immediate Danger
          </h2>
          <p className="leading-relaxed">
            Call <strong>999</strong> immediately.  
            You can also contact the UK Modern Slavery Helpline on
            <strong> 0800 0121 700</strong> for confidential advice and support.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Deserve Safety and Freedom
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            If you or someone you know may be affected by modern slavery,
            BeyondShelter UK is here to help guide you toward safety and support.
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
