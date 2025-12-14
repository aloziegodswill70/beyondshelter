export default function StepsToLeaveAbusiveRelationshipSafely() {
  return (
    <section className="min-h-screen bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <div className="bg-bs_navy py-16">
        <h1 className="text-4xl font-bold text-center text-white px-4">
          Steps to Leave an Abusive Relationship Safely
        </h1>
        <p className="mt-4 text-center text-white/90 max-w-3xl mx-auto px-6">
          Leaving an abusive relationship can be difficult and dangerous.
          Planning carefully and seeking support can help protect your safety.
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-14">

        {/* Intro */}
        <div className="app-card">
          <h2 className="text-2xl font-bold mb-3">
            Your Safety Comes First
          </h2>
          <p className="leading-relaxed">
            Abuse can be physical, emotional, sexual, financial, or controlling
            behaviour. If you are thinking about leaving, it is important to
            plan ahead and reach out for help. You are not weak, and the abuse
            is not your fault.
          </p>
        </div>

        {/* Step 1 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            1. Make a Safety Plan
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Identify a safe place you can go quickly if needed</li>
            <li>Plan how you will leave the house safely</li>
            <li>Keep emergency phone numbers memorised or hidden</li>
            <li>Have a code word with someone you trust</li>
          </ul>
        </div>

        {/* Step 2 */}
        <div className="bg-bs_softBlue border border-bs_blue rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            2. Prepare Important Items
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Identification (passport, ID, visa documents)</li>
            <li>Bank cards, cash, and important financial records</li>
            <li>Medication and essential personal items</li>
            <li>Phone charger and key contacts written down</li>
          </ul>
        </div>

        {/* Step 3 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            3. Reach Out for Support
          </h2>
          <p className="leading-relaxed mb-4">
            You do not have to do this alone. Speaking to someone confidentially
            can help you understand your options and stay safe.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Domestic abuse helplines</li>
            <li>Trusted friends or family members</li>
            <li>Support organisations or charities</li>
            <li>Healthcare professionals or counsellors</li>
          </ul>
        </div>

        {/* Step 4 */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            4. Protect Your Privacy
          </h2>
          <ul className="list-disc pl-6 space-y-3 leading-relaxed">
            <li>Clear browsing history if researching help</li>
            <li>Use a safe device if possible</li>
            <li>Change passwords and PINs when safe to do so</li>
            <li>Be cautious with social media location sharing</li>
          </ul>
        </div>

        {/* Step 5 */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            5. Leave When It Is Safest
          </h2>
          <p className="leading-relaxed">
            The safest time to leave is different for everyone. Avoid
            confrontation if possible, and prioritise getting to a safe place.
            Your well-being matters more than explanations or belongings.
          </p>
        </div>

        {/* Emergency Notice */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-8">
          <h3 className="text-xl font-bold mb-2 text-red-700">
            If You Are in Immediate Danger
          </h3>
          <p className="leading-relaxed text-red-800">
            Call emergency services immediately. If you cannot speak safely,
            try to signal for help or leave the situation as quickly as possible.
          </p>
        </div>

        {/* CTA */}
        <div className="bg-bs_navy rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Confidential Help Is Available
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-6">
            Support services in the UK can help you plan safely, find shelter,
            and begin healing.
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
