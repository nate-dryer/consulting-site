"use client";

import Image, { ImageProps } from "next/image";
import { memo } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "alt"> {
  /**
   * Alt text for the image (required for accessibility)
   * If the image is decorative, use decorative={true} instead of empty alt
   */
  alt?: string;
  /**
   * Whether the image is decorative (no alt text needed)
   * If true, alt will be set to an empty string
   */
  decorative?: boolean;
  /**
   * Test ID for testing
   */
  "data-testid"?: string;
}

/**
 * OptimizedImage Component
 *
 * A standardized wrapper around Next.js Image component that:
 * - Enforces proper usage of width, height, and sizes props
 * - Handles alt text correctly for accessibility
 * - Provides consistent styling options
 *
 * This component helps ensure all images follow best practices for performance and accessibility.
 */
const OptimizedImage = memo(
  ({
    src,
    alt = "",
    width,
    height,
    sizes,
    fill,
    className = "",
    decorative = false,
    priority = false,
    style,
    ...props
  }: OptimizedImageProps) => {
    // Validate alt text in development
    if (process.env.NODE_ENV === "development") {
      if (!decorative && !alt) {
        console.warn(
          "OptimizedImage: Missing alt text. Add descriptive alt text for accessibility or set decorative={true} for decorative images."
        );
      }

      if (fill && !sizes) {
        console.warn(
          "OptimizedImage: Missing sizes prop for fill image. This is needed for optimal performance."
        );
      }
    }

    // Set alt to empty string for decorative images
    const imageAlt = decorative ? "" : alt;

    // Default sizes if not provided for fill images
    const imageSizes =
      fill && !sizes ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : sizes;

    return (
      <Image
        src={src}
        alt={imageAlt}
        width={width}
        height={height}
        sizes={imageSizes}
        fill={fill}
        className={className}
        priority={priority}
        style={style}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
