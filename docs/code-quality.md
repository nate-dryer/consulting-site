# Code Quality Tools

This document explains the code quality tools used in the AI Consulting Website project.

## ESLint

ESLint is a static code analysis tool for identifying problematic patterns in JavaScript and TypeScript code. It helps maintain code quality and consistency across the project.

### Configuration

The ESLint configuration is in `eslint.config.mjs` and follows the new flat config format introduced in ESLint v9. The configuration includes:

- **Base Configurations**:

  - `next/core-web-vitals`: Next.js recommended rules with Core Web Vitals focus
  - `next/typescript`: Next.js TypeScript rules
  - `plugin:react/recommended`: React recommended rules
  - `plugin:react-hooks/recommended`: React Hooks recommended rules
  - `plugin:jsx-a11y/recommended`: Accessibility recommended rules
  - `plugin:import/recommended`: Import recommended rules
  - `plugin:import/typescript`: TypeScript-specific import rules

- **Rule Categories**:

  - Next.js specific rules
  - React rules
  - React Hooks rules
  - Accessibility rules
  - Import rules
  - TypeScript rules
  - General code quality rules

- **File-Specific Rules**:
  - TypeScript-specific rules for `.ts` and `.tsx` files
  - Relaxed rules for test files

### Usage

```bash
# Run ESLint
npm run lint

# Run ESLint in strict mode (no warnings allowed)
npm run lint:strict

# Fix ESLint issues automatically
npm run lint:fix
```

## Prettier

Prettier is an opinionated code formatter that enforces a consistent style by parsing your code and reprinting it with its own rules.

### Configuration

The Prettier configuration is in `.prettierrc.js` with detailed comments explaining each option. Key settings include:

- Double quotes for strings
- Semicolons at the end of statements
- 2 spaces for indentation
- 100 character line length
- Trailing commas in objects and arrays
- Spaces inside brackets and object literals
- Parentheses around arrow function parameters

### Usage

```bash
# Check code formatting with Prettier
npm run format

# Fix code formatting with Prettier
npm run format:fix
```

## Combined Usage

```bash
# Fix both ESLint and Prettier issues
npm run fix
```

## Editor Integration

The project includes a `.vscode/settings.json` file that configures Visual Studio Code to:

- Format code on save using Prettier
- Run ESLint fix actions on save
- Use the project's TypeScript version

For other editors, please configure them to:

1. Use Prettier as the default formatter
2. Format on save
3. Run ESLint fix on save

## Ignored Files

The project includes:

- `.eslintignore`: Files and directories ignored by ESLint
- `.prettierignore`: Files and directories ignored by Prettier

These files exclude build outputs, dependencies, generated files, and other files that should not be linted or formatted.

## Best Practices

1. **Run Linting Before Committing**: Always run `npm run lint` before committing code to ensure it meets the project's standards.

2. **Fix Automatically When Possible**: Use `npm run fix` to automatically fix most issues.

3. **Don't Disable Rules Without Good Reason**: If you need to disable a rule, do so at the smallest scope possible (line or block) and include a comment explaining why.

4. **Keep Dependencies Updated**: Regularly update ESLint, Prettier, and their plugins to get the latest rules and fixes.

5. **Consistency Over Personal Preference**: Follow the project's style guide even if it differs from your personal preferences. Consistency across the codebase is more important than individual style preferences.
