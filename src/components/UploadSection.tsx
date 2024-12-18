import { Upload, Film } from 'lucide-react';

export default function UploadSection() {
  return (
    <section className="bg-gradient-to-br from-indigo-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <Film className="h-12 w-12 text-indigo-600 mx-auto" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">Share Your Movies</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Upload your movies in just a few clicks. Support for all major formats,
            up to 4K quality.
          </p>
          <button className="mt-8 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <Upload className="h-5 w-5 mr-2" />
            Start Uploading
          </button>
          <p className="mt-4 text-sm text-gray-500">
            Supported formats: MP4, MOV, AVI • Max file size: 2GB
          </p>
        </div>
      </div>
    </section>
  );
}