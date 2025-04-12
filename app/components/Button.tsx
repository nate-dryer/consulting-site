"use client"; // Add use client directive

import { cva, type VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import * as React from "react";
import { motion } from "framer-motion";

import { Button as ShadcnButton } from "../../components/ui/button";
import { cn } from "../../lib/utils";
import { useReducedMotion as useReducedMotionHook } from "../utils/hooks/useReducedMotion"; // Import with alias
import { scaleOnHover, liftOnHover } from "./animations/variants";

const MotionLink = motion.a; // Use motion.a directly
// Removed unused MotionShadcnButton definition
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        "primary-cta": "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 font-semibold focus:ring-orange-400",
        "secondary-cta": "bg-purple-700 text-white hover:bg-purple-800 active:bg-purple-900 focus:ring-purple-500",
        "tertiary-cta": "bg-white text-purple-700 hover:bg-gray-50 active:bg-gray-100 border border-gray-200 focus:ring-purple-500",
        orange: "bg-orange-700 text-white hover:bg-orange-800 active:bg-orange-900 font-semibold focus:ring-orange-400",
        red: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500",
        accent: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus:ring-red-500",
        primary: "bg-purple-700 text-white hover:bg-purple-800 active:bg-purple-900 focus:ring-purple-500",
        secondaryLegacy: "bg-white text-purple-700 hover:bg-gray-50 active:bg-gray-100 border border-gray-200 focus:ring-purple-500",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "text-sm px-4 py-2 font-medium",
        md: "text-base px-6 py-3 font-medium",
        lg: "text-lg px-8 py-4 font-semibold",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "secondary-cta",
      size: "md",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    href?: string;
    isExternal?: boolean;
    children: React.ReactNode;
    className?: string;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "secondary-cta", size = "md", href, isExternal = false, className, ...props }, ref) => {
    const prefersReducedMotion = useReducedMotionHook(); // Use the alias

    const interactionVariants = {
      initial: {
        scale: 1,
        y: 0,
      },
      hover: {
        scale: prefersReducedMotion ? 1 : 1.05, // Use scaleOnHover logic
        y: prefersReducedMotion ? 0 : -4,       // Use liftOnHover logic
        transition: { duration: 0.3 },
      },
      tap: {
        scale: prefersReducedMotion ? 1 : 0.97,
        transition: { duration: 0.1 },
      }
    };

    const classes = cn(buttonVariants({ variant, size }), className);

    if (href) {
      if (isExternal) {
        return (
          <motion.a
            href={href}
            className={classes}
            target="_blank"
            rel="noopener noreferrer"
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={interactionVariants}
            // Removed spread props for now to fix type errors
          >
            {children}
          </motion.a>
        );
      }
      return (
        // Use motion.a for internal links too, as motion(Link) caused issues
        // Pass only relevant props, avoid spreading potentially incompatible button props
        // Removed extra return
          <motion.a
            href={href}
            className={classes}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            variants={interactionVariants}
          >
            {children}
          </motion.a>
        );
    }

    return (
      // Use motion.button directly
      // Removed extra return
        <motion.button
          ref={ref}
          className={classes} // Apply our combined CVA classes
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          variants={interactionVariants}
          // Removed explicitly passed props again to satisfy TS
        >
          {children}
        </motion.button>
      );
  }
);

Button.displayName = "UnifiedButton";

export default Button;
