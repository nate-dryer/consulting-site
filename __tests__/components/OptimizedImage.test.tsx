import { render, screen } from "@testing-library/react";
import React from "react";

import OptimizedImage from "../../app/components/OptimizedImage";

// Mock console.warn to test warnings
const originalWarn = console.warn;
let consoleOutput: string[] = [];
const mockedWarn = (output: string) => consoleOutput.push(output);

describe("OptimizedImage Component", () => {
  beforeEach(() => {
    // Setup console.warn mock
    consoleOutput = [];
    console.warn = mockedWarn;
  });

  afterEach(() => {
    // Restore console.warn
    console.warn = originalWarn;
  });

  it("renders an image with required props", () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={100}
        height={100}
        data-testid="test-image"
      />
    );

    const image = screen.getByTestId("test-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "Test image");
    expect(image).toHaveAttribute("width", "100");
    expect(image).toHaveAttribute("height", "100");
  });

  it("renders a decorative image with empty alt text", () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        decorative={true}
        width={100}
        height={100}
        data-testid="test-image"
      />
    );

    const image = screen.getByTestId("test-image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", "");
  });

  it("applies custom className", () => {
    render(
      <OptimizedImage
        src="/test-image.jpg"
        alt="Test image"
        width={100}
        height={100}
        className="custom-class"
        data-testid="test-image"
      />
    );

    const image = screen.getByTestId("test-image");
    expect(image).toHaveClass("custom-class");
  });

  it("warns when alt text is missing and not decorative", () => {
    // Save the original NODE_ENV
    const originalNodeEnv = process.env.NODE_ENV;
    // Set to development to trigger warnings
    process.env.NODE_ENV = "development";

    render(
      <OptimizedImage src="/test-image.jpg" width={100} height={100} data-testid="test-image" />
    );

    expect(consoleOutput).toContain(
      "OptimizedImage: Missing alt text. Add descriptive alt text for accessibility or set decorative={true} for decorative images."
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
      <OptimizedImage src="/test-image.jpg" alt="Test image" fill={true} data-testid="test-image" />
    );

    expect(consoleOutput).toContain(
      "OptimizedImage: Missing sizes prop for fill image. This is needed for optimal performance."
    );

    // Restore NODE_ENV
    process.env.NODE_ENV = originalNodeEnv;
  });

  it("provides default sizes for fill images when not specified", () => {
    render(
      <OptimizedImage src="/test-image.jpg" alt="Test image" fill={true} data-testid="test-image" />
    );

    const image = screen.getByTestId("test-image");
    expect(image).toHaveAttribute(
      "sizes",
      "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    );
  });
});
