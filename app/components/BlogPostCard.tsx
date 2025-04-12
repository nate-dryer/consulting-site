"use client";

import dynamic from "next/dynamic";
import { FaArrowRight } from "react-icons/fa";
import { MotionCard } from "./Card"; // Import MotionCard

// Dynamically import the Placeholder component to avoid SSR issues with canvas
const Placeholder = dynamic(() => import("./Placeholder"), { ssr: false });

interface BlogPostCardProps {
  title: string;
  slug: string;
  placeholderText: string;
}

export default function BlogPostCard({ title, slug, placeholderText }: BlogPostCardProps) {
  return (
    <MotionCard
      href={`/blog/${slug}`}
      className="overflow-hidden p-0" // Remove default padding, keep overflow-hidden
    >
      {/* Image Placeholder Area */}
      <div className="h-48 relative overflow-hidden bg-purple-100">
        <div className="w-full h-full flex items-center justify-center">
          <Placeholder
            width={400}
            height={200}
            text={placeholderText}
            bgColor="#f3e8ff"
            textColor="#7e22ce"
          />
        </div>
      </div>
      {/* Content Area */}
      <div className="p-6">
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wider">
          BLOG POST
        </span>
        <h3 className="text-xl font-bold mb-4 mt-2 text-gray-800 line-clamp-2">{title}</h3>
        {/* Link styling is now handled by MotionCard, but keep text/icon */}
        <span className="text-purple-600 flex items-center group-hover:text-purple-800 transition-colors duration-200">
          Read blog <FaArrowRight className="ml-2" />
        </span>
      </div>
    </MotionCard>
  );
}
