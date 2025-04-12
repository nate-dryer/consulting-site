# Section Component Spacing Standard

## Purpose

This document defines the **standardized vertical spacing** for all section components in the project to ensure a cohesive, pixel-perfect visual flow across the site. All contributors should follow these guidelines when creating or updating section components.

---

## Spacing Pattern

- **Section Header** (`HeadingLG`, `HeadingXL`, or equivalent):
  - **Class:** `mb-3 sm:mb-4 md:mb-5`
  - **Usage:** Always apply to the main heading of a section.

- **Section Subtitle** (`SectionDescription`, `SectionSubtitle`, or equivalent):
  - **Class:** `mb-8 sm:mb-10 md:mb-12`
  - **Usage:** Always apply to the subtitle or description directly below the header.

- **Section Content/Component Container:**
  - **Class:** _No extra top margin_ (default to 0 unless a unique design requires otherwise).

---

## Example

```jsx
<HeadingLG className="mb-3 sm:mb-4 md:mb-5 ...">Section Title</HeadingLG>
<SectionDescription className="mb-8 sm:mb-10 md:mb-12 ...">Subtitle</SectionDescription>
<div className="...">Section Content</div>
```

---

## Rationale

- **Consistency:** Ensures all sections have uniform vertical rhythm and spacing.
- **Responsiveness:** Uses Tailwind theme spacing tokens for mobile, tablet, and desktop breakpoints.
- **Maintainability:** Reduces ad-hoc or custom margin classes, making future updates easier.

---

## Component Usage

- **Card Components:** Sections like `AiAutomationSection`, `ProcessStepsSection`, `ResourcesSection`, and `WhyChooseSection` have been refactored to use the shared `MotionCard` component from `app/components/Card.tsx` for consistent styling and hover animations.
- **Entry Animations:** These sections utilize Framer Motion components (`FadeIn`, `SlideInLeft`, `SlideInRight`, `StaggerContainer`) for scroll-triggered entry animations.


## Application

- All section components in `app/components/sections/` now follow this standard.
- If a section does not have a subtitle, only the header margin is required.
- If a new section is added, apply these classes to the header and subtitle.

---

## Design Token Reference

- Spacing values are defined in `tailwind.config.mjs` and should not be overridden with arbitrary values.

---

## Last Updated

April 11, 2025

---

## Related Files

- `tailwind.config.mjs`
- `src/styles/global.css`
- All section components in this directory