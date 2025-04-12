/// <reference types="jest" />

// Import @testing-library/jest-dom matchers
import "@testing-library/jest-dom";

// Extend Jest's expect
declare global {
  namespace jest {
    interface Matchers<R> {
      // Add the missing matchers from @testing-library/jest-dom
      toBeInTheDocument(): R;
      toHaveClass(...classNames: string[]): R;
      toHaveAttribute(attr: string, value?: string): R;
      // Add other matchers as needed
      toBeVisible(): R;
      toBeChecked(): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeEmpty(): R;
      toBeEmptyDOMElement(): R;
      toBeInvalid(): R;
      toBeRequired(): R;
      toBeValid(): R;
      toContainElement(element: HTMLElement | null): R;
      toContainHTML(htmlText: string): R;
      toHaveFocus(): R;
      toHaveFormValues(expectedValues: Record<string, any>): R;
      toHaveStyle(css: string | Record<string, any>): R;
      toHaveTextContent(text: string | RegExp, options?: { normalizeWhitespace: boolean }): R;
      toHaveValue(value?: string | string[] | number): R;
      toBePartiallyChecked(): R;
    }
  }
}

// This export is needed to make the file a module
export {};
