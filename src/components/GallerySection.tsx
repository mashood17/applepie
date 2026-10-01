"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface GalleryItem {
  id: string;
  title: string;
  category: "Exterior" | "Rooms" | "Bathrooms" | "Common Areas" | "Details";
  src: string;
  alt: string;
  span?: string;
}

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Applepie Residency Facade",
      category: "Exterior",
      src: "/images/hero-exterior.jpg",
      alt: "Applepie Residency modern exterior facade with warm lighting",
      span: "lg:col-span-8 lg:row-span-2",
    },
    {
      id: "2",
      title: "Classic Room Double Bed",
      category: "Rooms",
      src: "/images/room-classic.jpg",
      alt: "Classic Room interior with plush bedding and air conditioning",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: "3",
      title: "En-suite Bath & Hot Shower",
      category: "Bathrooms",
      src: "/images/bathroom-clean.jpg",
      alt: "Pristine hotel bathroom with glass shower and hot water fixtures",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: "4",
      title: "Front Desk & Reception",
      category: "Common Areas",
      src: "/images/lobby-reception.jpg",
      alt: "Warm hotel reception desk and concierge lounge",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: "5",
      title: "Morning Comfort",
      category: "Details",
      src: "/images/hospitality-moment.jpg",
      alt: "Morning tea and serene bed setting in soft sunlight",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: "6",
      title: "Guest Floor Corridor",
      category: "Common Areas",
      src: "/images/gallery-corridor.jpg",
      alt: "Quiet curved guest corridor with warm indirect lighting",
      span: "lg:col-span-4 lg:row-span-1",
    },
    {
      id: "7",
      title: "Lobby Seating Corner",
      category: "Common Areas",
      src: "/images/gallery-lounge.jpg",
      alt: "Cozy leather armchairs and lounge corner with books",
      span: "lg:col-span-8 lg:row-span-1",
    },
  ];

  const categories = ["All", "Rooms", "Bathrooms", "Common Areas", "Exterior", "Details"];

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeFilter);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === 0 ? filteredItems.length - 1 : prev - 1) : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev === filteredItems.length - 1 ? 0 : prev + 1) : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#EDE6DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-xl">
            <ScrollReveal direction="up" distance={16}>
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#8F6C38] inline-block mb-3">
                Visual Impressions
              </span>
            </ScrollReveal>
            <ScrollReveal direction="up" distance={20} delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1B] font-medium tracking-tight">
                A Glimpse of Your Stay
              </h2>
            </ScrollReveal>
          </div>

          {/* Filter Pills */}
          <ScrollReveal direction="up" distance={16} delay={0.15}>
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    activeFilter === cat
                      ? "bg-[#1D1D1B] text-[#FAF8F4] font-medium shadow-sm"
                      : "bg-[#F7F4EE] text-[#6E6A63] hover:text-[#1D1D1B] hover:bg-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Editorial Asymmetrical Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-5"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              layout
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              className={`group relative rounded-2xl overflow-hidden shadow-sm bg-[#1D1D1B] cursor-pointer min-h-[260px] ${
                activeFilter === "All" && item.span ? item.span : "lg:col-span-4"
              }`}
              onClick={() => setLightboxIndex(index)}
            >
              <div className="relative w-full h-full min-h-[260px] sm:min-h-[280px]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1B]/80 via-transparent to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />
              </div>

              {/* Title & Category Badge */}
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between pointer-events-none">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D4AF77] font-semibold block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-sm sm:text-base text-[#FAF8F4] font-medium">
                    {item.title}
                  </h3>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Maximize2 size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 bg-[#1D1D1B]/95 backdrop-blur-md">
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-5 right-5 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20"
              aria-label="Close fullscreen gallery preview"
            >
              <X size={22} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null
                    ? prev === 0
                      ? filteredItems.length - 1
                      : prev - 1
                    : null
                );
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 hidden sm:flex"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((prev) =>
                  prev !== null
                    ? prev === filteredItems.length - 1
                      ? 0
                      : prev + 1
                    : null
                );
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-20 hidden sm:flex"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Active Image Container */}
            <motion.div
              key={filteredItems[lightboxIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl w-full max-h-[82vh] h-full flex flex-col items-center justify-center select-none"
            >
              <div className="relative w-full h-[70vh]">
                <Image
                  src={filteredItems[lightboxIndex].src}
                  alt={filteredItems[lightboxIndex].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              {/* Caption */}
              <div className="mt-4 text-center text-[#FAF8F4]">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#D4AF77]">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h4 className="font-serif text-lg font-medium">
                  {filteredItems[lightboxIndex].title}
                </h4>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
