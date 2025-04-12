# Styling Strategy

## Overview

This project uses a Tailwind CSS-first approach to styling with a focus on component-based architecture. This document outlines the styling strategy and best practices to follow when developing components.

## Key Principles

1. **Prioritize Tailwind Utility Classes**: Use Tailwind utility classes directly in JSX whenever possible.
2. **Component-Based Architecture**: Use reusable React components with Tailwind utility classes for consistent styling.
3. **Respect Motion Preferences**: All animations respect the user's motion preferences for better accessibility.
4. **Framer Motion for Animations**: Use Framer Motion for complex animations instead of CSS transitions.

## Structure

- **Base Styles**: Defined in `@layer base` in `globals.css`
- **Legacy Component Styles**: Defined in `@layer components` in `globals.css` (being phased out)
- **Custom Utilities**: Defined in `@layer utilities` in `globals.css`
- **Design Constants**: Shared design tokens defined in `app/constants/design.ts`
- **Reusable Components**: Located in `app/components/` directory
- **Animation Components**: Located in `app/components/animations/` directory
- **Fonts**: Loaded from Typekit with optimized loading via `app/layout.tsx`

## Best Practices

1. **Use Tailwind Classes Directly**:

   ```jsx
   // Good
   <div className="bg-white p-4 rounded-lg shadow-md">

   // Avoid
   <div className="custom-card">
   ```

2. **Use Reusable Components**:

   - Use the reusable components in the `app/components/` directory
   - Example:

   ```jsx
   // Good
   <Card>Content</Card>

   // Avoid
   <div className="card">Content</div>
   ```

3. **Use Framer Motion for Animations**:

   - Use the animation components in the `app/components/animations/` directory
   - Example:

   ```jsx
   // Good
   <FadeIn>
     <p>This content will fade in when scrolled into view</p>
   </FadeIn>

   // Avoid
   <div className="fade-in-on-scroll">
     <p>This content will fade in when scrolled into view</p>
   </div>
   ```

4. **Respect Motion Preferences**:

   - Use the `useReducedMotion` hook to respect user's motion preferences
   - Example:

   ```jsx
   const prefersReducedMotion = useReducedMotion();

   // Conditionally apply animations
   const animationClass = prefersReducedMotion ? "" : "animate-fade-in";
   ```

5. **Responsive Design**:

   - Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, etc.)
   - Example:

     ```jsx
     <div className="text-base sm:text-lg md:text-xl">
     ```

6. **Theme Consistency**:

   - Use CSS variables defined in `tailwind.config.js` for consistent theming
   - Example:

     ```jsx
     <div className="bg-[var(--primary-light)]">
     ```

## Button Hierarchy

The project uses a standardized button hierarchy for consistent call-to-action (CTA) styling:

1. **Primary CTA** (`btn-primary-cta`, `variant="primary-cta"`):

   - Main call-to-action buttons that represent the primary action on a page
   - Orange background with white text
   - Used for: "Get Started", "Reserve Your Place", main conversion actions

2. **Secondary CTA** (`btn-secondary-cta`, `variant="secondary-cta"`):

   - Alternative call-to-action buttons for important but secondary actions
   - Purple background with white text
   - Used for: "Learn More", "Subscribe", "Contact Us"

3. **Tertiary CTA** (`btn-tertiary-cta`, `variant="tertiary-cta"`):
   - Less important call-to-action buttons
   - White background with purple text and light border
   - Used for: "Cancel", "Back", "View Details"

### Usage Example

```jsx
// Primary CTA (main action)
<Button variant="primary-cta" size="lg">Get Started</Button>

// Secondary CTA (important but not main action)
<Button variant="secondary-cta">Learn More</Button>

// Tertiary CTA (less important action)
<Button variant="tertiary-cta" size="sm">View Details</Button>
```

## CSS Variables

The project uses CSS variables for consistent theming. These are defined in the `:root` selector in `tailwind.config.js`:

- `--primary`: Primary color (purple)
- `--secondary`: Secondary color (white)
- `--accent`: Accent color (red)
- `--orange`: Orange color
- `--transition-fast`: Fast transition duration
- `--transition-default`: Default transition duration
- `--transition-slow`: Slow transition duration

## Animation Components

The project uses Framer Motion for animations through reusable components:

- `<FadeIn>`: Fade in element when scrolled into view
- `<SlideInLeft>`: Slide in from left when scrolled into view
- `<SlideInRight>`: Slide in from right when scrolled into view
- `<StaggerContainer>`: Container that staggers the animations of its children
- `<MotionWrapper>`: Low-level component for custom animations

### Animation Variants

Predefined animation variants are available in `app/components/animations/variants.ts`:

- `fadeIn`: Fade in from bottom
- `slideInLeft`: Slide in from left
- `slideInRight`: Slide in from right
- `staggerContainer`: Stagger children animations
- `scaleOnHover`: Scale up on hover
- `liftOnHover`: Lift up on hover

### Example Usage

```jsx
// Basic fade in animation
<FadeIn>
  <p>This content will fade in when scrolled into view</p>
</FadeIn>

// Animation with delay
<FadeIn delay={200}>
  <p>This content will fade in with a delay</p>
</FadeIn>

// Staggered animations
<StaggerContainer>
  <FadeIn>First item</FadeIn>
  <FadeIn>Second item</FadeIn>
  <FadeIn>Third item</FadeIn>
</StaggerContainer>
```

## Card Components

The project includes several card components for consistent styling:

- `<Card>`: Basic card component with hover effects
- `<FeatureCard>`: Card component for feature highlights
- `<LinkCard>`: Card component that acts as a link
- `<MotionCard>`: Card component with Framer Motion animations
- `<HoverLiftShadow>`: Component that adds hover lift and shadow effects

### Card Styling Standards

All card components follow these styling standards:

- **Border Radius**: `rounded-2xl` for consistent rounded corners
- **Shadow**: `shadow-md` for default state, `hover:shadow-lg` for hover state
- **Padding**: `p-6 sm:p-8` for consistent internal spacing
- **Spacing**: `space-y-4` for consistent vertical spacing between elements
- **Border**: `border border-gray-100` for subtle definition
- **Background**: `bg-white` for consistent background color
- **Hover Animation**: `transition-all duration-300 hover:-translate-y-1` for subtle lift effect

### Card Typography Standards

- **Card Titles**: `text-xl font-semibold leading-snug` with appropriate color
- **Card Body Text**: `text-base text-gray-700 leading-relaxed`
- **Card Subtitles**: `text-base text-gray-700 font-medium`

### Card Example Usage

```jsx
// Basic card
<Card>
  <h3 className="text-xl font-semibold leading-snug text-gray-800">Card Title</h3>
  <p className="text-base text-gray-700 leading-relaxed">Card content</p>
</Card>

// Feature card
<FeatureCard>
  <Image src="/icon.svg" alt="Feature" width={80} height={80} className="object-contain" />
  <h3 className="text-xl font-semibold leading-snug text-gray-800">Feature Title</h3>
  <p className="text-base text-gray-700 leading-relaxed">Feature description</p>
</FeatureCard>

// Link card
<LinkCard href="/page">
  <h3 className="text-xl font-semibold leading-snug text-gray-800">Link Title</h3>
  <p className="text-base text-gray-700 leading-relaxed">Click to navigate</p>
</LinkCard>

// Motion card with Framer Motion animations
<MotionCard>
  <h3 className="text-xl font-semibold leading-snug text-gray-800">Animated Card</h3>
  <p className="text-base text-gray-700 leading-relaxed">This card has smooth animations</p>
</MotionCard>
```

## Layout Components

The project includes several layout components for consistent spacing and structure:

- `<Section>`: Section component with consistent vertical padding
- `<Container>`: Container component with consistent horizontal padding
- `<SectionContainer>`: Combined Section and Container
- `<SectionHeader>`: Header component for sections

### Layout Example Usage

```jsx
<Section>
  <Container>
    <SectionHeader>
      <h2>Section Title</h2>
      <p>Section description</p>
    </SectionHeader>
    <div>Section content</div>
  </Container>
</Section>
```

### Section Spacing Standards

All sections follow these spacing standards:

- **Section Padding**: `py-16 sm:py-20 md:py-24 lg:py-28` for consistent vertical spacing
- **Container Max Width**: `max-w-7xl mx-auto` for consistent horizontal alignment
- **Section Header Spacing**:
  - Title to description: `mb-4 sm:mb-6 md:mb-8`
  - Description to content: `mb-8 sm:mb-12 md:mb-16`
- **Card Spacing**:
  - Between cards: `gap-6 md:gap-8 lg:gap-10`
  - Within cards: `space-y-4`
  - Card padding: `p-6 sm:p-8`

These standards are defined in the design constants file (`app/constants/design.ts`) and used consistently across all components.

## Typography Components

The project includes several typography components for consistent text styling:

- `<HeadingXL>`: Extra large heading (text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal)
- `<HeadingLG>`: Large heading (text-3xl sm:text-4xl md:text-5xl font-normal)
- `<HeadingMD>`: Medium heading (text-xl sm:text-2xl font-semibold)
- `<SectionTitle>`: Section title (text-3xl md:text-4xl font-bold)
- `<SectionSubtitle>`: Section subtitle (text-xl font-medium)
- `<SectionDescription>`: Section description (text-base text-gray-700 leading-relaxed)

### Typography Standards

All components follow these typography standards:

- **Card Titles**: `text-xl font-semibold leading-snug` with appropriate color
- **Card Body Text**: `text-base text-gray-700 leading-relaxed`
- **Section Titles**: `text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] tracking-tight`
- **Section Descriptions**: `text-base text-gray-700 leading-relaxed` (or `text-white` on dark backgrounds)

These standards are defined in the design constants file (`app/constants/design.ts`) and used consistently across all components.

### Typography Example Usage

```jsx
<HeadingXL>Page Title</HeadingXL>
<HeadingLG>Section Title</HeadingLG>
<HeadingMD>Subsection Title</HeadingMD>
<SectionTitle>Another Section</SectionTitle>
<SectionDescription>This section describes something important.</SectionDescription>
```

### Direct HTML Usage

When using direct HTML elements, follow these standards:

```jsx
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.15] tracking-tight">Page Title</h1>
<h2 className="text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] tracking-tight">Section Title</h2>
<h3 className="text-xl font-semibold leading-snug">Card or Subsection Title</h3>
<p className="text-base text-gray-700 leading-relaxed">Body text with consistent styling.</p>
```

## Background Components

The project includes several background components for consistent styling:

- `<PrimaryGradient>`: Primary gradient background
- `<PrimaryLight>`: Light primary color background
- `<PrimaryDark>`: Dark primary color background
- `<Decorative>`: Decorative background
- `<WaveConnector>`: Wave connector for the top of a section
- `<WaveConnectorBottom>`: Wave connector for the bottom of a section

### Background Example Usage

```jsx
<PrimaryGradient>
  <Container>
    <h2>Section with gradient background</h2>
  </Container>
</PrimaryGradient>
```

## Fonts

The Fieldworks font is loaded from Typekit and applied globally through:

1. The `font-fieldworks` class on the body element in `app/layout.tsx`
2. The `fontFamily` configuration in `tailwind.config.js`
