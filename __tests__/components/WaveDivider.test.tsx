import { render } from "@testing-library/react";
import React from "react";

import WaveDivider from "../../app/components/WaveDivider";

describe("WaveDivider Component", () => {
  it("renders a top wave divider", () => {
    const { container } = render(<WaveDivider position="top" />);

    // Check if the SVG is rendered
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    // Check if the path uses the correct path data for top position
    const path = svg?.querySelector("path");
    expect(path).toHaveAttribute("d", expect.stringContaining("M0,100 L1440,100"));

    // Check if the gradient is defined
    const gradient = svg?.querySelector("linearGradient");
    expect(gradient).toBeInTheDocument();
  });

  it("renders a bottom wave divider", () => {
    const { container } = render(<WaveDivider position="bottom" />);

    // Check if the SVG is rendered
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();

    // Check if the path uses the correct path data for bottom position
    const path = svg?.querySelector("path");
    expect(path).toHaveAttribute("d", expect.stringContaining("M0,0 L1440,0"));

    // Check if the gradient is defined
    const gradient = svg?.querySelector("linearGradient");
    expect(gradient).toBeInTheDocument();
  });

  it("applies custom colors", () => {
    const { container } = render(
      <WaveDivider position="top" fromColor="#FF0000" toColor="#0000FF" />
    );

    // Check if the gradient stops have the correct colors
    const stops = container.querySelectorAll("stop");
    expect(stops[0]).toHaveAttribute("offset", "0%");
    expect(stops[1]).toHaveAttribute("offset", "100%");
  });

  it("applies custom height", () => {
    const { container } = render(<WaveDivider position="top" height={200} />);

    // Check if the SVG has the correct height
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("height", "200");
  });

  it("applies custom className", () => {
    const { container } = render(<WaveDivider position="top" className="custom-class" />);

    // Check if the container div has the custom class
    const div = container.firstChild;
    expect(div).toHaveClass("custom-class");
  });
});
