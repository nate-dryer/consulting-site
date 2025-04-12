import { AxeBuilder } from "@axe-core/playwright";
import { Page } from "@playwright/test";

/**
 * Run accessibility tests on a page using axe-core
 * @param page Playwright page object
 * @param options Optional configuration for the accessibility tests
 * @returns Accessibility violations found
 */
export async function runAccessibilityTests(page: Page, options: { disableRules?: string[] } = {}) {
  // Create the AxeBuilder instance
  let axeBuilder = new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]);

  // Disable specific rules if provided
  if (options.disableRules && options.disableRules.length > 0) {
    axeBuilder = axeBuilder.disableRules(options.disableRules);
  }

  const accessibilityScanResults = await axeBuilder.analyze();

  return accessibilityScanResults.violations;
}

/**
 * Format accessibility violations for better readability
 * @param violations Array of accessibility violations
 * @returns Formatted string with violation details
 */
export function formatAccessibilityViolations(violations: any[]) {
  if (violations.length === 0) {
    return "No accessibility violations found.";
  }

  return violations
    .map((violation) => {
      const nodes = violation.nodes
        .map((node: any) => {
          return `
        - Target: ${node.target}
        - HTML: ${node.html}
        - Failure Summary: ${node.failureSummary}
      `;
        })
        .join("\n");

      return `
      Rule: ${violation.id}
      Impact: ${violation.impact}
      Description: ${violation.description}
      Help: ${violation.help}
      Help URL: ${violation.helpUrl}
      Affected Nodes:
      ${nodes}
    `;
    })
    .join("\n\n");
}
