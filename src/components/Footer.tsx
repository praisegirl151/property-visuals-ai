import { Home, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Home className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">Makao Homes</span>
            </Link>
            <p className="text-gray-400">
              Your key to finding the perfect home in Africa. We simplify the search for luxury properties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/properties" className="text-gray-400 hover:text-white">All Properties</Link></li>
              <li><Link to="/agents" className="text-gray-400 hover:text-white">Find an Agent</Link></li>
              <li><Link to="/neighborhoods" className="text-gray-400 hover:text-white">Neighborhood Guides</Link></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Biashara St, Nairobi, Kenya</li>
              <li>contact@makaohomes.com</li>
              <li>+254 700 123 456</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Instagram size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Makao Homes. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}