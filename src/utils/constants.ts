// Navigation
export const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Browse', href: '/browse' },
  { label: 'Categories', href: '/categories' },
  { label: 'About', href: '/about' },
] as const;

// Categories
export const MOVIE_CATEGORIES = [
  'All',
  'Action',
  'Drama',
  'Comedy',
  'Horror',
  'Sci-Fi',
] as const;

export type MovieCategory = (typeof MOVIE_CATEGORIES)[number];

// File Upload
export const SUPPORTED_FORMATS = ['MP4', 'MOV', 'AVI'] as const;
export const MAX_FILE_SIZE = '2GB';