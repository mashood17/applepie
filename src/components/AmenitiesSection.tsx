"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  Wifi,
  Wind,
  Flame,
  Tv,
  UtensilsCrossed,
  Sparkles,
  Zap,
  Clock,
} from "lucide-react";

export default function AmenitiesSection() {
  const amenities = [
    {
      icon: <Wifi size={22} strokeWidth={1.5} />,
      title: "Free Wi-Fi",
      desc: "Fast, reliable connectivity throughout the property for uninterrupted work and streaming.",
    },
    {
      icon: <Wind size={22} strokeWidth={1.5} />,
      title: "Air Conditioning",
      desc: "Individual climate control in every room ensuring peaceful and comfortable rest.",
    },
    {
      icon: <Flame size={22} strokeWidth={1.5} />,
      title: "Hot Water",
      desc: "Continuous round-the-clock hot water supply with modern shower fittings.",
    },
    {
      icon: <Tv size={22} strokeWidth={1.5} />,
      title: "Television",
      desc: "In-room entertainment channels for unwinding after a long day in the city.",
    },
    {
      icon: <UtensilsCrossed size={22} strokeWidth={1.5} />,
      title: "Room Service",
      desc: "Prompt in-room dining and beverage assistance delivered right to your door.",
    },
    {
      icon: <Sparkles size={22} strokeWidth={1.5} />,
      title: "Housekeeping",
      desc: "Meticulous daily room cleaning, fresh sanitized linens, and sanitized bathrooms.",
    },
    {
      icon: <Zap size={22} strokeWidth={1.5} />,
      title: "Power Backup",
      desc: "Dedicated power backup systems to ensure uninterrupted comfort and lighting.",
    },
    {
      icon: <Clock size={22} strokeWidth={1.5} />,
      title: "24-Hour Reception",
      desc: "Courteous front desk staff available 24/7 to assist with check-in, check-out and queries.",
    },
  ];

  return (
    <section id="amenities" className="py-20 sm:py-28 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Updated Positioning */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <ScrollReveal direction="up" distance={16}>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A52] inline-block mb-3">
              Essential Comforts Across The Applepie Experience
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1B] font-medium tracking-tight">
              Essentials for a Comfortable Stay
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.2}>
            <p className="text-sm sm:text-base text-[#6E6A63] mt-4 leading-relaxed font-light">
              From reliable connectivity to everyday conveniences, Applepie Residency provides the essentials for a smooth stay across all three Bengaluru locations.
            </p>
          </ScrollReveal>
        </div>

        {/* Minimalist Line-Icon Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((item, index) => (
            <ScrollReveal
              key={item.title}
              direction="up"
              distance={20}
              delay={0.05 * (index % 4)}
            >
              <div className="h-full p-6 sm:p-7 rounded-2xl bg-[#FAF8F4] border border-[#E2DACD] hover:border-[#B08A52] transition-all duration-300 hover:-translate-y-1 hover:shadow-md group flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#EDE6DA] text-[#1D1D1B] group-hover:text-[#B08A52] group-hover:bg-[#F2ECE1] transition-colors flex items-center justify-center mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#1D1D1B] group-hover:text-[#8F6C38] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#6E6A63] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#E8E1D5] flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase text-[#B08A52]/70 group-hover:text-[#B08A52]">
                  <span>Included</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B08A52]" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
