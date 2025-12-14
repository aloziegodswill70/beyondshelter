export const metadata = {
  title: "Signs of Emotional Abuse and How to Get Help | Beyond Shelter UK",
  description:
    "Learn the common signs of emotional abuse, how it affects mental health, and where to get confidential help and support in the UK.",
};

export default function SignsOfEmotionalAbuseAndHelp() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          Signs of Emotional Abuse and How to Get Help
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          Emotional abuse can be subtle, confusing, and deeply harmful. Knowing
          the signs can help you protect yourself and seek support.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Intro */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            What Is Emotional Abuse?
          </h2>
          <p className="leading-relaxed">
            Emotional abuse involves behaviours that control, intimidate,
            manipulate, or undermine a person’s sense of self-worth. It can
            occur in intimate relationships, families, workplaces, or any
            environment where power is misused.
          </p>
        </div>

        {/* Signs */}
        <div>
          <h2 className="text-3xl font-bold mb-6">
            Common Signs of Emotional Abuse
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Constant criticism, insults, or humiliation</li>
            <li>Blaming you for their behaviour or emotions</li>
            <li>Controlling who you see or what you do</li>
            <li>Gaslighting or denying things that happened</li>
            <li>Threats, intimidation, or emotional withdrawal</li>
            <li>Making you feel afraid, worthless, or dependent</li>
          </ul>
        </div>

        {/* Impact */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            How Emotional Abuse Can Affect You
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Anxiety, depression, or panic attacks</li>
            <li>Low self-esteem and self-doubt</li>
            <li>Sleep problems or constant fear</li>
            <li>Isolation from friends and family</li>
            <li>Difficulty trusting others</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            How to Get Help in the UK
          </h2>
          <p className="leading-relaxed mb-4">
            If you recognise these signs, support is available. You do not need
            proof to ask for help, and your experience is valid.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Speak confidentially with a domestic abuse helpline</li>
            <li>Reach out to a trusted friend or family member</li>
            <li>Seek counselling or mental health support</li>
            <li>Contact organisations that specialise in emotional abuse</li>
          </ul>
        </div>

        {/* Safety */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            If You Feel Unsafe
          </h3>
          <p className="leading-relaxed text-red-800">
            If emotional abuse is escalating or you are in immediate danger,
            contact emergency services right away. Your safety matters.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Confidential Support Is Available
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            You deserve respect, safety, and peace of mind. Help is available,
            and you do not have to face this alone.
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
