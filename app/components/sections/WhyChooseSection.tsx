import Image from "next/image";

import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import Icon from "../Icon";
import { Section, Container, SectionHeader } from "../Layout";
import { HeadingLG, HeadingMD } from "../Typography";
import { MotionCard } from "../Card"; // Import MotionCard

/**
 * Feature Item Props
 */
// Removed local FeatureItemProps and FeatureItem definition

/**
 * WhyChooseSection Component
 *
 * Section showcasing why customers should choose AIvantage.
 */
export default function WhyChooseSection() {
  // Features data with updated icons and content to match target design
  const features = [
    {
      iconSrc: "/placeholders/trusted-consultants-icon.svg",
      title: "Trusted AI & Automation Consultants",
      description:
        "AIvantage is a trusted automation partner for leading cybersecurity, IT and tech firms. We understand your goals and commit to a plan to help you reach them. Your success is our success.",
      delay: 0,
    },
    {
      iconSrc: "/placeholders/industry-expertise-icon.svg",
      title: "Unmatched Industry Expertise",
      description:
        "Our team of global experts are skilled in business growth, sales, marketing, and tech. Our solutions are extensively researched and tested, ensuring you get trusted automation advice.",
      delay: 100,
    },
    {
      iconSrc: "/placeholders/business-growth-icon.svg",
      title: "Control your Business Growth",
      description:
        "We simplify AI & automation, making it easy for you to focus on high-value outcomes and growing your business. Take back control with AIvantage.",
      delay: 200,
    },
    {
      iconSrc: "/placeholders/training-support-icon.svg",
      title: "Ongoing Training & Support",
      description:
        "We ensure a seamless transition to an automated workflow, providing your team with complete onboarding, training, and technical support.",
      delay: 300,
    },
  ];

  return (
    <Section className="bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-28">
      <Container className="max-w-7xl mx-auto">
        <SectionHeader>
          <FadeIn>
            <HeadingLG className="text-center mb-3 sm:mb-4 md:mb-5 font-normal tracking-tight">
              Why Choose AIvantage
            </HeadingLG>
          </FadeIn>
        </SectionHeader>
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20"
          staggerDelay={0.1}
        >
          {features.map((feature, index) => (
            <FadeIn key={index} delay={feature.delay}>
              {/* Use MotionCard, applying flex layout and removing default padding */}
              <MotionCard className="p-0 shadow-none bg-transparent border-none flex items-start gap-5 sm:gap-8 group">
                <div className="flex-shrink-0">
                  {feature.iconSrc ? (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={feature.iconSrc}
                        alt={feature.title}
                        width={80}
                        height={80}
                        className="object-contain"
                        sizes="(max-width: 768px) 64px, 80px"
                      />
                    </div>
                  ) : null /* Assuming iconName is not used */}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800 leading-snug break-words">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-700 leading-relaxed font-normal max-w-md">
                    {feature.description}
                  </p>
                </div>
              </MotionCard>
            </FadeIn>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
