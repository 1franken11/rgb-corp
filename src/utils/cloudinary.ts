// Cloudinary image optimization utilities

export interface CloudinaryConfig {
  cloudName: string;
  defaultTransformations: string;
  quality: number;
  format: 'auto' | 'webp' | 'jpg' | 'png';
}

export const cloudinaryConfig: CloudinaryConfig = {
  cloudName: 'drwacbtjf',
  defaultTransformations: 'f_auto,q_auto',
  quality: 80,
  format: 'auto'
};

// Generate optimized image URL
export function getOptimizedImageUrl(
  publicId: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    format?: 'auto' | 'webp' | 'jpg' | 'png';
    crop?: 'fill' | 'fit' | 'limit' | 'thumb' | 'scale';
    gravity?: 'auto' | 'center' | 'north' | 'south' | 'east' | 'west';
  } = {}
): string {
  const {
    width,
    height,
    quality = cloudinaryConfig.quality,
    format = cloudinaryConfig.format,
    crop = 'fill',
    gravity = 'auto'
  } = options;

  let transformations = `f_${format},q_${quality}`;
  
  if (width) transformations += `,w_${width}`;
  if (height) transformations += `,h_${height}`;
  if (crop) transformations += `,c_${crop}`;
  if (gravity) transformations += `,g_${gravity}`;

  return `https://res.cloudinary.com/${cloudinaryConfig.cloudName}/image/upload/${transformations}/${publicId}`;
}

// Generate responsive image srcset
export function getResponsiveSrcSet(
  publicId: string,
  widths: number[] = [400, 800, 1200, 1600],
  options: {
    quality?: number;
    format?: 'auto' | 'webp' | 'jpg' | 'png';
    crop?: 'fill' | 'fit' | 'limit' | 'thumb' | 'scale';
    height?: number;
    width?: number;
  } = {}
): string {
  return widths
    .map(width => {
      const url = getOptimizedImageUrl(publicId, { ...options, width });
      return `${url} ${width}w`;
    })
    .join(', ');
}

// Generate WebP srcset
export function getWebPSrcSet(
  publicId: string,
  widths: number[] = [400, 800, 1200, 1600],
  options: {
    quality?: number;
    crop?: 'fill' | 'fit' | 'limit' | 'thumb' | 'scale';
    height?: number;
  } = {}
): string {
  return getResponsiveSrcSet(publicId, widths, { ...options, format: 'webp' as const });
}

// Generate placeholder image (blurred, low quality)
export function getPlaceholderUrl(publicId: string, width: number = 20): string {
  return getOptimizedImageUrl(publicId, {
    width,
    quality: 10,
    format: 'auto',
    crop: 'fill',
    gravity: 'auto'
  });
}

// Generate thumbnail for gallery
export function getThumbnailUrl(publicId: string, width: number = 300): string {
  return getOptimizedImageUrl(publicId, {
    width,
    height: width,
    quality: 70,
    format: 'auto',
    crop: 'fill',
    gravity: 'auto'
  });
}

// Generate hero image (large, high quality)
export function getHeroImageUrl(publicId: string, width: number = 1200): string {
  return getOptimizedImageUrl(publicId, {
    width,
    quality: 90,
    format: 'auto',
    crop: 'fill',
    gravity: 'auto'
  });
}

// Generate background image for CSS
export function getBackgroundImageUrl(publicId: string, width: number = 800): string {
  return getOptimizedImageUrl(publicId, {
    width,
    quality: 75,
    format: 'auto',
    crop: 'fill',
    gravity: 'auto'
  });
}

// Generate logo image
export function getLogoUrl(publicId: string, width: number = 200): string {
  return getOptimizedImageUrl(publicId, {
    width,
    quality: 90,
    format: 'auto',
    crop: 'fit',
    gravity: 'auto'
  });
}

// Generate favicon
export function getFaviconUrl(publicId: string, size: number = 32): string {
  return getOptimizedImageUrl(publicId, {
    width: size,
    height: size,
    quality: 90,
    format: 'auto',
    crop: 'fill',
    gravity: 'auto'
  });
}

// Generate social media image
export function getSocialImageUrl(publicId: string): string {
  return getOptimizedImageUrl(publicId, {
    width: 1200,
    height: 630,
    quality: 85,
    format: 'auto',
    crop: 'fill',
    gravity: 'auto'
  });
}

// Generate multiple format URLs for picture element
export function getPictureSources(publicId: string, widths: number[] = [400, 800, 1200]): {
  webp: string;
  fallback: string;
} {
  return {
    webp: getWebPSrcSet(publicId, widths),
    fallback: getResponsiveSrcSet(publicId, widths)
  };
}

// Generate lazy loading image with placeholder
export function getLazyImageData(
  publicId: string,
  alt: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    placeholderWidth?: number;
  } = {}
): {
  src: string;
  srcset: string;
  placeholder: string;
  alt: string;
} {
  const { width = 800, height, quality = 80, placeholderWidth = 20 } = options;
  
  return {
    src: getOptimizedImageUrl(publicId, { width, height, quality }),
    srcset: getResponsiveSrcSet(publicId, [400, 800, 1200], { width, height, quality }),
    placeholder: getPlaceholderUrl(publicId, placeholderWidth),
    alt
  };
}

// Generate image component props
export function getImageProps(
  publicId: string,
  alt: string,
  options: {
    width?: number;
    height?: number;
    quality?: number;
    loading?: 'lazy' | 'eager';
    priority?: boolean;
    className?: string;
  } = {}
): {
  src: string;
  srcset: string;
  alt: string;
  loading: 'lazy' | 'eager';
  className?: string;
} {
  const { width = 800, height, quality = 80, loading = 'lazy', priority = false, className } = options;
  
  return {
    src: getOptimizedImageUrl(publicId, { width, height, quality }),
    srcset: getResponsiveSrcSet(publicId, [400, 800, 1200], { width, height, quality }),
    alt,
    loading: priority ? 'eager' : loading,
    className
  };
}
