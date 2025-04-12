"use client";

import DynamicLoadingFallback from "../components/LoadingFallback";
import { dynamicImport } from "../utils/dynamicImport";
import { dynamicSection } from "../utils/dynamicSection";

// Dynamically import section components
const HeroSection = dynamicSection(() => import("../components/sections/HeroSection"));
const FinalCtaSection = dynamicSection(() => import("../components/sections/FinalCtaSection"));
const CtaSection = dynamicSection(() => import("../components/sections/CtaSection"));

// Import any other sections dynamically
// const OtherSection = dynamicSection(() => import('../components/sections/OtherSection'));

/**
 * OptimizedHomePage Component
 *
 * A version of the home page that uses dynamic imports for better performance
 * by splitting the code into smaller chunks that can be loaded on demand.
 */
export default function OptimizedHomePage() {
  return (
    <>
      {/* Hero section is loaded first */}
      <HeroSection />

      {/* Other sections would go here */}
      {/* <OtherSection /> */}

      {/* CTA sections are loaded last */}
      <CtaSection />
      <FinalCtaSection />
    </>
  );
}
