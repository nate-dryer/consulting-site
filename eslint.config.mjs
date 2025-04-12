import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Files and directories to ignore
const ignores = [
  // Build output
  ".next/",
  "out/",
  "build/",
  "dist/",

  // Dependencies
  "node_modules/",

  // Logs
  "*.log",

  // Coverage directory
  "coverage/",

  // Playwright test results
  "playwright-report/",
  "test-results/",

  // Cache
  ".eslintcache",
  ".cache/",

  // Misc
  ".DS_Store",
  ".env*",

  // Debug
  "npm-debug.log*",
  "yarn-debug.log*",
  "yarn-error.log*",
  ".pnpm-debug.log*",

  // TypeScript
  "*.tsbuildinfo",
  "next-env.d.ts",

  // Generated files
  "public/sitemap*.xml",
  "public/robots.txt",
  "public/sw.js",
  "public/workbox-*.js",

  // Reports
  "reports/",

  // Config files
  "next.config.js",
  "postcss.config.mjs",
  "tailwind.config.js",
  "jest.config.js",
];

/**
 * ESLint configuration for AI Consulting Website
 *
 * This configuration includes rules for:
 * - React best practices
 * - TypeScript type checking
 * - Accessibility (a11y) requirements
 * - Code formatting and style consistency
 * - Error prevention
 */
const eslintConfig = [
  // Global ignores
  {
    ignores,
  },
  // Base configurations from Next.js
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ),
  {
    // Global settings
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {},
      },
    },
    // Global rules
    rules: {
      // Next.js specific rules
      "@next/next/no-html-link-for-pages": "off", // Allow using HTML anchor tags for the logo to ensure proper page refresh

      // React rules
      "react/prop-types": "off", // Not needed with TypeScript
      "react/react-in-jsx-scope": "off", // Not needed with Next.js
      "react/jsx-uses-react": "off", // Not needed with React 17+
      "react/jsx-props-no-spreading": "off", // Allow JSX prop spreading
      "react/no-unescaped-entities": "warn", // Warn about unescaped entities in JSX
      "react/display-name": "off", // Not needed with function components

      // React Hooks rules
      "react-hooks/rules-of-hooks": "error", // Enforce Rules of Hooks
      "react-hooks/exhaustive-deps": "warn", // Warn about missing dependencies

      // Accessibility rules
      "jsx-a11y/anchor-is-valid": [
        "error",
        {
          // Ensure anchors have valid href
          components: ["Link"],
          specialLink: ["hrefLeft", "hrefRight"],
          aspects: ["invalidHref", "preferButton"],
        },
      ],
      "jsx-a11y/alt-text": "error", // Require alt text for images
      "jsx-a11y/aria-props": "error", // Validate ARIA props
      "jsx-a11y/aria-proptypes": "error", // Validate ARIA prop values
      "jsx-a11y/aria-unsupported-elements": "error", // Enforce ARIA state and property values
      "jsx-a11y/role-has-required-aria-props": "error", // Enforce that elements with ARIA roles have required props

      // Import rules
      "import/no-unresolved": "error", // Ensure imports resolve
      "import/named": "error", // Ensure named imports exist
      "import/default": "error", // Ensure default imports exist
      "import/namespace": "error", // Ensure imported namespaces exist
      "import/order": [
        "warn",
        {
          // Enforce import order
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          // Warn about unused variables
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off", // Not needed with type inference
      "@typescript-eslint/explicit-module-boundary-types": "off", // Not needed with type inference
      "@typescript-eslint/no-explicit-any": "warn", // Warn about using 'any' type

      // General code quality rules
      "no-console": ["warn", { allow: ["warn", "error"] }], // Warn about console.log
      "no-debugger": "warn", // Warn about debugger statements
      "no-duplicate-imports": "error", // Prevent duplicate imports
      "no-unused-expressions": "warn", // Warn about unused expressions
      "no-var": "error", // Prevent var usage
      "prefer-const": "warn", // Prefer const over let when possible
    },
  },
  // TypeScript-specific configuration
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // TypeScript-specific rules for .ts and .tsx files
      "@typescript-eslint/no-non-null-assertion": "warn", // Warn about non-null assertions
      "@typescript-eslint/no-empty-interface": "warn", // Warn about empty interfaces
      "@typescript-eslint/no-empty-function": "warn", // Warn about empty functions
    },
  },
  // Test file specific configuration
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    rules: {
      // Relaxed rules for test files
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' in tests
      "no-console": "off", // Allow console in tests
      "@typescript-eslint/no-require-imports": "off", // Allow require in tests
    },
  },
  // Script file specific configuration
  {
    files: ["**/scripts/**/*.[jt]s?(x)"],
    rules: {
      // Relaxed rules for script files
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' in scripts
      "no-console": "off", // Allow console in scripts
      "@typescript-eslint/no-require-imports": "off", // Allow require in scripts
      "@typescript-eslint/no-unused-vars": "off", // Allow unused vars in scripts
    },
  },
  // E2E test utilities
  {
    files: ["**/e2e-tests/utils/**/*.[jt]s?(x)"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' in e2e test utilities
    },
  },
  // Framer Motion types workaround
  {
    files: ["**/app/components/animations/**/*.[jt]s?(x)"],
    rules: {
      "import/named": "off", // Disable named import checks for animation components
      "import/no-named-as-default": "off", // Allow named exports as default imports
    },
  },
  // Card component
  {
    files: ["**/app/components/Card.tsx"],
    rules: {
      "import/no-named-as-default": "off", // Allow named exports as default imports
    },
  },
  // Form components
  {
    files: [
      "**/app/components/EmailForm.tsx",
      "**/app/components/FooterForm.tsx",
      "**/app/components/Form.tsx",
      "**/app/components/sections/CtaSection.tsx",
    ],
    rules: {
      "no-console": "off", // Allow console in form components for debugging form submissions
    },
  },
  // Header component
  {
    files: ["**/app/components/Header.tsx"],
    rules: {
      "import/order": "off", // Disable import order for Header component
    },
  },
  // Layout component
  {
    files: ["**/app/layout.tsx"],
    rules: {
      "import/order": "off", // Disable import order for layout component
    },
  },
];

export default eslintConfig;
