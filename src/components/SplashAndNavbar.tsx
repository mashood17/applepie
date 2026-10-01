"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { Menu, X, ArrowUpRight, Phone, MapPin, Calendar, Building2 } from "lucide-react";

interface SplashAndNavbarProps {
  onOpenBooking: () => void;
  onSplashComplete?: () => void;
}

export default function SplashAndNavbar({
  onOpenBooking,
  onSplashComplete,
}: SplashAndNavbarProps) {
  const shouldReduceMotion = useReducedMotion();

  // Splash phases: 'center' -> 'moving' -> 'settled'
  const [splashPhase, setSplashPhase] = useState<"center" | "moving" | "settled">("center");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      setSplashPhase("settled");
      onSplashComplete?.();
      return;
    }

    const timer1 = setTimeout(() => {
      setSplashPhase("moving");
    }, 1300);

    const timer2 = setTimeout(() => {
      setSplashPhase("settled");
      onSplashComplete?.();
    }, 2100);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [shouldReduceMotion, onSplashComplete]);

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Navigation Links per Prompt Section 6 & 7: Locations is a primary item
  const desktopNavLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Locations", href: "#locations" },
    { label: "Stay", href: "#stay" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const mobileNavLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Locations", href: "#locations" },
    { label: "Stay", href: "#stay" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleSkipSplash = () => {
    setSplashPhase("settled");
    onSplashComplete?.();
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. SPLASH SCREEN BACKDROP & MOVING LOGO TRANSITION */}
      <AnimatePresence>
        {splashPhase !== "settled" && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{
              opacity: splashPhase === "moving" ? 0 : 1,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[90] bg-[#1D1D1B] pointer-events-none flex flex-col items-center justify-center select-none"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(176,138,82,0.12),transparent_70%)]" />

            <button
              onClick={handleSkipSplash}
              className="pointer-events-auto absolute bottom-8 text-[11px] uppercase tracking-[0.25em] text-[#C2BAAA]/60 hover:text-[#FAF8F4] transition-colors py-2 px-4 rounded-full border border-white/10 backdrop-blur-sm"
            >
              Skip to Website
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Transition Logo */}
      {splashPhase !== "settled" && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            top: "50%",
            left: "50%",
            x: "-50%",
            y: "-50%",
          }}
          animate={
            splashPhase === "center"
              ? {
                  opacity: 1,
                  scale: 1,
                  top: "50%",
                  left: "50%",
                  x: "-50%",
                  y: "-50%",
                }
              : {
                  opacity: 0.9,
                  scale: 0.85,
                  top: "1.15rem",
                  left: "clamp(1rem, 5vw, 3rem)",
                  x: "0%",
                  y: "0%",
                }
          }
          transition={{
            opacity: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            scale: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            top: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            left: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            x: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
            y: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed z-[95] pointer-events-none origin-left"
        >
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <BrandLogo variant="light" size="lg" />
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: splashPhase === "center" ? 0.75 : 0,
                y: splashPhase === "center" ? 0 : -8,
              }}
              transition={{ duration: 0.4 }}
              className="mt-3 text-[10px] uppercase tracking-[0.35em] text-[#C2BAAA] flex items-center gap-2"
            >
              <span className="w-5 h-[1px] bg-[#B08A52]/60 inline-block" />
              <span>Three Bengaluru Locations</span>
              <span className="w-5 h-[1px] bg-[#B08A52]/60 inline-block" />
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* 2. FIXED / STICKY NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#F7F4EE]/95 backdrop-blur-md shadow-sm border-b border-[#E2DACD]/80 py-3"
            : "bg-gradient-to-b from-[#1D1D1B]/85 via-[#1D1D1B]/40 to-transparent py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavLinkClick(e, "#hero")}
            className={`transition-opacity duration-300 focus:outline-none focus:ring-1 focus:ring-[#B08A52] rounded ${
              splashPhase === "settled" ? "opacity-100" : "opacity-0"
            }`}
          >
            <BrandLogo
              variant={scrolled ? "dark" : "light"}
              size="md"
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
            {desktopNavLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavLinkClick(e, item.href)}
                className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 group ${
                  scrolled
                    ? "text-[#4A4742] hover:text-[#1D1D1B]"
                    : "text-[#EDE6DA] hover:text-[#FAF8F4]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B08A52] transition-all duration-200 group-hover:w-full`}
                />
              </a>
            ))}
          </nav>

          {/* Desktop Right Action */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.16em] font-semibold transition-all duration-200 flex items-center gap-1.5 shadow-sm active:scale-95 ${
                scrolled
                  ? "bg-[#1D1D1B] hover:bg-[#2F2F2B] text-[#FAF8F4]"
                  : "bg-[#B08A52] hover:bg-[#C49B5E] text-[#1D1D1B] font-bold"
              }`}
            >
              <span>Book Now</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="bg-[#B08A52] text-[#1D1D1B] px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider shadow-sm active:scale-95"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? "text-[#1D1D1B]" : "text-[#FAF8F4]"
              }`}
              aria-label="Open mobile navigation menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. MOBILE FULL-SCREEN NAVIGATION OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: "0%" }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] bg-[#1D1D1B] text-[#FAF8F4] flex flex-col justify-between p-6 sm:p-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <BrandLogo variant="light" size="md" />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#C2BAAA] hover:text-[#FAF8F4] hover:bg-white/5 rounded-full transition-colors"
                aria-label="Close mobile navigation"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="my-auto py-6 space-y-3.5">
              {mobileNavLinks.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * index, duration: 0.25 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleNavLinkClick(e, item.href)}
                    className="block text-2xl font-serif font-light tracking-wide text-[#FAF8F4]/90 hover:text-[#B08A52] py-1 transition-colors"
                  >
                    {item.label}
                  </a>
                </motion.div>
              ))}
            </nav>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#B08A52] hover:bg-[#C49B5E] text-[#1D1D1B] py-3.5 px-6 rounded-xl font-medium text-xs uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 font-bold shadow-lg"
              >
                <Calendar size={16} />
                <span>Book Your Stay</span>
              </button>

              <div className="flex items-center justify-between text-xs text-[#C2BAAA] pt-2">
                <a
                  href="#locations"
                  onClick={(e) => handleNavLinkClick(e, "#locations")}
                  className="flex items-center gap-1.5 hover:text-[#FAF8F4]"
                >
                  <Building2 size={14} className="text-[#B08A52]" />
                  <span>3 Bengaluru Locations</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavLinkClick(e, "#contact")}
                  className="flex items-center gap-1.5 hover:text-[#FAF8F4]"
                >
                  <Phone size={14} className="text-[#B08A52]" />
                  <span>Enquiry</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
