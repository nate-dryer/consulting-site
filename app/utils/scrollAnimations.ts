/**
 * Scroll Animation Utility
 *
 * This utility adds scroll-triggered animations to elements with specific classes.
 * It uses IntersectionObserver for better performance with a fallback for older browsers.
 * Respects user's motion preferences for accessibility.
 */

// Animation classes that will be observed
const ANIMATION_CLASSES = [
  ".fade-in-on-scroll",
  ".slide-in-left-on-scroll",
  ".slide-in-right-on-scroll",
];

// Animation configuration
const ANIMATION_CONFIG = {
  rootMargin: "0px 0px -120px 0px", // 120px offset from bottom
  threshold: 0.1, // trigger when 10% of the element is visible
  throttleDelay: 99, // ms between throttled events (as per style guide)
};

// Store instances for cleanup
let observer: IntersectionObserver | null = null;
let scrollHandler: EventListener | null = null;
let resizeHandler: EventListener | null = null;

/**
 * Throttle function to limit how often a function can be called
 * @param callback Function to throttle
 * @param limit Time limit in milliseconds
 * @returns Throttled function
 */
function throttle<T extends (...args: unknown[]) => unknown>(
  callback: T,
  limit = ANIMATION_CONFIG.throttleDelay
): (...args: Parameters<T>) => void {
  let waiting = false;
  return function (this: unknown, ...args: Parameters<T>) {
    if (!waiting) {
      callback.apply(this, args);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

/**
 * Check if user prefers reduced motion
 * @returns Boolean indicating if reduced motion is preferred
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Initialize scroll animations using IntersectionObserver for better performance
 */
export function initScrollAnimations(): void {
  // Skip animations if user prefers reduced motion
  if (prefersReducedMotion()) {
    // Add visible class to all elements immediately without animation
    const selector = ANIMATION_CLASSES.join(", ");
    document.querySelectorAll(selector).forEach((element) => {
      element.classList.add("visible");
    });
    return;
  }

  // Check if IntersectionObserver is available
  if ("IntersectionObserver" in window) {
    initWithIntersectionObserver();
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    initWithScrollListener();
  }
}

/**
 * Initialize animations using IntersectionObserver (modern browsers)
 */
function initWithIntersectionObserver(): void {
  // Create observer with options
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Once the animation is triggered, we can stop observing this element
          observer?.unobserve(entry.target);
        }
      });
    },
    {
      root: null, // viewport
      rootMargin: ANIMATION_CONFIG.rootMargin,
      threshold: ANIMATION_CONFIG.threshold,
    }
  );

  // Select all elements with animation classes and observe them
  const selector = ANIMATION_CLASSES.join(", ");
  const animatedElements = document.querySelectorAll(selector);

  animatedElements.forEach((element) => {
    observer?.observe(element);
  });
}

/**
 * Initialize animations using scroll listener (fallback for older browsers)
 */
function initWithScrollListener(): void {
  // Check if an element is in viewport with offset
  function isElementInViewport(el: Element, offset = 120): boolean {
    if (!el) return false;

    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight - offset &&
      rect.bottom >= 0 &&
      rect.left <= window.innerWidth &&
      rect.right >= 0
    );
  }

  // Handle scroll events to trigger animations
  function handleScrollAnimations(): void {
    // Select all elements with animation classes
    const selector = ANIMATION_CLASSES.join(", ");
    const animatedElements = document.querySelectorAll(selector);

    animatedElements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("visible");
      }
    });
  }

  // Create throttled handlers and store references for cleanup
  scrollHandler = throttle(handleScrollAnimations) as EventListener;
  resizeHandler = throttle(handleScrollAnimations) as EventListener;

  // Run once on load to check for elements already in viewport
  handleScrollAnimations();

  // Add throttled event listeners
  window.addEventListener("scroll", scrollHandler, { passive: true });
  window.addEventListener("resize", resizeHandler, { passive: true });
}

/**
 * Clean up function to remove event listeners and observers
 */
export function cleanupScrollAnimations(): void {
  if (observer) {
    observer.disconnect();
    observer = null;
  }

  // Remove event listeners if they exist
  if (scrollHandler) {
    window.removeEventListener("scroll", scrollHandler);
    scrollHandler = null;
  }

  if (resizeHandler) {
    window.removeEventListener("resize", resizeHandler);
    resizeHandler = null;
  }
}
