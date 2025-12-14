export default function INeedHelpIWasRapedPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          I Need Help – I Was Raped
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          What happened was not your fault. You deserve safety, care, and support.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">
        {/* Reassurance */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            You Are Not Alone
          </h2>
          <p className="leading-relaxed">
            Experiencing sexual violence can be deeply traumatic. You may feel shocked,
            afraid, numb, angry, or overwhelmed. These reactions are normal, and help
            is available. You do not have to face this alone.
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
            If speaking is not safe, dial 999 and press <strong>55</strong> when prompted.
          </p>
        </div>

        {/* What to do now */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            What You Can Do Right Now
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Move to a place where you feel as safe as possible</li>
            <li>Reach out to someone you trust</li>
            <li>Seek confidential professional support</li>
            <li>Remember: reporting is your choice</li>
          </ul>
        </div>

        {/* Medical & forensic */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Medical Care & Support
          </h2>
          <p className="leading-relaxed mb-3">
            You can receive medical care, emotional support, and forensic services
            even if you are unsure about reporting to the police.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Sexual Assault Referral Centres (SARCs)</li>
            <li>Confidential medical examinations</li>
            <li>Emergency contraception and STI support</li>
            <li>Trauma-informed counselling</li>
          </ul>
        </div>

        {/* UK support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Free Confidential Support in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Rape Crisis England & Wales:</strong> 0808 500 2222 (24/7)
            </li>
            <li>
              <strong>Samaritans:</strong> 116 123 (24/7 emotional support)
            </li>
            <li>
              <strong>Shout:</strong> Text <strong>85258</strong> for confidential support
            </li>
            <li>
              <strong>NHS 111:</strong> Ask for urgent sexual assault services
            </li>
          </ul>
        </div>

        {/* BeyondShelter */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter UK Can Support You
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Safe, confidential listening without judgment</li>
            <li>Help finding emergency or longer-term shelter</li>
            <li>Referrals to trusted specialist services</li>
            <li>Support navigating your next steps</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            You Deserve Support and Care
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Healing takes time. Reaching out today is a powerful step.
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
