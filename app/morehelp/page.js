// app/morehelp/page.js

export const metadata = {
  title: "More Help & Resources | Beyond Shelter UK",
  description: "Additional help, support services, and crisis resources.",
};

export default function MoreHelpPage() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      <div className="bg-[#0A213A] py-16 text-center text-white">
        <h1 className="text-4xl font-bold">More Help & Resources</h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          If your situation does not fit one category, help is still available.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Mental health support</li>
          <li>Family crisis assistance</li>
          <li>Support for fathers in distress</li>
          <li>Emergency referrals</li>
        </ul>
      </div>
    </section>
  );
}
