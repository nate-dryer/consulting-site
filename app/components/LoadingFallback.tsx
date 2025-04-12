/**
 * LoadingFallback Component
 *
 * A simple loading component to use as a fallback for dynamically imported components.
 * Shows a subtle loading indicator that respects the site's design.
 * Includes a spinner and a subtle pulse animation on the container.
 */
import React from "react";

import type { DynamicOptionsLoadingProps } from "next/dynamic";

interface LoadingFallbackProps {
  /**
   * Text to display while loading
   */
  text?: string;

  /**
   * Whether to show a full-height loading state
   */
  fullHeight?: boolean;

  /**
   * Custom CSS class to apply
   */
  className?: string;
}

/**
 * Standard loading component for use with dynamically imported components
 */
function LoadingFallback({
  text = "Loading...",
  fullHeight = false,
  className = "",
}: LoadingFallbackProps) {
  return (
    <div
      className={`
        flex items-center justify-center animate-pulse-slow
        ${fullHeight ? "min-h-[300px]" : "py-8"}
        ${className}
      `}
      aria-live="polite"
      aria-busy="true"
    >
      <div className="flex flex-col items-center">
        <div
          className="w-8 h-8 border-4 border-gray-200 border-t-purple-700 rounded-full animate-spin"
          role="progressbar"
          aria-label={text}
        />
        {text && <p className="mt-4 text-gray-600 font-medium">{text}</p>}
      </div>
    </div>
  );
}

/**
 * Dynamic loading component that works with Next.js dynamic imports
 */
export default function DynamicLoadingFallback(loadingProps: DynamicOptionsLoadingProps) {
  // You can use loadingProps.error, loadingProps.isLoading, and loadingProps.pastDelay
  // to customize the loading experience
  const { error, isLoading, pastDelay } = loadingProps;

  if (error) {
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-md">
        <p>Error loading component: {error.message}</p>
      </div>
    );
  }

  if (!isLoading || !pastDelay) {
    // Don't show anything during short loads or when not loading
    return null;
  }

  // Show the loading fallback for longer loads
  return <LoadingFallback />;
}
