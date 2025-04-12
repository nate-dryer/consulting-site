/**
 * FadeIn Component
 *
 * A component that fades in its children when they enter the viewport.
 * Replaces the fade-in-on-scroll CSS class.
 * Memoized for better performance.
 */
"use client";

import { HTMLMotionProps } from "framer-motion";
import { ReactNode, memo } from "react";

import MotionWrapper from "./MotionWrapper";
import { fadeIn } from "./variants";

interface FadeInProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
  };
}

const FadeIn = memo(function FadeIn({
  children,
  className = "",
  delay = 0,
  viewport,
  ...props
}: FadeInProps) {
  return (
    <MotionWrapper
      variants={fadeIn}
      className={className}
      delay={delay}
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionWrapper>
  );
});

// Add display name for better debugging
FadeIn.displayName = "FadeIn";

export default FadeIn;
