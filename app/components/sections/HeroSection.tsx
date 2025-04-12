import Image from "next/image";

import FadeIn from "../animations/FadeIn";
import SlideInRight from "../animations/SlideInRight";
import Button from "../Button";
import { HoverLiftShadow } from "../Card";
import Icon from "../Icon";
import { Section, Container } from "../Layout";
import { HeadingXL, SectionSubtitle } from "../Typography";

/**
 * HeroSection Component
 *
 * The main hero section displayed at the top of the homepage.
 */
export default function HeroSection() {
  return (
    <Section
      className="pt-20 pb-12 md:pt-28 lg:pt-32 sm:pb-16 md:pb-20 bg-white"
      style={{ marginBottom: "0" }}
    >
      <Container className="max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <FadeIn className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
            <HeadingXL className="mb-3 sm:mb-4 md:mb-5 font-normal">
              <div className="text-purple-700 mb-2">AI & Automation</div>
              <div className="mb-2">Process</div>
              <div>Consultants</div>
            </HeadingXL>
            <SectionSubtitle className="mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto md:mx-0 text-base">
              At AIvantage, we improve business growth and lower costs. Our services include
              automation consulting, digital transformation, and custom AI development.
            </SectionSubtitle>
            <SectionSubtitle className="mb-8 sm:mb-10 md:mb-12 max-w-xl mx-auto md:mx-0 text-base">
              To learn how you can benefit from AI & automation consultancy, simply request a free
              Process Health Check.
            </SectionSubtitle>
            <div className="flex justify-center md:justify-start">
              <HoverLiftShadow>
                <Button
                  href="https://calendly.com/aivantage-scheduling/partnership-follow-up"
                  variant="primary-cta"
                  size="lg"
                  
                >
                  Get Started
                  <Icon name="fa:FaArrowRight" className="ml-2" size="sm" title="Arrow right" />
                </Button>
              </HoverLiftShadow>
            </div>
          </FadeIn>
          <SlideInRight className="md:w-1/2 md:pl-8 lg:pl-12">
            <div className="relative w-full h-auto flex justify-center items-center">
              <Image
                src="/images/hero-image.png"
                alt="AI & Automation Consultants"
                width={700}
                height={500}
                className="w-full h-auto object-contain max-w-[700px] mx-auto"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px"
                priority
              />
            </div>
          </SlideInRight>
        </div>
      </Container>
    </Section>
  );
}
