/**
 * Bundle Analysis Script
 *
 * This script runs the Next.js bundle analyzer and generates a report.
 * Run with: node scripts/analyze-bundle.js
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
const reportFile = path.join(reportsDir, `bundle-analysis-${date}.txt`);

console.log("Running bundle analysis...");

try {
  // Run the bundle analyzer
  execSync("npm run analyze", { stdio: "inherit" });

  console.log("\nBundle analysis complete!");
  console.log("Open the generated report in your browser to view the results.");
  console.log("\nBundle analysis tips:");
  console.log("1. Look for large dependencies that could be dynamically imported");
  console.log("2. Check for duplicate dependencies");
  console.log("3. Identify unused code that could be removed");
  console.log("4. Consider code splitting for large components");

  // Save the tips to a file
  fs.writeFileSync(
    reportFile,
    `
Bundle Analysis Report (${date})

Bundle analysis tips:
1. Look for large dependencies that could be dynamically imported
2. Check for duplicate dependencies
3. Identify unused code that could be removed
4. Consider code splitting for large components

Common optimization strategies:
- Use dynamic imports for non-critical components
- Lazy load images and other media
- Minimize third-party dependencies
- Use tree-shaking friendly imports (e.g., import { Button } from 'library' instead of import Library from 'library')
- Consider smaller alternatives for large libraries
- Split CSS to reduce unused styles
  `
  );

  console.log(`\nTips saved to ${reportFile}`);
} catch (error) {
  console.error("Error running bundle analysis:", error);
  process.exit(1);
}
