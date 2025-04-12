// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

// Mock window.matchMedia for Jest environment (used by useReducedMotion hook)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false, // Default to no reduced motion in tests
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated but included for completeness
    removeListener: jest.fn(), // Deprecated but included for completeness
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

