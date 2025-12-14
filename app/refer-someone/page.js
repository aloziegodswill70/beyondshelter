"use client";

import { useState } from "react";

export default function ReferSomeonePage() {
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    // TODO: connect to API route later
    setTimeout(() => {
      alert("Referral submitted successfully");
      setLoading(false);
    }, 1500);
  }

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl p-6 md:p-10">

        {/* HEADER */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1D3557] mb-2">
          Refer Someone for Support
        </h1>
        <p className="text-gray-600 mb-10">
          Please complete this form to refer an individual or family to Beyond Shelter UK.
          All information is treated confidentially.
        </p>

        <form onSubmit={handleSubmit} className="space-y-12">

          {/* ================= 1. REFERRER DETAILS ================= */}
          <Section title="1. Referrer Details">
            <Input label="Full Name" required />
            <Input label="Job Title (if applicable)" />
            <Input label="Organisation" />
            <Input label="Email Address" type="email" required />
            <Input label="Phone Number" required />

            <Select
              label="Are you the service user?"
              options={["Yes", "No"]}
            />
          </Section>

          {/* ================= 2. SERVICE USER ================= */}
          <Section title="2. Service User Information">
            <Input label="Full Name" required />
            <Input label="Date of Birth" type="date" required />
            <Input label="Phone Number" />
            <Input label="Email Address" type="email" />
            <Textarea label="Current Address" />
            <Input label="Immigration Status" />
            <Input label="Preferred Language" />
          </Section>

          {/* ================= 3. CHILD DETAILS ================= */}
          <Section title="3. Child's Details">
            <Input label="Child's Name" />
            <Input label="Date of Birth" type="date" />
            <Select
              label="Gender"
              options={["Male", "Female", "Other"]}
            />
            <Select
              label="Status"
              options={["Child in Need Plan", "Other"]}
            />
          </Section>

          {/* ================= 4. ACCOMMODATION ================= */}
          <Section title="4. Accommodation Needs">
            <Select
              label="Currently in hotel / B&B?"
              options={["Yes", "No"]}
            />
            <Textarea label="Unsuitable housing concerns" />
            <Textarea label="Accessibility needs" />
          </Section>

          {/* ================= 5. SAFEGUARDING ================= */}
          <Section title="5. Safeguarding and Risk Factors">
            <CheckboxGroup
              label="Known safeguarding concerns (tick all that apply):"
              options={[
                "Domestic abuse",
                "Mental health",
                "Substance misuse",
                "Risk of family breakdown",
                "Other",
              ]}
            />

            <Select
              label="Allocated social worker?"
              options={["Yes", "No"]}
            />

            <Textarea label="Social worker's contact details" />
          </Section>

          {/* ================= 6. SUPPORT NEEDS ================= */}
          <Section title="6. Support Needs">
            <CheckboxGroup
              options={[
                "Parenting support",
                "Housing advocacy",
                "Budgeting / Benefits",
                "Education / Training",
                "Emotional wellbeing",
                "Signposting",
              ]}
            />
          </Section>

          {/* ================= 7. CONSENT ================= */}
          <Section title="7. Consent">
            <Checkbox
              label="I confirm the service user has consented to this referral."
              required
            />
            <Checkbox
              label="I have explained how their information will be used and stored."
              required
            />
          </Section>

          {/* ================= 8. UPLOAD ================= */}
          <Section title="8. Upload Documents">
            <input
              type="file"
              multiple
              className="block w-full text-sm text-gray-600"
            />
          </Section>

          {/* ================= 9. DECLARATION ================= */}
          <Section title="9. Declaration">
            <Input label="Referrer's Name" required />
            <Input label="Date" type="date" required />
          </Section>

          {/* SUBMIT */}
          <div className="pt-6 text-center">
            <button
              disabled={loading}
              className="w-full md:w-auto bg-[#E63946] hover:bg-red-600 text-white font-semibold px-10 py-4 rounded-2xl transition shadow-lg"
            >
              {loading ? "Submitting..." : "Submit Referral"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

/* ================= REUSABLE COMPONENTS ================= */

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#1D3557] mb-4">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {children}
      </div>
    </div>
  );
}

function Input({ label, type = "text", required }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        {label} {required && "*"}
      </label>
      <input
        type={type}
        required={required}
        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
      />
    </div>
  );
}

function Textarea({ label }) {
  return (
    <div className="flex flex-col md:col-span-2">
      <label className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea
        rows={3}
        className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#457B9D]"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select className="border border-gray-300 rounded-xl px-4 py-3 bg-white">
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ label, required }) {
  return (
    <label className="flex items-start gap-3 md:col-span-2 text-sm text-gray-700">
      <input type="checkbox" required={required} className="mt-1" />
      {label}
    </label>
  );
}

function CheckboxGroup({ label, options }) {
  return (
    <div className="md:col-span-2 space-y-2">
      {label && (
        <p className="text-sm font-medium text-gray-700 mb-1">{label}</p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}
