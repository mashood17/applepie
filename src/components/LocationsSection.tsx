"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { LOCATIONS, HotelLocation } from "@/config/hotel";
import {
  MapPin,
  ArrowRight,
  Navigation,
  Compass,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

interface LocationsSectionProps {
  onSelectLocationForEnquiry: (locationName: string) => void;
}

export default function LocationsSection({
  onSelectLocationForEnquiry,
}: LocationsSectionProps) {
  const [activeLocationIndex, setActiveLocationIndex] = useState<number>(0);

  const handleEnquire = (loc: HotelLocation) => {
    onSelectLocationForEnquiry(
      `${loc.officialName} — ${loc.shortLabel}`
    );
    // Smooth scroll down to the contact enquiry form
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getDirectionsUrl = (query: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      query
    )}`;
  };

  return (
    <section id="locations" className="py-20 sm:py-28 bg-[#EDE6DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <ScrollReveal direction="up" distance={16}>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8F6C38] inline-block mb-3">
              Our Locations
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1B] font-medium tracking-tight">
              Three Locations. One Applepie Experience.
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.2}>
            <p className="text-sm sm:text-base text-[#6E6A63] mt-3 max-w-2xl font-light leading-relaxed">
              Choose the Applepie Residency location that works best for your Bengaluru visit. Each property offers comfortable rooms, essential conveniences, and easy access across South Bengaluru.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 Premium Location Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {LOCATIONS.map((loc, idx) => (
            <ScrollReveal
              key={loc.id}
              direction="up"
              distance={24}
              delay={0.1 * idx}
              className="h-full"
            >
              <div
                onMouseEnter={() => setActiveLocationIndex(idx)}
                className={`group h-full flex flex-col justify-between bg-[#FAF8F4] border rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl ${
                  activeLocationIndex === idx
                    ? "border-[#B08A52] shadow-md -translate-y-1"
                    : "border-[#E2DACD] hover:border-[#B08A52]/60"
                }`}
              >
                <div>
                  {/* Card Visual Header with Number Badge */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#1D1D1B]">
                    <Image
                      src={loc.image}
                      alt={`${loc.officialName} in ${loc.area}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/75 via-black/20 to-transparent" />

                    {/* Editorial Number */}
                    <div className="absolute top-4 left-4">
                      <span className="font-serif text-2xl sm:text-3xl font-light text-[#FAF8F4] bg-[#1D1D1B]/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 tracking-widest">
                        {loc.num}
                      </span>
                    </div>

                    {/* Short Label Pill */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#D4AF77] bg-[#1D1D1B]/90 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/10">
                        {loc.shortLabel}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 space-y-4">
                    <div>
                      <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#1D1D1B] group-hover:text-[#8F6C38] transition-colors">
                        {loc.officialName}
                      </h3>
                      <div className="text-xs uppercase tracking-wider font-medium text-[#B08A52] mt-0.5">
                        {loc.displayName}
                      </div>
                    </div>

                    {/* Address */}
                    <div className="flex items-start gap-2.5 text-xs text-[#6E6A63] leading-relaxed pt-1 border-t border-[#E8E1D5]">
                      <MapPin size={15} className="text-[#B08A52] shrink-0 mt-0.5" />
                      <address className="not-italic">
                        {loc.address} – {loc.pincode}
                      </address>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1.5 pt-1">
                      {loc.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2 text-xs text-[#4A4742]"
                        >
                          <CheckCircle2 size={13} className="text-[#B08A52]" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (Explore + Enquire) */}
                <div className="p-6 sm:p-7 pt-0 space-y-2.5">
                  <button
                    onClick={() => handleEnquire(loc)}
                    className="w-full bg-[#1D1D1B] hover:bg-[#2A2A27] text-[#FAF8F4] py-3 px-4 rounded-xl text-xs uppercase tracking-[0.16em] font-semibold transition-all flex items-center justify-center gap-2 shadow group-hover:bg-[#B08A52] group-hover:text-[#1D1D1B] group-hover:font-bold"
                  >
                    <span>Enquire About This Location</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={getDirectionsUrl(loc.googleMapsQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#EDE6DA] hover:bg-[#E4D9C8] text-[#1D1D1B] py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-medium transition-all flex items-center justify-center gap-1.5 border border-[#D5C9B5]"
                  >
                    <Navigation size={13} className="text-[#B08A52]" />
                    <span>Explore Location Map</span>
                    <ExternalLink size={12} className="opacity-60" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
