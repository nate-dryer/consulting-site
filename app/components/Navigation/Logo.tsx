"use client";

import { memo } from "react";

/**
 * Logo Component
 *
 * Displays the site logo with a link to the homepage
 * Uses a direct HTML anchor tag to force a full page refresh when clicking the logo
 * This ensures proper navigation to the home page from any page in the application
 * Updated to match the target design
 */
const Logo = memo(() => {
  return (
    <a href="/" className="flex items-center cursor-pointer" aria-label="AIvantage Homepage">
      <div className="flex items-center">
        <div className="bg-purple-700 rounded-full w-10 h-10 flex items-center justify-center mr-2.5">
          <span className="text-white text-lg font-medium">a</span>
        </div>
        <span className="text-gray-800 text-xl tracking-tight font-normal">AIvantage</span>
      </div>
    </a>
  );
});

Logo.displayName = "Logo";

export default Logo;
