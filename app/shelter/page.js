// app/shelter/page.js

export const metadata = {
  title: "Shelter Support | Beyond Shelter UK",
  description: "Find emergency shelter and safe accommodation across the UK.",
};

export default function ShelterPage() {
  return (
    <section className="min-h-screen bg-gray-50 text-gray-900">
      <div className="bg-black py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#D4AF37]">
          Shelter Support
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-6">
        <p>
          We help individuals and families find emergency and temporary shelter
          when they have nowhere else to go.
        </p>

        <p>
          Support includes referrals to shelters, safe houses, emergency
          accommodation, and crisis housing services across the UK.
        </p>

        <a
          href="/emergency-help"
          className="inline-block bg-[#0A213A] text-white px-8 py-3 rounded-full"
        >
          Find Emergency Shelter
        </a>
      </div>
    </section>
  );
}
