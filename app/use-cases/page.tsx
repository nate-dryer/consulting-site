import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

import BlogPostCard from "../components/BlogPostCard";
import WaveDivider from "../components/WaveDivider";

export default function UseCases() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-16 pb-0 md:pt-24 md:pb-0 bg-gray-100" style={{ marginBottom: "0" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-purple-600">Use</span>{" "}
                <span className="text-purple-800">Cases</span>
              </h1>
              <p className="text-lg text-gray-700 mb-6">
                Discover how AIvantage&apos;s AI and automation solutions can transform your business
                processes, boost productivity, and drive growth across various industries and use
                cases.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <Image
                  src="/images/Asset-1-1-1024x744.png"
                  alt="AI & Automation Use Cases"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add top wave divider */}
      <div className="mb-0 bg-gray-100 overflow-hidden">
        <WaveDivider position="top" fromColor="#7D48F3" toColor="#5B21B6" height={120} />
      </div>

      {/* Industry Use Cases Section */}
      <section className="pt-16 pb-16 md:pt-20 md:pb-20 bg-primary-gradient text-white relative overflow-hidden mb-0">
        {/* Background decorative elements */}
        <div className="bg-decorative-circles">
          <div className="absolute top-20 left-20 w-60 h-60 rounded-full border-4 border-white animate-rotate-slow"></div>
          <div
            className="absolute bottom-40 right-20 w-40 h-40 rounded-full border-2 border-white animate-rotate-slow"
            style={{ animationDirection: "reverse" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center animate-fade-in">
            Industry-Specific Solutions
          </h2>

          <p
            className="text-xl mb-16 text-center max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Explore how our AI and automation solutions address unique challenges across different
            industries
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tech Startups */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Tech Startups</h3>
              <p className="mb-6 leading-relaxed">
                Scale your operations efficiently with automated workflows that grow with your
                business. Our solutions help tech startups streamline processes, reduce manual
                tasks, and focus on innovation.
              </p>
              <Link
                href="/customer/startup"
                className="text-white flex items-center hover:underline transition-colors duration-200"
              >
                Learn more <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Digital Agencies */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Digital Agencies</h3>
              <p className="mb-6 leading-relaxed">
                Enhance client management, streamline project workflows, and improve resource
                allocation with our automation solutions tailored for digital agencies.
              </p>
              <Link
                href="/customer/digitalagencies"
                className="text-white flex items-center hover:underline transition-colors duration-200"
              >
                Learn more <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Outbound Sales */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Outbound Sales</h3>
              <p className="mb-6 leading-relaxed">
                Maximize your sales team&apos;s potential by automating prospecting, follow-ups, and
                data entry. Our solutions help sales teams focus on what they do best – closing
                deals.
              </p>
              <Link
                href="/customer/outbound-sales"
                className="text-white flex items-center hover:underline transition-colors duration-200"
              >
                Learn more <FaArrowRight className="ml-2" />
              </Link>
            </div>

            {/* Recruitment */}
            <div className="bg-white/10 p-8 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4">Recruitment</h3>
              <p className="mb-6 leading-relaxed">
                Transform your hiring process with automated candidate screening, interview
                scheduling, and onboarding workflows that save time and improve candidate
                experience.
              </p>
              <Link
                href="/customer/recruitment"
                className="text-white flex items-center hover:underline transition-colors duration-200"
              >
                Learn more <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Curved bottom shape */}
      <div className="wave-connector-bottom mb-0 overflow-hidden">
        <WaveDivider position="bottom" fromColor="#7D48F3" toColor="#5B21B6" height={120} />
      </div>

      {/* Case Studies Section - Moved from landing page */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Case studies, articles, and resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Blog Post 1 */}
            <BlogPostCard
              title="Automated Lead Management: What Is It and Why Should You Set it Up?"
              slug="automated-lead-management-software"
              placeholderText="Lead Management"
            />

            {/* Blog Post 2 */}
            <BlogPostCard
              title="Sales Automation: The Essential Guide"
              slug="sales-automation-the-essential-guide"
              placeholderText="Sales Automation"
            />

            {/* Blog Post 3 */}
            <BlogPostCard
              title="How to Automate Customer Engagement Process to Avoid Churn"
              slug="how-to-automate-customer-engagement-process-to-avoid-churn"
              placeholderText="Customer Engagement"
            />

            {/* Blog Post 4 */}
            <BlogPostCard
              title="7 Must-Have Pipedrive Integrations for Marketing Automation"
              slug="pipedrive-integrations-for-marketing-automation"
              placeholderText="Pipedrive Integrations"
            />
          </div>

          <div className="text-center">
            <Link
              href="/blog"
              className="text-purple-600 font-medium hover:text-purple-800 hover:underline transition-colors duration-200"
            >
              All articles
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 text-white bg-primary-light">
        <div className="container mx-auto px-4 text-center relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="bg-decorative-circles">
            <div className="absolute top-1/2 left-1/4 w-60 h-60 rounded-full border-4 border-white animate-rotate-slow"></div>
            <div
              className="absolute bottom-0 right-1/4 w-40 h-40 rounded-full border-2 border-white animate-rotate-slow"
              style={{ animationDirection: "reverse" }}
            ></div>
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Ready to transform your business with AI & Automation?
          </h3>
          <p className="text-lg mb-6">
            With our <strong>free Process Health Check</strong>, we&apos;ll show you how AI and
            automation can be deployed successfully in your business.
          </p>
          <p className="text-lg mb-8">Places are limited and in high demand. Reserve today!</p>
          <Link
            href="https://calendly.com/aivantage-scheduling/partnership-follow-up"
            className="btn btn-primary-cta btn-lg inline-block hover-lift-shadow"
          >
            Reserve Your Place Now
          </Link>
        </div>
      </section>
    </>
  );
}
