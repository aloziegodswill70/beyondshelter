export default function UgandanWomenUKHelp() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      
      {/* ================= HERO ================= */}
      <div className="bg-black py-16">
        <h1 className="text-4xl font-bold text-center text-[#D4AF37] px-4">
          Ugandan Women in the UK Who Need Help
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Support, guidance, and safe pathways for Ugandan women facing hardship,
          abuse, housing insecurity, or emotional distress in the United Kingdom.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Introduction */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-3">
            You Are Not Alone
          </h2>
          <p className="leading-relaxed">
            Many Ugandan women living in the UK experience challenges such as
            domestic abuse, homelessness, immigration stress, financial
            hardship, isolation, or mental health struggles. BeyondShelter UK
            exists to help connect you with support services that are safe,
            confidential, and respectful.
          </p>
        </div>

        {/* Common Challenges */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Common Challenges Ugandan Women Face
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Domestic or sexual abuse</li>
            <li>Unsafe housing or homelessness</li>
            <li>Immigration or visa uncertainty</li>
            <li>Financial hardship or unemployment</li>
            <li>Isolation and lack of community support</li>
            <li>Anxiety, depression, or trauma</li>
          </ul>
        </div>

        {/* Support Available */}
        <div className="bg-[#FFF7E0] border border-[#D4AF37] rounded-xl p-10">
          <h2 className="text-3xl font-bold mb-6">
            Support Available in the UK
          </h2>
          <p className="leading-relaxed mb-4">
            In the UK, help is available regardless of your background. Support
            services can include:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Emergency shelter and safe accommodation</li>
            <li>Domestic abuse helplines and refuge referrals</li>
            <li>Mental health and trauma counselling</li>
            <li>Legal guidance and advocacy referrals</li>
            <li>Community outreach and peer support</li>
          </ul>
        </div>

        {/* Cultural Sensitivity */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Culturally Sensitive Support
          </h2>
          <p className="leading-relaxed">
            BeyondShelter UK understands the cultural, emotional, and social
            challenges Ugandan women may face when seeking help. We aim to
            provide information and referrals that respect your dignity,
            privacy, and lived experience.
          </p>
        </div>

        {/* Safety Notice */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            Immediate Danger
          </h3>
          <p className="leading-relaxed text-red-800">
            If you are in immediate danger, please contact emergency services
            right away. If you can do so safely, reach out to a trusted person
            or a local support organisation.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-black rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Get Confidential Help Today
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            You deserve safety, care, and support. Help is available, and your
            voice matters.
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
