/**
 * useClickOutside Hook
 *
 * A custom hook that detects clicks outside of a specified element
 * and calls a callback function when detected.
 *
 * @param callback - Function to call when a click outside is detected
 * @param excludeSelector - Optional CSS selector for elements to exclude from outside click detection
 * @returns React ref to attach to the element
 */

import { useEffect, useRef, RefObject } from "react";

const useClickOutside = <T extends HTMLElement>(
  callback: () => void,
  excludeSelector?: string
): RefObject<T | null> => {
  const ref = useRef<T>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Check if the click is outside the referenced element
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        // If excludeSelector is provided, also check that the click is not on an excluded element
        !(excludeSelector && (event.target as Element).closest(excludeSelector))
      ) {
        callback();
      }
    };

    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, excludeSelector]);

  return ref;
};

export default useClickOutside;
