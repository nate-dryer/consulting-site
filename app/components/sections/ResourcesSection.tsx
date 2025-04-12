"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import FadeIn from "../animations/FadeIn";
import StaggerContainer from "../animations/StaggerContainer";
import { Section, Container, SectionHeader } from "../Layout";
import { HeadingLG, HeadingMD } from "../Typography";
import { MotionCard } from "../Card"; // Import MotionCard

/**
 * Resource Card Props
 */
// Removed local ResourceCardProps and ResourceCard definition

/**
 * ResourcesSection Component
 *
 * Section showcasing case studies, articles, and resources.
 */
export default function ResourcesSection() {
  // Resources data
  const resources = [
    {
      title: "Automated Lead Management: What Is It and Why Should You Set it Up?",
      subtitle: "Lead Management",
      href: "/blog/automated-lead-management-software",
      delay: 0,
    },
    {
      title: "Sales Automation: The Essential Guide",
      subtitle: "Sales Automation",
      href: "/blog/sales-automation-the-essential-guide",
      delay: 100,
    },
    {
      title: "How to Automate Customer Engagement Process to Avoid Churn",
      subtitle: "Customer Engagement",
      href: "/blog/how-to-automate-customer-engagement-process-to-avoid-churn",
      delay: 200,
    },
    {
      title: "7 Must-Have Pipedrive Integrations for Marketing Automation",
      subtitle: "Marketing Automation",
      href: "/blog/pipedrive-integrations-for-marketing-automation",
      delay: 300,
    },
  ];

  return (
    <Section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <Container className="max-w-7xl mx-auto">
        <SectionHeader>
          <FadeIn>
            <HeadingLG className="text-center mb-3 sm:mb-4 md:mb-5 font-normal">
              Case studies, articles, and resources
            </HeadingLG>
          </FadeIn>
        </SectionHeader>
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 lg:gap-6 mb-12"
          staggerDelay={0.1}
        >
          {resources.map((resource, index) => (
            <FadeIn key={index} delay={resource.delay}>
              <MotionCard
                href={resource.href}
                className="p-6 h-full flex flex-col overflow-hidden border border-gray-100 rounded-xl" // Apply original styles, MotionCard handles bg, shadow, hover
              >
                <div className="mb-2">
                  <span className="text-xs text-purple-600 font-medium uppercase tracking-wider">
                    {resource.subtitle}
                  </span>
                </div>
                <HeadingMD className="text-lg font-semibold mb-4 text-gray-800 line-clamp-2 leading-tight">
                  {resource.title}
                </HeadingMD>
                <div className="mt-auto">
                  {/* Link is now the card itself, just show text/icon */}
                  <span className="text-purple-600 flex items-center group-hover:text-purple-800 transition-colors duration-200 text-sm font-medium group-hover:underline">
                    Read blog <FaArrowRight className="ml-2 text-xs" />
                  </span>
                </div>
              </MotionCard>
            </FadeIn>
          ))}
        </StaggerContainer>
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block text-purple-600 hover:text-purple-800 font-medium py-2 px-6 transition-colors duration-300 border-b-2 border-purple-600 hover:border-purple-800"
          >
            Read blog
          </Link>
        </div>
      </Container>
    </Section>
  );
}
