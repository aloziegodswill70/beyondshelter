"use client";

export default function AboutSection() {
  return (
    <section className="mt-12 app-card">

      <h2 className="text-2xl font-bold text-[#1D3557] mb-3">
        About Beyond Shelter UK
      </h2>

      <p className="text-[15px] leading-relaxed text-[#3A4F7A]">
        Beyond Shelter UK is a community-driven organisation dedicated to
        protecting homeless and abused individuals across the United Kingdom.
        We provide safe housing, emergency care, and long-term guidance.
      </p>

      <p className="mt-3 text-[15px] leading-relaxed text-[#3A4F7A]">
        Our mission is simple: <strong>no one should face homelessness,
        trauma or abuse alone</strong>.
      </p>

      <div className="mt-5 bg-[#F1EFEA] rounded-2xl p-4 border">
        <h3 className="font-semibold text-lg mb-2">Our Core Commitments</h3>
        <ul className="space-y-2 text-[15px]">
          <li>• Emergency shelter & housing</li>
          <li>• Domestic abuse survivor support</li>
          <li>• Mental health & wellbeing care</li>
          <li>• Employment & reintegration help</li>
          <li>• Community-first approach</li>
        </ul>
      </div>

      <div className="mt-6 text-center">
        <a
          href="/get-involve"
          className="inline-block bg-[#1D3557] text-white py-3 px-6 rounded-2xl font-semibold hover:bg-[#142744]"
        >
          Join Our Mission
        </a>
      </div>

    </section>
  );
}
