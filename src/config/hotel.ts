// Centralized Master Configuration for Hotel Applepie Residency

export interface HotelLocation {
  id: string;
  num: string;
  officialName: string;
  displayName: string;
  shortLabel: string;
  area: string;
  address: string;
  pincode: string;
  image: string;
  features: string[];
  googleMapsQuery: string;
}

export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919876543210";

export const LOCATIONS: HotelLocation[] = [
  {
    id: "loc-18th-main",
    num: "01",
    officialName: "Hotel O Applepie Residency",
    displayName: "Applepie Residency — 18th Main",
    shortLabel: "BTM / Madiwala",
    area: "Cashier Layout, 1st Stage",
    address: "18th Main Road, Narayana Gowda Layout, Cashier Layout, 1st Stage, Bengaluru",
    pincode: "560029",
    image: "/images/hero-exterior.jpg",
    features: ["Near Madiwala Bus Hub", "Quiet Residential Pocket", "24/7 Front Desk"],
    googleMapsQuery: "Hotel O Applepie Residency 18th Main Road Cashier Layout Bengaluru 560029",
  },
  {
    id: "loc-btm-2nd",
    num: "02",
    officialName: "Hotel Applepie Residency",
    displayName: "Applepie Residency — BTM Layout",
    shortLabel: "BTM Layout 2nd Stage",
    area: "MCHS Colony, BTM 2nd Stage",
    address: "18th Main Road, Narayana Gowda Layout, MCHS Colony, BTM Layout 2nd Stage, Bengaluru",
    pincode: "560029",
    image: "/images/lobby-reception.jpg",
    features: ["Heart of BTM Dining & Cafés", "Air-conditioned Comfort", "Easy Ring Road Access"],
    googleMapsQuery: "Hotel Applepie Residency MCHS Colony BTM Layout 2nd Stage Bengaluru 560029",
  },
  {
    id: "loc-chocolate-factory",
    num: "03",
    officialName: "Applepie Residency",
    displayName: "Applepie Residency — Chocolate Factory Road",
    shortLabel: "Chocolate Factory Road",
    area: "Chocolate Factory Road",
    address: "Chocolate Factory Road, Bengaluru",
    pincode: "560029",
    image: "/images/gallery-lounge.jpg",
    features: ["Convenient South Bengaluru Access", "Spacious Quiet Rooms", "Attentive Room Assistance"],
    googleMapsQuery: "Applepie Residency Chocolate Factory Road Bengaluru 560029",
  },
];

export interface EnquiryPayload {
  name: string;
  phone: string;
  email?: string;
  location: string;
  checkIn?: string;
  checkOut?: string;
  guests: string;
  roomPreference?: string;
  enquiryType?: string;
  message?: string;
}

export function buildWhatsAppEnquiryUrl(
  payload: EnquiryPayload,
  targetNumber: string = WHATSAPP_NUMBER
): string {
  // Strip non-numeric chars for wa.me format (keeping leading digits)
  const cleanNumber = targetNumber.replace(/[^\d]/g, "");

  const lines = [
    "Hello Applepie Residency,",
    "",
    "I would like to make a stay enquiry.",
    "",
    `Name: ${payload.name || "Guest"}`,
    `Phone: ${payload.phone || "Not specified"}`,
    payload.email ? `Email: ${payload.email}` : "",
    `Preferred Location: ${payload.location || "Any Applepie Location"}`,
    `Check-in: ${payload.checkIn || "Flexible"}`,
    `Check-out: ${payload.checkOut || "Flexible"}`,
    `Guests: ${payload.guests || "1-2 Guests"}`,
    payload.roomPreference ? `Room Preference: ${payload.roomPreference}` : "",
    payload.enquiryType ? `Enquiry Type: ${payload.enquiryType}` : "",
    payload.message ? `Message: ${payload.message}` : "",
    "",
    "Thank you.",
  ].filter(Boolean);

  const fullMessage = lines.join("\n");
  const encoded = encodeURIComponent(fullMessage);

  return cleanNumber
    ? `https://wa.me/${cleanNumber}?text=${encoded}`
    : `https://wa.me/?text=${encoded}`;
}
