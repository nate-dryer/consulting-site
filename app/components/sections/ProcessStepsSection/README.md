# Process Steps Section

This directory contains the implementation of the "4-Steps to AI & Automation Success" section, which showcases AIvantage's process in a clear, visually appealing format. The section has been refactored to match the target design and ensure consistency with the "Harness the Power of AI & Automation" section.

## Component Structure

The section consists of:

1. **ProcessStepsSection**: The main container component that renders the section header and step cards
2. **StepCard**: A reusable card component that displays a single process step

## Card Structure

Each step card follows this simplified structure:

```tsx
<AnimationWrapper>
  {" "}
  // SlideInLeft or SlideInRight based on step number
  {/* Step label integrated into heading */}
  <h3>
    Step {number} – {title}
  </h3>
  {/* Body text */}
  <p>{description}</p>
</AnimationWrapper>
```

## Styling Details

- **Card Container**: `${colors.bgColor} ${CARD_RADIUS} ${SHADOW_DEFAULT} p-6 space-y-4 border border-gray-100 max-w-md w-full mx-auto`
- **Typography**:
  - Heading: `text-xl font-semibold ${colors.titleColor} leading-snug text-center break-words`
  - Body text: `text-base text-gray-700 leading-relaxed text-center`
- **Images**: Removed to simplify the design and focus on the step content
- **Color Theme**: Each step has a unique color theme:
  - Step 1: Light purple background (`bg-purple-100`) with purple text (`text-purple-700`)
  - Step 2: Light blue background (`bg-blue-100`) with blue text (`text-blue-700`)
  - Step 3: Light indigo background (`bg-indigo-100`) with indigo text (`text-indigo-700`)
  - Step 4: Light violet background (`bg-violet-100`) with violet text (`text-violet-700`)
- **Spacing**: Consistent `gap-10` between cards, matching the "Harness the Power" section
- **Card Layout**: Consistent `space-y-4` for internal spacing between elements

## Framer Motion Animation

The section uses Framer Motion for scroll-triggered animations with a parallax-like effect:

- **Animation Pattern**: Cards slide in from alternating directions as the user scrolls
  - Odd-numbered steps (1, 3): Slide in from the left
  - Even-numbered steps (2, 4): Slide in from the right
- **Staggered Delays**: Each card has a progressively increasing delay
  - Step 1: 0s delay
  - Step 2: 0.1s delay
  - Step 3: 0.2s delay
  - Step 4: 0.3s delay
- **Viewport Trigger**: Animation starts when 10% of the card is visible, with a negative margin to ensure animations trigger only when scrolling down to the section
- **Animation Duration**: 0.6s with ease-out easing (0.4s on mobile)
- **Reduced Motion**: Respects user's reduced motion preferences
- **Parallax Effect**: The alternating directions create a dynamic, engaging visual flow as users scroll through the section

## Responsive Behavior

- **All Breakpoints**: Cards stack vertically in a single column with centered content
- **Container**: Max width of md (28rem) with auto margins for centering, creating a more focused layout
- **Card Spacing**: Uses `gap-10` for consistent vertical spacing between cards
- **Section Padding**: Uses `py-16 md:py-24` for consistent vertical spacing between sections

## Accessibility Considerations

- **Semantic Structure**: Uses proper heading hierarchy with `h3` for step titles
- **Color Contrast**: Ensures sufficient contrast between text and background
- **Simplified Structure**: Removed images to focus on the step content and reduce visual clutter
- **Motion Preferences**: Respects user's reduced motion settings

## Alignment with "Harness the Power" Section

The ProcessStepsSection has been carefully aligned with the "Harness the Power" section to ensure visual consistency:

- **Card Styling**: Same border radius, shadow depth, padding, and spacing
- **Typography**: Consistent font family, weight, size, and alignment
  - Card titles: `text-xl font-semibold leading-snug`
  - Card body text: `text-base text-gray-700 leading-relaxed`
- **Animation**: Similar animation patterns and timing
- **Spacing**: Consistent vertical rhythm and section padding
- **Container Width**: Same max-width and horizontal padding

## Typography Standards

All card components across the site follow these typography standards:

- **Card Titles**: `text-xl font-semibold leading-snug` with appropriate color
- **Card Body Text**: `text-base text-gray-700 leading-relaxed`
- **Section Titles**: `text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.2] tracking-tight`
- **Section Descriptions**: `text-base text-gray-700 leading-relaxed` (or `text-white` on dark backgrounds)

These standards are defined in the design constants file and used consistently across all components.
