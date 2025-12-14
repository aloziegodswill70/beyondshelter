export default function ChildrenFromNairobiInNeedOfShelter() {
  return (
    <section className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="w-full bg-black py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#D4AF37] px-4">
          Children from Nairobi in Need of Shelter
        </h1>
        <p className="mt-4 text-center text-gray-300 max-w-3xl mx-auto px-6">
          Addressing homelessness, vulnerability, and urgent shelter needs of children in Nairobi.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-14 space-y-12">

        {/* Introduction */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-3">
            A Growing Humanitarian Crisis
          </h2>
          <p className="leading-relaxed">
            Thousands of children in Nairobi face homelessness due to poverty, family breakdown,
            displacement, abuse, and economic hardship. Many live on the streets or in unsafe
            environments without access to shelter, education, healthcare, or protection.
          </p>
        </div>

        {/* Causes */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Children in Nairobi Become Homeless
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Extreme poverty and unemployment</li>
            <li>Loss of parents or guardians</li>
            <li>Domestic violence and abuse</li>
            <li>Forced displacement and migration</li>
            <li>Lack of access to affordable housing</li>
          </ul>
        </div>

        {/* Risks */}
        <div className="bg-red-100 border border-red-300 rounded-xl p-6">
          <h2 className="text-2xl font-bold text-red-800 mb-2">
            Risks Faced by Homeless Children
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Physical and sexual exploitation</li>
            <li>Human trafficking</li>
            <li>Malnutrition and illness</li>
            <li>Exposure to crime and substance abuse</li>
            <li>Lack of education and future opportunities</li>
          </ul>
        </div>

        {/* What Shelter Means */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Why Safe Shelter Is Critical
          </h2>
          <p className="leading-relaxed">
            A safe shelter provides more than a roof. It offers protection, stability, emotional
            support, access to education, healthcare, and a chance for children to rebuild their
            lives with dignity and hope.
          </p>
        </div>

        {/* BeyondShelter Role */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-6">
            How BeyondShelter Responds
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Raising awareness about child homelessness</li>
            <li>Connecting children to trusted shelter partners</li>
            <li>Supporting access to education and care</li>
            <li>Advocating for child protection and safety</li>
            <li>Collaborating with local and international organisations</li>
          </ul>
        </div>

        {/* How You Can Help */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            How You Can Help These Children
          </h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>Support humanitarian shelter initiatives</li>
            <li>Partner with organisations helping children in Nairobi</li>
            <li>Raise awareness through your community</li>
            <li>Volunteer skills or resources where possible</li>
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center bg-black rounded-xl p-10">
          <h2 className="text-3xl font-bold text-[#D4AF37] mb-4">
            Every Child Deserves a Safe Place to Sleep
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Together, we can help vulnerable children in Nairobi find safety, care, and hope.
          </p>
          <a
            href="/get-involve"
            className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition"
          >
            Get Involved
          </a>
        </div>
      </div>
    </section>
  );
}
