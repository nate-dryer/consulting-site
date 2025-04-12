"use client";

import {
  CARD_RADIUS,
  SHADOW_DEFAULT,
  SHADOW_HOVER,
  TRANSITION_DEFAULT,
  HOVER_LIFT,
  CARD_PADDING,
  CARD_PADDING_MD,
} from "../../../constants/design";
import FadeIn from "../../animations/FadeIn";
import SlideInLeft from "../../animations/SlideInLeft";
import SlideInRight from "../../animations/SlideInRight";
import { Section, Container, SectionHeader } from "../../Layout";
import { HeadingLG, SectionDescription } from "../../Typography";

/**
 * Step Card Props
 */
type StepCardProps = {
  number: number;
  title: string;
  description: string;
  delay?: number;
  colorVariant?: string;
  direction?: "left" | "right";
};

/**
 * StepCard Component
 *
 * A card displaying a process step with a number, title, and description.
 * Updated to match the target design with a vertical card layout and consistent styling.
 * Now with directional slide-in animations for a parallax-like effect.
 */
function StepCard({ number, title, description, delay = 0, colorVariant, direction = "left" }: StepCardProps) {
  // Define color variations based on step number or provided variant
  const getColorClasses = () => {
    // Use specific colors for each step to match the original design
    if (!colorVariant) {
      switch (number) {
        case 1:
          return {
            titleColor: "text-purple-700",
            bgColor: "bg-purple-100",
          };
        case 2:
          return {
            titleColor: "text-blue-700",
            bgColor: "bg-blue-100",
          };
        case 3:
          return {
            titleColor: "text-indigo-700",
            bgColor: "bg-indigo-100",
          };
        case 4:
          return {
            titleColor: "text-violet-700",
            bgColor: "bg-violet-100",
          };
        default:
          return {
            titleColor: "text-purple-700",
            bgColor: "bg-purple-100",
          };
      }
    } else {
      return {
        titleColor: `text-${colorVariant}-700`,
        bgColor: `bg-${colorVariant}-100`,
      };
    }
  };

  const colors = getColorClasses();

  // Use SlideInLeft or SlideInRight based on the direction prop
  const AnimationWrapper = direction === "left" ? SlideInLeft : SlideInRight;

  return (
    <AnimationWrapper
      className={`${colors.bgColor} ${CARD_RADIUS} ${SHADOW_DEFAULT} ${SHADOW_HOVER} ${TRANSITION_DEFAULT} ${HOVER_LIFT} ${CARD_PADDING} ${CARD_PADDING_MD} group h-full flex flex-col border border-gray-100 space-y-4`}
      delay={delay * 1000} // Convert to milliseconds for consistency with other components
      viewport={{ once: true, amount: 0.1, margin: "0px 0px -200px 0px" }}
    >
      {/* Circle with number */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto rounded-full transition-transform duration-300 group-hover:scale-110">
        <h3 className={`text-lg font-semibold ${colors.titleColor}`}>{number}</h3>
      </div>

      <h3 className="text-lg font-semibold leading-snug text-center text-gray-800 break-words">
        {title}
      </h3>

      <p className="text-base text-gray-700 leading-relaxed text-center">{description}</p>
    </AnimationWrapper>
  );
}

/**
 * ProcessStepsSection Component
 *
 * Section showcasing the 4-step process to AI & Automation success.
 * Updated to match the target design with vertical cards and alternating animations.
 */
export default function ProcessStepsSection() {
  // Steps data with updated content and images to match target design
  const steps = [
    {
      number: 1,
      title: "Free Process Health Check",
      description:
        "Our consultants meticulously review your current processes, identifying areas ripe for AI & automation that can boost productivity and cut costs.",
      delay: 0,
      // Using default color scheme from getColorClasses
    },
    {
      number: 2,
      title: "Personalised AI & Automation Roadmap",
      description:
        "We provide a tailored automation roadmap with our recommended AI automation plan ready to implement. We calculate the time and cost savings at every step.",
      delay: 0.1,
      // Using default color scheme from getColorClasses
    },
    {
      number: 3,
      title: "Implementation, Setup & Testing",
      description:
        "Our automation engineers implement the solutions from the roadmap, they'll get busy automating your tasks and integrating your tech.",
      delay: 0.2,
      // Using default color scheme from getColorClasses
    },
    {
      number: 4,
      title: "Ongoing Support & Updates",
      description:
        "We provide comprehensive support and regular updates to ensure your AI and automation solutions continue to deliver optimal results as your business evolves.",
      delay: 0.3,
      // Using default color scheme from getColorClasses
    },
  ];

  return (
    <Section className="bg-white pt-8 md:pt-10 -mt-16 md:-mt-24"> {/* Increased negative margin to better balance spacing with wave divider */}
      <Container className="max-w-7xl mx-auto">
        <SectionHeader>
          <FadeIn>
            {/* Centered header with proper spacing and alignment */}
            <div className="text-center px-4 md:px-0">
              <HeadingLG className="text-purple-700 mb-3 sm:mb-4 md:mb-5 font-normal tracking-tight">
                Your 4-Steps to AI & Automation Success
              </HeadingLG>
              <SectionDescription className="mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto">
                Implementing AI and automation has never been easier with AIvantage!
              </SectionDescription>
            </div>
          </FadeIn>
        </SectionHeader>

        {/* Cards with alternating slide-in animations - centered on all devices */}
        {/* Removed pb-* as Section handles bottom padding. Added mt-heading-lg-bottom for space below header */}
        <div className="flex flex-col items-center gap-card-gap w-full max-w-md mx-auto px-4">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              delay={step.delay}
              direction={step.number % 2 === 0 ? "right" : "left"} // Even numbers from right, odd from left
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}
