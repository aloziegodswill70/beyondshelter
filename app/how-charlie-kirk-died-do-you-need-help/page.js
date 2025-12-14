export const metadata = {
  title:
    "How Charlie Kirk Died — Do You Need Help? | Beyond Shelter UK",
  description:
    "If news or online discussions about death or tragedy have affected your wellbeing, Beyond Shelter UK offers support, housing guidance, and emotional help across the UK.",
};

export default function HowCharlieKirkDiedDoYouNeedHelp() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          How Charlie Kirk Died — Do You Need Help?
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          News, rumours, or online discussions about death can be upsetting.
          If this topic has affected your mental health, safety, or housing
          situation, support is available.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Context */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            It’s Okay to Feel Affected by Disturbing News
          </h2>
          <p className="leading-relaxed">
            Exposure to distressing stories or online speculation about death
            can trigger anxiety, sadness, or fear — especially if you are
            already facing hardship, homelessness, or isolation. Your feelings
            are valid, and help exists.
          </p>
        </div>

        {/* Safety */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold text-red-700 mb-3">
            If You Feel Unsafe Right Now
          </h2>
          <p className="leading-relaxed text-red-800">
            If you are in immediate danger or feel unable to keep yourself safe,
            call <strong>999</strong>. If speaking is not safe, dial <strong>999</strong> and press <strong>55</strong>.
          </p>
        </div>

        {/* What We Can Help With */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            How Beyond Shelter UK Can Support You
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Emergency housing and shelter referrals</li>
            <li>Support if distressing news has impacted your mental health</li>
            <li>Guidance if you are homeless or at risk of homelessness</li>
            <li>Confidential signposting to trusted UK services</li>
          </ul>
        </div>

        {/* Mental Health */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Mental Health & Emotional Support
          </h2>
          <p className="leading-relaxed">
            If reading or watching upsetting content has left you feeling
            overwhelmed, speaking with trained listeners can help you process
            your emotions and feel grounded again.
          </p>
        </div>

        {/* UK Support Services */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            UK Support Services You Can Contact
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li><strong>Samaritans:</strong> 116 123 (24/7 emotional support)</li>
            <li><strong>Shout:</strong> Text <strong>85258</strong> for confidential support</li>
            <li><strong>NHS 111:</strong> urgent mental health advice</li>
            <li><strong>Shelter UK:</strong> 0808 800 4444 (housing advice)</li>
          </ul>
        </div>

        {/* Reassurance */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            You Don’t Have to Carry This Alone
          </h2>
          <p className="leading-relaxed">
            Whether your distress comes from the news, personal loss, housing
            instability, or emotional strain, reaching out can make a real
            difference.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Support Today
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Beyond Shelter UK connects people in crisis with safe housing,
            emotional support, and practical guidance across the UK.
          </p>
          <a
            href="/need-help"
            className="inline-block bg-bs_blue text-white font-semibold px-10 py-4 rounded-xl hover:opacity-90 transition"
          >
            Get Help Now
          </a>
        </div>

      </div>
    </section>
  );
}
