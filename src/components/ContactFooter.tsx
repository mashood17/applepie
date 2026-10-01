"use client";

import React from "react";
import BrandLogo from "./BrandLogo";
import { LOCATIONS } from "@/config/hotel";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ArrowUp,
  ArrowUpRight,
  Building2,
} from "lucide-react";

interface ContactFooterProps {
  onOpenBooking: () => void;
}

export default function ContactFooter({ onOpenBooking }: ContactFooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Locations", href: "#locations" },
    { label: "Stay", href: "#stay" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#141413] text-[#FAF8F4] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-white/10">
          {/* Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo variant="light" size="md" />
            <p className="text-xs uppercase tracking-[0.25em] text-[#D4AF77] font-semibold">
              Three locations across Bengaluru.
            </p>
            <p className="text-sm text-[#C2BAAA] leading-relaxed max-w-sm font-light">
              Providing comfortable stays, essential conveniences, and easy access across Bengaluru&apos;s key destinations.
            </p>
            <div className="pt-1">
              <button
                onClick={onOpenBooking}
                className="bg-[#B08A52] hover:bg-[#C49B5E] text-[#1D1D1B] font-bold text-xs uppercase tracking-[0.18em] px-6 py-3 rounded-full transition-all flex items-center gap-2"
              >
                <span>Book Your Stay</span>
                <ArrowUpRight size={14} />
              </button>
            </div>
          </div>

          {/* Locations Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF77] font-semibold flex items-center gap-1.5">
              <Building2 size={14} />
              <span>Locations</span>
            </h4>
            <ul className="space-y-3">
              {LOCATIONS.map((loc) => (
                <li key={loc.id}>
                  <a
                    href="#locations"
                    onClick={(e) => handleNavClick(e, "#locations")}
                    className="group block text-xs text-[#C2BAAA] hover:text-[#FAF8F4] transition-colors"
                  >
                    <div className="font-semibold text-white group-hover:text-[#D4AF77] transition-colors">
                      {loc.displayName}
                    </div>
                    <div className="text-[11px] text-[#8C877D] mt-0.5">
                      {loc.shortLabel}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF77] font-semibold">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-[#C2BAAA] hover:text-[#FAF8F4] transition-colors block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Placeholders (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#D4AF77] font-semibold">
              Contact
            </h4>

            <div className="space-y-2.5 text-xs text-[#C2BAAA]">
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-[#B08A52]" />
                <span>Phone: +91 [Direct Hotel Number]</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-[#25D366]" />
                <span>WhatsApp: +91 [WhatsApp Support]</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-[#B08A52]" />
                <span>Email: reservations@applepie-residency.com</span>
              </div>
            </div>

            <div className="text-[11px] text-[#8C877D] italic pt-1">
              * Dedicated phone and WhatsApp numbers will be configured upon hotel owner confirmation.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C877D]">
          <div>
            &copy; {new Date().getFullYear()} Hotel Applepie Residency, Bengaluru. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#C2BAAA] hover:text-[#FAF8F4] transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
