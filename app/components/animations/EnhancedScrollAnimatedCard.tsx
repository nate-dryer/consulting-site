/**
 * EnhancedScrollAnimatedCard Component
 *
 * A component that animates its children based on scroll position with enhanced performance.
 * Elements slide in when scrolled into view and slide out when scrolled away.
 * Uses the enhanced scroll animation hook for better performance and device adaptation.
 */
"use client";

import { motion, HTMLMotionProps, useReducedMotion as framerUseReducedMotion } from "framer-motion";
import { ReactNode, memo, useEffect } from "react";

import useEnhancedScrollAnimation, { ScrollAnimationOptions } from "../../utils/hooks/useEnhancedScrollAnimation";
import { useReducedMotion } from "../../utils/hooks/useReducedMotion";

interface EnhancedScrollAnimatedCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  children: ReactNode;
  className?: string;
  direction: "left" | "right";
  intensity?: "low" | "medium" | "high";
  performanceMode?: boolean;
}

const EnhancedScrollAnimatedCard = memo(function EnhancedScrollAnimatedCard({
  children,
  className = "",
  direction,
  intensity = "medium",
  performanceMode = false,
  ...props
}: EnhancedScrollAnimatedCardProps) {
  const prefersReducedMotion = useReducedMotion();
  
  // Use the enhanced scroll animation hook
  const { elementRef, x, opacity, scale, isLowEndDevice } = useEnhancedScrollAnimation({
    direction,
    intensity,
    performanceMode,
  });

  // If user prefers reduced motion, skip the animation
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // Also check Framer Motion's built-in reduced motion hook for better compatibility
  const shouldReduceMotion = framerUseReducedMotion();
  
  // Force hardware acceleration for smoother animations
  useEffect(() => {
    if (elementRef.current) {
      // Apply hardware acceleration
      elementRef.current.style.transform = 'translateZ(0)';
      elementRef.current.style.backfaceVisibility = 'hidden';
    }
  }, []);

  return (
    <motion.div
      ref={elementRef}
      className={`${className} ${isLowEndDevice ? 'low-end-device' : ''}`}
      style={{
        x,
        opacity,
        scale,
        // Add will-change hint for better performance
        willChange: "transform, opacity",
        // Force hardware acceleration
        WebkitBackfaceVisibility: "hidden",
        WebkitPerspective: "1000",
        WebkitTransform: "translate3d(0,0,0)",
        WebkitTransformStyle: "preserve-3d",
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
});

// Add display name for better debugging
EnhancedScrollAnimatedCard.displayName = "EnhancedScrollAnimatedCard";

export default EnhancedScrollAnimatedCard;
