"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { LOCATIONS, buildWhatsAppEnquiryUrl, WHATSAPP_NUMBER } from "@/config/hotel";
import { ArrowRight, MessageSquare, MapPin, Building2, ShieldCheck } from "lucide-react";

interface BookingCTASectionProps {
  onOpenBooking: () => void;
}

export default function BookingCTASection({ onOpenBooking }: BookingCTASectionProps) {
  const [selectedLocation, setSelectedLocation] = useState(
    `${LOCATIONS[0].officialName} — ${LOCATIONS[0].shortLabel}`
  );

  const handleScrollToLocations = () => {
    const el = document.querySelector("#locations");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDirectWhatsApp = () => {
    const url = buildWhatsAppEnquiryUrl(
      {
        name: "Guest",
        phone: "",
        location: selectedLocation,
        guests: "2 Guests",
        enquiryType: "Stay Enquiry",
      },
      WHATSAPP_NUMBER
    );
    window.open(url, "_blank");
  };

  return (
    <section className="relative py-24 sm:py-32 bg-[#1D1D1B] text-[#FAF8F4] overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/hero-exterior.jpg"
          alt="Hotel Applepie Residency exterior"
          fill
          sizes="100vw"
          className="object-cover object-center filter grayscale"
        />
        <div className="absolute inset-0 bg-[#1D1D1B] mix-blend-multiply" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <ScrollReveal direction="up" distance={16}>
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF77] inline-block mb-4">
            Bengaluru Reservations
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal direction="up" distance={22} delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F4] font-medium tracking-tight">
            Find Your Applepie Stay
          </h2>
        </ScrollReveal>

        {/* Supporting Line */}
        <ScrollReveal direction="up" distance={20} delay={0.2}>
          <p className="text-base sm:text-xl text-[#EDE6DA]/85 font-light max-w-xl mx-auto mt-4">
            Choose your preferred Bengaluru location and enquire about your stay.
          </p>
        </ScrollReveal>

        {/* 3 Locations Preview Buttons */}
        <ScrollReveal direction="up" distance={20} delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-2xl mx-auto">
            {LOCATIONS.map((loc) => (
              <button
                key={loc.id}
                onClick={() => setSelectedLocation(`${loc.officialName} — ${loc.shortLabel}`)}
                className={`text-xs px-3.5 py-1.5 rounded-full border transition-all ${
                  selectedLocation.includes(loc.shortLabel)
                    ? "bg-[#B08A52] text-[#1D1D1B] font-bold border-[#B08A52]"
                    : "bg-white/5 border-white/15 text-[#C2BAAA] hover:text-white"
                }`}
              >
                {loc.num}. {loc.shortLabel}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Primary and Secondary CTA Buttons */}
        <ScrollReveal direction="up" distance={20} delay={0.4}>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={handleScrollToLocations}
              className="bg-[#FAF8F4] hover:bg-white text-[#1D1D1B] font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
            >
              <Building2 size={16} className="text-[#B08A52]" />
              <span>Choose a Location</span>
            </button>

            <button
              onClick={handleDirectWhatsApp}
              className="bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-xs uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2.5"
            >
              <MessageSquare size={16} />
              <span>Enquire on WhatsApp</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Reassurance */}
        <ScrollReveal direction="up" distance={16} delay={0.5}>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-[#C2BAAA]">
            <ShieldCheck size={14} className="text-[#B08A52]" />
            <span>Direct hotel communication · 24/7 front desk responsiveness</span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
