// app/privacy/page.js

export const metadata = {
  title: "Privacy Policy | Beyond Shelter UK",
  description: "Learn how Beyond Shelter UK collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#0A213A] mb-6">
          Privacy Policy
        </h1>

        <p className="mb-4 text-gray-700">
          Beyond Shelter UK is committed to protecting your privacy. This
          policy explains how we collect, use, and safeguard your information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Information We Collect
        </h2>
        <p className="text-gray-700">
          We may collect personal information you provide when contacting us,
          requesting support, or using our services.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          How We Use Your Information
        </h2>
        <p className="text-gray-700">
          Your information is used solely to provide support, improve our
          services, and comply with legal obligations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-3">
          Contact
        </h2>
        <p className="text-gray-700">
          If you have questions about this policy, please contact Beyond Shelter UK.
        </p>
      </div>
    </div>
  );
}
