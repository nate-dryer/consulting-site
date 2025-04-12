# Icon Component

The Icon component provides a standardized way to use icons throughout the application. It ensures consistent styling, sizing, and accessibility.

## Features

- Consistent sizing across the application
- Standardized color palette that matches the design system
- Accessibility support with screen reader text
- Support for multiple icon libraries through react-icons
- TypeScript support with proper typing

## Usage

```jsx
import Icon from "../components/Icon";

// Basic usage
<Icon name="fa:FaReact" />

// With size and color
<Icon name="hi:HiCode" size="lg" color="primary" />

// With accessibility title (for screen readers)
<Icon name="io:IoCheckmarkCircle" size="md" color="accent" title="Success" />

// With click handler
<Icon name="ri:RiAlertLine" onClick={() => alert('Clicked!')} />

// With custom class
<Icon name="fa:FaArrowRight" className="ml-2" />
```

## Available Options

### Icon Libraries

The component supports the following icon libraries from react-icons:

- `fa:` - Font Awesome icons (e.g., `fa:FaReact`)
- `hi:` - Heroicons (e.g., `hi:HiCode`)
- `io:` - Ionicons (e.g., `io:IoCheckmarkCircle`)
- `ri:` - Remix Icons (e.g., `ri:RiAlertLine`)

### Sizes

The component provides standardized sizes:

- `xs` - 16px
- `sm` - 20px
- `md` - 24px (default)
- `lg` - 32px
- `xl` - 40px

You can also provide a custom number for a specific size.

### Colors

The component provides standardized colors that match the design system:

- `primary` - Purple (primary brand color)
- `secondary` - Dark gray
- `accent` - Orange (accent color)
- `light` - Light gray
- `white` - White
- `current` - Inherits color from parent (default)

## Accessibility

For icons that convey meaning (not just decorative), always provide a `title` prop:

```jsx
// Good - provides context for screen readers
<Icon name="fa:FaCheck" title="Completed" />

// Not recommended for meaningful icons - no context for screen readers
<Icon name="fa:FaCheck" />
```

For decorative icons, omit the `title` prop:

```jsx
// Good for decorative icons
<Icon name="fa:FaCircle" />
```

## Examples

### Button with Icon

```jsx
<Button variant="primary-cta">
  Get Started <Icon name="fa:FaArrowRight" className="ml-2" />
</Button>
```

### Alert with Icon

```jsx
<div className="flex items-center text-red-600">
  <Icon name="fa:FaExclamationTriangle" className="mr-2" />
  <span>Please correct the errors above</span>
</div>
```

### Interactive Icon

```jsx
<Icon
  name="fa:FaHeart"
  color={isLiked ? "accent" : "light"}
  onClick={toggleLike}
  title={isLiked ? "Unlike" : "Like"}
/>
```
