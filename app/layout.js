import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Beyond Shelter UK – Helping the Homeless & Abused",
  description:
    "Beyond Shelter UK provides safe housing, support and hope for homeless and abused individuals across the UK.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-cream">

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main
          className="
            w-full 
            mx-auto 
            px-4 
            pt-6

            max-w-md           /* Mobile – app-style width */
            md:max-w-2xl       /* Tablets */
            lg:max-w-4xl       /* Small laptops */
            xl:max-w-6xl       /* Desktops */
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
