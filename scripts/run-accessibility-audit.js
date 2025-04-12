/**
 * Accessibility Audit Script
 *
 * This script runs a comprehensive accessibility audit on the website
 * and generates a detailed report of issues found.
 */

const fs = require("fs");
const path = require("path");

const { AxeBuilder } = require("@axe-core/playwright");
const { chromium } = require("@playwright/test");

// Pages to test
const PAGES = [
  { url: "/", name: "Home" },
  { url: "/use-cases", name: "Use Cases" },
  // Add more pages as they become available
];

// Create reports directory if it doesn't exist
const reportsDir = path.join(__dirname, "../reports");
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir);
}

// Get the current date for the report filename
const date = new Date().toISOString().split("T")[0];
const reportFile = path.join(reportsDir, `accessibility-audit-${date}.md`);

/**
 * Format accessibility violations for better readability in Markdown
 */
function formatViolationsMarkdown(violations, pageName) {
  if (violations.length === 0) {
    return `## ${pageName} Page\n\nNo accessibility violations found.\n`;
  }

  let markdown = `## ${pageName} Page\n\n`;
  markdown += `Found ${violations.length} accessibility violations:\n\n`;

  violations.forEach((violation, index) => {
    markdown += `### ${index + 1}. ${violation.id}: ${violation.help}\n\n`;
    markdown += `**Impact:** ${violation.impact}\n\n`;
    markdown += `**Description:** ${violation.description}\n\n`;
    markdown += `**WCAG Criteria:** ${violation.tags.filter((tag) => tag.startsWith("wcag")).join(", ")}\n\n`;
    markdown += `**Help URL:** ${violation.helpUrl}\n\n`;

    markdown += `**Affected Elements:**\n\n`;
    violation.nodes.forEach((node, nodeIndex) => {
      markdown += `${nodeIndex + 1}. \`${node.html}\`\n`;
      markdown += `   - **Failure Summary:** ${node.failureSummary.replace(/\n/g, "\n   ")}\n`;
      markdown += `   - **Target:** ${JSON.stringify(node.target)}\n\n`;
    });
  });

  return markdown;
}

/**
 * Run the accessibility audit
 */
async function runAccessibilityAudit() {
  console.log("Starting accessibility audit...");

  // Launch browser
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  let reportContent = `# Accessibility Audit Report\n\nDate: ${date}\n\n`;
  reportContent += `## Summary\n\n`;

  const allViolations = [];

  // Test each page
  for (const { url, name } of PAGES) {
    console.log(`Testing ${name} page (${url})...`);

    try {
      // Navigate to the page
      await page.goto(`http://localhost:3000${url}`, { waitUntil: "domcontentloaded" });

      // Wait for the page to be loaded enough for testing
      try {
        await page.waitForSelector("body", { state: "visible", timeout: 5000 });
      } catch (e) {
        console.warn("Could not detect body element, continuing anyway");
      }

      // Exclude certain rules that might not apply in our testing environment
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .disableRules(["document-title", "html-has-lang"]) // These are handled by Next.js in production
        .analyze();

      // Add violations to the report
      reportContent += formatViolationsMarkdown(results.violations, name);

      // Add to all violations
      allViolations.push(...results.violations);

      console.log(`Found ${results.violations.length} violations on ${name} page`);
    } catch (error) {
      console.error(`Error testing ${name} page:`, error);
      reportContent += `## ${name} Page\n\nError testing page: ${error.message}\n\n`;
    }
  }

  // Add summary statistics
  const uniqueViolations = [...new Set(allViolations.map((v) => v.id))];
  reportContent = reportContent.replace(
    "## Summary\n\n",
    `## Summary\n\n- **Total Pages Tested:** ${PAGES.length}\n- **Total Violations:** ${allViolations.length}\n- **Unique Violation Types:** ${uniqueViolations.length}\n\n`
  );

  // Add recommendations
  reportContent += `## Recommendations\n\n`;
  reportContent += `### High Priority\n\n`;
  reportContent += `- Fix all critical and serious violations that affect keyboard navigation\n`;
  reportContent += `- Ensure all images have appropriate alt text\n`;
  reportContent += `- Fix form accessibility issues\n\n`;

  reportContent += `### Medium Priority\n\n`;
  reportContent += `- Address color contrast issues\n`;
  reportContent += `- Improve focus indicators\n`;
  reportContent += `- Fix ARIA attribute issues\n\n`;

  reportContent += `### Low Priority\n\n`;
  reportContent += `- Optimize heading hierarchy\n`;
  reportContent += `- Add landmark regions\n`;
  reportContent += `- Enhance semantic HTML\n\n`;

  // Add resources
  reportContent += `## Resources\n\n`;
  reportContent += `- [WCAG 2.1 Guidelines](https://www.w3.org/TR/WCAG21/)\n`;
  reportContent += `- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)\n`;
  reportContent += `- [axe-core Documentation](https://github.com/dequelabs/axe-core)\n`;
  reportContent += `- [React Accessibility](https://reactjs.org/docs/accessibility.html)\n`;
  reportContent += `- [Next.js Accessibility](https://nextjs.org/docs/advanced-features/accessibility)\n`;

  // Write the report to a file
  fs.writeFileSync(reportFile, reportContent);

  console.log(`\nAccessibility audit complete!`);
  console.log(`Report saved to: ${reportFile}`);

  // Close the browser
  await browser.close();
}

// Run the audit
runAccessibilityAudit().catch((error) => {
  console.error("Error running accessibility audit:", error);
  process.exit(1);
});
