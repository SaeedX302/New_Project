import type { MovieCategory } from '@/utils/constants';

export interface Movie {
  title: string;
  imageUrl: string;
  category: MovieCategory;
  rating: number;
}

export interface MovieCardProps extends Movie {
  className?: string;
}