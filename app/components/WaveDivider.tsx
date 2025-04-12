import React, { memo } from "react";

/**
 * WaveDivider Component Props
 */
type WaveDividerProps = {
  position: "top" | "bottom";
  fromColor?: string;
  toColor?: string;
  className?: string;
  height?: number;
};

// Pre-defined wave paths for better performance
// Smoother, more subtle wave paths with gentler curves
// Updated to match the target design with more subtle, smoother waves
const WAVE_PATHS = {
  // Top wave (wave on top of the section) - smoother curve with less extreme points
  top: "M0,100 L1440,100 L1440,88 C1320,82 1200,78 1080,80 C960,82 840,84 720,84 C600,84 480,82 360,80 C240,78 120,82 60,84 L0,88 L0,100 Z",
  // Bottom wave (wave at bottom of the section) - smoother curve with less extreme points
  bottom:
    "M0,0 L1440,0 L1440,12 C1320,18 1200,22 1080,20 C960,18 840,16 720,16 C600,16 480,18 360,20 C240,22 120,18 60,16 L0,12 L0,0 Z",
};

/**
 * WaveDivider Component
 *
 * Creates a smooth wave-shaped divider between sections with gradient colors.
 * Applies `animate-wave-top` or `animate-wave-bottom` Tailwind animation.
 * Optimized with memoization to prevent unnecessary re-renders.
 */
const WaveDivider = memo(function WaveDivider({
  position,
  fromColor = "#8A4BFF",
  toColor = "#6B2AE8",
  className = "",
  height = 100,
}: WaveDividerProps) {
  // Generate a unique ID for the gradient to avoid conflicts when using multiple dividers
  // Using position in the ID makes it more predictable and debuggable
  const gradientId = `gradient-${position}-${Math.floor(Math.random() * 10000)}`;

  // Select the appropriate path based on position
  const path = WAVE_PATHS[position];

  // Consolidated styles for better readability and seamless connections
  const containerStyles = {
    marginBottom: position === "top" ? "-2px" : "0", // Increased overlap to prevent gaps
    marginTop: "0", // Removed negative margin for bottom position
    display: "block",
    lineHeight: 0,
    zIndex: 10,
    position: "relative" as const,
    // Ensure no gaps between sections
    transform: "translateY(0px)",
  };

  return (
    <div className={`relative w-full overflow-hidden ${className}`} style={containerStyles}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 100"
        className="w-full block"
        preserveAspectRatio="none"
        height={height}
        aria-hidden="true"
        style={{ display: "block" }} // Ensure no whitespace
      >
        <path
          fill={`url(#${gradientId})`}
          d={path}
          className={position === 'top' ? 'animate-wave-top' : 'animate-wave-bottom'}
        />
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={fromColor} />
            <stop offset="100%" stopColor={toColor} />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
});

export default WaveDivider;
