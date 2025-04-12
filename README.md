# AI Consulting Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses Adobe Typekit to load the Fieldworks sans-serif font family, which is applied consistently across all text elements on the site. The font is loaded using optimized techniques for improved performance and reduced layout shift.

## Performance Optimizations

This project includes several performance optimizations:

### Code Splitting

The project uses dynamic imports to split the code into smaller chunks that can be loaded on demand. This improves the initial load time by only loading the components that are needed for the current page.

```tsx
// Example of dynamic import
const Header = dynamicImport(() => import("./components/Header"), {
  ssr: true, // Header should be rendered on the server for SEO
});
```

### Optimized Loading States

The dynamic imports use optimized loading states to provide a smooth user experience while the components are loading.

### Bundle Analysis

The project includes tools for analyzing the bundle size and identifying optimization opportunities:

```bash
# Run the bundle analyzer
npm run analyze

# Run the bundle analysis script
npm run analyze:bundle
```

## Image Components

This project includes optimized image components to ensure consistent image usage across the site:

### OptimizedImage Component

A standardized wrapper around Next.js Image component that enforces best practices:

```jsx
<OptimizedImage
  src="/image.jpg"
  alt="Description of the image"
  width={500}
  height={300}
/>

// For decorative images
<OptimizedImage
  src="/decorative-image.jpg"
  decorative={true}
  width={500}
  height={300}
/>
```

### LazyImage Component

A wrapper around Next.js Image component that adds lazy loading with IntersectionObserver:

```jsx
<LazyImage
  src="/image.jpg"
  alt="Description of the image"
  width={500}
  height={300}
  threshold={0.1} // Percentage of the image visible before loading
  fadeInDuration={400} // Duration of fade-in animation in ms
  placeholderSrc="/placeholder.jpg" // Optional low-quality placeholder
/>
```

## Image Usage Guidelines

1. Always use `next/image` or one of the wrapper components instead of standard `<img>` tags
2. Always provide `width` and `height` props to prevent layout shifts
3. When using `fill` prop, always provide a `sizes` prop
4. Always provide meaningful `alt` text for informative images
5. Use `decorative={true}` or `alt=""` for decorative images

## Code Quality Tools

This project uses several tools to maintain code quality:

### ESLint

ESLint is configured with rules for:

- React best practices
- TypeScript type checking
- Accessibility (a11y) requirements
- Code formatting and style consistency
- Error prevention

The configuration is in `eslint.config.mjs` and follows the new flat config format.

### Prettier

Prettier is configured to maintain consistent code formatting across the project. The configuration is in `.prettierrc.js` with detailed comments explaining each option.

## Scripts

This project includes scripts to help maintain code quality:

```bash
# Run tests
npm test

# Run accessibility tests
npm run test:a11y

# Audit accessibility
npm run audit:a11y

# Fix common accessibility issues
npm run fix:a11y

# Audit image usage
npm run audit:images

# Fix common image issues
npm run fix:images

# Analyze bundle size
npm run analyze

# Lint code with ESLint
npm run lint

# Lint code with ESLint (strict mode, no warnings allowed)
npm run lint:strict

# Fix ESLint issues automatically
npm run lint:fix

# Check code formatting with Prettier
npm run format

# Fix code formatting with Prettier
npm run format:fix

# Fix both ESLint and Prettier issues
npm run fix
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
