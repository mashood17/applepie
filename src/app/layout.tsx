import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://applepie-residency.com"),
  title: "Hotel Applepie Residency | Hotel in BTM Layout, Bengaluru",
  description:
    "Stay at Hotel Applepie Residency in Bengaluru's BTM Layout–Madiwala area with comfortable rooms, essential amenities and convenient access to Koramangala and major South Bengaluru destinations.",
  keywords: [
    "Applepie Residency",
    "Hotel in BTM Layout",
    "Hotel near Madiwala Bengaluru",
    "Boutique Hotel South Bengaluru",
    "Applepie Residency Bengaluru",
    "Hotel near St Johns Hospital",
    "Hotel near Christ University",
    "Bengaluru residency"
  ],
  authors: [{ name: "Hotel Applepie Residency" }],
  openGraph: {
    title: "Hotel Applepie Residency | Boutique City Hotel in Bengaluru",
    description:
      "Comfortable stays in Bengaluru's BTM Layout–Madiwala area. Modern amenities, thoughtful hospitality and central South Bengaluru connectivity.",
    url: "https://applepie-residency.com",
    siteName: "Hotel Applepie Residency",
    images: [
      {
        url: "/images/hero-exterior.jpg",
        width: 1200,
        height: 675,
        alt: "Hotel Applepie Residency Bengaluru exterior",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#1D1D1B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#F7F4EE] text-[#242424] font-sans selection:bg-[#B08A52] selection:text-white">
        {children}
      </body>
    </html>
  );
}
