/**
 * useScrollEffect Hook
 *
 * A custom hook that tracks scroll position and returns whether the page has been scrolled
 * beyond a specified threshold.
 *
 * @param threshold - The scroll position threshold in pixels (default: 10)
 * @returns boolean indicating if the page has been scrolled beyond the threshold
 */

import { useState, useEffect } from "react";

const useScrollEffect = (threshold = 10): boolean => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll for effects like header shadow
    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial check for scroll position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return isScrolled;
};

export default useScrollEffect;
