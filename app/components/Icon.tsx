"use client";

/**
 * Icon Component
 *
 * A standardized icon component that ensures consistent styling and accessibility.
 * Uses react-icons library for a wide range of icon options.
 */
import React, { ReactElement } from "react";
import { IconBaseProps } from "react-icons"; // Reverted import path

// Import common icon sets
import * as Fa from "react-icons/fa";
import * as Hi from "react-icons/hi";
import * as Io from "react-icons/io5";
import * as Ri from "react-icons/ri";

// Define icon libraries
const iconLibraries = {
  fa: Fa,
  hi: Hi,
  io: Io,
  ri: Ri,
};

// Icon sizes with consistent dimensions
const iconSizes = {
  xs: 16,
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

// Icon colors using Tailwind color palette
const iconColors = {
  primary: "text-purple-700",
  secondary: "text-gray-700",
  accent: "text-orange-700",
  light: "text-gray-400",
  white: "text-white",
  current: "text-current", // Inherits color from parent
};

export type IconProps = {
  name: string; // Format: "fa:FaReact" or "hi:HiCode"
  size?: keyof typeof iconSizes | number;
  color?: keyof typeof iconColors | string;
  className?: string;
  title?: string; // For accessibility
  onClick?: () => void;
} & Omit<IconBaseProps, "size" | "color" | "title">;

/**
 * Icon Component
 *
 * @param {string} name - Icon name in format "library:IconName" (e.g., "fa:FaReact")
 * @param {string|number} size - Icon size (xs, sm, md, lg, xl) or custom number
 * @param {string} color - Icon color (primary, secondary, accent, light, white, current) or custom color
 * @param {string} className - Additional CSS classes
 * @param {string} title - Accessible title for the icon (for screen readers)
 * @param {function} onClick - Click handler
 */
export default function Icon({
  name,
  size = "md",
  color = "current",
  className = "",
  title,
  onClick,
  ...props
}: IconProps): ReactElement | null {
  // Parse icon name to get library and icon component name
  const [library, iconName] = name.split(":");

  if (!library || !iconName) {
    console.error(`Invalid icon name: ${name}. Format should be "library:IconName"`);
    return null;
  }

  // Get the icon library
  const iconLib = iconLibraries[library as keyof typeof iconLibraries];

  if (!iconLib) {
    console.error(`Icon library "${library}" not found`);
    return null;
  }

  // Get the icon component
  const IconComponent = iconLib[
    iconName as keyof typeof iconLib
  ] as React.ComponentType<IconBaseProps>;

  if (!IconComponent) {
    console.error(`Icon "${iconName}" not found in library "${library}"`);
    return null;
  }

  // Determine size
  const sizeValue = typeof size === "string" ? iconSizes[size] : size;

  // Determine color class
  const colorClass = color in iconColors ? iconColors[color as keyof typeof iconColors] : "";

  // Combine classes
  const combinedClassName = `inline-block ${colorClass} ${className}`.trim();

  return (
    <span
      className={combinedClassName}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e: React.KeyboardEvent<HTMLSpanElement>) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault(); // Prevent default space bar scroll
          onClick();
        }
      }}
      style={{ display: "inline-flex", alignItems: "center" }}
    >
      <IconComponent size={sizeValue} aria-hidden={!!title} {...props} />
      {title && <span className="sr-only">{title}</span>}
    </span>
  );
}
