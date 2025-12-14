export default function AfricanOrphansInUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          African Orphans in the UK
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Understanding the challenges facing African orphaned children living in the United Kingdom
          and how support services can help.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">

        {/* Overview */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            Who Are African Orphans in the UK?
          </h2>
          <p className="leading-relaxed">
            African orphans in the UK include children who have lost one or both parents and are now
            living under the care of relatives, foster systems, guardians, or support organisations.
            Many arrive through family reunification, asylum processes, or humanitarian pathways.
          </p>
        </div>

        {/* Challenges */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Challenges They May Face
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Emotional trauma and grief from parental loss</li>
            <li>Cultural and language adjustment difficulties</li>
            <li>Housing instability or overcrowded living conditions</li>
            <li>Access to education and healthcare support</li>
            <li>Risk of isolation or exploitation</li>
          </ul>
        </div>

        {/* Protection */}
        <div className="bg-[#FFF7E0] border border-[#D4AF37] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Legal Protection for Orphaned Children in the UK
          </h2>
          <p className="leading-relaxed mb-4">
            UK law provides safeguarding measures for vulnerable children, regardless of background.
            Local authorities have duties to ensure safety, education, and wellbeing.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Children’s services safeguarding</li>
            <li>Access to education and NHS healthcare</li>
            <li>Support through foster care or kinship care</li>
            <li>Special consideration for asylum-seeking children</li>
          </ul>
        </div>

        {/* Support Services */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Support Services Available
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Local authority children’s services</li>
            <li>Community and faith-based support groups</li>
            <li>Charities supporting migrant and refugee children</li>
            <li>Mental health and trauma counselling services</li>
          </ul>
        </div>

        {/* BeyondShelter Role */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Supports African Orphans
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Connecting families to trusted child support services</li>
            <li>Advocating for safe housing and stability</li>
            <li>Supporting guardians with guidance and referrals</li>
            <li>Promoting dignity, safety, and inclusion</li>
          </ul>
        </div>

        {/* Safeguarding */}
        <div className="bg-green-100 border border-green-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-2">
            Safeguarding Comes First
          </h2>
          <p className="leading-relaxed">
            If you are concerned about a child’s safety or wellbeing, contact local children’s
            services immediately. In emergencies, call <strong>999</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Help Protect Vulnerable Children
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Compassionate support can make a life-changing difference for orphaned children.
          </p>
          <a
            href="/get-involve"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Involved
          </a>
        </div>

      </div>
    </section>
  );
}
