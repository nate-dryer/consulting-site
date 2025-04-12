# Component Accessibility Checklist

This checklist provides specific accessibility improvements for each component in the codebase. Use this as a guide when fixing accessibility issues.

## Button Component

- [ ] **Accessible Name**: Ensure buttons have accessible names, especially when they only contain icons
- [ ] **Focus Visibility**: Enhance focus styles for better visibility
- [ ] **Touch Target Size**: Ensure buttons are at least 44x44px for touch targets
- [ ] **ARIA Attributes**: Add appropriate ARIA attributes for buttons with special behaviors
- [ ] **Keyboard Activation**: Ensure buttons can be activated with both Enter and Space keys

```jsx
// Example improvement
<button 
  className={buttonClasses} 
  aria-label={iconOnly ? "Menu" : undefined}
  {...props}
>
  {children}
</button>
```

## Form Component

- [ ] **Form Labels**: Ensure all form controls have visible labels or properly associated hidden labels
- [ ] **Error Messages**: Add accessible error messages that are announced to screen readers
- [ ] **Required Fields**: Clearly indicate required fields both visually and for screen readers
- [ ] **Form Validation**: Implement accessible form validation with clear error messages
- [ ] **Focus Management**: Ensure proper focus management during form submission

```jsx
// Example improvement
<div>
  <label htmlFor="email-input" className="block text-sm font-medium text-gray-700 mb-1">
    Email
  </label>
  <input
    type="email"
    id="email-input"
    placeholder={placeholder}
    className={inputClasses}
    required
    aria-required="true"
    aria-invalid={hasError}
    aria-describedby={hasError ? "email-error" : undefined}
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  {hasError && (
    <div id="email-error" className="text-red-500 text-sm mt-1" aria-live="polite">
      {errorMessage}
    </div>
  )}
</div>
```

## Header Component

- [ ] **Skip Link**: Add a skip link to bypass navigation
- [ ] **ARIA Landmarks**: Use appropriate ARIA landmarks for navigation
- [ ] **Mobile Menu**: Ensure mobile menu is accessible via keyboard
- [ ] **Dropdown Menus**: Make dropdown menus accessible with proper ARIA attributes
- [ ] **Active State**: Clearly indicate the active page in the navigation

```jsx
// Example skip link
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-white focus:z-50">
  Skip to main content
</a>
```

## LazyImage Component

- [ ] **Alt Text**: Enforce alt text requirements for all images
- [ ] **Loading State**: Add loading indicators for screen readers
- [ ] **Decorative Images**: Mark decorative images appropriately
- [ ] **Image Descriptions**: Provide detailed descriptions for complex images

```jsx
// Example improvement
<Image
  src={src}
  alt={alt || ""}
  width={width}
  height={height}
  className={imageClasses}
  onLoadingComplete={() => setIsLoaded(true)}
  aria-busy={!isLoaded}
  {...props}
/>
```

## WaveDivider Component

- [ ] **ARIA Hidden**: Add `aria-hidden="true"` to decorative SVGs
- [ ] **SVG Accessibility**: Add appropriate ARIA attributes to SVG elements
- [ ] **Color Contrast**: Ensure sufficient color contrast for any visible text
- [ ] **Reduced Motion**: Respect user's reduced motion preferences

```jsx
// Example improvement
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 100"
  className="w-full block"
  preserveAspectRatio="none"
  height={height}
  aria-hidden="true"
  role="presentation"
>
  {/* SVG content */}
</svg>
```

## Card Component

- [ ] **Keyboard Navigation**: Ensure cards are navigable via keyboard
- [ ] **Focus Management**: Manage focus properly for interactive cards
- [ ] **ARIA Roles**: Use appropriate ARIA roles for cards
- [ ] **Color Contrast**: Ensure sufficient color contrast for card content
- [ ] **Interactive Elements**: Make interactive elements within cards accessible

```jsx
// Example improvement for interactive card
<div
  className={`${baseClasses} ${hoverClasses} ${className}`}
  tabIndex={onClick ? 0 : undefined}
  role={onClick ? "button" : undefined}
  onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick() : undefined}
  onClick={onClick}
  style={style}
>
  {children}
</div>
```

## Footer Component

- [ ] **ARIA Landmarks**: Use appropriate ARIA landmarks
- [ ] **Link Groups**: Group related links with appropriate headings
- [ ] **Social Media Links**: Ensure social media links have accessible names
- [ ] **Form Accessibility**: Make newsletter signup forms accessible
- [ ] **Color Contrast**: Ensure sufficient color contrast for footer content

```jsx
// Example improvement
<footer className="bg-gray-900 text-white py-12" role="contentinfo">
  {/* Footer content */}
</footer>
```

## Animation Components

- [ ] **Reduced Motion**: Respect user's reduced motion preferences
- [ ] **Animation Duration**: Limit animation duration to avoid discomfort
- [ ] **Flashing Content**: Avoid content that flashes more than 3 times per second
- [ ] **Pause/Stop Controls**: Provide controls to pause or stop animations
- [ ] **Auto-Playing Content**: Avoid auto-playing content or provide controls

```jsx
// Example improvement
const prefersReducedMotion = useReducedMotion();

const animationProps = prefersReducedMotion
  ? { initial: "visible" } // Skip animation
  : { 
      initial: "hidden",
      animate: "visible",
      transition: { duration: 0.5 }
    };

return (
  <motion.div {...animationProps}>
    {children}
  </motion.div>
);
```

## General Improvements

- [ ] **Semantic HTML**: Use semantic HTML elements throughout the application
- [ ] **Heading Hierarchy**: Ensure proper heading hierarchy (h1, h2, h3, etc.)
- [ ] **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- [ ] **Focus Indicators**: Enhance focus indicators for better visibility
- [ ] **Color Contrast**: Ensure sufficient color contrast throughout the application
- [ ] **Text Resizing**: Ensure text can be resized up to 200% without loss of content
- [ ] **Responsive Design**: Ensure the application is usable at all viewport sizes
- [ ] **Screen Reader Announcements**: Use ARIA live regions for dynamic content
- [ ] **Form Accessibility**: Ensure all forms are accessible
- [ ] **Error Handling**: Provide accessible error messages

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [React Accessibility](https://reactjs.org/docs/accessibility.html)
- [Next.js Accessibility](https://nextjs.org/docs/advanced-features/accessibility)
