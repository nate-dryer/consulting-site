"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";

import { navigationItems } from "./navigationItems";
import Button from "../Button";
import Icon from "../Icon";

// Import Framer Motion for animations

interface MobileMenuProps {
  className?: string;
}

export function MobileMenu({ className }: MobileMenuProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="md:hidden text-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-700 rounded-md p-1 hover:bg-gray-100 transition-colors duration-200"
          aria-label="Open menu"
        >
          <Icon name="fa:FaBars" size="md" aria-hidden="true" />
        </button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="p-0 backdrop-blur-md bg-purple-700/80 dark:bg-purple-900/80 w-full sm:max-w-md border-none overflow-y-auto transition-all duration-300"
        aria-label="Mobile Navigation"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <SheetClose className="text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md p-1 hover:bg-purple-600 transition-colors duration-200">
              <Icon name="fa:FaTimes" size="md" aria-hidden="true" />
              <span className="sr-only">Close menu</span>
            </SheetClose>
          </div>

          <nav className="flex flex-col space-y-6 px-6 flex-grow">
            {navigationItems.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-purple-600 pb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={item.href || "#"}
                  className="block py-3 text-white hover:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-md px-2 text-2xl font-normal tracking-tight transition-colors duration-200"
                  onClick={() => {
                    // Close the sheet when a link is clicked
                    (document.querySelector("[data-radix-collection-item]") as HTMLElement | null)?.click();
                  }}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="p-6 border-t border-purple-600 mt-auto flex justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navigationItems.length * 0.1 + 0.1 }}
          >
            <Button
              href="https://calendly.com/aivantage-scheduling/partnership-follow-up"
              variant="primary-cta"
              size="md"
              
            >
              Process Health Check
              <Icon name="fa:FaArrowRight" className="ml-2" size="sm" />
            </Button>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileMenu;
