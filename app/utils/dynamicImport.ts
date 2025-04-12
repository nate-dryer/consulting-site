/**
 * Dynamic Import Utility
 *
 * This utility provides a consistent way to dynamically import components
 * with proper loading and error states.
 */
import dynamic, { DynamicOptionsLoadingProps } from "next/dynamic";
import { ComponentType, ReactNode } from "react";

interface DynamicImportOptions {
  /**
   * Whether to disable Server-Side Rendering
   * Set to true for components that use browser-only APIs
   */
  ssr?: boolean;

  /**
   * Custom loading component to show while the component is loading
   */
  loading?: (loadingProps: DynamicOptionsLoadingProps) => JSX.Element | null;

  /**
   * Delay in milliseconds before showing the loading component
   * Useful to prevent flashing loading states for fast loads
   */
  loadingDelay?: number;
}

/**
 * Dynamically import a component with consistent loading and error handling
 *
 * @param importFunc Function that imports the component
 * @param options Configuration options
 * @returns Dynamically imported component
 */
export function dynamicImport<T>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  options: DynamicImportOptions = {}
) {
  const { ssr = true, loading, loadingDelay = 200 } = options;

  return dynamic(importFunc, {
    ssr,
    // Use the provided loading component or create a default one
    loading:
      loading ||
      (loadingDelay > 0
        ? () => null
        : (undefined as unknown as
            | ((loadingProps: DynamicOptionsLoadingProps) => JSX.Element | null)
            | undefined)),
  });
}
