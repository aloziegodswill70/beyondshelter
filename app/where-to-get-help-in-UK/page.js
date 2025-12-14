export default function WhereToGetHelpInUKPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* ================= HEADER ================= */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Where to Get Help in the UK
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Practical places and services you can contact right now for support.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">

        {/* Overview */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">Get Help Today</h2>
          <p className="leading-relaxed">
            Whether you are facing homelessness, domestic abuse, mental health 
            distress, financial struggle, or crisis support, there are trusted 
            organisations and services across the United Kingdom ready to help.
          </p>
        </div>

        {/* Emergency Support */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            If You Are in Immediate Danger
          </h2>
          <p className="leading-relaxed">
            Call <strong>999</strong> immediately.  
            If speaking is unsafe, dial <strong>999</strong> and press <strong>55</strong>.
          </p>
        </div>

        {/* Homelessness & Housing */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Homelessness & Housing Help</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Local Council Housing Team</strong> – Contact your local council for emergency
              housing help and support duties under UK law.
            </li>
            <li>
              <strong>Shelter UK:</strong> Free housing advice – 0808 800 4444.
            </li>
            <li>
              <strong>Citizens Advice:</strong> Help with tenancy issues, benefits, and legal rights.
            </li>
          </ul>
        </div>

        {/* Abuse & Violence */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Domestic Abuse & Violence Support</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>National Domestic Abuse Helpline:</strong> 0808 2000 247 (24/7).
            </li>
            <li>
              <strong>Women's Aid:</strong> Safe refuge info and support.
            </li>
            <li>
              <strong>Refuge:</strong> Specialist support for women & children.
            </li>
          </ul>
        </div>

        {/* Mental Health */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Mental Health Support</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Samaritans:</strong> 116 123 (24/7 emotional support).
            </li>
            <li>
              <strong>Shout:</strong> Text <strong>85258</strong> for confidential support by text.
            </li>
            <li>
              <strong>NHS 111:</strong> Ask for urgent mental health help.
            </li>
          </ul>
        </div>

        {/* Sexual Violence */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Sexual Assault & Abuse Support</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Rape Crisis England & Wales:</strong> 0808 500 2222.
            </li>
            <li>
              <strong>Sexual Assault Referral Centres (SARCs):</strong> Confidential care.
            </li>
          </ul>
        </div>

        {/* Financial & Welfare */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Benefits, Money & Welfare Help</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Citizens Advice:</strong> Free advice on benefits, debt, and appeals.
            </li>
            <li>
              <strong>Turn2Us:</strong> Grants and financial support search tools.
            </li>
            <li>
              <strong>Jobcentre Plus:</strong> Support with Universal Credit and job support.
            </li>
          </ul>
        </div>

        {/* Community & Refugee Help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Community & Refugee Support</h2>

          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>British Red Cross:</strong> Refugee support and resettlement guidance.
            </li>
            <li>
              <strong>Local community centres:</strong> Food banks, housing signposting, and advocacy.
            </li>
          </ul>
        </div>

        {/* BeyondShelter UK */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Help You
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Immediate guidance for crisis situations</li>
            <li>Referrals to trusted UK services</li>
            <li>Support with housing, safety, and wellbeing</li>
            <li>Confidential and compassionate support</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Want Help Now?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Reach out to the right support service based on your situation.
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
