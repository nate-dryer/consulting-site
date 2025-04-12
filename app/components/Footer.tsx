import Link from "next/link";
import { memo } from "react";

import FooterForm from "./FooterForm";
import Icon from "./Icon";
import { Container } from "./Layout";

const footerLinks = [
  {
    title: "Services",
    links: [
      { title: "Free Process Health Check", href: "/power-up" },
      { title: "AI & Automation Services", href: "/services" },
      { title: "Airtable Consulting", href: "/services#crm" },
      { title: "Sales & Marketing Automation", href: "/services#sales-marketing" },
      { title: "Technology Audit", href: "/services#tech-audit" },
      { title: "AI Prompt Engineering", href: "/services#ai-prompt" },
      { title: "Use Cases", href: "/use-cases" },
    ],
  },
  {
    title: "Company",
    links: [
      { title: "Services", href: "/services" },
      { title: "About Us", href: "/about-us" },
      { title: "Contact", href: "/contact-us" },
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/website-terms" },
    ],
  },
  {
    title: "Contact",
    links: [{ title: "hello@aivantage.com", href: "mailto:hello@aivantage.com" }],
    socials: [
      { title: "LinkedIn", href: "https://www.linkedin.com/company/aivantage", icon: "linkedin" },
      { title: "Twitter", href: "https://twitter.com/aivantage", icon: "twitter" },
    ],
  },
];

/**
 * Footer Component
 *
 * Memoized for better performance
 * Updated to match the target design
 */
const Footer = memo(() => {
  return (
    <footer className="bg-gray-800 pt-16 md:pt-20 pb-8 text-white">
      <Container className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          {footerLinks.map((category, index) => (
            <div key={`footer-${index}`} className="">
              <h6 className="text-sm font-bold uppercase mb-4 md:mb-6 text-white tracking-wider">
                {category.title}
              </h6>
              <ul className="space-y-3">
                {category.links.map((link, linkIndex) => (
                  <li key={`footer-link-${index}-${linkIndex}`}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-flex items-center"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>

              {category.socials && (
                <div className="mt-4 flex space-x-4">
                  {category.socials.map((social, socialIndex) => (
                    <a
                      key={`social-${socialIndex}`}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-110 inline-block"
                      aria-label={social.title}
                    >
                      {social.icon === "linkedin" ? (
                        <Icon name="fa:FaLinkedin" size="md" />
                      ) : (
                        <Icon name="fa:FaTwitter" size="md" />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Newsletter Column */}
          <div className="">
            <h6 className="text-sm font-bold uppercase mb-4 md:mb-6 text-white tracking-wider">
              Receive free AI & Automation tips - we never spam
            </h6>
            <FooterForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400 mt-4">
          <p>
            © {new Date().getFullYear()} . All rights reserved | Website built by{" "}
            <a
              href="https://yellowpeach.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-white transition-colors duration-300 underline"
            >
              Yellow Peach
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
});

// Add display name for better debugging
Footer.displayName = "Footer";

export default Footer;
