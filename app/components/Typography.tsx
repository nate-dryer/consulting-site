/**
 * Typography Components
 *
 * This file provides reusable typography components that use Tailwind utility classes directly.
 * These components replace the custom typography classes defined in globals.css.
 */
import React, { ReactNode } from "react";

type TypographyProps = {
  children?: ReactNode;
  className?: string;
  dangerouslySetInnerHTML?: {
    __html: string;
  };
};

/**
 * HeadingXL Component
 *
 * Replaces the .heading-xl class with direct Tailwind utility classes.
 * Used for main page titles and hero headings.
 */
export function HeadingXL({ children, className = "" }: TypographyProps) {
  return (
    <h1
      className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] tracking-tight mb-heading-lg-bottom ${className}`}
    >
      {children}
    </h1>
  );
}

/**
 * HeadingLG Component
 *
 * Replaces the .heading-lg class with direct Tailwind utility classes.
 * Used for section headings and important content blocks.
 */
export function HeadingLG({ children, className = "" }: TypographyProps) {
  return (
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] tracking-tight mb-heading-md-bottom ${className}`}
    >
      {children}
    </h2>
  );
}

/**
 * HeadingMD Component
 *
 * Replaces the .heading-md class with direct Tailwind utility classes.
 * Used for subsection headings and card titles.
 */
export function HeadingMD({ children, className = "" }: TypographyProps) {
  return (
    <h3 className={`text-xl sm:text-xl md:text-2xl font-semibold leading-[1.25] mb-heading-sm-bottom ${className}`}>
      {children}
    </h3>
  );
}

/**
 * SectionTitle Component
 *
 * Replaces the .section-title class with direct Tailwind utility classes.
 * Used for section titles with consistent bottom margin.
 */
export function SectionTitle({ children, className = "" }: TypographyProps) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-bold mb-heading-lg-bottom md:mb-heading-md-bottom tracking-tight leading-tight ${className}`}
    >
      {children}
    </h2>
  );
}

/**
 * SectionSubtitle Component
 *
 * Replaces the .section-subtitle class with direct Tailwind utility classes.
 * Used for descriptive text below section titles.
 */
export function SectionSubtitle({ children, className = "" }: TypographyProps) {
  return (
    <p
      className={`text-lg md:text-xl text-gray-600 mb-heading-md-bottom md:mb-heading-lg-bottom max-w-3xl mx-auto leading-relaxed font-normal ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * SectionDescription Component
 *
 * Replaces the .section-description class with direct Tailwind utility classes.
 * Used for longer descriptive text in sections, centered by default.
 */
export function SectionDescription({ children, className = "" }: TypographyProps) {
  return (
    <p
      className={`text-base sm:text-lg text-center text-gray-600 max-w-3xl mx-auto leading-relaxed font-normal mb-heading-sm-bottom md:mb-heading-md-bottom ${className}`}
    >
      {children}
    </p>
  );
}

/**
 * SectionTitleCentered Component
 *
 * Replaces the .section-title-centered class with direct Tailwind utility classes.
 * Used for centered section titles with consistent bottom margin.
 */
export function SectionTitleCentered({ children, className = "" }: TypographyProps) {
  return (
    <h2
      className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.2] tracking-tight text-center mb-heading-sm-bottom sm:mb-heading-md-bottom md:mb-heading-lg-bottom ${className}`}
    >
      {children}
    </h2>
  );
}
