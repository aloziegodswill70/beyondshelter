export const metadata = {
  title: "Emergency Help in the UK | Beyond Shelter UK",
  description:
    "Immediate emergency help for homelessness, abuse survivors, and people in crisis.",
};

export default function EmergencyHelp() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="w-full bg-red-800 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-white">
          Emergency Help
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <p className="text-gray-700 text-lg">
          If you cannot wait, this page provides direct guidance on urgent steps
          to stay safe and find shelter.
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-700">
          <li>Emergency shelter referrals</li>
          <li>Crisis helplines</li>
          <li>Domestic abuse support</li>
          <li>Immediate safety planning</li>
        </ul>
      </div>
    </section>
  );
}
