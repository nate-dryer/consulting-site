# Fieldworks Sans Serif Font

## Font Loading via Optimized Typekit Integration

The Fieldworks Sans Serif font is loaded via Adobe Typekit using an optimized loading approach. This provides several benefits:

- Reduced layout shift (improves CLS) through proper font fallbacks
- Optimized loading (improves LCP) using the `media="print" onLoad="this.media='all'"` technique
- Consistent font application through CSS variables

The font is configured in `app/fonts.ts` and applied in the root layout component (`app/layout.tsx`).

## Font Usage

The Fieldworks Sans Serif font is configured as the primary font for the entire website. It is applied to:

- All text elements
- Headings and titles
- Buttons and form elements
- Navigation items
- All other UI components

## Font Configuration

The font is configured in:

1. `/app/fonts.ts` - Font configuration constants
2. `/app/font-variables.css` - CSS variable definitions
3. `/app/globals.css` - Global font application
4. `/tailwind.config.js` - Tailwind CSS font family configuration using CSS variables
5. `/app/layout.tsx` - Optimized font loading

## Fallback Configuration

The website has been configured to use system fonts as fallbacks when the Fieldworks font is not available. This ensures the website still looks good even if there are issues loading the Typekit fonts.

The fallback fonts are:

- Helvetica Neue
- Helvetica
- Arial
- System UI fonts
