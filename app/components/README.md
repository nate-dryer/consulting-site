# Components Directory

This directory contains reusable components that are used throughout the application. These components are designed to be modular, maintainable, and follow the utility-first approach with Tailwind CSS.

## Component Categories

### UI Components

- **[Button.tsx](./Button.tsx)**: Reusable button component with various variants and sizes. Includes Framer Motion hover (`scale`/`y`) and tap (`scale`) interactions, respecting `prefers-reduced-motion`.
- **[Card.tsx](./Card.tsx)**: Card components for consistent styling
- **[Typography.tsx](./Typography.tsx)**: Typography components for consistent text styling
- **[Layout.tsx](./Layout.tsx)**: Layout components for consistent spacing and structure
- **[Background.tsx](./Background.tsx)**: Background components for consistent styling
- **[WaveDivider.tsx](./WaveDivider.tsx)**: Wave divider component for section transitions
- **[Icon.tsx](./Icon.tsx)**: Standardized icon component for consistent iconography ([documentation](./README-Icon.md))

### Navigation Components

- **[Header.tsx](./Header.tsx)**: Main header component
- **[Footer.tsx](./Footer.tsx)**: Main footer component
- **[Navigation/](./Navigation/)**: Navigation-related components

### Form Components

- **[Form.tsx](./Form.tsx)**: Form components for consistent styling

### Animation Components

- **[animations/](./animations/)**: Animation components using Framer Motion

## Best Practices

1. **Use Tailwind Utility Classes Directly**:

   - Apply Tailwind utility classes directly in the component JSX
   - Avoid creating custom CSS classes unless absolutely necessary

2. **Respect Motion Preferences**:

   - Use the `useReducedMotion` hook to respect user's motion preferences
   - Conditionally apply animations based on the user's preferences

3. **Component Props**:

   - Use TypeScript for prop typing
   - Provide sensible defaults for props
   - Use destructuring to access props

4. **Component Structure**:

   - Keep components small and focused on a single responsibility
   - Use composition to build complex components
   - Extract reusable logic into custom hooks

5. **Documentation**:
   - Add JSDoc comments to components
   - Explain the purpose and usage of the component
   - Document props and their types

## Example Component Structure

```tsx
/**
 * Component Name
 *
 * Brief description of the component's purpose and usage.
 */
import React, { ReactNode } from "react";
import useReducedMotion from "../utils/hooks/useReducedMotion";

type ComponentProps = {
  /** Description of the children prop */
  children: ReactNode;
  /** Description of the className prop */
  className?: string;
  /** Description of the style prop */
  style?: React.CSSProperties;
  /** Description of any other props */
  otherProp?: string;
};

/**
 * Component
 *
 * Detailed description of the component.
 */
export function Component({
  children,
  className = "",
  style,
  otherProp = "default",
}: ComponentProps) {
  // Use hooks
  const prefersReducedMotion = useReducedMotion();

  // Define base classes
  const baseClasses = "bg-white p-4 rounded-lg";

  // Conditionally apply classes based on props or state
  const conditionalClasses = otherProp === "special" ? "text-purple-700" : "text-gray-800";

  // Combine all classes
  const combinedClasses = `${baseClasses} ${conditionalClasses} ${className}`;

  // Return the component
  return (
    <div className={combinedClasses} style={style}>
      {children}
    </div>
  );
}
```

### Animation Components Details

The animation components in the `animations/` directory use Framer Motion to provide smooth, accessible animations. These components respect the user's motion preferences and provide a consistent animation experience throughout the application.

### Available Animation Components

- **[FadeIn.tsx](./animations/FadeIn.tsx)**: Fade in animation
- **[SlideInLeft.tsx](./animations/SlideInLeft.tsx)**: Slide in from left animation
- **[SlideInRight.tsx](./animations/SlideInRight.tsx)**: Slide in from right animation
- **[StaggerContainer.tsx](./animations/StaggerContainer.tsx)**: Container for staggered animations
- **[MotionWrapper.tsx](./animations/MotionWrapper.tsx)**: Low-level component for custom animations

### Animation Variants

The animation variants are defined in `variants.ts` and provide consistent animation properties across the application.

## Section Components

The section components in the `sections/` directory represent the main content sections of the application. These components use the reusable UI components to build complex layouts.

Each section component should:

1. Use the Layout components for consistent spacing
2. Use the Typography components for consistent text styling
3. Use the Animation components for consistent animations
4. Use the Card components for consistent card styling
5. Use the Background components for consistent backgrounds

## Further Reading

For more information on the styling strategy, see the [styles/README.md](../styles/README.md) file.
