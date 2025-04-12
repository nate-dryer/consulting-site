/**
 * Audit Image Usage Script
 *
 * This script scans the codebase for image usage and reports any issues with:
 * - Standard <img> tags that should be replaced with next/image
 * - next/image components missing required props (width, height, sizes)
 * - Images missing alt text
 */

const fs = require("fs");
const path = require("path");

const glob = require("glob");

// Directories to scan
const DIRECTORIES = ["app/components", "app/sections", "app/pages"];

// Patterns to check
const PATTERNS = [
  {
    name: "Standard <img> tags",
    pattern: /<img([^>]*)>/g,
    check: (match, p1) => {
      return {
        issue: "Standard <img> tag should be replaced with next/image",
        match: match,
      };
    },
  },
  {
    name: "next/image without sizes prop when using fill",
    pattern: /<Image([^>]*)(fill)([^>]*)>/g,
    check: (match, p1, p2, p3) => {
      if (!p1.includes("sizes=") && !p3.includes("sizes=")) {
        return {
          issue: "next/image with fill prop is missing sizes prop",
          match: match,
        };
      }
      return null;
    },
  },
  {
    name: "next/image without alt text",
    pattern: /<Image([^>]*)>/g,
    check: (match, p1) => {
      if (!p1.includes("alt=") && !p1.includes("decorative={true}")) {
        return {
          issue: "next/image is missing alt text",
          match: match,
        };
      }
      return null;
    },
  },
];

// Get all files in the directories
function getFiles() {
  const files = [];

  DIRECTORIES.forEach((dir) => {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      const pattern = path.join(dirPath, "**/*.{tsx,jsx}");
      const matches = glob.sync(pattern);
      files.push(...matches);
    }
  });

  return [...new Set(files)]; // Remove duplicates
}

// Check a file for issues
function checkFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const issues = [];

  PATTERNS.forEach((pattern) => {
    let match;
    while ((match = pattern.pattern.exec(content)) !== null) {
      const issue = pattern.check(...match);
      if (issue) {
        issues.push({
          file: filePath,
          ...issue,
        });
      }
    }
  });

  return issues;
}

// Main function
function main() {
  const files = getFiles();
  let totalIssues = 0;

  console.log("Auditing image usage in the codebase...");
  console.log(`Found ${files.length} files to check.`);

  files.forEach((file) => {
    const issues = checkFile(file);
    if (issues.length > 0) {
      console.log(`\nIssues in ${file}:`);
      issues.forEach((issue) => {
        console.log(`  - ${issue.issue}`);
        console.log(`    ${issue.match.trim()}`);
      });
      totalIssues += issues.length;
    }
  });

  console.log(`\nAudit complete. Found ${totalIssues} issues.`);

  if (totalIssues > 0) {
    console.log("\nRecommendations:");
    console.log("1. Replace standard <img> tags with next/image components");
    console.log("2. Add sizes prop to next/image components with fill prop");
    console.log("3. Add alt text to all next/image components or mark as decorative");
    console.log("\nExample usage:");
    console.log(`
// For fixed size images
<Image
  src="/image.jpg"
  alt="Description of the image"
  width={500}
  height={300}
/>

// For responsive images with fill
<div className="relative w-full h-[300px]">
  <Image
    src="/image.jpg"
    alt="Description of the image"
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    style={{ objectFit: 'cover' }}
  />
</div>

// For decorative images
<Image
  src="/decorative-image.jpg"
  alt=""
  width={500}
  height={300}
/>

// Or using the OptimizedImage component
<OptimizedImage
  src="/decorative-image.jpg"
  decorative={true}
  width={500}
  height={300}
/>
`);
  }
}

main();
