"use client";

import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Star, ShieldCheck, Sparkles, MapPin, ExternalLink } from "lucide-react";

export default function ReviewsSection() {
  // Configurable review statistics for easy client updates
  const reviewStats = {
    score: "4.2",
    platform: "Google Reviews",
    totalReviews: "42 Reviews",
    googleReviewsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hotel+Applepie+Residency+Bengaluru+reviews",
  };

  const verifiedHighlights = [
    {
      title: "Cleanliness & Hygiene",
      description:
        "Consistent feedback praising the well-maintained rooms, clean private bathrooms, and fresh linens.",
      icon: <Sparkles size={18} className="text-[#B08A52]" />,
    },
    {
      title: "Helpful & Courteous Service",
      description:
        "Attentive 24-hour reception assistance and responsive staff supporting guests throughout their stay.",
      icon: <ShieldCheck size={18} className="text-[#B08A52]" />,
    },
    {
      title: "South Bengaluru Connectivity",
      description:
        "Convenient access to transit hubs, dining districts, major hospitals, and educational campuses.",
      icon: <MapPin size={18} className="text-[#B08A52]" />,
    },
  ];

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#EDE6DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <ScrollReveal direction="up" distance={16}>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8F6C38] inline-block mb-3">
              Verified Feedback
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1B] font-medium tracking-tight">
              What Guests Say
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.2}>
            <p className="text-sm sm:text-base text-[#6E6A63] mt-3">
              Guest experiences from Applepie Residency.
            </p>
          </ScrollReveal>
        </div>

        {/* Central Editorial Rating Card */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" distance={24}>
            <div className="bg-[#FAF8F4] border border-[#E2DACD] rounded-3xl p-8 sm:p-12 shadow-sm text-center relative overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#B08A52] rounded-b-full" />

              <div className="flex flex-col items-center space-y-4">
                {/* Big Score */}
                <div className="font-serif text-6xl sm:text-7xl font-bold text-[#1D1D1B] tracking-tight">
                  {reviewStats.score}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1.5 text-[#B08A52]" aria-label="Rating 4.2 out of 5 stars">
                  {[1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      size={24}
                      className="fill-[#B08A52] text-[#B08A52]"
                    />
                  ))}
                  <div className="relative">
                    <Star size={24} className="text-[#B08A52]/30 fill-transparent" />
                    <div className="absolute inset-0 overflow-hidden w-[40%]">
                      <Star size={24} className="fill-[#B08A52] text-[#B08A52]" />
                    </div>
                  </div>
                </div>

                {/* Platform & Count */}
                <div className="space-y-0.5">
                  <div className="font-serif text-lg font-medium text-[#1D1D1B]">
                    {reviewStats.platform}
                  </div>
                  <div className="text-xs uppercase tracking-[0.2em] text-[#6E6A63] font-medium">
                    {reviewStats.totalReviews}
                  </div>
                </div>

                {/* Key Verified Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 w-full border-t border-[#E8E1D5] text-left mt-6">
                  {verifiedHighlights.map((hl, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white border border-[#E8E1D5] space-y-1.5"
                    >
                      <div className="flex items-center gap-2">
                        {hl.icon}
                        <h4 className="font-serif text-sm font-semibold text-[#1D1D1B]">
                          {hl.title}
                        </h4>
                      </div>
                      <p className="text-xs text-[#6E6A63] leading-relaxed">
                        {hl.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-6">
                  <a
                    href={reviewStats.googleReviewsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#1D1D1B] hover:bg-[#2F2F2B] text-[#FAF8F4] text-xs uppercase tracking-[0.18em] font-semibold px-6 py-3.5 rounded-full transition-all shadow-md active:scale-95"
                  >
                    <span>Read All Reviews</span>
                    <ExternalLink size={13} className="text-[#B08A52]" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
