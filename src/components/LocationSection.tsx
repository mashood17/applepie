"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import {
  MapPin,
  Navigation,
  Compass,
  Building,
  GraduationCap,
  HeartPulse,
  TreePine,
  ExternalLink,
} from "lucide-react";

export default function LocationSection() {
  const addressLines = [
    "18th Main Road",
    "Narayana Gowda Layout",
    "Cashier Layout, 1st Stage",
    "Bengaluru, Karnataka – 560029",
  ];

  const nearbyHubs = [
    {
      name: "Madiwala",
      type: "Commercial & Transit Hub",
      icon: <Compass size={16} className="text-[#B08A52]" />,
    },
    {
      name: "BTM Layout",
      type: "Dining, Cafés & Retail",
      icon: <Building size={16} className="text-[#B08A52]" />,
    },
    {
      name: "Koramangala",
      type: "Startup Hub & Restaurants",
      icon: <Building size={16} className="text-[#B08A52]" />,
    },
    {
      name: "St. John's Medical College Hospital",
      type: "Healthcare & Medical Center",
      icon: <HeartPulse size={16} className="text-[#B08A52]" />,
    },
    {
      name: "Christ University",
      type: "Premier Educational Campus",
      icon: <GraduationCap size={16} className="text-[#B08A52]" />,
    },
    {
      name: "Lalbagh",
      type: "Botanical Heritage & Green Space",
      icon: <TreePine size={16} className="text-[#B08A52]" />,
    },
  ];

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Hotel+Applepie+Residency+18th+Main+Road+Cashier+Layout+BTM+Layout+Bengaluru+560029";

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Address, Copy, Nearby Points */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="up" distance={16}>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A52] inline-block">
                South Bengaluru Hub
              </span>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1B] font-medium tracking-tight">
                Well Connected to Bengaluru
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={20} delay={0.2}>
              <p className="text-base text-[#4A4742] leading-relaxed font-light">
                Located in the BTM Layout–Madiwala area, Applepie Residency provides convenient access to some of South Bengaluru&apos;s most active neighbourhoods, commercial areas, hospitals, educational institutions and attractions.
              </p>
            </ScrollReveal>

            {/* Address Card */}
            <ScrollReveal direction="up" distance={20} delay={0.3}>
              <div className="p-6 rounded-2xl bg-[#FAF8F4] border border-[#E2DACD] shadow-sm space-y-3">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EDE6DA] text-[#B08A52] mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-serif text-base font-semibold text-[#1D1D1B]">
                      Hotel Applepie Residency
                    </h3>
                    <address className="not-italic text-sm text-[#6E6A63] mt-1 space-y-0.5 leading-snug">
                      {addressLines.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </address>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1D1D1B] hover:bg-[#2F2F2B] text-[#FAF8F4] text-xs uppercase tracking-wider font-semibold px-5 py-3 rounded-xl transition-all shadow-sm active:scale-95"
                  >
                    <Navigation size={14} className="text-[#B08A52]" />
                    <span>Get Directions</span>
                    <ExternalLink size={12} className="opacity-70" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Nearby Connections Grid & Styled Map Canvas */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" distance={24}>
              <div className="bg-[#FAF8F4] p-6 sm:p-8 rounded-2xl border border-[#E2DACD] shadow-sm">
                <h3 className="font-serif text-xl font-medium text-[#1D1D1B] mb-2">
                  Key South Bengaluru Destinations
                </h3>
                <p className="text-xs text-[#6E6A63] mb-5">
                  Convenient transit and road connectivity to major medical, education and dining districts.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {nearbyHubs.map((hub, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-white border border-[#E8E1D5] flex items-start gap-3 hover:border-[#B08A52]/40 transition-colors"
                    >
                      <div className="p-1.5 rounded-lg bg-[#F7F4EE] shrink-0 mt-0.5">
                        {hub.icon}
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-[#1D1D1B]">
                          {hub.name}
                        </h4>
                        <span className="text-[11px] text-[#6E6A63] block">
                          {hub.type}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Styled Map Card with Coordinates Preview */}
                <div className="mt-6 p-4 rounded-xl bg-[#EDE6DA] border border-[#DDD3C2] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1D1D1B] text-[#FAF8F4] flex items-center justify-center shrink-0">
                      <Compass size={18} className="text-[#B08A52]" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#1D1D1B]">
                        Navigation &amp; Transit Coordinates
                      </div>
                      <div className="text-[11px] text-[#6E6A63]">
                        BTM 1st Stage · Direct arterial road access
                      </div>
                    </div>
                  </div>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold uppercase tracking-wider text-[#8F6C38] hover:text-[#1D1D1B] flex items-center gap-1 shrink-0"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
