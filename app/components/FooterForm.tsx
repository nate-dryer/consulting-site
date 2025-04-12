"use client";

import { memo } from "react";

import Form from "./Form";

/**
 * FooterForm Component
 *
 * A specialized form component for the footer email collection form.
 * Uses the reusable Form component with footer-specific settings.
 * Memoized for better performance.
 */
const FooterForm = memo(function FooterForm() {
  const handleSubmit = (email: string) => {
    console.log("Footer form submitted with email:", email);
    // Additional form submission logic can be added here
  };

  return (
    <Form
      variant="footer"
      buttonText="Subscribe"
      buttonVariant="secondary-cta"
      placeholder="Your email address"
      onSubmit={handleSubmit}
    />
  );
});

// Add display name for better debugging
FooterForm.displayName = "FooterForm";

export default FooterForm;
