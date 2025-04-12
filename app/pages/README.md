# Optimized Page Components

This directory contains optimized page components that use code splitting and dynamic imports for better performance.

## Optimization Techniques

### 1. Dynamic Imports

The page components in this directory use dynamic imports to split the code into smaller chunks that can be loaded on demand. This improves the initial load time by only loading the components that are needed for the current page.

```tsx
// Example of dynamic import for a section component
const HeroSection = dynamicSection(() => import("../components/sections/HeroSection"));
```

### 2. Section-Based Code Splitting

The page components are structured to load sections dynamically, with the most important sections (like the hero section) loaded first and less critical sections loaded later.

```tsx
// Example of section-based code splitting
export default function OptimizedHomePage() {
  return (
    <>
      {/* Hero section is loaded first */}
      <HeroSection />

      {/* Other sections are loaded as needed */}
      <OtherSection />

      {/* CTA sections are loaded last */}
      <CtaSection />
    </>
  );
}
```

### 3. Optimized Loading States

The dynamic imports use optimized loading states to provide a smooth user experience while the components are loading.

```tsx
// Example of optimized loading state
const HeroSection = dynamicImport(() => import("../components/sections/HeroSection"), {
  loading: CustomLoadingComponent,
});
```

## Usage

To use an optimized page component, import it in your route file:

```tsx
// app/route.tsx
import OptimizedHomePage from "./pages/optimized-home";

export default function HomePage() {
  return <OptimizedHomePage />;
}
```

## Performance Benefits

- **Reduced Initial Bundle Size**: Only the code needed for the initial view is loaded first.
- **Faster Time to Interactive**: The page becomes interactive faster because less JavaScript needs to be parsed and executed.
- **Improved Core Web Vitals**: Smaller bundles lead to better Largest Contentful Paint (LCP) and Time to Interactive (TTI) metrics.
- **Better User Experience**: The page loads progressively, with the most important content appearing first.

## Analyzing Bundle Size

To analyze the bundle size and identify further optimization opportunities, run:

```bash
npm run analyze
```

This will generate a report showing the size of each chunk and the dependencies included in each chunk.
