export const metadata = {
  title: "Emergency Support | Beyond Shelter UK",
  description:
    "Emergency shelter, crisis response, and immediate support services in the UK.",
};

export default function EmergencyPage() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="w-full bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Emergency Support
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-6">
        <p className="text-gray-700 text-lg">
          This page is for individuals facing emergency housing loss, violence,
          or immediate risk.
        </p>

        <p className="text-gray-700">
          Beyond Shelter UK works to connect you with emergency accommodation,
          crisis services, and safety planning resources.
        </p>
      </div>
    </section>
  );
}
