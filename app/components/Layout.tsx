/**
 * Layout Components
 *
 * This file provides reusable layout components that use Tailwind utility classes directly.
 * These components replace the custom layout classes defined in globals.css.
 */
import React, { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Section Component
 *
 * A wrapper for section elements with consistent padding.
 * Replaces the .section-padding-y class with direct Tailwind utility classes.
 * Provides more generous vertical spacing for better content separation.
 */
export function Section({ children, className = "", style }: LayoutProps) {
  return (
    <section className={`py-section-y sm:py-section-y-sm lg:py-section-y-lg ${className}`} style={style}>
      {children}
    </section>
  );
}

/**
 * Container Component
 *
 * A centered container with consistent horizontal padding.
 * Replaces the .section-container class with direct Tailwind utility classes.
 * Provides more generous horizontal padding on larger screens for better readability.
 */
export function Container({ children, className = "", style }: LayoutProps) {
  return (
    <div
      className={`container mx-auto px-container-x lg:px-container-x-lg ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/**
 * SectionContainer Component
 *
 * A combination of Section and Container for convenience.
 * Replaces using both .section-padding-y and .section-container together.
 */
export function SectionContainer({ children, className = "", style }: LayoutProps) {
  return (
    <Section className={className} style={style}>
      <Container>{children}</Container>
    </Section>
  );
}

/**
 * SectionHeader Component
 *
 * A centered header for sections with consistent spacing.
 * Replaces the .section-header class with direct Tailwind utility classes.
 * Provides more generous bottom margin for better separation from content.
 */
export function SectionHeader({ children, className = "", style }: LayoutProps) {
  return (
    <div className={`text-center mb-heading-lg-bottom sm:mb-heading-md-bottom md:mb-heading-lg-bottom ${className}`} style={style}>
      {children}
    </div>
  );
}
