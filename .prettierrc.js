/**
 * Prettier Configuration for AI Consulting Website
 *
 * This configuration is designed to:
 * - Maintain consistent code style across the project
 * - Work harmoniously with ESLint
 * - Follow modern JavaScript/TypeScript best practices
 * - Optimize for readability
 */
module.exports = {
  // Use double quotes for consistency
  singleQuote: false,

  // Add semicolons at the end of statements
  semi: true,

  // Use 2 spaces for indentation
  tabWidth: 2,
  useTabs: false,

  // Limit line length for readability
  printWidth: 100,

  // Add trailing commas for cleaner git diffs
  trailingComma: "es5",

  // Add spaces inside brackets and object literals
  bracketSpacing: true,

  // Place the closing bracket of JSX elements on a new line
  bracketSameLine: false,

  // Always add parentheses around arrow function parameters
  arrowParens: "always",

  // Use LF for line endings (consistent across platforms)
  endOfLine: "lf",

  // Use double quotes in JSX for consistency with regular JS
  jsxSingleQuote: false,

  // Only add quotes around object properties when needed
  quoteProps: "as-needed",

  // Specific overrides for different file types
  overrides: [
    {
      files: "*.{css,scss}",
      options: {
        singleQuote: false,
      },
    },
    {
      files: "*.{json,md}",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
