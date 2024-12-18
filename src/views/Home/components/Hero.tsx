export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900">
          Share Your Movies With<br />
          <span className="text-indigo-600">The World</span>
        </h1>
        <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
          Upload, share, and discover amazing movies from creators worldwide.
          High-quality streaming for everyone.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
          <button className="px-8 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}