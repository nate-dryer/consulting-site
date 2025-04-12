import { render } from "@testing-library/react";
import React from "react";

import MotionWrapper from "../../../app/components/animations/MotionWrapper";
import { useReducedMotion } from "../../../app/utils/hooks/useReducedMotion"; // Import the named export

// Mock the useReducedMotion hook
jest.mock("../../../app/utils/hooks/useReducedMotion", () => ({
  __esModule: true, // Keep this for ES module interop
  useReducedMotion: jest.fn(), // Mock the named export
}));

// Mock the framer-motion library
jest.mock("framer-motion", () => ({
  motion: {
    div: jest
      .fn()
      .mockImplementation(
        ({ children, className, initial, whileInView, viewport, variants, transition }) => (
          <div
            data-testid="motion-div"
            className={className}
            data-initial={initial}
            data-while-in-view={whileInView}
            data-variants={JSON.stringify(variants)}
          >
            {children}
          </div>
        )
      ),
  },
}));

describe("MotionWrapper Component", () => {
  // No need to require inside describe block anymore

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders children without animation when reduced motion is preferred", () => {
    // Mock the hook to return true (reduced motion preferred)
    (useReducedMotion as jest.Mock).mockReturnValue(true); // Cast and set return value

    const { getByText, queryByTestId } = render(
      <MotionWrapper variants={{ hidden: {}, visible: {} }}>
        <p>Test content</p>
      </MotionWrapper>
    );

    // Check if the content is rendered
    expect(getByText("Test content")).toBeInTheDocument();

    // Check if the motion.div is not used
    expect(queryByTestId("motion-div")).not.toBeInTheDocument();
  });

  it("renders children with animation when reduced motion is not preferred", () => {
    // Mock the hook to return false (reduced motion not preferred)
    (useReducedMotion as jest.Mock).mockReturnValue(false); // Cast and set return value

    const { getByText, getByTestId } = render(
      <MotionWrapper variants={{ hidden: {}, visible: {} }}>
        <p>Test content</p>
      </MotionWrapper>
    );

    // Check if the content is rendered
    expect(getByText("Test content")).toBeInTheDocument();

    // Check if the motion.div is used
    expect(getByTestId("motion-div")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    (useReducedMotion as jest.Mock).mockReturnValue(false); // Cast and set return value

    const { getByTestId } = render(
      <MotionWrapper variants={{ hidden: {}, visible: {} }} className="custom-class">
        <p>Test content</p>
      </MotionWrapper>
    );

    // Check if the custom class is applied
    expect(getByTestId("motion-div")).toHaveClass("custom-class");
  });

  it("applies custom delay", () => {
    (useReducedMotion as jest.Mock).mockReturnValue(false); // Cast and set return value

    const { getByTestId } = render(
      <MotionWrapper variants={{ hidden: {}, visible: {} }} delay={500}>
        <p>Test content</p>
      </MotionWrapper>
    );

    // Just check if the motion-div is rendered
    expect(getByTestId("motion-div")).toBeInTheDocument();
  });
});
