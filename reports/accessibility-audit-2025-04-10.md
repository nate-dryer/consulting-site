# Accessibility Audit Report

Date: 2025-04-10

## Summary

- **Total Pages Tested:** 2
- **Total Violations:** 2
- **Unique Violation Types:** 1

## Home Page

Found 1 accessibility violations:

### 1. color-contrast: Elements must meet minimum color contrast ratio thresholds

**Impact:** serious

**Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds

**WCAG Criteria:** wcag2aa, wcag143

**Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright

**Affected Elements:**

1. `<a class="font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline hover:no-underline bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 font-semibold focus:ring-orange-400 text-base px-6 py-3 font-medium px-6 py-2.5 font-semibold rounded-full" href="https://calendly.com/aivantage-scheduling/partnership-follow-up">`
   - **Failure Summary:** Fix any of the following:
     Element has insufficient color contrast of 2.8 (foreground color: #ffffff, background color: #f97316, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1
   - **Target:** [".py-2\\.5"]

2. `<a class="font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline hover:no-underline bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 font-semibold focus:ring-orange-400 text-base px-6 py-3 font-medium py-3 px-6 font-medium rounded-r-full rounded-l-none border-l-0" href="https://calendly.com/aivantage-scheduling/partnership-follow-up">`
   - **Failure Summary:** Fix any of the following:
     Element has insufficient color contrast of 2.8 (foreground color: #ffffff, background color: #f97316, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1
   - **Target:** [".rounded-r-full"]

## Use Cases Page

Found 1 accessibility violations:

### 1. color-contrast: Elements must meet minimum color contrast ratio thresholds

**Impact:** serious

**Description:** Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds

**WCAG Criteria:** wcag2aa, wcag143

**Help URL:** https://dequeuniversity.com/rules/axe/4.10/color-contrast?application=playwright

**Affected Elements:**

1. `<a class="font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline hover:no-underline bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 font-semibold focus:ring-orange-400 text-base px-6 py-3 font-medium px-6 py-2.5 font-semibold rounded-full" href="https://calendly.com/aivantage-scheduling/partnership-follow-up">`
   - **Failure Summary:** Fix any of the following:
     Element has insufficient color contrast of 2.8 (foreground color: #ffffff, background color: #f97316, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1
   - **Target:** [".py-2\\.5"]

## Recommendations

### High Priority

- Fix all critical and serious violations that affect keyboard navigation
- Ensure all images have appropriate alt text
- Fix form accessibility issues

### Medium Priority

- Address color contrast issues
- Improve focus indicators
- Fix ARIA attribute issues

### Low Priority

- Optimize heading hierarchy
- Add landmark regions
- Enhance semantic HTML

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [Next.js Accessibility](https://nextjs.org/docs/advanced-features/accessibility)
