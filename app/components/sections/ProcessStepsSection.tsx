"use client";

import Image from "next/image";
import { useRef } from "react";
import EnhancedScrollAnimatedCard from "../animations/EnhancedScrollAnimatedCard";

import FadeIn from "../animations/FadeIn";
// Removed SlideInLeft and SlideInRight imports
import StaggerContainer from "../animations/StaggerContainer";
import Icon from "../Icon";
import { Section, Container, SectionHeader } from "../Layout";
import { MotionCard } from "../Card"; // Import MotionCard
import { HeadingLG, HeadingMD, SectionDescription } from "../Typography";

/**
 * Step Card Props
 */
// Removed local StepCardProps and StepCard definition

/**
 * ProcessStepsSection Component
 *
 * Section showcasing the 4-step process to AI & Automation success.
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
      imageSrc: "/placeholders/step-1.svg",
      colorVariant: "purple", // Step 1: Purple theme
    },
    {
      number: 2,
      title: "Personalised AI & Automation Roadmap",
      description:
        "We provide a tailored automation roadmap with our recommended AI automation plan ready to implement. We calculate the time and cost savings at every step.",
      delay: 100,
      imageSrc: "/placeholders/step-2.svg",
      colorVariant: "indigo", // Step 2: Indigo theme
    },
    {
      number: 3,
      title: "Implementation, Setup & Testing",
      description:
        "Our automation engineers implement the solutions from the roadmap, automating your tasks and integrating your technology stack for maximum efficiency.",
      delay: 200,
      imageSrc: "/placeholders/step-3.svg",
      colorVariant: "blue", // Step 3: Blue theme
    },
    {
      number: 4,
      title: "Ongoing Support & Updates",
      description:
        "We provide comprehensive support and regular updates to ensure your AI and automation solutions continue to deliver optimal results as your business evolves.",
      delay: 300,
      imageSrc: "/placeholders/step-4.svg",
      colorVariant: "violet", // Step 4: Violet theme
    },
  ];

  return (
    <Section className="bg-white py-20 md:py-28" style={{ marginTop: "0" }}>
      <Container className="max-w-7xl mx-auto">
        <SectionHeader>
          <FadeIn>
            {/* Centered header with proper spacing and alignment */}
            <div className="text-center px-4 md:px-0">
              <HeadingLG className="text-purple-700 mb-4 font-normal">
                Your 4-Steps to AI & Automation Success
              </HeadingLG>
              <SectionDescription className="mb-8 md:mb-12 max-w-2xl mx-auto">
                Implementing AI and automation has never been easier with AIvantage!
              </SectionDescription>
            </div>
          </FadeIn>
        </SectionHeader>

        {/* Desktop view with timeline */}
        <div className="hidden md:block relative mt-16 max-w-5xl mx-auto">
          {/* Timeline line - more subtle and positioned behind cards */}
          <div className="absolute left-1/2 top-8 bottom-0 w-0.5 bg-purple-100 opacity-30 -translate-x-1/2 z-0"></div>

          {/* Steps with alternating layout */}
          <div className="relative z-10 space-y-24">
            {steps.map((step) => {
              const isOnLeft = step.number % 2 === 1;
              // const delay = (step.number - 1) * 150; // Delay not needed for scroll animation
              const colors = { // Simplified color logic based on variant
                badgeBg: `bg-${step.colorVariant}-600`,
                titleColor: `text-${step.colorVariant}-700`,
                borderColor: `border-${step.colorVariant}-100`,
                bgColor: `bg-${step.colorVariant}-50`,
              };
              // Removed AnimationComponent

              // No need for manual scroll animation setup - using EnhancedScrollAnimatedCard


              return (
                <div
                  key={step.number}
                  className={`grid grid-cols-2 gap-8 ${!isOnLeft ? "direction-rtl" : "direction-ltr"}`}
                >
                  <div className={!isOnLeft ? "col-start-2" : "col-start-1"}>
                      <EnhancedScrollAnimatedCard
                        direction={isOnLeft ? "left" : "right"}
                        className="w-full"
                        intensity="medium"
                      >
                        <MotionCard
                          className={`${colors.bgColor} border ${colors.borderColor} max-w-[95%] ${isOnLeft ? 'mr-auto' : 'ml-auto'}`} // Removed default padding p-8
                        >
                        <div className={`flex items-start gap-6 p-8 ${!isOnLeft ? 'text-right' : 'text-left'}`}>
                          <div className={`flex-shrink-0 ${!isOnLeft ? 'order-last' : 'order-first'}`}>
                            <div
                              className={`w-14 h-14 flex items-center justify-center rounded-full ${colors.badgeBg}`}
                            >
                              <span className="text-white font-bold text-sm">Step {step.number}</span>
                            </div>
                          </div>
                          <div className="flex-1">
                            <HeadingMD className={`text-xl font-semibold mb-3 ${colors.titleColor}`}>
                              {step.title}
                            </HeadingMD>
                            <p className="text-gray-600 text-base leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                        {step.imageSrc && (
                          <div className="mt-0 p-8 pt-0 flex justify-center"> {/* Adjusted padding */}
                            <div className="relative w-full h-60">
                              <Image
                                src={step.imageSrc}
                                alt={step.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{ objectFit: "contain" }}
                                priority={step.number === 1}
                              />
                            </div>
                          </div>
                        )}
                      </MotionCard>
                      </EnhancedScrollAnimatedCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile view */}
        <div className="md:hidden space-y-6 mt-8 px-4">
          {steps.map((step) => {
             const delay = (step.number - 1) * 150;
             const colors = { // Simplified color logic based on variant
                badgeBg: `bg-${step.colorVariant}-600`,
                titleColor: `text-${step.colorVariant}-700`,
                borderColor: `border-${step.colorVariant}-100`,
                bgColor: `bg-${step.colorVariant}-50`,
              };

            return (
              <FadeIn key={step.number} delay={delay} className="w-full">
                 <MotionCard
                    className={`${colors.bgColor} border ${colors.borderColor} p-6`} // Apply mobile padding
                 >
                    <div className="flex items-start gap-4">
                       <div className={`flex-shrink-0 ${step.number % 2 === 1 ? "order-first" : "order-last"}`}>
                         <div
                           className={`w-12 h-12 flex items-center justify-center rounded-full ${colors.badgeBg}`}
                         >
                           <span className="text-white font-bold text-xs">Step {step.number}</span>
                         </div>
                       </div>
                       <div className="flex-1">
                         <HeadingMD className={`text-lg font-semibold mb-2 ${colors.titleColor}`}>
                           {step.title}
                         </HeadingMD>
                         <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                       </div>
                     </div>
                     {step.imageSrc && (
                       <div className="mt-6 flex justify-center">
                         <div className="relative w-full h-48">
                           <Image
                             src={step.imageSrc}
                             alt={step.title}
                             fill
                             sizes="100vw"
                             style={{ objectFit: "contain" }}
                             priority={step.number === 1}
                           />
                         </div>
                       </div>
                     )}
                 </MotionCard>
               </FadeIn>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
