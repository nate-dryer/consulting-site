/**
 * useResponsiveMenu Hook
 *
 * A custom hook that manages mobile menu state and responsive behavior.
 * Handles menu open/close state, dropdown states, and responsive behavior.
 *
 * @param breakpoint - The breakpoint width in pixels for mobile/desktop switch (default: 768)
 * @returns Object containing menu state and handler functions
 */

import { useState, useEffect, useCallback } from "react";

interface UseResponsiveMenuReturn {
  isMenuOpen: boolean;
  openMobileMenus: Record<string, boolean>;
  toggleMenu: () => void;
  toggleMobileDropdown: (title: string) => void;
  closeMenu: () => void;
}

const useResponsiveMenu = (breakpoint = 768): UseResponsiveMenuReturn => {
  // State for mobile menu and dropdowns
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenus, setOpenMobileMenus] = useState<Record<string, boolean>>({});

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= breakpoint && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen, breakpoint]);

  // Toggle main mobile menu
  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Close menu
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  // Toggle individual mobile dropdown
  const toggleMobileDropdown = useCallback((title: string) => {
    setOpenMobileMenus((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  }, []);

  return {
    isMenuOpen,
    openMobileMenus,
    toggleMenu,
    toggleMobileDropdown,
    closeMenu,
  };
};

export default useResponsiveMenu;
