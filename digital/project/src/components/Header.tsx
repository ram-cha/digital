import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

interface HeaderProps {
  openLeadModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ openLeadModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDropdown = (menu: string) => {
    if (activeDropdown === menu) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(menu);
    }
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-900">
              <span className="text-blue-500">Pulse</span>Digital
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="flex items-center text-gray-800 hover:text-blue-600 font-medium transition-colors"
                onClick={() => toggleDropdown('services')}
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden transition-all duration-200 ${
                activeDropdown === 'services' ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <a href="#seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">SEO Optimization</a>
                <a href="#ppc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">PPC Campaigns</a>
                <a href="#social" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Social Media</a>
                <a href="#content" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">Content Marketing</a>
              </div>
            </div>
            <a href="#case-studies" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              Case Studies
            </a>
            <a href="#team" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              Our Team
            </a>
            <a href="#blog" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              Blog
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-600 font-medium transition-colors">
              Contact
            </a>
            <button
              onClick={openLeadModal}
              className={`${
                isScrolled
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600'
              } hover:bg-blue-700 hover:text-white transition-colors py-2 px-4 rounded-md font-medium shadow-sm`}
            >
              Get a Proposal
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-800" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-md mt-2 shadow-lg">
            <div>
              <button 
                className="w-full text-left px-3 py-2 text-gray-800 hover:bg-blue-50 font-medium flex justify-between items-center"
                onClick={() => toggleDropdown('mobile-services')}
              >
                Services <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === 'mobile-services' ? 'rotate-180' : ''}`} />
              </button>
              <div className={`${activeDropdown === 'mobile-services' ? 'block' : 'hidden'} pl-4`}>
                <a href="#seo" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">SEO Optimization</a>
                <a href="#ppc" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">PPC Campaigns</a>
                <a href="#social" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Social Media</a>
                <a href="#content" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50">Content Marketing</a>
              </div>
            </div>
            <a href="#case-studies" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 font-medium">
              Case Studies
            </a>
            <a href="#team" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 font-medium">
              Our Team
            </a>
            <a href="#blog" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 font-medium">
              Blog
            </a>
            <a href="#contact" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 font-medium">
              Contact
            </a>
            <button
              onClick={() => {
                openLeadModal();
                setIsMenuOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-blue-600 hover:bg-blue-50 font-medium"
            >
              Get a Proposal
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};