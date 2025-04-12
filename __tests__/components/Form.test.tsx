import { render, screen, fireEvent, act } from "@testing-library/react";
import React from "react";

import Form from "../../app/components/Form";

describe("Form Component", () => {
  it("renders a default form", () => {
    render(<Form />);

    // Check if the form elements are rendered
    const emailInput = screen.getByPlaceholderText("Email address");
    expect(emailInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("renders a footer variant form", () => {
    const { container } = render(<Form variant="footer" />);

    // Check if the form elements are rendered with footer styling
    const emailInput = screen.getByPlaceholderText("Email address");
    expect(emailInput).toBeInTheDocument();

    const submitButton = screen.getByRole("button", { name: /submit/i });
    expect(submitButton).toBeInTheDocument();

    // Check if the form has the footer layout (stacked)
    const form = container.querySelector("form");
    expect(form).toHaveClass("space-y-4");
  });

  it("uses custom button text", () => {
    render(<Form buttonText="Subscribe Now" />);

    const submitButton = screen.getByRole("button", { name: /subscribe now/i });
    expect(submitButton).toBeInTheDocument();
  });

  it("uses custom button variant", () => {
    render(<Form buttonVariant="primary-cta" />);

    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveClass("bg-orange-500");
  });

  it("uses custom placeholder", () => {
    render(<Form placeholder="Enter your email" />);

    const emailInput = screen.getByPlaceholderText("Enter your email");
    expect(emailInput).toBeInTheDocument();
  });

  it("calls onSubmit when form is submitted", async () => {
    // Mock setTimeout to execute immediately
    jest.useFakeTimers();

    // Mock the onSubmit function to resolve immediately
    const handleSubmit = jest.fn().mockImplementation(() => {
      return Promise.resolve();
    });

    // Mock console.log to avoid actual logging
    const originalConsoleLog = console.log;
    console.log = jest.fn();

    // Render the component
    const { rerender } = render(<Form onSubmit={handleSubmit} />);

    // Fill in the email input
    const emailInput = screen.getByPlaceholderText("Email address");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // Submit the form using act to handle state updates
    await act(async () => {
      fireEvent.click(screen.getByRole("button"));
      // Wait for any promises to resolve
      await Promise.resolve();
    });

    // Check if onSubmit was called with the email
    expect(handleSubmit).toHaveBeenCalledWith("test@example.com");

    // Fast-forward timers to handle the setTimeout in the component
    await act(async () => {
      jest.runAllTimers();
      await Promise.resolve();
    });

    // Restore mocks
    jest.useRealTimers();
    console.log = originalConsoleLog;
  });

  it("applies custom className", () => {
    const { container } = render(<Form className="custom-class" />);

    const form = container.querySelector("form");
    expect(form).toHaveClass("custom-class");
  });

  it("shows privacy text when showPrivacyText is true", () => {
    render(<Form showPrivacyText={true} />);

    const privacyText = screen.getByText(/privacy policy/i);
    expect(privacyText).toBeInTheDocument();
  });

  it("hides privacy text when showPrivacyText is false", () => {
    render(<Form showPrivacyText={false} />);

    const privacyText = screen.queryByText(/privacy policy/i);
    expect(privacyText).not.toBeInTheDocument();
  });

  it("renders children when provided", () => {
    render(
      <Form>
        <p>Custom form content</p>
      </Form>
    );

    const customContent = screen.getByText("Custom form content");
    expect(customContent).toBeInTheDocument();
  });
});
