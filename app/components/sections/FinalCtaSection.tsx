import FadeIn from "../animations/FadeIn";
import { Decorative, DecorativeCircles } from "../Background";
import Button from "../Button";
import { Section, Container } from "../Layout";
import { HeadingLG, SectionDescription } from "../Typography";

/**
 * FinalCtaSection Component Props
 */
type FinalCtaSectionProps = {
  title?: string;
  description1?: string;
  description2?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
};

/**
 * FinalCtaSection Component
 *
 * The final call-to-action section with a button.
 * Updated to match the target design with more detailed styling.
 */
export default function FinalCtaSection({
  title = "AI & Automation will unlock growth.\nFind out how.",
  description1 = "With our free Process Health Check®, we'll show you how AI and automation can be deployed successfully in your business.",
  description2 = "Places are limited and in high demand. Reserve today!",
  buttonText = "Reserve Your Place Now",
  buttonHref = "https://calendly.com/aivantage-scheduling/partnership-follow-up",
  className = "",
}: FinalCtaSectionProps) {
  return (
    <div className="bg-purple-700 text-white">
      <Section className="py-16 sm:py-20 md:py-24 lg:py-28">
        <Container className="text-center max-w-5xl mx-auto">
          <Decorative>
            {/* Background decorative elements */}
            <DecorativeCircles>
              <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 w-60 h-60 rounded-full border-4 border-white opacity-10 animate-rotate-slow overflow-visible"></div>
              <div
                className="absolute bottom-10 right-1/4 w-40 h-40 rounded-full border-2 border-white opacity-10 animate-rotate-slow overflow-visible"
                style={{ animationDirection: "reverse" }}
              ></div>
            </DecorativeCircles>

            <FadeIn>
              <HeadingLG
                className="mb-3 sm:mb-4 md:mb-5 font-normal text-center text-white tracking-tight"
                dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, "<br />") }}
              />
              <SectionDescription className="mb-8 sm:mb-10 md:mb-12 text-white opacity-90 text-center text-base leading-relaxed">
                {description1.includes("free Process Health Check") ? (
                  <>
                    With our <strong>free Process Health Check</strong>
                    <span className="text-orange-400">®</span>, we&apos;ll show you how AI and
                    automation can be deployed successfully in your business.
                  </>
                ) : (
                  description1
                )}
              </SectionDescription>
              <SectionDescription className="mb-8 sm:mb-10 md:mb-12 text-white opacity-90 text-center text-base leading-relaxed">
                {description2}
              </SectionDescription>
              <div className="flex justify-center">
                <Button
                  href={buttonHref}
                  variant="primary-cta"
                  size="lg"
                  
                >
                  {buttonText}
                </Button>
              </div>
            </FadeIn>
          </Decorative>
        </Container>
      </Section>
    </div>
  );
}
