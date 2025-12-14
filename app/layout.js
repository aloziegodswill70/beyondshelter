import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://beyondshelter.org.uk"),

  title: {
    default: "Beyond Shelter UK – Helping the Homeless & Abused",
    template: "%s | Beyond Shelter UK",
  },

  description:
    "Beyond Shelter UK is a non-governmental organisation providing emergency shelter, housing support, and care for homeless individuals and survivors of abuse across the United Kingdom.",

  keywords: [
    "homeless shelter UK",
    "emergency housing UK",
    "help for homeless people UK",
    "domestic abuse support UK",
    "safe shelter UK",
    "housing crisis help UK",
    "abuse survivors support UK",
    "NGO helping homeless UK",
    "emergency accommodation UK",
    "mental health support UK",
  ],

  authors: [{ name: "Beyond Shelter UK" }],
  creator: "Beyond Shelter UK",
  publisher: "Beyond Shelter UK",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://beyondshelter.org.uk",
    siteName: "Beyond Shelter UK",
    title: "Beyond Shelter UK – Helping the Homeless & Abused",
    description:
      "Emergency shelter, housing support, and compassionate care for homeless and abused individuals across the UK.",
    images: [
      {
        url: "/images/beyond1.jpg",
        width: 1200,
        height: 630,
        alt: "Beyond Shelter UK – Emergency Shelter & Support",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Beyond Shelter UK – Helping the Homeless & Abused",
    description:
      "Providing emergency shelter, housing support, and hope for homeless and abused people across the UK.",
    images: ["/images/beyond1.jpg"],
  },

  alternates: {
    canonical: "https://beyondshelter.org.uk",
  },

  category: "Non-Profit Organization",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#1D3557]">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main
          className="
            flex-1 w-full mx-auto
            px-4 sm:px-6 lg:px-8
            pt-24 pb-28

            max-w-screen-sm     /* phones */
            md:max-w-screen-md  /* tablets */
            lg:max-w-screen-lg  /* laptops */
            xl:max-w-screen-xl  /* large screens */
          "
        >
          {children}
        </main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
