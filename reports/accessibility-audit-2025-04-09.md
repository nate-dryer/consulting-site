# Accessibility Audit Report

Date: 2025-04-09

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

2. `<div class="text-purple-700 mb-2">AI &amp; Automation</div>`
   - **Failure Summary:** Fix any of the following:
     Element has insufficient color contrast of 1.72 (foreground color: #d1bcf3, background color: #ffffff, font size: 54.0pt (72px), font weight: normal). Expected contrast ratio of 3:1
   - **Target:** [".mb-2.text-purple-700"]

3. `<div class="mb-2">Process</div>`
   - **Failure Summary:** Fix any of the following:
     Element has insufficient color contrast of 2.01 (foreground color: #b4b7bb, background color: #ffffff, font size: 54.0pt (72px), font weight: normal). Expected contrast ratio of 3:1
   - **Target:** [".mb-2:nth-child(2)"]

4. `<div>Consultants</div>`
   - **Failure Summary:** Fix any of the following:
     Element has insufficient color contrast of 2.01 (foreground color: #b4b7bb, background color: #ffffff, font size: 54.0pt (72px), font weight: normal). Expected contrast ratio of 3:1
   - **Target:** ["h1 > div:nth-child(3)"]

5. `<p class="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-normal mb-4 md:mb-6 max-w-xl mx-auto md:mx-0 text-base">`
   - **Failure Summary:** Fix any of the following:
     Element has insufficient color contrast of 1.64 (foreground color: #c7cace, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1
   - **Target:** [".max-w-xl.md\\:mx-0.md\\:mb-10:nth-child(2)"]

6. `<p class="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed font-normal mb-6 md:mb-8 lg:mb-10 max-w-xl mx-auto md:mx-0 text-base">To learn how you can benefit from AI &amp; automation consultancy, simply request a free Process Health Check.</p>`
   - **Failure Summary:** Fix any of the following:
     Element has insufficient color contrast of 1.64 (foreground color: #c7cace, background color: #ffffff, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1
   - **Target:** [".lg\\:mb-10.max-w-xl.md\\:mx-0"]

7. `<a class="font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline hover:no-underline bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 font-semibold focus:ring-orange-400 text-lg px-8 py-4 font-semibold text-base sm:text-lg px-8 py-4" href="https://calendly.com/aivantage-scheduling/partnership-follow-up">`
   - **Failure Summary:** Fix any of the following:
     Element has insufficient color contrast of 1.38 (foreground color: #ffffff, background color: #fdd3b6, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1
   - **Target:** [".hover\\:shadow-lg.hover\\:-translate-y-1.transition-all > .px-8.py-4.bg-orange-500"]

8. `<a class="font-medium rounded-full transition-all duration-300 inline-flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 no-underline hover:no-underline bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 font-semibold focus:ring-orange-400 text-base px-6 py-3 font-medium py-3 px-6 font-medium rounded-r-full rounded-l-none border-l-0" href="https://calendly.com/aivantage-scheduling/partnership-follow-up">`
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
