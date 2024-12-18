import Hero from './components/Hero';
import FeaturedMovies from './components/FeaturedMovies';
import UploadSection from './components/UploadSection';

export default function HomeView() {
  return (
    <>
      <Hero />
      <FeaturedMovies />
      <UploadSection />
    </>
  );
}