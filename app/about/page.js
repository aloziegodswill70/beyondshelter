// app/about/page.js
import Link from "next/link";

export const metadata = {
  title: "About Us | Beyond Shelter UK",
  description:
    "Learn about Beyond Shelter UK – a humanitarian non-profit providing safe housing, crisis support, and hope for homeless and abused individuals across the United Kingdom.",
};

export default function AboutPage() {
  return (
    <section className="pt-28 pb-16 px-6 max-w-5xl mx-auto text-bs_navy">

      {/* PAGE TITLE */}
      <h1 className="text-3xl md:text-4xl font-bold text-bs_red mb-4">
        About Beyond Shelter UK
      </h1>

      <p className="text-bs_navy/70 leading-relaxed max-w-3xl text-lg">
        Beyond Shelter UK is a non-profit organisation dedicated to providing safe
        housing, emergency support, and life-restoring care for people facing
        homelessness, domestic abuse, or crisis situations throughout the United
        Kingdom.  
      </p>

      {/* OUR MISSION */}
      <div className="app-card mt-10">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">Our Mission</h2>
        <p className="text-bs_navy/80 leading-relaxed">
          We exist to ensure that every person — regardless of their background,
          struggles, or circumstances — receives the dignity, safety, and support
          they deserve. Our mission is to help individuals rebuild their lives with
          emergency shelter, counselling, protection, and long-term reintegration
          programs.
        </p>
      </div>

      {/* OUR VALUES */}
      <div className="app-card mt-8">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">Our Core Values</h2>

        <ul className="space-y-4 text-bs_navy/80">
          <li>
            <strong className="text-bs_red">Compassion:</strong> We offer care without judgement, discrimination, or barriers.
          </li>
          <li>
            <strong className="text-bs_red">Safety:</strong> Our shelters and crisis teams prioritise protection and well-being.
          </li>
          <li>
            <strong className="text-bs_red">Hope:</strong> Every person deserves a fresh start, and we work daily to make that possible.
          </li>
          <li>
            <strong className="text-bs_red">Dignity:</strong> We treat every individual with respect and humanity.
          </li>
        </ul>
      </div>

      {/* OUR WORK */}
      <div className="app-card mt-8">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">What We Do</h2>

        <ul className="space-y-4 text-bs_navy/80">
          <li>🏠 Emergency and long-term shelter for homeless individuals</li>
          <li>🛡️ Domestic abuse support, safe houses & crisis intervention</li>
          <li>📞 24/7 helpline for people experiencing danger or trauma</li>
          <li>🍲 Food, clothing, and basic essentials for those in need</li>
          <li>💬 Counselling and emotional support</li>
          <li>📘 Skills development and reintegration programs</li>
        </ul>
      </div>

      {/* IMPACT */}
      <div className="app-card mt-8">
        <h2 className="text-2xl font-semibold text-bs_blue mb-3">Our Impact</h2>

        <p className="text-bs_navy/80 leading-relaxed">
          Every year, Beyond Shelter UK helps thousands of individuals escape
          homelessness, violence, and crisis situations. Our dedicated volunteers,
          shelters, social workers, and partners continue to build a society where
          no one is left behind.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <Link
          href="/support-us"
          className="px-6 py-3 bg-bs_red text-white rounded-full text-lg font-semibold shadow-md hover:bg-bs_blue transition"
        >
          Support Our Mission
        </Link>
      </div>
    </section>
  );
}
