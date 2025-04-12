# End-to-End and Visual Regression Tests

This directory contains end-to-end tests and visual regression tests for the AI Consulting Website project.

## Test Types

### End-to-End Tests

End-to-end tests verify that the application works correctly from a user's perspective. These tests simulate user interactions and verify that the application responds correctly.

### Visual Regression Tests

Visual regression tests take screenshots of pages and components and compare them to baseline screenshots to detect visual changes. This helps ensure that UI changes are intentional and don't break the design.

### Accessibility Tests

Accessibility tests use axe-core to check for accessibility violations on each page. This helps ensure that the website is accessible to all users, including those with disabilities.

## Running Tests

```bash
# Run all e2e tests
npm run test:e2e

# Run accessibility tests
npm run test:a11y
```

## Test Structure

- `home.spec.ts`: Tests for the home page
- `accessibility.spec.ts`: Accessibility tests for all pages
- `utils/`: Utility functions for tests

## Visual Test Workflow

1. **Initial Run**: The first time you run visual tests, Playwright will generate baseline screenshots.
2. **Subsequent Runs**: Playwright will compare new screenshots to the baseline and fail if there are differences.
3. **Updating Baselines**: If the changes are intentional, update the baseline screenshots with `npx playwright test --update-snapshots`.

## Accessibility Test Workflow

1. **Run Tests**: Run the accessibility tests with `npm run test:a11y`.
2. **Review Violations**: Review any accessibility violations reported by axe-core.
3. **Fix Issues**: Fix the issues in the codebase.
4. **Verify Fixes**: Run the tests again to verify that the issues have been fixed.

## Best Practices

1. **Test Critical Paths**: Focus on testing the most important user journeys.
2. **Test Responsive Layouts**: Test on different viewport sizes to ensure the site works well on all devices.
3. **Test Accessibility**: Ensure that the site is accessible to all users.
4. **Keep Tests Independent**: Each test should be independent of other tests.
5. **Use Descriptive Test Names**: Test names should describe what is being tested.

## Further Reading

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [axe-core Documentation](https://github.com/dequelabs/axe-core)
- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/)
