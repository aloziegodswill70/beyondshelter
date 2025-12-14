export default function FreeSupportServicesForWomenInUK() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Free Support Services for Women in the UK
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          A helpful guide to free, confidential services available to women across the United Kingdom.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">

        {/* Overview */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            Support When You Need It Most
          </h2>
          <p className="leading-relaxed">
            Women across the UK may need free support for reasons including domestic abuse,
            sexual violence, homelessness, mental health challenges, economic hardship,
            family breakdown, or crisis situations. The following services offer *free* and
            *confidential* support — no matter your background or circumstance.
          </p>
        </div>

        {/* Emergency Help */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            Immediate / Emergency Help
          </h2>
          <p className="leading-relaxed">
            If you or someone else is in immediate danger, call <strong>999</strong> now.
          </p>
          <p className="mt-2 leading-relaxed">
            If calling is unsafe, dial 999 and press <strong>55</strong> when prompted.
          </p>
        </div>

        {/* Domestic Abuse */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Domestic Abuse – Free UK Support
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>National Domestic Abuse Helpline:</strong> 0808 2000 247 (24/7)
            </li>
            <li>
              <strong>Women’s Aid:</strong> Support, refuge information, online chat
            </li>
            <li>
              <strong>Refuge:</strong> Shelter and specialist services for women & children
            </li>
          </ul>
        </div>

        {/* Sexual Violence */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Support for Sexual Violence Survivors
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Rape Crisis England & Wales:</strong> 0808 500 2222 (Confidential support)
            </li>
            <li>
              <strong>SARCs (Sexual Assault Referral Centres):</strong> Medical & emotional care
            </li>
          </ul>
        </div>

        {/* Homelessness Support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Housing & Homelessness Support
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Shelter UK:</strong> 0808 800 4444 – Free housing advice
            </li>
            <li>
              <strong>Local Council Housing Services:</strong> Emergency shelter referrals
            </li>
          </ul>
        </div>

        {/* Well-Being / Mental Health */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Emotional & Mental Well-Being
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Samaritans:</strong> 116 123 – 24/7 listening support
            </li>
            <li>
              <strong>Shout:</strong> Text <strong>85258</strong> – Confidential support
            </li>
            <li>
              <strong>Mind UK:</strong> Advice and local mental health links
            </li>
          </ul>
        </div>

        {/* Practical Assistance */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Practical & Community Assistance
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Citizens Advice:</strong> Housing, benefits & legal guidance
            </li>
            <li>
              <strong>Food Banks (Trussell Trust):</strong> Local emergency food support
            </li>
            <li>
              <strong>Women’s Community Groups:</strong> Emotional support & local services
            </li>
          </ul>
        </div>

        {/* BeyondShelter Help */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Support You
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Compassionate, confidential listening</li>
            <li>Referrals to trusted UK services</li>
            <li>Help accessing emergency shelters & refuge</li>
            <li>Guidance through crisis situations</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Are Not Alone
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            BeyondShelter UK is here to help, listen, and guide you toward safety.
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
