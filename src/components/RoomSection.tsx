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
  UtensilsCrossed,
  Sparkles,
  Zap,
  Clock,
} from "lucide-react";

interface RoomSectionProps {
  onOpenBooking: () => void;
}

export default function RoomSection({ onOpenBooking }: RoomSectionProps) {
  const [activePhoto, setActivePhoto] = useState<"bedroom" | "bathroom">("bedroom");

  const roomFeatures = [
    { name: "Air Conditioning", icon: <Wind size={18} className="text-[#B08A52]" /> },
    { name: "Free Wi-Fi", icon: <Wifi size={18} className="text-[#B08A52]" /> },
    { name: "Television", icon: <Tv size={18} className="text-[#B08A52]" /> },
    { name: "Double Bed", icon: <BedDouble size={18} className="text-[#B08A52]" /> },
    { name: "Private Bathroom", icon: <Bath size={18} className="text-[#B08A52]" /> },
    { name: "Hot Water", icon: <Flame size={18} className="text-[#B08A52]" /> },
  ];

  const stayAmenities = [
    {
      icon: <Wifi size={20} strokeWidth={1.5} />,
      title: "Free Wi-Fi",
      desc: "High-speed internet in every room for seamless work and streaming.",
    },
    {
      icon: <Wind size={20} strokeWidth={1.5} />,
      title: "Air Conditioning",
      desc: "Individual room climate control ensuring restful sleep.",
    },
    {
      icon: <Flame size={20} strokeWidth={1.5} />,
      title: "Hot Water",
      desc: "24/7 dedicated hot water supply with modern shower fittings.",
    },
    {
      icon: <Tv size={20} strokeWidth={1.5} />,
      title: "Television",
      desc: "In-room entertainment channels for relaxing evenings.",
    },
    {
      icon: <UtensilsCrossed size={20} strokeWidth={1.5} />,
      title: "Room Service",
      desc: "Prompt room dining and beverage assistance to your door.",
    },
    {
      icon: <Sparkles size={20} strokeWidth={1.5} />,
      title: "Housekeeping",
      desc: "Daily professional cleaning and fresh sanitized linens.",
    },
    {
      icon: <Zap size={20} strokeWidth={1.5} />,
      title: "Power Backup",
      desc: "Uninterrupted lighting and power supply across all rooms.",
    },
    {
      icon: <Clock size={20} strokeWidth={1.5} />,
      title: "24-Hour Reception",
      desc: "Front desk staff available round-the-clock for any request.",
    },
  ];

  return (
    <section id="stay" className="py-20 sm:py-28 bg-[#EDE6DA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        {/* 1. Room Showcase Header */}
        <div>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <ScrollReveal direction="up" distance={16}>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8F6C38] inline-block mb-3">
                Stay &amp; Accommodation
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

          {/* Editorial Room Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Frame (7 cols) */}
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
                      In-Room Facilities
                    </span>
                    <div className="grid grid-cols-2 gap-3">
                      {roomFeatures.map((item, idx) => (
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

        {/* 2. Integrated Essential Stay Amenities */}
        <div className="pt-10 border-t border-[#DDD3C2]">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <ScrollReveal direction="up" distance={16}>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8F6C38] inline-block mb-2">
                Included With Every Stay
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={18} delay={0.1}>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] font-medium tracking-tight">
                Essential Comforts &amp; Services
              </h3>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={18} delay={0.15}>
              <p className="text-xs sm:text-sm text-[#6E6A63] mt-2 font-light">
                Everyday conveniences provided across all Applepie Residency Bengaluru properties.
              </p>
            </ScrollReveal>
          </div>

          {/* Minimalist Amenity Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stayAmenities.map((item, index) => (
              <ScrollReveal
                key={item.title}
                direction="up"
                distance={18}
                delay={0.04 * (index % 4)}
              >
                <div className="h-full p-5 sm:p-6 rounded-2xl bg-[#FAF8F4] border border-[#E2DACD] hover:border-[#B08A52] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md group flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#EDE6DA] text-[#1D1D1B] group-hover:text-[#B08A52] group-hover:bg-[#F2ECE1] transition-colors flex items-center justify-center mb-3.5">
                      {item.icon}
                    </div>
                    <h4 className="font-serif text-base font-medium text-[#1D1D1B] group-hover:text-[#8F6C38] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#6E6A63] mt-1.5 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-2.5 border-t border-[#E8E1D5] flex items-center justify-between text-[10px] font-semibold tracking-wider uppercase text-[#B08A52]/70 group-hover:text-[#B08A52]">
                    <span>Included</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B08A52]" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
