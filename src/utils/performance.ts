// Performance monitoring utilities for SEO optimization

export interface PerformanceMetrics {
    fcp: number; // First Contentful Paint
    lcp: number; // Largest Contentful Paint
    fid: number; // First Input Delay
    cls: number; // Cumulative Layout Shift
    ttfb: number; // Time to First Byte
  }
  
  export function trackPerformanceMetrics(): void {
    if (typeof window === 'undefined') return;
  
    // Track Core Web Vitals
    if ('PerformanceObserver' in window) {
      // First Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const fcp = entries[entries.length - 1];
        if (fcp) {
          console.log('FCP:', fcp.startTime);
          // Send to analytics
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'FCP',
              value: Math.round(fcp.startTime)
            });
          }
        }
      }).observe({ entryTypes: ['paint'] });
  
      // Largest Contentful Paint
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lcp = entries[entries.length - 1];
        if (lcp) {
          console.log('LCP:', lcp.startTime);
          if (window.gtag) {
            window.gtag('event', 'web_vitals', {
              event_category: 'Web Vitals',
              event_label: 'LCP',
              value: Math.round(lcp.startTime)
            });
          }
        }
      }).observe({ entryTypes: ['largest-contentful-paint'] });
  
      // First Input Delay
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          const firstInput = entry as PerformanceEventTiming;
          if (firstInput.processingStart - firstInput.startTime > 0) {
            const fid = firstInput.processingStart - firstInput.startTime;
            console.log('FID:', fid);
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'FID',
                value: Math.round(fid)
              });
            }
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
            console.log('CLS:', clsValue);
            if (window.gtag) {
              window.gtag('event', 'web_vitals', {
                event_category: 'Web Vitals',
                event_label: 'CLS',
                value: Math.round(clsValue * 1000) / 1000
              });
            }
          }
        });
      }).observe({ entryTypes: ['layout-shift'] });
    }
  
    // Track page load time
    window.addEventListener('load', () => {
      const loadTime = performance.now();
      console.log('Page Load Time:', loadTime);
      if (window.gtag) {
        window.gtag('event', 'timing_complete', {
          name: 'load',
          value: Math.round(loadTime)
        });
      }
    });
  }
  
  // Preload critical resources
  export function preloadCriticalResources(): void {
    if (typeof document === 'undefined') return;
  
    const criticalResources = [
      '/img/logo_optimized.png',
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap'
    ];
  
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = resource.includes('.css') ? 'style' : 'image';
      link.href = resource;
      document.head.appendChild(link);
    });
  }
  
  // Lazy load non-critical images
  export function lazyLoadImages(): void {
    if (typeof window === 'undefined') return;
  
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          img.src = img.dataset.src || '';
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });
  
    images.forEach(img => imageObserver.observe(img));
  }
  
  // Declare global types
  declare global {
    interface Window {
      gtag?: (...args: any[]) => void;
    }
  } 