"use client";

import React, { useState } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import {
  Wind,
  Wifi,
  Tv,
  BedDouble,
  Bath,
  Flame,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

interface RoomSectionProps {
  onOpenBooking: () => void;
}

export default function RoomSection({ onOpenBooking }: RoomSectionProps) {
  const [activePhoto, setActivePhoto] = useState<"bedroom" | "bathroom">("bedroom");

  const features = [
    { name: "Air Conditioning", icon: <Wind size={18} className="text-[#B08A52]" /> },
    { name: "Free Wi-Fi", icon: <Wifi size={18} className="text-[#B08A52]" /> },
    { name: "Television", icon: <Tv size={18} className="text-[#B08A52]" /> },
    { name: "Double Bed", icon: <BedDouble size={18} className="text-[#B08A52]" /> },
    { name: "Private Bathroom", icon: <Bath size={18} className="text-[#B08A52]" /> },
    { name: "Hot Water", icon: <Flame size={18} className="text-[#B08A52]" /> },
  ];

  return (
    <section id="stay" className="py-20 sm:py-28 bg-[#EDE6DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <ScrollReveal direction="up" distance={16}>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8F6C38] inline-block mb-3">
              The Accommodation
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#1D1D1B] font-medium tracking-tight">
              A Comfortable Place to Stay
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.2}>
            <p className="text-sm sm:text-base text-[#6E6A63] mt-3 font-light leading-relaxed">
              Across our Bengaluru locations, Applepie Residency focuses on comfortable accommodation and the everyday essentials that make a city stay convenient.
            </p>
          </ScrollReveal>
        </div>

        {/* Editorial Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Visual Frame (7 cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" distance={24}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#1D1D1B] group">
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={
                      activePhoto === "bedroom"
                        ? "/images/room-classic.jpg"
                        : "/images/bathroom-clean.jpg"
                    }
                    alt={
                      activePhoto === "bedroom"
                        ? "Classic Room bedroom at Applepie Residency"
                        : "Clean modern en-suite bathroom at Applepie Residency"
                    }
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Photo Switcher Tabs */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
                  <div className="flex items-center gap-2 bg-[#1D1D1B]/80 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
                    <button
                      onClick={() => setActivePhoto("bedroom")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wider uppercase transition-all ${
                        activePhoto === "bedroom"
                          ? "bg-[#B08A52] text-[#1D1D1B] font-bold shadow"
                          : "text-[#EDE6DA] hover:text-white"
                      }`}
                    >
                      Bedroom View
                    </button>
                    <button
                      onClick={() => setActivePhoto("bathroom")}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wider uppercase transition-all ${
                        activePhoto === "bathroom"
                          ? "bg-[#B08A52] text-[#1D1D1B] font-bold shadow"
                          : "text-[#EDE6DA] hover:text-white"
                      }`}
                    >
                      En-Suite Bath
                    </button>
                  </div>

                  <span className="hidden sm:inline-flex text-[11px] text-[#FAF8F4]/80 bg-[#1D1D1B]/70 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    Available Across Locations
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Room Details & Features (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" distance={24} delay={0.15}>
              <div className="bg-[#FAF8F4] p-6 sm:p-8 rounded-2xl border border-[#E2DACD] shadow-sm space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-widest text-[#B08A52] font-semibold mb-1">
                    Classic Room
                  </div>
                  <h3 className="font-serif text-2xl text-[#1D1D1B] font-medium">
                    Rest. Recharge. Continue.
                  </h3>
                  <p className="text-sm text-[#6E6A63] mt-2 leading-relaxed font-light">
                    Designed for business and leisure travellers visiting South Bengaluru, offering the key comfort essentials for a restful night.
                  </p>
                </div>

                {/* Features Grid */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8F6C38] block">
                    Essential In-Room Facilities
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    {features.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white border border-[#E8E1D5] hover:border-[#B08A52]/40 transition-colors"
                      >
                        <div className="p-1 rounded bg-[#F7F4EE]">
                          {item.icon}
                        </div>
                        <span className="text-xs font-medium text-[#242424]">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions summary */}
                <div className="text-xs text-[#6E6A63] space-y-1.5 pt-2 border-t border-[#E8E1D5]">
                  <div className="flex items-center gap-2 text-[#4A4742]">
                    <CheckCircle size={14} className="text-[#B08A52]" />
                    <span>Crisp sanitized bedding &amp; sanitized bathrooms</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#4A4742]">
                    <CheckCircle size={14} className="text-[#B08A52]" />
                    <span>Housekeeping &amp; room service assistance available</span>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2">
                  <button
                    onClick={onOpenBooking}
                    className="w-full bg-[#1D1D1B] hover:bg-[#2A2A27] text-[#FAF8F4] py-3.5 px-6 rounded-xl font-medium text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99]"
                  >
                    <span>Enquire For This Room</span>
                    <ArrowRight size={15} className="text-[#B08A52]" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
