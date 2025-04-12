/**
 * Background Components
 *
 * This file provides reusable background components that use Tailwind utility classes directly.
 * These components replace the custom background classes defined in globals.css.
 */
import React, { ReactNode } from "react";

type BackgroundProps = {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * PrimaryGradient Component
 *
 * A background with the primary gradient.
 * Replaces the .bg-primary-gradient class with direct Tailwind utility classes.
 */
export function PrimaryGradient({ children, className = "", style }: BackgroundProps) {
  return (
    <div
      className={`bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary-dark)] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/**
 * PrimaryLight Component
 *
 * A background with the primary light color.
 * Replaces the .bg-primary-light class with direct CSS.
 */
export function PrimaryLight({ children, className = "", style }: BackgroundProps) {
  return (
    <div className={className} style={{ backgroundColor: "var(--primary-light)", ...style }}>
      {children}
    </div>
  );
}

/**
 * PrimaryDark Component
 *
 * A background with the primary dark color.
 * Replaces the .bg-primary-dark class with direct CSS.
 */
export function PrimaryDark({ children, className = "", style }: BackgroundProps) {
  return (
    <div className={className} style={{ backgroundColor: "var(--primary-dark)", ...style }}>
      {children}
    </div>
  );
}

/**
 * Decorative Component
 *
 * A decorative background with relative positioning and overflow hidden.
 * Replaces the .bg-decorative class with direct Tailwind utility classes.
 */
export function Decorative({ children, className = "", style }: BackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {children}
    </div>
  );
}

/**
 * DecorativeCircles Component
 *
 * Decorative circles for backgrounds.
 * Replaces the .bg-decorative-circles class with direct Tailwind utility classes.
 */
export function DecorativeCircles({ children, className = "", style }: BackgroundProps) {
  return (
    <div className={`absolute inset-0 opacity-10 pointer-events-none ${className}`} style={style}>
      {children}
    </div>
  );
}

/**
 * WaveConnector Component
 *
 * A wave connector for the top of a section.
 * Replaces the .wave-connector class with direct Tailwind utility classes.
 */
export function WaveConnector({ children, className = "", style }: BackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {children}
      <div className="absolute top-[-1px] left-0 right-0 h-[1px] bg-[#6B2AE8] z-[5]"></div>
    </div>
  );
}

/**
 * WaveConnectorBottom Component
 *
 * A wave connector for the bottom of a section.
 * Replaces the .wave-connector-bottom class with direct Tailwind utility classes.
 */
export function WaveConnectorBottom({ children, className = "", style }: BackgroundProps) {
  return (
    <div className={`relative overflow-hidden ${className}`} style={style}>
      {children}
      <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-white z-[5]"></div>
    </div>
  );
}
