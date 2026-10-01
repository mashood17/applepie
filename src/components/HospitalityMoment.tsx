"use client";

import React from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function HospitalityMoment() {
  return (
    <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#1D1D1B] text-[#FAF8F4] py-24 sm:py-32">
      {/* Cinematic Full-Bleed Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hospitality-moment.jpg"
          alt="Applepie Residency serene morning hospitality moment with fresh coffee and peaceful sunlight"
          fill
          sizes="100vw"
          className="object-cover object-center brightness-[0.7] contrast-[1.05]"
        />
        {/* Editorial Gradients for Deep Warmth & Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B] via-[#1D1D1B]/40 to-[#1D1D1B]/60" />
      </div>

      {/* Campaign Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <ScrollReveal direction="up" distance={20}>
          <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-semibold text-[#D4AF77]">
            <span className="w-8 h-[1px] bg-[#D4AF77]/60" />
            <span>The Applepie Experience</span>
            <span className="w-8 h-[1px] bg-[#D4AF77]/60" />
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={28} delay={0.15}>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal leading-[1.15] tracking-tight text-[#FAF8F4]">
            Simple Comfort. <br className="hidden sm:inline" />
            <span className="italic font-light text-[#D4AF77]">
              Thoughtful Service.
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={20} delay={0.3}>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#EDE6DA]/90 font-light leading-relaxed">
            Where calm nights and welcoming city mornings meet South Bengaluru&apos;s vibrant connectivity.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
