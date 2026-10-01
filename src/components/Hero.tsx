"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Sparkles, Building2 } from "lucide-react";

interface HeroProps {
  onOpenBooking: () => void;
  isSplashSettled: boolean;
}

export default function Hero({ onOpenBooking, isSplashSettled }: HeroProps) {
  const handleScrollTo = (targetId: string) => {
    const el = document.querySelector(targetId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1D1D1B] pt-20 sm:pt-24 pb-12 sm:pb-16"
    >
      {/* Background Image Container with Slow Scale Motion */}
      <motion.div
        initial={{ scale: 1.06, opacity: 0 }}
        animate={
          isSplashSettled
            ? { scale: 1, opacity: 1 }
            : { scale: 1.06, opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/images/hero-exterior.jpg"
          alt="Hotel Applepie Residency Bengaluru exterior facade"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Editorial Gradients for Deep Atmosphere & Crisp Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B] via-[#1D1D1B]/60 to-[#1D1D1B]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1D1D1B]/85 via-[#1D1D1B]/50 to-transparent" />
      </motion.div>

      {/* Main Content Composition - Intelligently Positioned with Balanced Breathing Room */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Eyebrow and 3-Location Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={
              isSplashSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-2.5 mb-3.5 sm:mb-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#D4AF77] text-[11px] font-semibold uppercase tracking-[0.25em]">
              <Sparkles size={11} className="text-[#B08A52]" />
              <span>Applepie Residency · Bengaluru</span>
            </span>

            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#B08A52]/20 backdrop-blur-md border border-[#B08A52]/30 text-[#FAF8F4] text-[10px] font-semibold uppercase tracking-[0.2em]">
              <Building2 size={11} className="text-[#D4AF77]" />
              <span>03 Locations</span>
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={
              isSplashSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
            }
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FAF8F4] font-medium leading-[1.12] tracking-tight mb-2.5 sm:mb-3"
          >
            Your Comfortable Stay in Bengaluru
          </motion.h1>

          {/* Subheading / Supporting Line */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={
              isSplashSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="text-base sm:text-lg font-serif italic text-[#D4AF77] mb-3.5 font-normal"
          >
            Comfortable stays. Conveniently connected.
          </motion.p>

          {/* Multi-Location Editorial Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={
              isSplashSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm sm:text-base text-[#EDE6DA]/90 font-light leading-relaxed max-w-2xl mb-7 sm:mb-8"
          >
            Choose from three Applepie Residency locations across Bengaluru, each offering comfortable rooms, essential modern amenities and convenient access to the city.
          </motion.p>

          {/* CTAs: Book Your Stay + Explore Locations */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={
              isSplashSettled ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }
            }
            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3.5"
          >
            <button
              onClick={onOpenBooking}
              className="bg-[#B08A52] hover:bg-[#C49B5E] text-[#1D1D1B] font-bold text-xs uppercase tracking-[0.2em] px-7 py-3.5 sm:py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Book Your Stay</span>
              <ArrowRight size={15} />
            </button>

            <button
              onClick={() => handleScrollTo("#locations")}
              className="bg-white/10 hover:bg-white/20 text-[#FAF8F4] border border-white/25 backdrop-blur-sm text-xs uppercase tracking-[0.2em] px-6 py-3.5 sm:py-4 rounded-full transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
            >
              Explore Locations
            </button>
          </motion.div>

          {/* Subtle Location Indicator strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isSplashSettled ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="mt-6 sm:mt-8 pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#C2BAAA]"
          >
            <span className="text-[#D4AF77] font-semibold text-[11px] uppercase tracking-wider">
              Properties:
            </span>
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleScrollTo("#locations")}>
              18th Main (BTM/Madiwala)
            </span>
            <span className="w-1 h-1 rounded-full bg-[#B08A52]" />
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleScrollTo("#locations")}>
              BTM Layout 2nd Stage
            </span>
            <span className="w-1 h-1 rounded-full bg-[#B08A52]" />
            <span className="hover:text-white transition-colors cursor-pointer" onClick={() => handleScrollTo("#locations")}>
              Chocolate Factory Road
            </span>
          </motion.div>
        </div>
      </div>

      {/* Gentle Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isSplashSettled ? { opacity: 0.75 } : { opacity: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        onClick={() => handleScrollTo("#about")}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 cursor-pointer z-10 hidden sm:flex flex-col items-center gap-1 text-[#C2BAAA] hover:text-[#FAF8F4] transition-colors"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  );
}
