export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* === ABOUT SECTION === */}
        <div>
          <h3 classnmae="text-xl font-semibold mb-3">Beyond Shelter UK</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Providing safe shelter, crisis intervention, and emotional
            rehabilitation for the homeless and survivors of abuse across
            the United Kingdom.  
            Your support helps us restore dignity, safety, and hope.
          </p>
        </div>

        {/* === QUICK LINKS === */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li className="hover:text-white cursor-pointer transition">Home</li>
            <li className="hover:text-white cursor-pointer transition">About Us</li>
            <li className="hover:text-white cursor-pointer transition">How We Help</li>
            <li className="hover:text-white cursor-pointer transition">Impact</li>
            <li className="hover:text-white cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* === GET HELP === */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get Help</h3>
          <ul className="space-y-2 text-white/80 text-sm">
            <li className="hover:text-white cursor-pointer transition">Emergency Shelter</li>
            <li className="hover:text-white cursor-pointer transition">Domestic Abuse Support</li>
            <li className="hover:text-white cursor-pointer transition">Counselling Services</li>
            <li className="hover:text-white cursor-pointer transition">Request Urgent Help</li>
          </ul>
        </div>

        {/* === SOCIAL MEDIA === */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>

          <ul className="space-y-3 text-white/80 text-sm">
            <li>
              <a href="#" className="hover:text-white transition">
                Instagram: @beyondshelteruk
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                TikTok: @beyondshelteruk
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Facebook: Beyond Shelter UK
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Twitter/X: @beyondshelteruk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* === COPYRIGHT === */}
      <div className="text-center text-white/70 text-xs mt-10">
        © {new Date().getFullYear()} Beyond Shelter UK • All Rights Reserved
      </div>
    </footer>
  );
}
