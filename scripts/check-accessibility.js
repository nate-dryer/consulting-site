/**
 * Accessibility Check Script
 *
 * This script runs accessibility tests using Playwright and axe-core.
 * Run with: node scripts/check-accessibility.js
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Create a directory for the reports if it doesn't exist
const reportsDir = path.join(__dirname, "../reports");
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

// Get the current date for the report filename
const date = new Date().toISOString().split("T")[0];
const reportFile = path.join(reportsDir, `accessibility-report-${date}.txt`);

console.log("Running accessibility tests...");

try {
  // Run the accessibility tests
  execSync("npx playwright test e2e-tests/accessibility.spec.ts", { stdio: "inherit" });

  console.log("\nAccessibility tests complete!");
  console.log("Check the Playwright report for details.");

  // Save accessibility tips to a file
  fs.writeFileSync(
    reportFile,
    `
Accessibility Report (${date})

Common accessibility issues to check:
1. Missing alt text on images
2. Insufficient color contrast
3. Missing form labels
4. Improper heading hierarchy
5. Missing ARIA attributes on interactive elements
6. Keyboard navigation issues
7. Missing focus indicators
8. Missing language attribute on HTML element
9. Missing document title
10. Inaccessible custom controls

Accessibility best practices:
- Use semantic HTML elements
- Ensure all interactive elements are keyboard accessible
- Provide alternative text for images
- Maintain sufficient color contrast
- Use proper heading hierarchy
- Label form elements correctly
- Test with screen readers
- Respect user preferences (e.g., reduced motion)
- Provide skip links for keyboard users
- Ensure proper focus management
  `
  );

  console.log(`\nTips saved to ${reportFile}`);
} catch (error) {
  console.error("Error running accessibility tests:", error);
  process.exit(1);
}
