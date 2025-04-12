"use client";

import Image, { ImageProps } from "next/image";
import { useState, useEffect, useRef, memo } from "react";

interface LazyImageProps extends Omit<ImageProps, "onLoad" | "alt"> {
  /**
   * Alt text for the image (required for accessibility)
   * If the image is decorative, use decorative={true} instead of empty alt
   */
  alt?: string;
  threshold?: number;
  placeholderSrc?: string;
  fadeInDuration?: number;
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
 * LazyImage Component
 *
 * A wrapper around Next.js Image component that adds:
 * - Lazy loading with IntersectionObserver
 * - Fade-in animation when the image loads
 * - Optional low-quality placeholder
 *
 * This helps improve performance by only loading images when they're about to enter the viewport.
 */
const LazyImage = memo(
  ({
    src,
    alt = "",
    width,
    height,
    threshold = 0.1,
    placeholderSrc,
    fadeInDuration = 400,
    className = "",
    decorative = false,
    fill,
    sizes,
    ...props
  }: LazyImageProps) => {
    // Validate alt text - warn in development if missing for non-decorative images
    if (process.env.NODE_ENV === "development") {
      if (!decorative && !alt) {
        console.warn(
          "LazyImage: Missing alt text. Add descriptive alt text for accessibility or set decorative={true} for decorative images."
        );
      }

      if (fill && !sizes) {
        console.warn(
          "LazyImage: Missing sizes prop for fill image. This is needed for optimal performance."
        );
      }
    }

    // Set alt to empty string for decorative images
    const imageAlt = decorative ? "" : alt;

    // Default sizes if not provided for fill images
    const imageSizes =
      fill && !sizes ? "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" : sizes;
    const [isVisible, setIsVisible] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef<HTMLDivElement>(null);

    // Set up intersection observer to detect when image is about to enter viewport
    useEffect(() => {
      // Skip if SSR or if already visible
      if (!imgRef.current || isVisible) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { threshold }
      );

      observer.observe(imgRef.current);

      return () => {
        observer.disconnect();
      };
    }, [isVisible, threshold]);

    // Combine classes for styling
    const imageClasses = `
    transition-opacity duration-${fadeInDuration}
    ${isLoaded ? "opacity-100" : "opacity-0"}
    ${className}
  `.trim();

    // Extract data-testid from props if it exists
    const { "data-testid": dataTestId, ...otherProps } = props;

    return (
      <div
        ref={imgRef}
        className="relative overflow-hidden"
        aria-busy={isVisible && !isLoaded}
        data-testid={dataTestId}
      >
        {/* Screen reader only loading indicator */}
        {isVisible && !isLoaded && <span className="sr-only">Loading image</span>}

        {isVisible ? (
          <Image
            src={src}
            alt={imageAlt}
            width={width}
            height={height}
            sizes={imageSizes}
            fill={fill}
            className={imageClasses}
            onLoadingComplete={() => setIsLoaded(true)}
            aria-hidden={!isLoaded} // Hide from screen readers until loaded
            {...otherProps}
          />
        ) : (
          placeholderSrc && (
            <Image
              src={placeholderSrc}
              alt={imageAlt}
              width={width}
              height={height}
              sizes={imageSizes}
              fill={fill}
              className={`${className} blur-sm`}
              aria-hidden="true" // Hide placeholder from screen readers
              {...otherProps}
            />
          )
        )}
      </div>
    );
  }
);

LazyImage.displayName = "LazyImage";

export default LazyImage;
