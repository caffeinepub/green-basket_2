/**
 * Static fallback image URL for products.
 * This module is deprecated for dynamic Unsplash Source URL generation.
 * All product images now use static direct Unsplash CDN URLs.
 */

export const STATIC_FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80';

/**
 * @deprecated Use static direct Unsplash CDN URLs in product data instead.
 * Returns a static fallback image URL.
 */
export function getUnsplashSourceUrl(_productName: string): string {
  return STATIC_FALLBACK_IMAGE;
}

/**
 * @deprecated Use static direct Unsplash CDN URLs in product data instead.
 * Returns a static fallback image URL.
 */
export function getFallbackImageUrl(_productName: string): string {
  return STATIC_FALLBACK_IMAGE;
}
