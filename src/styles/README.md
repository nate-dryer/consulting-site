# FlooringAI Styles: Spacing & Layout Consistency

## Overview

This project enforces a **sitewide spacing and layout system** using Tailwind CSS with a custom theme scale. All margin, padding, and gap values must use tokens defined in `tailwind.config.js` for consistency and maintainability.

## Spacing Scale

Spacing tokens are defined in `tailwind.config.js` under `theme.extend.spacing`. The scale includes both numeric increments and semantic tokens for common use-cases.

### Numeric Scale (rem-based)

| Token | Value    | Use Case                |
|-------|----------|-------------------------|
| 0     | 0rem     | No space                |
| 0.5   | 0.125rem | Fine-tuning             |
| 1     | 0.25rem  | Small gaps              |
| 2     | 0.5rem   | ...                     |
| ...   | ...      | ...                     |
| 96    | 24rem    | Large sections          |

### Semantic Tokens

| Token                | Value   | Intended Use                                  |
|----------------------|---------|-----------------------------------------------|
| section-y            | 4rem    | Vertical padding for sections                 |
| section-y-sm         | 2rem    | Vertical padding (small screens)              |
| section-y-lg         | 6rem    | Vertical padding (large screens)              |
| container-x          | 1.5rem  | Horizontal padding for containers             |
| container-x-lg       | 3rem    | Horizontal padding (large screens)            |
| card-gap             | 2rem    | Gap between cards in grids                    |
| card-inner           | 1.5rem  | Internal card padding                         |
| heading-lg-bottom    | 2.5rem  | Margin-bottom for large headings (h1)         |
| heading-md-bottom    | 1.5rem  | Margin-bottom for medium headings (h2)        |
| heading-sm-bottom    | 1rem    | Margin-bottom for small headings (h3/h4)      |
| form-gap             | 1.25rem | Gap between form fields                       |
| input-padding        | 0.75rem | Input/textarea padding                        |
| btn-padding-x        | 1.25rem | Button horizontal padding                     |
| btn-padding-y        | 0.75rem | Button vertical padding                       |

## Usage Guidelines

- **All spacing utilities** (`mb-*`, `py-*`, `gap-*`, etc.) must use tokens from the theme scale.
- **Headings and paragraphs**: Use semantic tokens for margin-bottom (e.g., `mb-heading-lg-bottom` for h1).
- **Sections and containers**: Use `py-section-y`, `px-container-x`, etc.
- **Cards and grids**: Use `p-card-inner` for card padding, `gap-card-gap` for grid gaps.
- **Buttons**: Padding (`px-btn-padding-x`, `py-btn-padding-y`) should be applied within specific button components or variants, not globally.
- **Forms**: Use `p-input-padding` for input padding. Field spacing (`gap-*`) should be applied within specific form components.
- **No arbitrary values**: Do not use arbitrary pixel/rem values for spacing.

## Enforcement

- Spacing consistency is enforced via code review and linting.
- See `src/styles/global.css` for base element spacing.
- See `tailwind.config.js` for the full spacing scale.

## Accessibility & Responsiveness

- Responsive modifiers (`sm:`, `md:`, `lg:`) are used for adaptive spacing.
- All spacing tokens are designed to maintain vertical rhythm and accessibility.