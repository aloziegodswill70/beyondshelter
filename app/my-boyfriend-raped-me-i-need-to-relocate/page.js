export const metadata = {
  title:
    "My Boyfriend Raped Me – I Need to Relocate | Emergency Help & Shelter UK",
  description:
    "If your partner raped you and you need to relocate urgently in the UK, this page explains safe steps, emergency housing options, and confidential support available now.",
};

export default function MyBoyfriendRapedMeINeedToRelocate() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          My Boyfriend Raped Me – I Need to Relocate
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          What happened to you is not your fault. You deserve safety, support,
          and a place where you can heal.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Validation */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            You Are Not to Blame
          </h2>
          <p className="leading-relaxed">
            Sexual violence can happen within relationships. Being someone’s
            partner does not give them the right to harm you. What you are
            experiencing is serious, and help is available.
          </p>
        </div>

        {/* Immediate Safety */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-3 text-red-700">
            Your Safety Comes First
          </h2>
          <p className="leading-relaxed text-red-800">
            If you are still living with or near the person who hurt you and feel
            unsafe, relocating to a secure place is an important step. You do
            not need to stay where you are being harmed.
          </p>
        </div>

        {/* Relocation Options */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Relocation and Emergency Housing Options in the UK
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Domestic abuse refuges offering confidential accommodation</li>
            <li>Emergency housing through your local council</li>
            <li>Charities that arrange safe relocation away from the abuser</li>
            <li>Short-term emergency shelters with support services</li>
          </ul>
        </div>

        {/* What to Do */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            What You Can Do Right Now
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Leave the environment if it is unsafe</li>
            <li>Contact a domestic abuse or sexual violence support service</li>
            <li>Reach out to your local council housing department</li>
            <li>Keep important documents and essentials if possible</li>
          </ul>
        </div>

        {/* Reporting */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Reporting Is Your Choice
          </h2>
          <p className="leading-relaxed">
            You are not required to report to the police to receive help or
            housing support. Many organisations will assist you whether or not
            you choose to report. The decision is yours.
          </p>
        </div>

        {/* Emotional Support */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            Emotional and Psychological Support
          </h2>
          <p className="leading-relaxed">
            Trauma can affect your mental and emotional wellbeing. Confidential
            counselling and survivor-focused support services are available to
            help you cope and recover at your own pace.
          </p>
        </div>

        {/* Emergency */}
        <div className="bg-red-50 border border-red-300 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            If You Are in Immediate Danger
          </h3>
          <p className="leading-relaxed text-red-800">
            If you are at risk right now or have nowhere safe to stay tonight,
            contact emergency services or an emergency refuge immediately.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            You Can Get Help and Relocate Safely
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Beyond Shelter connects people in crisis with safe housing options
            and confidential support across the UK.
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
