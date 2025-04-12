# Testing Documentation

This directory contains tests for the AI Consulting Website project. The testing setup includes unit tests, visual regression tests, and accessibility tests.

## Testing Stack

- **Jest**: For unit testing React components
- **React Testing Library**: For testing React components in a user-centric way
- **Playwright**: For end-to-end testing and visual regression testing
- **axe-core**: For automated accessibility testing

## Test Types

### Unit Tests

Unit tests are located in the `__tests__` directory and are organized to mirror the project structure. For example, tests for components in `app/components` are located in `__tests__/components`.

These tests verify that individual components work as expected in isolation.

### Visual Regression Tests

Visual regression tests are located in the `e2e-tests` directory. These tests take screenshots of pages and components and compare them to baseline screenshots to detect visual changes.

### Accessibility Tests

Accessibility tests are also located in the `e2e-tests` directory. These tests use axe-core to check for accessibility violations on each page.

## Running Tests

### Unit Tests

```bash
# Run all unit tests
npm test

# Run unit tests in watch mode (for development)
npm run test:watch

# Run unit tests with coverage report
npm run test:coverage
```

### End-to-End and Visual Tests

```bash
# Run all e2e tests
npm run test:e2e

# Run accessibility tests
npm run test:a11y
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run analyze:bundle
```

## Test Guidelines

### Writing Unit Tests

1. **Test behavior, not implementation**: Focus on what the component does, not how it does it.
2. **Use user-centric queries**: Prefer queries like `getByRole`, `getByLabelText`, and `getByText` over `getByTestId`.
3. **Test accessibility**: Verify that components have appropriate ARIA attributes and roles.
4. **Mock external dependencies**: Use Jest's mocking capabilities to isolate the component being tested.

### Writing Visual Tests

1. **Test responsive layouts**: Take screenshots at different viewport sizes.
2. **Test interactive states**: Take screenshots of hover states, focus states, etc.
3. **Test with different themes**: If the site supports themes, test with each theme.

### Writing Accessibility Tests

1. **Test all pages**: Every page should be tested for accessibility violations.
2. **Test interactive components**: Pay special attention to forms, buttons, and other interactive elements.
3. **Test keyboard navigation**: Verify that all interactive elements can be accessed and used with a keyboard.

## Continuous Integration

Tests are run automatically on pull requests and before deployment to ensure code quality and prevent regressions.

## Further Reading

- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [React Testing Library Documentation](https://testing-library.com/docs/react-testing-library/intro/)
- [Playwright Documentation](https://playwright.dev/docs/intro)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
