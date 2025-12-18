// app/sexualabuse/page.js

export const metadata = {
  title: "Sexual Abuse Support | Beyond Shelter UK",
  description: "Confidential help for sexual abuse survivors in the UK.",
};

export default function SexualAbusePage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="bg-[#7A0A0A] py-16 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-bold">
          Sexual Abuse Support
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <p>
          If you have experienced sexual abuse or assault, you deserve safety,
          dignity, and compassionate support.
        </p>

        <ul className="list-disc list-inside space-y-2">
          <li>Confidential emotional support</li>
          <li>Emergency safe accommodation</li>
          <li>Referrals to medical and legal services</li>
          <li>Support for all genders</li>
        </ul>

        <a
          href="/need-help"
          className="inline-block bg-[#7A0A0A] text-white px-8 py-3 rounded-full"
        >
          Get Confidential Help
        </a>
      </div>
    </section>
  );
}
