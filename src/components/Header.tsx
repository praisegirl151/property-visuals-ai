import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Home, Building2, Users, Map, Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/", text: "Home", icon: Home },
    { href: "/properties", text: "Properties", icon: Building2 },
    { href: "/agents", text: "Agents", icon: Users },
    { href: "/neighborhoods", text: "Neighborhoods", icon: Map },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-2">
             <Home className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">Makao Homes</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href} 
                to={link.href} 
                className={({ isActive }) => 
                  `px-4 py-2 rounded-full text-gray-600 font-medium hover:bg-gray-100 hover:text-blue-600 transition-colors flex items-center space-x-2 ${isActive ? 'text-blue-600 bg-blue-50' : ''}`
                }
              >
                <link.icon size={20} />
                <span>{link.text}</span>
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 font-medium hover:text-blue-600">Login</button>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors">Sign Up</button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href} 
                to={link.href} 
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => 
                  `px-4 py-3 rounded-lg text-gray-600 font-medium hover:bg-gray-100 flex items-center space-x-3 ${isActive ? 'text-blue-600 bg-blue-50' : ''}`
                }
              >
                <link.icon size={22} />
                <span>{link.text}</span>
              </NavLink>
            ))}
            <div className="border-t pt-4 space-y-2">
                <button className="w-full text-left px-4 py-3 rounded-lg text-gray-600 font-medium hover:bg-gray-100">Login</button>
                <button className="w-full text-left bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">Sign Up</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}