// Performance optimization utilities

export interface PerformanceConfig {
  enableLazyLoading: boolean;
  enablePreload: boolean;
  enableCompression: boolean;
  enableCaching: boolean;
}

export const defaultPerformanceConfig: PerformanceConfig = {
  enableLazyLoading: true,
  enablePreload: true,
  enableCompression: true,
  enableCaching: true,
};

// Generate responsive image srcset
export function generateSrcSet(
  baseUrl: string,
  widths: number[] = [400, 800, 1200, 1600],
  format: 'webp' | 'auto' = 'auto'
): string {
  if (!baseUrl.includes('cloudinary.com')) {
    return '';
  }

  const baseUrlParts = baseUrl.split('/upload/');
  const baseUploadUrl = baseUrlParts[0] + '/upload/';
  const imagePath = baseUrlParts[1];

  return widths
    .map(width => {
      const formatParam = format === 'webp' ? 'f_webp' : 'f_auto';
      return `${baseUploadUrl}${formatParam},q_auto,w_${width}/${imagePath} ${width}w`;
    })
    .join(', ');
}

// Generate WebP srcset
export function generateWebPSrcSet(baseUrl: string): string {
  return generateSrcSet(baseUrl, [400, 800, 1200, 1600], 'webp');
}

// Optimize image loading
export function getImageLoadingStrategy(
  isAboveTheFold: boolean = false,
  isCritical: boolean = false
): 'lazy' | 'eager' {
  if (isAboveTheFold || isCritical) {
    return 'eager';
  }
  return 'lazy';
}

// Generate preload hints for critical resources
export function generatePreloadHints(): string[] {
  return [
    '<link rel="preload" href="/logo.ico" as="image" type="image/x-icon" />',
    '<link rel="preload" href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap" as="style" />',
    '<link rel="dns-prefetch" href="https://fonts.googleapis.com" />',
    '<link rel="dns-prefetch" href="https://fonts.gstatic.com" />',
    '<link rel="dns-prefetch" href="https://res.cloudinary.com" />',
    '<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />',
  ];
}

// Generate resource hints for external domains
export function generateResourceHints(): string[] {
  return [
    '<link rel="preconnect" href="https://fonts.googleapis.com" />',
    '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />',
    '<link rel="preconnect" href="https://res.cloudinary.com" />',
    '<link rel="preconnect" href="https://cdnjs.cloudflare.com" />',
  ];
}

// Optimize CSS loading
export function optimizeCSSLoading(): string[] {
  return [
    '<link rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" as="style" onload="this.onload=null;this.rel=\'stylesheet\'" />',
    '<noscript><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" /></noscript>',
  ];
}

// Generate critical CSS inline
export function getCriticalCSS(): string {
  return `
    :root {
      --color-primary: #8bbaca;
      --color-secondary: #ffffff;
      --color-accent: #4a90e2;
      --color-text: #333333;
      --color-background: #f8f8f8;
      --color-black: #000000;
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
}

// Performance monitoring
export function injectPerformanceMonitoring(): string {
  return `
    <script>
      // Performance monitoring
      window.addEventListener('load', function() {
        if ('performance' in window) {
          const perfData = performance.getEntriesByType('navigation')[0];
          const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
          const domContentLoaded = perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart;
          
          // Send to analytics if available
          if (window.gtag) {
            gtag('event', 'timing_complete', {
              name: 'load',
              value: Math.round(loadTime),
              event_category: 'performance'
            });
            
            gtag('event', 'timing_complete', {
              name: 'dom_content_loaded',
              value: Math.round(domContentLoaded),
              event_category: 'performance'
            });
          }
          
          // Log to console in development
          // if (import.meta.env.DEV) {
          //   console.log('Performance metrics:', {
          //     loadTime: Math.round(loadTime),
          //     domContentLoaded: Math.round(domContentLoaded)
          //   });
          // }
        }
      });
    </script>
  `;
} 