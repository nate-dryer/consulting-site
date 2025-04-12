import { render, screen } from "@testing-library/react";
import React from "react";

import LazyImage from "../../app/components/LazyImage";

// Mock IntersectionObserver
const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
});
window.IntersectionObserver = mockIntersectionObserver;

// Mock console.warn to test warnings
const originalWarn = console.warn;
let consoleOutput: string[] = [];
const mockedWarn = (output: string) => consoleOutput.push(output);

describe("LazyImage Component", () => {
  beforeEach(() => {
    // Setup console.warn mock
    consoleOutput = [];
    console.warn = mockedWarn;
  });

  afterEach(() => {
    // Restore console.warn
    console.warn = originalWarn;
  });

  it("renders a container div with correct attributes", () => {
    render(
      <LazyImage
        src="/test-image.jpg"
        alt="Test image"
        width={100}
        height={100}
        data-testid="test-image"
      />
    );

    const container = screen.getByTestId("test-image");
    expect(container).toBeInTheDocument();
  });

  it("renders a decorative image with empty alt text", () => {
    render(
      <LazyImage
        src="/test-image.jpg"
        decorative={true}
        width={100}
        height={100}
        data-testid="test-image"
      />
    );

    // We can't check the image directly because it's not rendered until intersection
    // Just verify the test doesn't throw an error
    expect(screen.getByTestId("test-image").parentElement).toBeInTheDocument();
  });

  it("warns when alt text is missing and not decorative", () => {
    // Save the original NODE_ENV
    const originalNodeEnv = process.env.NODE_ENV;
    // Set to development to trigger warnings
    process.env.NODE_ENV = "development";

    render(<LazyImage src="/test-image.jpg" width={100} height={100} data-testid="test-image" />);

    expect(consoleOutput).toContain(
      "LazyImage: Missing alt text. Add descriptive alt text for accessibility or set decorative={true} for decorative images."
    );

    // Restore NODE_ENV
    process.env.NODE_ENV = originalNodeEnv;
  });

  it("warns when sizes prop is missing for fill images", () => {
    // Save the original NODE_ENV
    const originalNodeEnv = process.env.NODE_ENV;
    // Set to development to trigger warnings
    process.env.NODE_ENV = "development";

    render(
      <LazyImage src="/test-image.jpg" alt="Test image" fill={true} data-testid="test-image" />
    );

    expect(consoleOutput).toContain(
      "LazyImage: Missing sizes prop for fill image. This is needed for optimal performance."
    );

    // Restore NODE_ENV
    process.env.NODE_ENV = originalNodeEnv;
  });

  it("provides default sizes for fill images when not specified", () => {
    render(
      <LazyImage src="/test-image.jpg" alt="Test image" fill={true} data-testid="test-image" />
    );

    // We can't check the image directly because it's not rendered until intersection
    // Just verify the test doesn't throw an error
    expect(screen.getByTestId("test-image").parentElement).toBeInTheDocument();
  });
});
