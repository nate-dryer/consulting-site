import { KeyboardEvent } from "react";

export const getInteractiveProps = (onClick?: () => void) => ({
  tabIndex: onClick ? 0 : undefined,
  role: onClick ? "button" : undefined,
  onKeyDown: onClick
    ? (e: KeyboardEvent) => {
        if (e.key === "Enter" && onClick) onClick();
      }
    : undefined,
});

export const getLinkProps = (href: string) => ({
  rel: href.startsWith("http") ? "noopener noreferrer" : undefined,
  target: href.startsWith("http") ? "_blank" : undefined,
});
