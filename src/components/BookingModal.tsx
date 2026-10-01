"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Users, MapPin, ShieldCheck, CheckCircle2, MessageSquare, Send } from "lucide-react";
import { LOCATIONS, buildWhatsAppEnquiryUrl, WHATSAPP_NUMBER } from "@/config/hotel";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultLocation?: string;
  defaultRoom?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  defaultLocation,
  defaultRoom = "Classic Room",
}: BookingModalProps) {
  const [selectedLocation, setSelectedLocation] = useState(
    defaultLocation || `${LOCATIONS[0].officialName} — ${LOCATIONS[0].shortLabel}`
  );
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (defaultLocation) {
      setSelectedLocation(defaultLocation);
    }
  }, [defaultLocation]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappUrl = buildWhatsAppEnquiryUrl(
      {
        name: guestName,
        phone: guestPhone,
        location: selectedLocation,
        checkIn,
        checkOut,
        guests,
        roomPreference: defaultRoom,
        enquiryType: "Booking Enquiry",
        message: notes,
      },
      WHATSAPP_NUMBER
    );
    setIsSubmitted(true);
    window.open(whatsappUrl, "_blank");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#1D1D1B]/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-[#FAF8F4] border border-[#E2DACD] shadow-2xl rounded-2xl overflow-hidden z-10 my-auto text-[#242424]"
          >
            {/* Header Accent Bar */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#B08A52] via-[#D4AF77] to-[#8F6C38]" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-[#6E6A63] hover:text-[#1D1D1B] hover:bg-[#EDE6DA] rounded-full transition-colors"
              aria-label="Close booking modal"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8">
              {!isSubmitted ? (
                <>
                  <div className="mb-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#B08A52]">
                      Direct Stay Enquiry
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#1D1D1B] font-medium mt-1">
                      Reserve Your Stay
                    </h3>
                    <p className="text-xs text-[#6E6A63] mt-0.5">
                      Applepie Residency · Three Bengaluru Locations
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    {/* Location Dropdown */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-[#1D1D1B] mb-1 flex items-center gap-1">
                        <MapPin size={13} className="text-[#B08A52]" />
                        <span>Choose Location</span>
                      </label>
                      <select
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3 py-2.5 text-xs sm:text-sm text-[#1D1D1B] font-medium focus:outline-none focus:border-[#B08A52] transition-colors"
                      >
                        {LOCATIONS.map((loc) => (
                          <option
                            key={loc.id}
                            value={`${loc.officialName} — ${loc.shortLabel}`}
                          >
                            {loc.num}. {loc.officialName} — {loc.shortLabel}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Room Type */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-medium text-[#6E6A63] mb-1">
                        Accommodation
                      </label>
                      <div className="p-2.5 bg-white border border-[#E2DACD] rounded-xl flex items-center justify-between text-xs">
                        <span className="font-serif font-medium text-[#1D1D1B]">
                          {defaultRoom}
                        </span>
                        <span className="bg-[#EDE6DA] text-[#6E6A63] px-2 py-0.5 rounded-full font-sans font-medium text-[10px]">
                          AC · King Bed · Hot Water
                        </span>
                      </div>
                    </div>

                    {/* Dates */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-medium text-[#6E6A63] mb-1">
                          Check-in Date
                        </label>
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="w-full bg-white border border-[#E2DACD] rounded-xl px-2.5 py-2 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-medium text-[#6E6A63] mb-1">
                          Check-out Date
                        </label>
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="w-full bg-white border border-[#E2DACD] rounded-xl px-2.5 py-2 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Guests & Name */}
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-medium text-[#6E6A63] mb-1">
                          Guests
                        </label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                          className="w-full bg-white border border-[#E2DACD] rounded-xl px-2.5 py-2 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                        >
                          <option value="1 Guest">1 Guest</option>
                          <option value="2 Guests">2 Guests</option>
                          <option value="3 Guests">3 Guests</option>
                          <option value="4+ Guests">4+ Guests</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] uppercase tracking-wider font-medium text-[#6E6A63] mb-1">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          placeholder="Full name"
                          value={guestName}
                          onChange={(e) => setGuestName(e.target.value)}
                          required
                          className="w-full bg-white border border-[#E2DACD] rounded-xl px-2.5 py-2 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-medium text-[#6E6A63] mb-1">
                        Contact Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 Mobile number"
                        value={guestPhone}
                        onChange={(e) => setGuestPhone(e.target.value)}
                        required
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3 py-2 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      />
                    </div>

                    {/* Notes */}
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider font-medium text-[#6E6A63] mb-1">
                        Special Requests (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="Early check-in, parking query, quiet room..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-white border border-[#E2DACD] rounded-xl px-3 py-2 text-xs text-[#1D1D1B] focus:outline-none focus:border-[#B08A52] transition-colors"
                      />
                    </div>

                    {/* Actions */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full bg-[#1D1D1B] hover:bg-[#2A2A27] text-[#FAF8F4] py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-[0.18em] transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        <MessageSquare size={16} className="text-[#25D366]" />
                        <span>Send Stay Enquiry on WhatsApp</span>
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6E6A63]">
                      <ShieldCheck size={13} className="text-[#B08A52]" />
                      <span>Direct Front Desk Transmission · No intermediary markup</span>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-[#EDE6DA] flex items-center justify-center text-[#25D366]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-serif text-2xl font-medium text-[#1D1D1B]">
                    Stay Enquiry Dispatched
                  </h3>
                  <p className="text-xs text-[#6E6A63] max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#1D1D1B]">{guestName}</strong>. Your enquiry details have been forwarded to Applepie Residency front desk.
                  </p>
                  <div className="p-3.5 bg-white border border-[#E2DACD] rounded-xl text-left text-xs space-y-1 max-w-xs mx-auto text-[#6E6A63]">
                    <div><span className="font-medium text-[#1D1D1B]">Location:</span> {selectedLocation}</div>
                    <div><span className="font-medium text-[#1D1D1B]">Dates:</span> {checkIn || "Flexible"} to {checkOut || "Flexible"}</div>
                  </div>
                  <div className="pt-2">
                    <button
                      onClick={handleReset}
                      className="bg-[#1D1D1B] text-[#FAF8F4] px-5 py-2 rounded-xl text-xs uppercase tracking-wider font-medium hover:bg-[#2A2A27]"
                    >
                      Return
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
