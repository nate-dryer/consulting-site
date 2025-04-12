/**
 * Navigation Type Definitions
 */

/**
 * NavigationItem
 * Represents a navigation menu item that can be either a direct link or a dropdown
 */
export type NavigationItem = {
  title: string;
  items?: { label: string; href: string }[];
  href?: string;
  isLink?: boolean;
};

/**
 * NavItemProps
 * Props for the desktop navigation item component
 */
export type NavItemProps = NavigationItem;

/**
 * MobileNavItemProps
 * Props for the mobile navigation item component
 */
export type MobileNavItemProps = {
  title: string;
  items?: { label: string; href: string }[];
  isOpen: boolean;
  onToggle: () => void;
  href?: string;
  isLink?: boolean;
};

/**
 * ChevronIconProps
 * Props for the dropdown chevron icon component
 */
export type ChevronIconProps = {
  className?: string;
  isOpen?: boolean;
};
