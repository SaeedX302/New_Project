import { Upload, Search, LogIn, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Upload className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-bold">MovieShare</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Browse</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Categories</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">About</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button className="flex items-center space-x-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </button>
            </div>
          </div>

          <button 
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Home</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Browse</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">Categories</a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">About</a>
          </div>
        </div>
      )}
    </header>
  );
}