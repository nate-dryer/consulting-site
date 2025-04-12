import { render, screen } from "@testing-library/react";
import React from "react";

import Button from "../../app/components/Button";

describe("Button Component", () => {
  it("renders a button with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-purple-700"); // secondary-cta is default
  });

  it("renders a primary CTA button", () => {
    render(<Button variant="primary-cta">Primary CTA</Button>);
    const button = screen.getByRole("button", { name: /primary cta/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-orange-500");
  });

  it("renders a secondary CTA button", () => {
    render(<Button variant="secondary-cta">Secondary CTA</Button>);
    const button = screen.getByRole("button", { name: /secondary cta/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-purple-700");
  });

  it("renders a tertiary CTA button", () => {
    render(<Button variant="tertiary-cta">Tertiary CTA</Button>);
    const button = screen.getByRole("button", { name: /tertiary cta/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-white");
    expect(button).toHaveClass("text-purple-700");
  });

  it("renders a button with custom className", () => {
    render(<Button className="custom-class">Custom Button</Button>);
    const button = screen.getByRole("button", { name: /custom button/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("custom-class");
  });

  it("renders a link when href is provided", () => {
    render(<Button href="/test">Link Button</Button>);
    const link = screen.getByRole("link", { name: /link button/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });

  it("renders an external link when href and isExternal are provided", () => {
    render(
      <Button href="https://example.com" isExternal>
        External Link
      </Button>
    );
    const link = screen.getByRole("link", { name: /external link/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("renders different button sizes", () => {
    const { rerender } = render(<Button size="sm">Small Button</Button>);
    let button = screen.getByRole("button", { name: /small button/i });
    expect(button).toHaveClass("text-sm");

    rerender(<Button size="md">Medium Button</Button>);
    button = screen.getByRole("button", { name: /medium button/i });
    expect(button).toHaveClass("px-6 py-3");

    rerender(<Button size="lg">Large Button</Button>);
    button = screen.getByRole("button", { name: /large button/i });
    expect(button).toHaveClass("text-lg");
  });
});
