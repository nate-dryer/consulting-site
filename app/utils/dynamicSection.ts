/**
 * Dynamic Section Import Utility
 *
 * This utility provides a consistent way to dynamically import section components
 * with proper loading and error states optimized for section content.
 */
import { dynamicImport } from "./dynamicImport";

import type { ComponentType } from "react";

/**
 * Dynamically import a section component with optimized loading behavior
 *
 * @param importFunc Function that imports the section component
 * @returns Dynamically imported section component
 */
export function dynamicSection<T>(importFunc: () => Promise<{ default: ComponentType<T> }>) {
  return dynamicImport(importFunc, {
    // Sections should be rendered on the server for SEO
    ssr: true,
    // Use a longer loading delay for sections to prevent layout shifts
    loadingDelay: 300,
  });
}
