// app/how-to-get-help-for-shelter/page.js

export const metadata = {
  title: "How to Get Help for Shelter | Beyond Shelter UK",
  description: "Steps to access emergency shelter and housing support.",
};

export default function HowToGetShelterHelp() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      <div className="bg-[#0A213A] py-16 text-center text-white">
        <h1 className="text-4xl font-bold">
          How to Get Help for Shelter
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <ol className="list-decimal list-inside space-y-3">
          <li>Identify your immediate risk level</li>
          <li>Contact Beyond Shelter UK</li>
          <li>Provide basic information safely</li>
          <li>Receive shelter referral or placement</li>
        </ol>

        <a
          href="/gethelp"
          className="inline-block bg-[#0A213A] text-white px-8 py-3 rounded-full"
        >
          Start the Process
        </a>
      </div>
    </section>
  );
}
