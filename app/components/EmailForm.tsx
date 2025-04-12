"use client";

import Form from "./Form";

/**
 * EmailForm Component
 *
 * A specialized form component for the main email collection form.
 * Uses the reusable Form component with specific settings.
 */
export default function EmailForm() {
  const handleSubmit = (email: string) => {
    console.log("Form submitted with email:", email);
    // Additional form submission logic can be added here
  };

  return (
    <Form
      buttonText="Start"
      buttonVariant="primary-cta"
      placeholder="Your email address"
      onSubmit={handleSubmit}
      showPrivacyText={false}
      className="w-full"
    />
  );
}
