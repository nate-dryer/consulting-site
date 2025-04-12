# Animation Components

This directory contains reusable animation components that use Framer Motion to provide smooth, accessible animations. These components respect the user's motion preferences and provide a consistent animation experience throughout the application.

## Available Components

### FadeIn

The `FadeIn` component fades in its children when they enter the viewport.

```tsx
import FadeIn from '../animations/FadeIn';

// Basic usage
<FadeIn>
  <p>This content will fade in when scrolled into view</p>
</FadeIn>

// With delay
<FadeIn delay={200}>
  <p>This content will fade in with a delay</p>
</FadeIn>

// With custom duration
<FadeIn duration={0.5}>
  <p>This content will fade in faster</p>
</FadeIn>

// With custom threshold
<FadeIn threshold={0.2}>
  <p>This content will fade in earlier</p>
</FadeIn>
```

### SlideInLeft

The `SlideInLeft` component slides in its children from the left when they enter the viewport.

```tsx
import SlideInLeft from '../animations/SlideInLeft';

// Basic usage
<SlideInLeft>
  <p>This content will slide in from the left when scrolled into view</p>
</SlideInLeft>

// With delay
<SlideInLeft delay={200}>
  <p>This content will slide in with a delay</p>
</SlideInLeft>
```

### SlideInRight

The `SlideInRight` component slides in its children from the right when they enter the viewport.

```tsx
import SlideInRight from '../animations/SlideInRight';

// Basic usage
<SlideInRight>
  <p>This content will slide in from the right when scrolled into view</p>
</SlideInRight>

// With delay
<SlideInRight delay={200}>
  <p>This content will slide in with a delay</p>
</SlideInRight>
```

### StaggerContainer

The `StaggerContainer` component staggers the animations of its children.

```tsx
import StaggerContainer from '../animations/StaggerContainer';
import FadeIn from '../animations/FadeIn';

// Basic usage
<StaggerContainer>
  <FadeIn>First item</FadeIn>
  <FadeIn>Second item</FadeIn>
  <FadeIn>Third item</FadeIn>
</StaggerContainer>

// With custom stagger delay
<StaggerContainer staggerDelay={0.1}>
  <FadeIn>First item</FadeIn>
  <FadeIn>Second item</FadeIn>
  <FadeIn>Third item</FadeIn>
</StaggerContainer>
```

### MotionWrapper

The `MotionWrapper` component is a low-level component for custom animations.

```tsx
import MotionWrapper from '../animations/MotionWrapper';
import { fadeIn } from '../animations/variants';

// Basic usage with predefined variant
<MotionWrapper variants={fadeIn}>
  <p>This content will use the fadeIn animation</p>
</MotionWrapper>

// With custom variants
<MotionWrapper
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>
  <p>This content will use custom animation properties</p>
</MotionWrapper>
```

## Animation Variants

The animation variants are defined in `variants.ts` and provide consistent animation properties across the application.

```tsx
import { fadeIn, slideInLeft, slideInRight, staggerContainer } from "../animations/variants";
import { motion } from "framer-motion";

// Using variants with motion components
<motion.div variants={fadeIn} initial="hidden" animate="visible">
  <p>This content will fade in</p>
</motion.div>;
```

## Accessibility

All animation components respect the user's motion preferences by using the `useReducedMotion` hook. If the user has enabled the "reduce motion" setting in their operating system, the animations will be disabled or simplified.

```tsx
import useReducedMotion from "../../utils/hooks/useReducedMotion";

function MyComponent() {
  const prefersReducedMotion = useReducedMotion();

  // Use prefersReducedMotion to conditionally apply animations
  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 0.5 },
      };

  return (
    <motion.div {...animationProps}>
      <p>This content respects the user's motion preferences</p>
    </motion.div>
  );
}
```

## Best Practices

1. **Always Use useReducedMotion**:

   - Always respect the user's motion preferences
   - Use the `useReducedMotion` hook to conditionally apply animations

2. **Keep Animations Subtle**:

   - Avoid excessive or distracting animations
   - Use animations to enhance the user experience, not distract from it

3. **Use Consistent Animation Properties**:

   - Use the predefined animation variants whenever possible
   - This ensures a consistent animation experience throughout the application

4. **Optimize Performance**:

   - Use the `will-change` CSS property sparingly
   - Use the `layout` prop for layout animations
   - Use the `layoutId` prop for shared element transitions

5. **Test on Low-End Devices**:
   - Ensure animations perform well on low-end devices
   - Consider disabling animations on low-end devices

## Further Reading

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Accessibility in Framer Motion](https://www.framer.com/motion/accessibility/)
- [Animation Best Practices](https://web.dev/animations-guide/)
- [Respecting User Preferences](https://web.dev/prefers-reduced-motion/)
