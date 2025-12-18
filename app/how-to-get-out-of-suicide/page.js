// app/how-to-get-out-of-suicide/page.js

export const metadata = {
  title: "How to Get Out of Suicidal Thoughts | Beyond Shelter UK",
  description: "Immediate guidance and support for suicidal thoughts.",
};

export default function SuicideHelpPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="bg-black py-16 text-center">
        <h1 className="text-4xl font-bold text-red-500">
          You Are Not Alone
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <p>
          If you are having suicidal thoughts, help is available right now.
          Your life matters.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Reach out to someone you trust</li>
          <li>Remove yourself from immediate danger</li>
          <li>Contact emergency services if needed</li>
          <li>Speak with a trained support specialist</li>
        </ul>

        <a
          href="/need-help"
          className="inline-block bg-red-600 text-white px-8 py-3 rounded-full"
        >
          Get Immediate Help
        </a>
      </div>
    </section>
  );
}
