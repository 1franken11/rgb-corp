// Core Web Vitals monitoring and optimization utilities

export interface WebVitalsData {
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  fcp: number; // First Contentful Paint
  ttfb: number; // Time to First Byte
}

export interface PerformanceMetrics {
  loadTime: number;
  domContentLoaded: number;
  firstPaint: number;
  firstContentfulPaint: number;
  largestContentfulPaint: number;
  firstInputDelay: number;
  cumulativeLayoutShift: number;
  ttfb: number;
}

// Monitor Core Web Vitals
export function monitorCoreWebVitals(): void {
  if (typeof window === 'undefined') return;

  const metrics: Partial<PerformanceMetrics> = {};

  // First Contentful Paint
  if ('PerformanceObserver' in window) {
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const fcp = entries[entries.length - 1];
      if (fcp) {
        metrics.firstContentfulPaint = fcp.startTime;
        logMetric('FCP', fcp.startTime);
      }
    }).observe({ entryTypes: ['paint'] });

    // Largest Contentful Paint
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lcp = entries[entries.length - 1];
      if (lcp) {
        metrics.largestContentfulPaint = lcp.startTime;
        logMetric('LCP', lcp.startTime);
      }
    }).observe({ entryTypes: ['largest-contentful-paint'] });

    // First Input Delay
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry) => {
        const firstInput = entry as PerformanceEventTiming;
        if (firstInput.processingStart - firstInput.startTime > 0) {
          const fid = firstInput.processingStart - firstInput.startTime;
          metrics.firstInputDelay = fid;
          logMetric('FID', fid);
        }
      });
    }).observe({ entryTypes: ['first-input'] });

    // Cumulative Layout Shift
    let clsValue = 0;
    new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach((entry: any) => {
        if (!entry.hadRecentInput) {
          clsValue += entry.value;
          metrics.cumulativeLayoutShift = clsValue;
          logMetric('CLS', clsValue);
        }
      });
    }).observe({ entryTypes: ['layout-shift'] });
  }

  // Page load metrics
  window.addEventListener('load', () => {
    if ('performance' in window) {
      const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      metrics.loadTime = perfData.loadEventEnd - perfData.loadEventStart;
      metrics.domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
      metrics.ttfb = perfData.responseStart - perfData.requestStart;

      logMetric('Load Time', metrics.loadTime);
      logMetric('DOM Content Loaded', metrics.domContentLoaded);
      logMetric('TTFB', metrics.ttfb);
    }
  });
}

// Log metrics to console and analytics
function logMetric(name: string, value: number): void {
  console.log(`${name}: ${Math.round(value)}ms`);
  
  // Send to Google Analytics if available
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'web_vitals', {
      event_category: 'Web Vitals',
      event_label: name,
      value: Math.round(value)
    });
  }
}

// Optimize images for Core Web Vitals
export function optimizeImagesForLCP(): void {
  if (typeof document === 'undefined') return;

  const images = document.querySelectorAll('img');
  images.forEach(img => {
    // Add loading="lazy" to images below the fold
    if (!isAboveTheFold(img)) {
      img.loading = 'lazy';
    }
    
    // Add width and height attributes to prevent layout shift
    if (!img.width || !img.height) {
      img.style.aspectRatio = '16/9'; // Default aspect ratio
    }
  });
}

// Check if element is above the fold
function isAboveTheFold(element: Element): boolean {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight;
}

// Optimize fonts for Core Web Vitals
export function optimizeFonts(): void {
  if (typeof document === 'undefined') return;

  // Preload critical fonts
  const fontLinks = document.querySelectorAll('link[rel="preload"][as="font"]');
  fontLinks.forEach(link => {
    link.setAttribute('crossorigin', 'anonymous');
  });

  // Add font-display: swap to prevent FOIT
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Quicksand';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
}

// Optimize CSS for Core Web Vitals
export function optimizeCSS(): void {
  if (typeof document === 'undefined') return;

  // Inline critical CSS
  const criticalCSS = `
    :root {
      --color-primary: #8bbaca;
      --color-secondary: #ffffff;
      --color-accent: #4a90e2;
      --color-text: #333333;
      --color-background: #f8f8f8;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
    
    html {
      margin: 0;
      width: 100%;
      overflow-x: hidden;
      font-family: 'Quicksand', sans-serif;
      font-weight: 500;
      font-style: normal;
    }
    
    body {
      margin: 0;
      width: 100%;
      overflow-x: hidden;
      font-family: 'Quicksand', sans-serif;
      font-weight: 500;
      font-style: normal;
      background-color: #ffffff;
      min-height: 100vh;
    }
  `;

  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.insertBefore(style, document.head.firstChild);
}

// Optimize JavaScript for Core Web Vitals
export function optimizeJavaScript(): void {
  if (typeof document === 'undefined') return;

  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
    if (!script.hasAttribute('async') && !script.hasAttribute('defer')) {
      script.setAttribute('defer', '');
    }
  });

  // Use requestIdleCallback for non-critical tasks
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      // Load non-critical resources
      loadNonCriticalResources();
    });
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(loadNonCriticalResources, 1000);
  }
}

// Load non-critical resources
function loadNonCriticalResources(): void {
  // Load Font Awesome icons
  const fontAwesomeLink = document.createElement('link');
  fontAwesomeLink.rel = 'stylesheet';
  fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css';
  document.head.appendChild(fontAwesomeLink);
}

// Initialize all optimizations
export function initializeCoreWebVitalsOptimization(): void {
  if (typeof window === 'undefined') return;

  // Monitor Core Web Vitals
  monitorCoreWebVitals();

  // Optimize on DOM content loaded
  document.addEventListener('DOMContentLoaded', () => {
    optimizeImagesForLCP();
    optimizeFonts();
    optimizeCSS();
    optimizeJavaScript();
  });

  // Optimize on load
  window.addEventListener('load', () => {
    // Additional optimizations after page load
    console.log('Page fully loaded - Core Web Vitals optimization complete');
  });
}

// Declare global types
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
} 