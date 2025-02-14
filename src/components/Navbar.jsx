import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position to change navbar color (only for lg screens)
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 1024) { // Only apply transparency effect for large screens
        if (window.scrollY > window.innerHeight - 100) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        setScrolled(true); // On mobile, always keep it solid
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // Update if screen resizes

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg ${
        scrolled 
          ? isDarkMode 
            ? 'bg-gray-900/90 shadow-lg' 
            : 'bg-white/90 shadow-lg'
          : 'lg:bg-transparent bg-gray-900/90' // Always solid on mobile, transparent on large screens
      }`}
    >
      <div className="container mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#" 
            className={`text-2xl font-heading font-bold hover:text-accent transition-colors ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}
          >
            RH
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`hover:text-accent hover:scale-105 transition-all duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                {item.name}
              </a>
            ))}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* <ThemeToggle /> */}
            <button
              className={`hover:text-accent transition-colors ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden rounded-lg mt-2 shadow-xl transition-all duration-300 ${
              isDarkMode ? 'bg-gray-800/95' : 'bg-white/95'
            } backdrop-blur-sm`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 rounded-lg transition-all duration-300 ${
                    isDarkMode 
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
