"use client";

import React, { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import { LOCATIONS, buildWhatsAppEnquiryUrl, WHATSAPP_NUMBER } from "@/config/hotel";
import {
  MessageSquare,
  Calendar,
  Users,
  MapPin,
  Send,
  CheckCircle2,
  Phone,
  Mail,
  ShieldCheck,
  AlertCircle,
} from "lucide-react";

interface PlanYourStaySectionProps {
  initialLocation?: string;
}

export default function PlanYourStaySection({
  initialLocation,
}: PlanYourStaySectionProps) {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(
    initialLocation || `${LOCATIONS[0].officialName} — ${LOCATIONS[0].shortLabel}`
  );
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [roomPreference, setRoomPreference] = useState("Classic Room");
  const [enquiryType, setEnquiryType] = useState("Booking Enquiry");
  const [message, setMessage] = useState("");

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  // Sync when initialLocation prop changes (e.g., user clicked "Enquire About This Location")
  useEffect(() => {
    if (initialLocation) {
      setSelectedLocation(initialLocation);
    }
  }, [initialLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!fullName.trim()) {
      setErrorMsg("Please enter your name.");
      return;
    }
    if (!phoneNumber.trim()) {
      setErrorMsg("Please enter your contact phone number.");
      return;
    }

    const payload = {
      name: fullName.trim(),
      phone: phoneNumber.trim(),
      email: email.trim(),
      location: selectedLocation,
      checkIn,
      checkOut,
      guests,
      roomPreference,
      enquiryType,
      message: message.trim(),
    };

    // Build the formatted WhatsApp inquiry URL
    const whatsappUrl = buildWhatsAppEnquiryUrl(payload, WHATSAPP_NUMBER);

    // Show instant success state
    setFormSubmitted(true);

    // Open WhatsApp in a new tab/app window
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F7F4EE] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <ScrollReveal direction="up" distance={16}>
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#B08A52] inline-block mb-3">
              Direct Reservation &amp; Inquiries
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1D1D1B] font-medium tracking-tight">
              Plan Your Stay
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" distance={20} delay={0.2}>
            <p className="text-sm sm:text-base text-[#6E6A63] mt-3 font-light leading-relaxed">
              Tell us where you&apos;d like to stay and our team can help you with your enquiry across our Bengaluru locations.
            </p>
          </ScrollReveal>
        </div>

        {/* Form Composition Card */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal direction="up" distance={24}>
            <div className="bg-[#FAF8F4] border border-[#E2DACD] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
              {!formSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                      <AlertCircle size={16} className="shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* 1. Location Selection (Dropdown) */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#1D1D1B] mb-2 flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#B08A52]" />
                      <span>Preferred Hotel Location *</span>
                    </label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      required
                      className="w-full bg-white border border-[#E2DACD] rounded-xl px-4 py-3 text-sm text-[#1D1D1B] font-medium focus:outline-none focus:border-[#B08A52] focus:ring-1 focus:ring-[#B08A52] transition-colors"
                    >
                      {LOCATIONS.map((loc) => (
                        <option
                          key={loc.id}
                          value={`${loc.officialName} — ${loc.shortLabel}`}
                        >
                          {loc.num}. {loc.officialName} — {loc.shortLabel} ({loc.area})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* 2. Personal Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        placeholder="Your name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        placeholder="Your phone number"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      />
                    </div>
                  </div>

                  {/* 3. Dates & Stay Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5 flex items-center gap-1">
                        <Calendar size={13} className="text-[#B08A52]" />
                        <span>Check-In</span>
                      </label>
                      <input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5 flex items-center gap-1">
                        <Calendar size={13} className="text-[#B08A52]" />
                        <span>Check-Out</span>
                      </label>
                      <input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5 flex items-center gap-1">
                        <Users size={13} className="text-[#B08A52]" />
                        <span>Guests</span>
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="4 Guests">4 Guests</option>
                        <option value="5+ Guests">5+ Guests</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5">
                        Room Preference
                      </label>
                      <select
                        value={roomPreference}
                        onChange={(e) => setRoomPreference(e.target.value)}
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      >
                        <option value="Classic Room">Classic Room</option>
                        <option value="Any Available Room">Any Available Room</option>
                        <option value="Other / Not Sure">Other / Not Sure</option>
                      </select>
                    </div>
                  </div>

                  {/* 4. Enquiry Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5">
                        Enquiry Type
                      </label>
                      <select
                        value={enquiryType}
                        onChange={(e) => setEnquiryType(e.target.value)}
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      >
                        <option value="Room Availability">Room Availability</option>
                        <option value="Booking Enquiry">Booking Enquiry</option>
                        <option value="Long Stay">Long Stay</option>
                        <option value="Corporate Stay">Corporate Stay</option>
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5">
                        Assistance Mode
                      </label>
                      <div className="py-2.5 px-3.5 bg-white border border-[#E2DACD] rounded-xl text-xs text-[#6E6A63] flex items-center gap-2">
                        <MessageSquare size={14} className="text-[#25D366]" />
                        <span>Direct Front Desk WhatsApp Transmission</span>
                      </div>
                    </div>
                  </div>

                  {/* 5. Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us how we can help..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-white border border-[#E2DACD] rounded-xl px-3.5 py-2.5 text-sm text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors resize-none"
                    />
                  </div>

                  {/* 6. Primary Conversion Action Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-[#1D1D1B] hover:bg-[#2A2A27] text-[#FAF8F4] py-4 px-6 rounded-xl font-bold text-xs uppercase tracking-[0.2em] transition-all duration-200 flex items-center justify-center gap-2.5 shadow-lg hover:shadow-xl active:scale-[0.99] group"
                    >
                      <MessageSquare size={18} className="text-[#25D366]" />
                      <span>Send Enquiry on WhatsApp</span>
                      <Send size={14} className="text-[#B08A52] transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#6E6A63] pt-1">
                    <ShieldCheck size={14} className="text-[#B08A52]" />
                    <span>Instant WhatsApp dispatch with formatted enquiry summary</span>
                  </div>
                </form>
              ) : (
                /* Success Experience */
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#EDE6DA] flex items-center justify-center text-[#25D366]">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-medium text-[#1D1D1B]">
                    Your Enquiry is Ready to Send
                  </h3>
                  <p className="text-sm text-[#6E6A63] max-w-md mx-auto leading-relaxed">
                    We have generated your structured stay enquiry. WhatsApp will open with your pre-filled details ready to transmit directly to the hotel front desk.
                  </p>

                  <div className="p-4 bg-white border border-[#E2DACD] rounded-2xl text-left text-xs space-y-2 max-w-sm mx-auto text-[#4A4742]">
                    <div>
                      <span className="font-semibold text-[#1D1D1B]">Property:</span> {selectedLocation}
                    </div>
                    <div>
                      <span className="font-semibold text-[#1D1D1B]">Dates:</span> {checkIn || "Flexible"} to {checkOut || "Flexible"}
                    </div>
                    <div>
                      <span className="font-semibold text-[#1D1D1B]">Guest:</span> {fullName} ({phoneNumber})
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                    <button
                      onClick={() => {
                        const whatsappUrl = buildWhatsAppEnquiryUrl(
                          {
                            name: fullName,
                            phone: phoneNumber,
                            email,
                            location: selectedLocation,
                            checkIn,
                            checkOut,
                            guests,
                            roomPreference,
                            enquiryType,
                            message,
                          },
                          WHATSAPP_NUMBER
                        );
                        window.open(whatsappUrl, "_blank");
                      }}
                      className="bg-[#25D366] hover:bg-[#1EBE5D] text-white px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-bold shadow flex items-center gap-2"
                    >
                      <MessageSquare size={16} />
                      <span>Re-Open WhatsApp</span>
                    </button>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-[#1D1D1B] text-[#FAF8F4] px-6 py-3 rounded-xl text-xs uppercase tracking-wider font-medium hover:bg-[#2A2A27]"
                    >
                      Edit Enquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
