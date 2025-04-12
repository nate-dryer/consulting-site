"use client";

import { memo } from "react";

import { ChevronIconProps } from "./types";

/**
 * ChevronIcon Component
 *
 * A chevron icon that rotates based on the open/closed state
 * Used for dropdown indicators in navigation
 */
const ChevronIcon = memo(({ className = "ml-1 w-4 h-4", isOpen = false }: ChevronIconProps) => (
  <svg
    className={`${className} transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
  </svg>
));

ChevronIcon.displayName = "ChevronIcon";

export default ChevronIcon;
