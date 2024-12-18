import { useState } from 'react';
import MovieCard from '@/components/ui/MovieCard';
import CategoryFilter from '@/components/ui/CategoryFilter';
import { FEATURED_MOVIES } from '@/data/movies';
import type { MovieCategory } from '@/utils/constants';

export default function FeaturedMovies() {
  const [selectedCategory, setSelectedCategory] = useState<MovieCategory>('All');

  const filteredMovies = selectedCategory === 'All'
    ? FEATURED_MOVIES
    : FEATURED_MOVIES.filter(movie => movie.category === selectedCategory);

  return (
    <section className="py-16 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Movies</h2>
            <p className="mt-2 text-gray-600">Discover our collection of amazing films</p>
          </div>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMovies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </section>
  );
}