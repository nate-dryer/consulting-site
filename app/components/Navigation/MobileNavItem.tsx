"use client";

import Link from "next/link";
import { memo } from "react";

import ChevronIcon from "./ChevronIcon";
import { MobileNavItemProps } from "./types";

/**
 * MobileNavItem Component
 *
 * Mobile navigation item that can be either a direct link or a dropdown menu
 */
const MobileNavItem = memo(
  ({ title, items, isOpen, onToggle, href, isLink }: MobileNavItemProps) => {
    const id = `mobile-dropdown-${title.toLowerCase().replace(/\s+/g, "-")}`;

    // If it's a direct link, render a Link component
    if (isLink && href) {
      return (
        <div className="border-b border-purple-600 pb-2">
          <Link href={href} className="block py-2 text-white hover:text-gray-200">
            {title}
          </Link>
        </div>
      );
    }

    // Otherwise, render a dropdown
    return (
      <div className="border-b border-purple-600 pb-2">
        <button
          className="flex items-center justify-between w-full text-left text-white"
          onClick={onToggle}
          aria-expanded={isOpen ? "true" : "false"}
          aria-haspopup="true"
          aria-controls={id}
        >
          {title}
          <ChevronIcon className="w-4 h-4 text-white" isOpen={isOpen} />
        </button>
        <div
          id={id}
          className={`mt-2 ml-4 flex flex-col space-y-2 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
          role="menu"
          aria-orientation="vertical"
          aria-hidden={!isOpen}
        >
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-sm text-white hover:text-gray-200"
              role="menuitem"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }
);

MobileNavItem.displayName = "MobileNavItem";

export default MobileNavItem;
