import { ReactNode, CSSProperties } from "react";

export interface CardProps {
  /** Content to render inside the card */
  children: ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Custom inline styles */
  style?: CSSProperties;
  /** Optional click handler */
  onClick?: () => void;
  /** Optional href for link cards */
  href?: string;
}

export interface LinkCardProps extends Omit<CardProps, "href"> {
  /** Required href for link cards */
  href: string;
}
