"use client";

import React, { FormEvent, useState, ReactNode } from "react";

import Button from "./Button";
import Icon from "./Icon";

/**
 * Form Component Props
 */
type FormProps = {
  variant?: "default" | "footer";
  buttonText?: string;
  buttonVariant?:
    | "primary"
    | "secondary"
    | "accent"
    | "red"
    | "orange"
    | "primary-cta"
    | "secondary-cta"
    | "tertiary-cta";
  placeholder?: string;
  onSubmit?: (email: string) => void;
  className?: string;
  showPrivacyText?: boolean;
  children?: ReactNode;
};

/**
 * Reusable Form Component
 *
 * A flexible form component that can be used for email collection
 * with different styling variants.
 */
export default function Form({
  variant = "default",
  buttonText = "Submit",
  buttonVariant = "secondary-cta",
  placeholder = "Email address",
  onSubmit,
  className = "",
  showPrivacyText = true,
  children,
}: FormProps) {
  const [email, setEmail] = useState("");
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate email
    if (!email || !email.includes("@")) {
      setFormStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    try {
      setFormStatus("submitting");

      // Call the onSubmit handler if provided
      if (onSubmit) {
        await Promise.resolve(onSubmit(email));
      } else {
        // Default behavior
        console.log(`Form submitted with email: ${email}`);
      }

      // Success
      setFormStatus("success");

      // Reset form after a delay
      setTimeout(() => {
        setEmail("");
        setFormStatus("idle");
      }, 3000);
    } catch (error) {
      // Handle error
      setFormStatus("error");
      setErrorMessage("An error occurred. Please try again.");
      console.error("Form submission error:", error);
    }
  };

  // Determine form layout and styling based on variant
  const isFooter = variant === "footer";

  // Input classes based on variant using Tailwind utility classes directly
  const inputClasses = isFooter
    ? "w-full px-4 py-3 rounded-l-full text-white bg-gray-700 border-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm hover:shadow transition-all duration-300"
    : "w-full px-4 py-3 rounded-full bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm hover:shadow transition-all duration-300";

  // Privacy text classes based on variant using Tailwind utility classes directly
  const privacyTextClasses = isFooter
    ? "text-xs text-gray-400 mt-1 mb-4"
    : "text-xs text-gray-500 mt-1 text-center";

  // Link classes based on variant using Tailwind utility classes directly
  const linkClasses = isFooter
    ? "text-purple-300 hover:text-white transition-colors duration-300 underline"
    : "text-purple-600 underline hover:text-purple-800";

  // Button classes based on variant
  const buttonClasses = isFooter ? "rounded-r-full rounded-l-none" : "";

  return (
    <form
      className={`${isFooter ? "space-y-4" : ""} ${className}`}
      onSubmit={handleSubmit}
      suppressHydrationWarning
    >
      {/* Form layout changes based on variant */}
      {isFooter ? (
        // Footer variant - stacked layout
        <>
          <div>
            <label
              htmlFor="email-input"
              className="block text-sm font-medium text-gray-700 mb-1 sr-only"
            >
              Email
            </label>
            <input
              type="email"
              id="email-input"
              placeholder={placeholder}
              className={`${inputClasses} ${formStatus === "error" ? "border-red-500 ring-1 ring-red-500" : ""}`}
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={formStatus === "error"}
              aria-describedby={formStatus === "error" ? "email-error" : undefined}
              disabled={formStatus === "submitting"}
              suppressHydrationWarning
            />
            {formStatus === "error" && (
              <div id="email-error" className="text-red-500 text-sm mt-1" aria-live="assertive">
                {errorMessage}
              </div>
            )}
            {formStatus === "success" && (
              <div className="text-green-500 text-sm mt-1" aria-live="polite">
                Thank you for subscribing!
              </div>
            )}
          </div>

          {/* Optional children */}
          {children}

          {/* Privacy text */}
          {showPrivacyText && (
            <div className={privacyTextClasses}>
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClasses}
              >
                Terms of Service
              </a>{" "}
              apply.
            </div>
          )}

          <div className="flex">
            <Button type="submit" variant={buttonVariant} className={`${buttonClasses} px-6 py-3`}>
              {buttonText}
              <Icon name="fa:FaArrowRight" className="ml-2" size="sm" />
            </Button>
          </div>
        </>
      ) : (
        // Default variant - horizontal layout
        <>
          <div className="flex flex-col gap-2 mb-2">
            <div className="flex flex-row gap-2">
              <div className="flex-grow">
                <label
                  htmlFor="email-input-default"
                  className="block text-sm font-medium text-gray-700 mb-1 sr-only"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email-input-default"
                  name="email"
                  placeholder={placeholder}
                  className={`w-full px-4 py-3 rounded-full bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 shadow-sm hover:shadow transition-all duration-300 ${formStatus === "error" ? "border-red-500 ring-1 ring-red-500" : ""}`}
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-invalid={formStatus === "error"}
                  aria-describedby={formStatus === "error" ? "email-error-default" : undefined}
                  disabled={formStatus === "submitting"}
                  suppressHydrationWarning
                />
              </div>
              <Button
                type="submit"
                variant={buttonVariant}
                size="md"
                className="whitespace-nowrap min-w-[100px] rounded-full"
                disabled={formStatus === "submitting"}
              >
                {formStatus === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    {buttonText}
                    <Icon name="fa:FaArrowRight" className="ml-2" size="sm" />
                  </>
                )}
              </Button>
            </div>
            {formStatus === "error" && (
              <div
                id="email-error-default"
                className="text-red-500 text-sm mt-1"
                aria-live="assertive"
              >
                {errorMessage}
              </div>
            )}
            {formStatus === "success" && (
              <div className="text-green-500 text-sm mt-1" aria-live="polite">
                Thank you for subscribing!
              </div>
            )}
          </div>

          {/* Optional children */}
          {children}

          {/* Privacy text */}
          {showPrivacyText && (
            <div className={privacyTextClasses}>
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                className={linkClasses}
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms of Service
              </a>{" "}
              apply.
            </div>
          )}
        </>
      )}
    </form>
  );
}
