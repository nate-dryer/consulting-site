# Animation Components

This directory contains reusable animation components that leverage Framer Motion to create smooth, performant animations throughout the application.

## Overview

The animation system provides several ways to add animations to your components:

1. **Basic Animation Components** - Simple components like `FadeIn`, `SlideInLeft`, and `SlideInRight` that animate elements when they enter the viewport
2. **Scroll-Based Animations** - Components that animate based on scroll position, including entering and exiting animations
3. **Performance-Optimized Components** - Enhanced versions that adapt to device capabilities and user preferences

## Components

### Basic Animation Components

- `FadeIn` - Fades in elements when they enter the viewport
- `SlideInLeft` - Slides elements in from the left when they enter the viewport
- `SlideInRight` - Slides elements in from the right when they enter the viewport
- `StaggerContainer` - Container that staggers the animations of its children

### Scroll-Based Animation Components

- `ScrollAnimatedCard` - Animates elements based on scroll position (original implementation)
- `EnhancedScrollAnimatedCard` - Improved version with better performance and continuous animations

### Utility Components

- `MotionWrapper` - Base component that all animation components use internally
- `ScrollAnimationsInit` - Initializes Framer Motion's animation features with lazy loading

## Hooks

The animation system includes several custom hooks:

- `useReducedMotion` - Detects if the user prefers reduced motion
- `useScrollAnimation` - Provides motion values for scroll-based animations (original implementation)
- `useEnhancedScrollAnimation` - Improved version with better performance and device adaptation

## Usage

### Basic Animation Example

```tsx
import FadeIn from "@/app/components/animations/FadeIn";

export default function MyComponent() {
  return (
    <FadeIn>
      <p>This content will fade in when it enters the viewport</p>
    </FadeIn>
  );
}
```

### Scroll-Based Animation Example

```tsx
import EnhancedScrollAnimatedCard from "@/app/components/animations/EnhancedScrollAnimatedCard";

export default function MyComponent() {
  return (
    <EnhancedScrollAnimatedCard 
      direction="left" 
      intensity="medium"
      className="my-4"
    >
      <div className="p-4 bg-white rounded shadow">
        <h2>This card will animate as you scroll</h2>
        <p>It will slide in from the left when entering the viewport and slide out when leaving</p>
      </div>
    </EnhancedScrollAnimatedCard>
  );
}
```

## Configuration

### Animation Variants

Animation variants are defined in `variants.ts` and include:

- `fadeIn` - Fade in animation
- `slideInLeft` - Slide in from left animation
- `slideInRight` - Slide in from right animation
- `staggerContainer` - Staggered children animation
- `scaleOnHover` - Scale animation for hover effects
- `liftOnHover` - Lift animation for hover effects

### EnhancedScrollAnimatedCard Props

The `EnhancedScrollAnimatedCard` component accepts the following props:

- `direction` - The direction from which the element should animate ("left" or "right")
- `intensity` - The intensity of the animation ("low", "medium", or "high")
- `performanceMode` - Whether to enable performance mode for lower-end devices
- `className` - Additional CSS classes to apply to the component
- All other props are passed to the underlying `motion.div` component

## Performance Considerations

The animation system includes several performance optimizations:

1. **Reduced Motion Support** - All animations respect the user's preference for reduced motion
2. **Device Capability Detection** - The `useEnhancedScrollAnimation` hook detects device capabilities and adjusts animations accordingly
3. **Memoization** - Components and hooks use memoization to reduce unnecessary re-renders
4. **Will-Change Hint** - The `will-change` CSS property is used to hint to the browser which properties will change
5. **Lazy Loading** - Framer Motion features are lazy-loaded using `LazyMotion`

## Accessibility

All animation components respect the user's preference for reduced motion. If the user has enabled the "reduce motion" setting in their operating system, animations will be disabled or simplified.

## Implementation Notes

- The `once: false` setting in `MotionWrapper` allows animations to trigger again when elements leave and re-enter the viewport
- The `exit` animation state is used to animate elements when they leave the viewport
- The `useEnhancedScrollAnimation` hook provides a more flexible and performant way to create scroll-based animations
