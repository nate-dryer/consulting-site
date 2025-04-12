import Image from "next/image";

import {
  CARD_RADIUS,
  CARD_PADDING,
  CARD_PADDING_MD,
  TRANSITION_DEFAULT,
  HOVER_LIFT,
  SHADOW_DEFAULT,
  SHADOW_HOVER,
} from "../../constants/design";
import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import { PrimaryGradient, WaveConnectorBottom } from "../Background";
import Icon from "../Icon";
import { MotionCard } from "../Card"; // Import MotionCard
import { Section, Container } from "../Layout";
import { HeadingLG, HeadingMD, SectionDescription } from "../Typography";
import WaveDivider from "../WaveDivider";

/**
 * Feature Card Props
 */
// Removed local FeatureCardProps and FeatureCard definition

/**
 * AiAutomationSection Component
 *
 * Section showcasing the power of AI & Automation with feature cards.
 */
export default function AiAutomationSection() {
  // Feature data with updated icons and content to match target design
  const features = [
    {
      iconSrc: "/placeholders/crm-icon.svg",
      title: "Supercharged CRM with AI-Powered Automation",
      subtitle: "Transform your CRM into a powerhouse of sales opportunities",
      description:
        "Turn your CRM from a simple database into an intelligent sales engine. Our AI solutions automate repetitive tasks, allowing your team to focus on closing deals and building relationships.",
      delay: 0,
    },
    {
      iconSrc: "/placeholders/marketing-icon.svg",
      title: "Better Results with AI & Marketing Automation",
      subtitle: "Optimize campaigns and improve ROI with intelligent automation",
      description:
        "Leverage AI to enhance your marketing efforts with data-driven insights, automated campaign management, and personalized customer journeys that deliver measurable results.",
      delay: 100,
    },
    {
      iconSrc: "/placeholders/revenue-icon.svg",
      title: "Increase Revenue with AI & Sales Automation",
      subtitle: "Help your sales team spend more time actually selling",
      description:
        "Salespeople typically spend only 28% of their time selling. Our AI solutions automate administrative tasks, follow-ups, and data entry so your team can focus on revenue-generating activities.",
      delay: 200,
    },
    {
      iconSrc: "/placeholders/integration-icon.svg",
      title: "Software Integration and Automation",
      subtitle: "Connect your tech stack for seamless operations",
      description:
        "We specialize in connecting disparate systems and automating workflows between them. Our integration expertise ensures your technology enhances rather than hinders your business growth.",
      delay: 300,
    },
  ];

  return (
    <>
      {/* Add top wave divider between hero and purple section */}
      <div style={{ marginBottom: "0", backgroundColor: "white", overflow: "hidden" }}>
        <WaveDivider position="top" fromColor="#7D48F3" toColor="#6D28D9" height={120} />
      </div>

      {/* Harness the Power of AI & Automation Section */}
      <PrimaryGradient
        className="relative text-white"
        style={{
          marginBottom: "0",
          background: "#7D48F3" /* Matching the exact purple from the target design */,
          backgroundImage: "linear-gradient(90deg, #7D48F3, #6D28D9)",
        }}
      >
        <Section className="py-14 sm:py-16 md:py-20"> {/* Restored default bottom padding */}
          <Container className="relative z-10 max-w-7xl mx-auto">
            <FadeIn>
              <HeadingLG className="mb-3 sm:mb-4 md:mb-5 text-center font-normal text-white tracking-tight">
                Harness the Power of AI & Automation
              </HeadingLG>

              <SectionDescription className="text-white mb-8 sm:mb-10 md:mb-12 opacity-90 text-center text-lg">
                How we grow your business with AI & Automation
              </SectionDescription>
            </FadeIn>

            {/* 4-column grid layout for features */}
            <StaggerContainer
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-5"
              staggerDelay={0.1}
            >
              {features.map((feature, index) => (
                <MotionCard
                  key={index}
                  className="p-6 sm:p-8 h-full flex flex-col border border-gray-100 space-y-4 group" // Added group class for icon hover
                >
                  <FadeIn delay={index * 100}>
                    {/* Icon at the top */}
                    <div className="flex justify-center">
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
                      ) : null /* Assuming iconName is not used here based on data */}
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-center text-gray-800 break-words">
                      {feature.title}
                    </h3>

                    {feature.subtitle && (
                      <p className="text-sm text-gray-700 text-center font-medium leading-relaxed">{feature.subtitle}</p>
                    )}

                    <p className="text-base text-gray-700 leading-relaxed text-center">{feature.description}</p>
                  </FadeIn>
                </MotionCard>
              ))}
            </StaggerContainer>
          </Container>
        </Section>
      </PrimaryGradient>

      {/* Curved bottom shape - outward curve */}
      <WaveConnectorBottom style={{ overflow: "hidden" }}> {/* Removed my-8 margin */}
        <WaveDivider position="bottom" fromColor="#7D48F3" toColor="#6D28D9" height={120} />
      </WaveConnectorBottom>
    </>
  );
}
