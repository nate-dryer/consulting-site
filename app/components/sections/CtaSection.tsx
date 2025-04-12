"use client";
import Button from "../Button";
import { Section, Container } from "../Layout";


/**
 * CtaSection Component Props
 */
type CtaSectionProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
};

/**
 * CtaSection Component
 *
 * A call-to-action section with an email form.
 * Updated to match the target design with a white card on a gradient background.
 */
export default function CtaSection({
  title = "Win the technology race",
  subtitle = "Schedule a call today",
  buttonText = "Start",
  buttonHref = "https://calendly.com/aivantage-scheduling/partnership-follow-up",
}: CtaSectionProps) {
<Section className="bg-gradient-to-b from-white to-blue-900 py-16 sm:py-20 md:py-24">
  return (
    <div className="bg-gradient-to-b from-white to-blue-900 py-16 sm:py-20 md:py-24">
      <Container className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg mx-auto max-w-4xl">
          <div className="py-12 px-6 sm:px-10 md:px-12">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-3xl md:text-4xl text-gray-800 font-normal tracking-tight mb-3 sm:mb-4 md:mb-5">
                {title}
              </h2>
              <p className="text-2xl text-gray-700 font-normal mb-8 sm:mb-10 md:mb-12">{subtitle}</p>
            </div>

            <div className="max-w-xl mx-auto">
              <div className="flex flex-col sm:flex-row w-full">
                <input
                  type="email"
                  placeholder="Email address"
                  className="flex-grow py-4 px-6 border border-gray-300 rounded-l-full sm:rounded-r-none rounded-r-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-base mb-3 sm:mb-0"
                />
                <Button
                  variant="primary-cta"
                  size="lg" className="rounded-l-none rounded-r-xl"
                  href={buttonHref}
                >
                  {buttonText}
                </Button>
              </div>

              <div className="text-xs text-gray-500 mt-4 text-center">
                This site is protected by reCAPTCHA and the Google{" "}
                <a
                  href="https://policies.google.com/privacy"
                  className="text-purple-700 hover:text-purple-800 underline"
                >
                  Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  className="text-purple-700 hover:text-purple-800 underline"
                >
                  Terms of Service
                </a>{" "}
                apply.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
</Section>
}
