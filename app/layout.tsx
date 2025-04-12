// Import utilities for dynamic loading
import { dynamicImport } from "./utils/dynamicImport";
import DynamicLoadingFallback from "./components/LoadingFallback";

import type { Metadata } from "next";

// Import global styles
import "./globals.css";
// Import font variables
import "./font-variables.css";

// Dynamically import components for better code splitting
const Header = dynamicImport(() => import("./components/Header"), {
  ssr: true, // Header should be rendered on the server for SEO
  loading: DynamicLoadingFallback,
});

const Footer = dynamicImport(() => import("./components/Footer"), {
  ssr: true, // Footer should be rendered on the server for SEO
  loading: DynamicLoadingFallback,
});

// Load scroll animations client-side only
const ScrollAnimationsInit = dynamicImport(() => import("./components/ScrollAnimationsInit"), {
  ssr: false, // Only needed on client-side
});

/**
 * Application metadata for SEO and browser display
 */
export const metadata: Metadata = {
  title: "AI & Automation Consultants | Improve Productivity & Growth",
  description:
    "At AIvantage, we improve business growth and lower costs. Our services include automation consulting, digital transformation, and custom AI development.",
  keywords: "AI consulting, automation, digital transformation, business growth",
};

/**
 * Root layout component that wraps all pages
 * Provides consistent header, footer, and animation initialization
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Load Fieldworks font from Adobe Typekit with optimized loading */}
<script dangerouslySetInnerHTML={{ __html: `
      (function() {
        const originalAddEventListener = window.addEventListener;
        window.addEventListener = function(type, listener, options) {
          if (type === 'unload') {
            console.warn('Unload event listeners are deprecated. Consider using beforeunload or pagehide instead.');
            return originalAddEventListener.call(this, 'pagehide', listener, options);
          }
          return originalAddEventListener.call(this, type, listener, options);
        };
        if (window.onunload) {
          const originalHandler = window.onunload;
          window.onunload = null;
          window.onpagehide = originalHandler;
        }
      })();
    ` }} />
        <link rel="stylesheet" href="https://use.typekit.net/ebn1ntn.css" />
      </head>
      <body className="antialiased font-fieldworks">
        {/* Skip link for keyboard users to bypass navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50 focus:text-purple-700 focus:top-0 focus:left-0 focus:outline-2 focus:outline-purple-700"
        >
          Skip to main content
        </a>
        <ScrollAnimationsInit />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
