"use client";

import React, { useState } from "react";
import SplashAndNavbar from "@/components/SplashAndNavbar";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import LocationsSection from "@/components/LocationsSection";
import RoomSection from "@/components/RoomSection";
import AmenitiesSection from "@/components/AmenitiesSection";
import HospitalityMoment from "@/components/HospitalityMoment";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import PlanYourStaySection from "@/components/PlanYourStaySection";
import BookingCTASection from "@/components/BookingCTASection";
import ContactFooter from "@/components/ContactFooter";
import BookingModal from "@/components/BookingModal";
import { LOCATIONS } from "@/config/hotel";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isSplashSettled, setIsSplashSettled] = useState(false);
  const [selectedEnquiryLocation, setSelectedEnquiryLocation] = useState<string>(
    `${LOCATIONS[0].officialName} — ${LOCATIONS[0].shortLabel}`
  );

  const handleSelectLocation = (locationName: string) => {
    setSelectedEnquiryLocation(locationName);
  };

  // Structured Data Schema for Search Engines (JSON-LD) - 3 Location Organization
  const hotelStructuredData = {
    "@context": "https://schema.org",
    "@type": "HotelGroup",
    name: "Hotel Applepie Residency",
    description:
      "Applepie Residency offers comfortable accommodation across three convenient Bengaluru locations: 18th Main (BTM/Madiwala), BTM Layout 2nd Stage, and Chocolate Factory Road.",
    url: "https://applepie-residency.com",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bengaluru Residency Locations",
      itemListElement: LOCATIONS.map((loc) => ({
        "@type": "Hotel",
        name: loc.officialName,
        description: `${loc.displayName} located at ${loc.address}`,
        address: {
          "@type": "PostalAddress",
          streetAddress: loc.address,
          addressLocality: "Bengaluru",
          addressRegion: "Karnataka",
          postalCode: loc.pincode,
          addressCountry: "IN",
        },
      })),
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.2",
      reviewCount: "42",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <main className="min-h-screen relative bg-[#F7F4EE] selection:bg-[#B08A52] selection:text-white">
      {/* Search Engine Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(hotelStructuredData),
        }}
      />

      {/* 1. Brand Splash Sequence & Sticky Glass Navbar */}
      <SplashAndNavbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onSplashComplete={() => setIsSplashSettled(true)}
      />

      {/* 2. Hero Section (Balanced vertical spacing, 3-location indicator) */}
      <Hero
        onOpenBooking={() => setIsBookingOpen(true)}
        isSplashSettled={isSplashSettled}
      />

      {/* 3. About Applepie Residency (3-location brand ethos) */}
      <AboutSection />

      {/* 4. PRIMARY SECTION: Three Locations Selector & Cards */}
      <LocationsSection
        onSelectLocationForEnquiry={handleSelectLocation}
      />

      {/* 5. Stay / Room Showcase (A Comfortable Place to Stay) */}
      <RoomSection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 6. Essential Amenities Across Applepie */}
      <AmenitiesSection />

      {/* 7. Hospitality Moment (Campaign Editorial) */}
      <HospitalityMoment />

      {/* 8. Gallery Grid & Lightbox */}
      <GallerySection />

      {/* 9. Verified Guest Reviews & Google Rating */}
      <ReviewsSection />

      {/* 10. REBUILT CONTACT: Plan Your Stay Enquiry Form + WhatsApp Submission */}
      <PlanYourStaySection
        initialLocation={selectedEnquiryLocation}
      />

      {/* 11. Final Booking CTA Chapter (Find Your Applepie Stay) */}
      <BookingCTASection onOpenBooking={() => setIsBookingOpen(true)} />

      {/* 12. Contact & Footer */}
      <ContactFooter onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Interactive Reservation Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        defaultLocation={selectedEnquiryLocation}
        defaultRoom="Classic Room"
      />
    </main>
  );
}
