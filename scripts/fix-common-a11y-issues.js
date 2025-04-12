/**
 * Fix Common Accessibility Issues Script
 *
 * This script automatically fixes some common accessibility issues in the codebase.
 * It's not a replacement for manual fixes, but it can help with some of the more
 * straightforward issues.
 */

const fs = require("fs");
const path = require("path");

const glob = require("glob");

// Directories to scan
const DIRECTORIES = ["app/components", "app/sections", "app/pages"];

// Common accessibility issues to fix
const FIXES = [
  {
    name: "Add aria-hidden to decorative SVGs",
    pattern: /<svg([^>]*)>/g,
    replacement: (match, p1) => {
      if (p1.includes("aria-hidden")) {
        return match;
      }
      return `<svg${p1} aria-hidden="true">`;
    },
    extensions: [".tsx", ".jsx"],
  },
  {
    name: 'Add role="img" and aria-label to informative SVGs',
    pattern: /<svg([^>]*)(aria-labelledby|aria-label)([^>]*)>/g,
    replacement: (match, p1, p2, p3) => {
      if (p1.includes('role="img"')) {
        return match;
      }
      return `<svg${p1}${p2}${p3} role="img">`;
    },
    extensions: [".tsx", ".jsx"],
  },
  {
    name: "Add alt attributes to img tags",
    pattern: /<img([^>]*)>/g,
    replacement: (match, p1) => {
      if (p1.includes("alt=")) {
        return match;
      }
      return `<img${p1} alt="">`;
    },
    extensions: [".tsx", ".jsx"],
  },
  {
    name: "Add aria-label to buttons with only icons",
    pattern: /<button([^>]*)>([^<]*)<([^>]*icon[^>]*)>([^<]*)<\/button>/g,
    replacement: (match, p1, p2, p3, p4) => {
      if (p1.includes("aria-label") || p2.trim() || p4.trim()) {
        return match;
      }
      return `<button${p1} aria-label="Button">${p2}<${p3}>${p4}</button>`;
    },
    extensions: [".tsx", ".jsx"],
  },
  {
    name: "Add tabIndex to interactive divs",
    pattern: /<div([^>]*)(onClick|onKeyDown)([^>]*)>/g,
    replacement: (match, p1, p2, p3) => {
      if (p1.includes("tabIndex") || p1.includes("tabindex")) {
        return match;
      }
      return `<div${p1}${p2}${p3} tabIndex={0}>`;
    },
    extensions: [".tsx", ".jsx"],
  },
  {
    name: "Add role to interactive divs",
    pattern: /<div([^>]*)(onClick|onKeyDown)([^>]*)(tabIndex|tabindex)([^>]*)>/g,
    replacement: (match, p1, p2, p3, p4, p5) => {
      if (p1.includes("role=")) {
        return match;
      }
      return `<div${p1}${p2}${p3}${p4}${p5} role="button">`;
    },
    extensions: [".tsx", ".jsx"],
  },
  {
    name: "Add keyboard event handlers to interactive divs",
    pattern:
      /<div([^>]*)onClick={([^}]*)}([^>]*)(tabIndex|tabindex)([^>]*)(role="button")([^>]*)>/g,
    replacement: (match, p1, p2, p3, p4, p5, p6, p7) => {
      if (p1.includes("onKeyDown") || p3.includes("onKeyDown")) {
        return match;
      }
      return `<div${p1}onClick={${p2}}${p3}${p4}${p5}${p6}${p7} onKeyDown={(e) => e.key === 'Enter' && ${p2}()}>`;
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
  console.log("Fixing common accessibility issues...");

  const files = getFiles();
  console.log(`Found ${files.length} files to check.`);

  let fixedFiles = 0;

  files.forEach((file) => {
    console.log(`Checking ${file}...`);
    const fixed = applyFixes(file);
    if (fixed) {
      fixedFiles++;
    }
  });

  console.log(`\nFixed ${fixedFiles} files.`);
  console.log("Done!");
}

// Run the script
main();
