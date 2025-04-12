import { render, screen } from "@testing-library/react";
import React from "react";

import { Card, FeatureCard, LinkCard } from "../../app/components/Card/index";

// Mock the useReducedMotion hook
jest.mock("../../app/utils/hooks/useReducedMotion", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(false),
}));

describe("Card Components", () => {
  describe("Card Component", () => {
    it("renders a basic card with children", () => {
      render(
        <Card>
          <p>Card content</p>
        </Card>
      );

      const content = screen.getByText("Card content");
      expect(content).toBeInTheDocument();

      // Check if the parent has the expected classes
      const card = content.parentElement;
      expect(card).toHaveClass("bg-white");
    });

    it("applies custom className", () => {
      render(
        <Card className="custom-class">
          <p>Card content</p>
        </Card>
      );

      const content = screen.getByText("Card content");
      const card = content.parentElement;
      expect(card).toHaveClass("custom-class");
    });

    it("applies custom style", () => {
      render(
        <Card style={{ backgroundColor: "red" }}>
          <p>Card content</p>
        </Card>
      );

      const content = screen.getByText("Card content");
      const card = content.parentElement;
      expect(card).toHaveStyle({ backgroundColor: "red" });
    });
  });

  describe("FeatureCard Component", () => {
    it("renders a feature card with children", () => {
      render(
        <FeatureCard>
          <p>Feature card content</p>
        </FeatureCard>
      );

      const content = screen.getByText("Feature card content");
      expect(content).toBeInTheDocument();

      // Check if the parent has the expected classes
      const card = content.parentElement;
      expect(card).toHaveClass("bg-white");
    });
  });

  describe("LinkCard Component", () => {
    it("renders a link card with children", () => {
      render(
        <LinkCard href="/test">
          <p>Link card content</p>
        </LinkCard>
      );

      const content = screen.getByText("Link card content");
      expect(content).toBeInTheDocument();

      // Check if the parent is an anchor with the expected href
      const card = content.closest("a");
      expect(card).toHaveAttribute("href", "/test");
      expect(card).toHaveClass("bg-white");
    });
  });
});
