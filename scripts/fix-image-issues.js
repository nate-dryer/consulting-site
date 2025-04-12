/**
 * Fix Image Issues Script
 *
 * This script automatically fixes some common image issues in the codebase.
 * It's not a replacement for manual fixes, but it can help with some of the more
 * straightforward issues.
 */

const fs = require("fs");
const path = require("path");

const glob = require("glob");

// Directories to scan
const DIRECTORIES = ["app/components", "app/sections", "app/pages"];

// Common image issues to fix
const FIXES = [
  {
    name: "Add sizes prop to next/image with fill",
    pattern: /<Image([^>]*)(fill)([^>]*?)>/g,
    replacement: (match, p1, p2, p3) => {
      if (!p1.includes("sizes=") && !p3.includes("sizes=")) {
        return `<Image${p1}${p2}${p3} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw">`;
      }
      return match;
    },
    extensions: [".tsx", ".jsx"],
  },
  {
    name: "Add empty alt text to next/image without alt",
    pattern: /<Image([^>]*?)>/g,
    replacement: (match, p1) => {
      if (!p1.includes("alt=") && !p1.includes("decorative={true}")) {
        return `<Image${p1} alt="">`;
      }
      return match;
    },
    extensions: [".tsx", ".jsx"],
  },
];

// Get all files in the directories
function getFiles() {
  const files = [];

  DIRECTORIES.forEach((dir) => {
    const dirPath = path.join(process.cwd(), dir);
    if (fs.existsSync(dirPath)) {
      FIXES.forEach((fix) => {
        fix.extensions.forEach((ext) => {
          const pattern = path.join(dirPath, `**/*${ext}`);
          const matches = glob.sync(pattern);
          files.push(...matches);
        });
      });
    }
  });

  return [...new Set(files)]; // Remove duplicates
}

// Apply fixes to a file
function applyFixes(filePath) {
  let content = fs.readFileSync(filePath, "utf8");
  let fixesApplied = false;

  FIXES.forEach((fix) => {
    const extension = path.extname(filePath);
    if (fix.extensions.includes(extension)) {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        fixesApplied = true;
        console.log(`  - Applied fix: ${fix.name}`);
      }
    }
  });

  if (fixesApplied) {
    fs.writeFileSync(filePath, content, "utf8");
    return true;
  }

  return false;
}

// Main function
function main() {
  const files = getFiles();
  let totalFixesApplied = 0;

  console.log("Fixing common image issues in the codebase...");
  console.log(`Found ${files.length} files to check.`);

  files.forEach((file) => {
    console.log(`\nChecking ${file}...`);
    if (applyFixes(file)) {
      totalFixesApplied++;
    }
  });

  console.log(`\nFixes applied to ${totalFixesApplied} files.`);

  if (totalFixesApplied > 0) {
    console.log("\nNote: This script only fixes some common issues. You should still:");
    console.log("1. Replace standard <img> tags with next/image components manually");
    console.log("2. Add meaningful alt text to images that need it");
    console.log("3. Consider using the OptimizedImage component for new images");
  }
}

main();
