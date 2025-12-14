export default function HowBeyondShelterHelpARwandanGirlWhoRanOutOfShelter() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          How BeyondShelter Helped a Rwandan Girl Who Ran Out of Shelter
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          A real example of compassion, emergency response, and restoring dignity to a vulnerable young woman.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">

        {/* Introduction */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            When Shelter Suddenly Disappears
          </h2>
          <p className="leading-relaxed">
            A young girl from Rwanda found herself without shelter after exhausting all temporary
            housing options. Alone, frightened, and with no immediate support, she faced the risk
            of homelessness, exploitation, and further trauma.
          </p>
        </div>

        {/* Her Situation */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Her Situation at the Time
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>No access to safe accommodation</li>
            <li>Limited financial resources</li>
            <li>Emotional distress and fear</li>
            <li>At risk of sleeping in unsafe environments</li>
            <li>No local family or support network</li>
          </ul>
        </div>

        {/* Immediate Response */}
        <div className="bg-[#FFF7E0] border border-[#D4AF37] rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">
            BeyondShelter’s Immediate Response
          </h2>
          <p className="leading-relaxed mb-4">
            BeyondShelter acted quickly once the situation was identified. The priority was safety,
            dignity, and stabilisation.
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Emergency shelter referral</li>
            <li>Connection to trusted local support partners</li>
            <li>Confidential case assessment</li>
            <li>Emotional reassurance and guidance</li>
          </ul>
        </div>

        {/* Ongoing Support */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Ongoing Support and Stability
          </h2>
          <p className="leading-relaxed">
            After immediate shelter was secured, BeyondShelter focused on longer-term stability.
            This included helping her access essential services, explore education or skills
            opportunities, and rebuild a sense of safety and self-worth.
          </p>
        </div>

        {/* Impact */}
        <div className="bg-green-100 border border-green-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-800 mb-3">
            The Impact of Timely Help
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Safe accommodation secured</li>
            <li>Reduced risk of harm and exploitation</li>
            <li>Improved emotional wellbeing</li>
            <li>Renewed hope and direction</li>
          </ul>
        </div>

        {/* Why This Matters */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Stories Like This Matter
          </h2>
          <p className="leading-relaxed">
            Thousands of girls and young women face sudden homelessness every year. Timely,
            compassionate intervention can prevent lifelong harm and change the course of a life.
            BeyondShelter exists to ensure no one is left without support when shelter runs out.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Help Us Support More Girls in Crisis
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Your support helps us respond quickly when someone runs out of shelter and options.
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
