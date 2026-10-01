"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { Compass, Sparkles, Bed, ShieldCheck, MapPin } from "lucide-react";

export default function AboutSection() {
  const pillars = [
    {
      icon: <MapPin size={18} className="text-[#B08A52]" />,
      title: "3 Prime Locations",
      desc: "Properties in BTM Layout, Madiwala & Chocolate Factory Road.",
    },
    {
      icon: <Bed size={18} className="text-[#B08A52]" />,
      title: "Essential Comfort",
      desc: "Air-conditioned rooms, clean private bathrooms & 24/7 hot water.",
    },
    {
      icon: <ShieldCheck size={18} className="text-[#B08A52]" />,
      title: "Attentive Care",
      desc: "Round-the-clock reception, daily housekeeping & secure hospitality.",
    },
  ];

  return (
    <section id="about" className="py-18 sm:py-24 bg-[#F7F4EE] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Visual Frame */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <ScrollReveal direction="left" distance={24}>
              <div className="relative">
                <div className="absolute -inset-3 sm:-inset-4 border border-[#B08A52]/30 rounded-2xl pointer-events-none hidden sm:block" />

                <div className="relative aspect-[4/3] sm:aspect-[16/11] rounded-xl overflow-hidden shadow-xl bg-[#EDE6DA]">
                  <Image
                    src="/images/lobby-reception.jpg"
                    alt="Hotel Applepie Residency welcoming front desk and reception"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/40 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#1D1D1B]/85 backdrop-blur-md px-4 py-2.5 rounded-lg border border-white/10 text-white flex items-center gap-3">
                    <Sparkles size={16} className="text-[#B08A52]" />
                    <span className="text-xs uppercase tracking-wider font-medium">
                      Three Locations Across Bengaluru
                    </span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Text Content */}
          <div className="order-2 lg:order-1 lg:col-span-6 space-y-5">
            <ScrollReveal direction="up" distance={16}>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A52]">
                <span className="w-5 h-[1.5px] bg-[#B08A52]" />
                <span>About Applepie Residency</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1B] font-medium leading-[1.18] tracking-tight">
                Comfortable stays. <br />
                <span className="italic font-light text-[#8F6C38]">
                  Conveniently connected.
                </span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.2}>
              <p className="text-base text-[#4A4742] leading-relaxed font-light">
                Applepie Residency offers comfortable accommodation across three Bengaluru locations, designed for guests looking for convenient access to the city&apos;s key neighbourhoods, businesses, hospitals, educational institutions and everyday destinations.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.3}>
              <p className="text-sm sm:text-base text-[#6E6A63] leading-relaxed">
                Discover comfortable stays across our convenient Bengaluru properties. Choose the location that best suits your travel itinerary and connect with our team to plan your stay.
              </p>
            </ScrollReveal>

            {/* Editorial Pillars */}
            <ScrollReveal direction="up" distance={20} delay={0.4}>
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3.5 border-t border-[#E2DACD]">
                {pillars.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="p-2 rounded-lg bg-[#EDE6DA] w-fit">
                      {item.icon}
                    </div>
                    <h3 className="font-serif text-sm font-semibold text-[#1D1D1B]">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#6E6A63] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
