import { Upload, Mail, Twitter, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Upload className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold">MovieShare</span>
            </div>
            <p className="mt-4 text-gray-600 max-w-md">
              Share your movies with the world. High-quality streaming platform for
              filmmakers and movie enthusiasts.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Resources
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-indigo-600">
                  API
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">
              Connect
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  <Mail className="h-5 w-5 mr-2" />
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-gray-600 hover:text-indigo-600">
                  <Github className="h-5 w-5 mr-2" />
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} MovieShare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}