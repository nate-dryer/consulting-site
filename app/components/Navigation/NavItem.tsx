"use client";

import Link from "next/link";
import { useState, useEffect, useRef, memo, KeyboardEvent } from "react";

import ChevronIcon from "./ChevronIcon";
import { NavItemProps } from "./types";

/**
 * NavItem Component
 *
 * Desktop navigation item that can be either a direct link or a dropdown menu
 * Enhanced with improved accessibility and keyboard navigation
 */
const NavItem = memo(({ title, items, href, isLink }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const id = `dropdown-${title.toLowerCase().replace(/\s+/g, "-")}`;

  // Handle keyboard navigation and accessibility
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // If it's a direct link, render a Link component
  if (isLink && href) {
    return (
      <Link
        href={href}
        className="text-gray-800 hover:text-purple-700 focus-visible:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 rounded-md px-3 py-2 transition-colors duration-200 font-normal text-lg tracking-tight"
      >
        {title}
      </Link>
    );
  }

  // Otherwise, render a dropdown
  return (
    <div className="relative group" ref={dropdownRef} onKeyDown={handleKeyDown} role="none">
      <button
        className="flex items-center text-gray-800 hover:text-purple-700 focus-visible:text-purple-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 rounded-md px-3 py-2 transition-colors duration-200 font-normal text-lg tracking-tight"
        aria-expanded={isOpen ? "true" : "false"}
        aria-haspopup="menu"
        aria-controls={id}
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        id={id}
        className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 py-2 border border-gray-100 transform transition-all duration-200 ease-in-out origin-top-left ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
        role="menu"
        aria-orientation="vertical"
        aria-hidden={!isOpen}
      >
        {items?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 focus-visible:bg-purple-50 focus-visible:text-purple-700 focus-visible:outline-none transition-colors duration-200"
            role="menuitem"
            onClick={() => setIsOpen(false)}
            tabIndex={isOpen ? 0 : -1}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
});

NavItem.displayName = "NavItem";

export default NavItem;
