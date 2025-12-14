// File: app/blog/page.js
import Link from "next/link";

export default function BlogPage() {
  const blogs = [
    {
      title: "Beyond Shelter UK: Our Mission to Protect Lives",
      slug: "beyond-shelter-mission",
      desc: "Learn why Beyond Shelter UK exists and how we support vulnerable people across the UK.",
    },
    {
      title: "How to Find Emergency Housing in the UK",
      slug: "emergency-housing-uk",
      desc: "A practical guide for anyone facing homelessness or housing crisis.",
    },
    {
      title: "How Beyond Shelter Helps the Homeless and Abuse Survivors",
      slug: "how-beyond-shelter-helps",
      desc: "Discover the real impact of our shelter, counselling, and outreach services.",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-gray-900">
      <div className="bg-black py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#D4AF37]">
          Beyond Shelter Blog
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12 space-y-8">
        {blogs.map((blog, index) => (
          <Link
            key={index}
            href={`/blog/${blog.slug}`}
            className="block p-6 border rounded-xl hover:shadow-lg transition"
          >
            <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.desc}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
