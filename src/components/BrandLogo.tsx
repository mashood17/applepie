"use client";

import React from "react";

interface BrandLogoProps {
  variant?: "light" | "dark" | "gold";
  size?: "sm" | "md" | "lg";
  showSubtitle?: boolean;
  className?: string;
}

export default function BrandLogo({
  variant = "dark",
  size = "md",
  showSubtitle = true,
  className = "",
}: BrandLogoProps) {
  const isLight = variant === "light";
  const isGold = variant === "gold";

  // Sizing definitions
  const iconSize = size === "sm" ? 22 : size === "md" ? 28 : 42;
  const titleSize =
    size === "sm" ? "text-base tracking-[0.16em]" : size === "md" ? "text-lg tracking-[0.2em]" : "text-2xl sm:text-3xl tracking-[0.24em]";
  const subSize =
    size === "sm" ? "text-[8px] tracking-[0.28em]" : size === "md" ? "text-[9px] tracking-[0.32em]" : "text-[11px] tracking-[0.36em]";

  const textColor = isLight ? "text-[#F7F4EE]" : isGold ? "text-[#B08A52]" : "text-[#1D1D1B]";
  const subColor = isLight ? "text-[#C2BAAA]" : isGold ? "text-[#C79F65]" : "text-[#6E6A63]";
  const iconFill = isLight ? "#FAF7F0" : isGold ? "#B08A52" : "#B08A52";
  const leafFill = isLight ? "#B08A52" : isGold ? "#D4AF77" : "#8F6C38";

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Luxury stylized Apple & Star emblem */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:rotate-3"
        aria-hidden="true"
      >
        {/* Subtle glowing halo ring */}
        <circle
          cx="20"
          cy="20"
          r="19"
          stroke={isLight ? "rgba(176,138,82,0.3)" : "rgba(176,138,82,0.25)"}
          strokeWidth="1"
          strokeDasharray="2 3"
        />
        {/* Apple silhouette body */}
        <path
          d="M20 12.5C18.2 9.8 14.5 9.5 12 11.5C9 14 8.5 19 11 24C12.8 27.5 16 30 18.5 30C19.2 30 20 29.5 20.8 29.5C21.6 29.5 22.4 30 23.2 30C25.7 30 28.9 27.5 30.7 24C33.2 19 32.7 14 29.7 11.5C27.2 9.5 23.5 9.8 21.7 12.5L20.8 13.8L20 12.5Z"
          fill={iconFill}
        />
        {/* Elegant top leaf */}
        <path
          d="M21 7C23.5 7.2 25.5 9 25 11.5C22.5 11.3 20.5 9.5 21 7Z"
          fill={leafFill}
        />
        {/* Inner center hospitality star dot */}
        <circle cx="20.8" cy="19.5" r="1.5" fill={isLight ? "#1D1D1B" : "#F7F4EE"} />
      </svg>

      <div className="flex flex-col text-left">
        <span
          className={`font-serif font-medium uppercase leading-tight ${textColor} ${titleSize}`}
        >
          Applepie
        </span>
        {showSubtitle && (
          <span
            className={`font-sans uppercase font-medium mt-0.5 leading-none ${subColor} ${subSize}`}
          >
            Residency · Bengaluru
          </span>
        )}
      </div>
    </div>
  );
}
