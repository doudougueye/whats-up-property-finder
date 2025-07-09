
import React, { useState } from 'react';
import { Menu, X, Home, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PropConnect</h1>
              <p className="text-sm text-gray-600">Premium Real Estate</p>  
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#properties" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Properties
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a href="#properties" className="text-gray-700 hover:text-blue-600 font-medium">
                Properties
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">
                About
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </a>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 w-full">
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
