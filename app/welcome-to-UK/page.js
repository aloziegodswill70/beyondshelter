export default function WelcomeToUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Welcome to the United Kingdom
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Information, guidance, and reassurance for people arriving in the UK
          seeking safety, stability, and a fresh start.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">

        {/* Welcome Message */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            You Are Not Alone
          </h2>
          <p className="leading-relaxed">
            Arriving in a new country can feel overwhelming, especially if you have
            come to the UK due to conflict, abuse, homelessness, or personal hardship.
            You deserve safety, dignity, and support.
          </p>
        </div>

        {/* First Steps */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            First Steps After Arriving in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Ensure you are in a safe place</li>
            <li>Register with a GP (doctor) as soon as possible</li>
            <li>Seek housing advice if you do not have accommodation</li>
            <li>Understand your immigration or asylum status</li>
            <li>Ask for help — support services exist</li>
          </ul>
        </div>

        {/* Housing */}
        <div className="bg-[#FFF7E0] border border-[#D4AF37] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Housing and Shelter Support
          </h2>
          <p className="leading-relaxed mb-4">
            If you are homeless, at risk of eviction, or staying temporarily with others,
            you may be entitled to emergency housing or support.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Local council housing assistance</li>
            <li>Emergency shelters and temporary accommodation</li>
            <li>Charities offering housing advice and advocacy</li>
          </ul>
        </div>

        {/* Health */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Health and Wellbeing
          </h2>
          <p className="leading-relaxed mb-4">
            Everyone in the UK has the right to urgent medical care. Mental health
            support is also available, especially for trauma, anxiety, or depression.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>NHS healthcare services</li>
            <li>Mental health and counselling support</li>
            <li>Specialist services for survivors of abuse</li>
          </ul>
        </div>

        {/* Rights */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Your Rights in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Protection from violence, abuse, and exploitation</li>
            <li>Safeguarding for children and vulnerable adults</li>
            <li>Access to education for children</li>
            <li>Confidential support regardless of background</li>
          </ul>
        </div>

        {/* BeyondShelter */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            How BeyondShelter UK Can Help
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Guidance on housing and emergency support</li>
            <li>Referrals to trusted charities and services</li>
            <li>Information for migrants, refugees, and vulnerable individuals</li>
            <li>Support delivered with compassion and respect</li>
          </ul>
        </div>

        {/* Emergency */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            Emergency Support
          </h2>
          <p className="leading-relaxed">
            If you are in immediate danger, call <strong>999</strong>.
            If you need urgent advice, contact local emergency services or trusted
            helplines.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Help Is Available
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            You deserve safety, care, and support. Reach out — someone will listen.
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
