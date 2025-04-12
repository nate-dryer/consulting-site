/**
 * SlideInRight Component
 *
 * A component that slides in its children from the right when they enter the viewport.
 * Replaces the slide-in-right-on-scroll CSS class.
 * Memoized for better performance.
 */
"use client";

import { HTMLMotionProps } from "framer-motion";
import { ReactNode, memo } from "react";

import MotionWrapper from "./MotionWrapper";
import { slideInRight } from "./variants";

interface SlideInRightProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
  };
}

const SlideInRight = memo(function SlideInRight({
  children,
  className = "",
  delay = 0,
  viewport,
  ...props
}: SlideInRightProps) {
  return (
    <MotionWrapper
      variants={slideInRight}
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
SlideInRight.displayName = "SlideInRight";

export default SlideInRight;
