/**
 * SlideInLeft Component
 *
 * A component that slides in its children from the left when they enter the viewport.
 * Replaces the slide-in-left-on-scroll CSS class.
 */
"use client";

import { HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

import MotionWrapper from "./MotionWrapper";
import { slideInLeft } from "./variants";

interface SlideInLeftProps extends Omit<HTMLMotionProps<"div">, "variants"> {
  children: ReactNode;
  className?: string;
  delay?: number;
  viewport?: {
    once?: boolean;
    margin?: string;
    amount?: number | "some" | "all";
  };
}

export default function SlideInLeft({
  children,
  className = "",
  delay = 0,
  viewport,
  ...props
}: SlideInLeftProps) {
  return (
    <MotionWrapper
      variants={slideInLeft}
      className={className}
      delay={delay}
      viewport={viewport}
      {...props}
    >
      {children}
    </MotionWrapper>
  );
}
