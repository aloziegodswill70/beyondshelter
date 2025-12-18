// app/gethelp/page.js

export const metadata = {
  title: "Get Help | Beyond Shelter UK",
  description: "Get immediate help, shelter, and crisis support across the UK.",
};

export default function GetHelpPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="bg-[#0A213A] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">Get Help Now</h1>
        <p className="mt-4 text-lg text-gray-200">
          You are not alone. Support is available immediately.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          Beyond Shelter UK provides urgent assistance for individuals facing
          homelessness, abuse, mental health crisis, or immediate danger.
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Emergency shelter support</li>
          <li>Domestic and sexual abuse assistance</li>
          <li>Mental health crisis support</li>
          <li>Confidential guidance and referrals</li>
        </ul>

        <a
          href="/need-help"
          className="inline-block mt-6 bg-[#0A213A] text-white px-8 py-3 rounded-full font-semibold"
        >
          Request Immediate Help
        </a>
      </div>
    </section>
  );
}
