"use client";

import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  MessageCircle,
} from "lucide-react";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 bg-gradient-to-r from-[#1D3557] to-[#457B9D] text-white">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* === ABOUT === */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Beyond Shelter UK</h3>
          <p className="text-white/80 text-sm leading-relaxed">
            Beyond Shelter UK supports homeless individuals, abuse survivors,
            migrants, and people in crisis across the United Kingdom by providing
            shelter, safety, emotional support, and pathways to recovery.
          </p>
        </div>

        {/* === IMPORTANT PAGES === */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Important Pages</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/need-help" className="hover:text-white">I Need Help</Link></li>
            <li><Link href="/emergency-shelter-in-uk" className="hover:text-white">Emergency Shelter</Link></li>
            <li><Link href="/domestic-abuse-support-in-uk" className="hover:text-white">Domestic Abuse Support</Link></li>
            <li><Link href="/mental-health-support" className="hover:text-white">Mental Health Support</Link></li>
            <li><Link href="/housing-advice-in-uk" className="hover:text-white">Housing Advice</Link></li>
          </ul>
        </div>

        {/* === SUPPORT & RESOURCES === */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Support & Resources</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/legal-support" className="hover:text-white">Legal Support</Link></li>
            <li><Link href="/emergency-helpline-in-uk" className="hover:text-white">Emergency Helplines</Link></li>
            <li><Link href="/organizations-that-can-help-you-with-shelter-in-uk" className="hover:text-white">Shelter Organisations</Link></li>
            <li><Link href="/get-involve" className="hover:text-white">Get Involved</Link></li>
            <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
          </ul>
        </div>

        {/* === LEGAL & INFO === */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Legal & Info</h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="/donate" className="hover:text-white">Donate</Link></li>
            <li><Link href="/need-help" className="hover:text-white">Need Help</Link></li>
          </ul>
        </div>

        {/* === CONTACT & SOCIAL === */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>

          <div className="flex gap-4 mb-4">
            <a
              href="https://facebook.com"
              aria-label="Facebook"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <Facebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/shelterbeyond?igsh=bHZhZnp6eXdlajA4"
              aria-label="Instagram"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <Instagram size={18} />
            </a>

            <a
              href="https://wa.me/441332479423"
              aria-label="WhatsApp"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <MessageCircle size={18} />
            </a>

            <a
              href="mailto:info@beyondshelter.org.uk"
              aria-label="Email"
              className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
            >
              <Mail size={18} />
            </a>
          </div>

          <p className="text-xs text-white/70">
            Reach us via WhatsApp or email for urgent support and enquiries.
          </p>
        </div>
      </div>

      {/* === BOTTOM BAR === */}
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Beyond Shelter UK • Registered NGO • All Rights Reserved
      </div>
    </footer>
  );
}
