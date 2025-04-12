"use client";

import { memo } from "react";

import Button from "./Button";
import Icon from "./Icon";

// Import extracted navigation components
import { Logo } from "./Navigation"; // Removed unused NavItem, navigationItems
import MobileMenu from "./Navigation/MobileMenu";

// Import custom hooks
import { useScrollEffect } from "../utils/hooks";

/**
 * Main Header Component
 *
 * Memoized for better performance
 * Uses Shadcn/UI Sheet component for mobile menu
 */
const Header = memo(() => {
  // Use custom hooks for header functionality
  const isScrolled = useScrollEffect(10);

  return (
    <header
      className={
        "sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/50 transition-all duration-300 " +
        (isScrolled ? "shadow-md" : "shadow-none")
      }
    >
      <div className="container mx-auto px-5 sm:px-6 md:px-8 lg:px-16 xl:px-24 py-4 md:py-5 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation - hidden for MVP since no links */}
          <nav
            className="hidden"
            aria-label="Main Navigation"
          ></nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              href="https://calendly.com/aivantage-scheduling/partnership-follow-up"
              variant="primary-cta"
              size="md"
            >
              Process Health Check
              <Icon name="fa:FaArrowRight" className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size="md" />
            </Button>
          </div>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
});

// Add display name for better debugging
Header.displayName = "Header";

export default Header;
