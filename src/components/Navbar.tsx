import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/contexts/ThemeContext';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.querySelector(href.replace('/', ''));
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`rounded-full px-6 py-3 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/60 backdrop-blur-xl border border-white/20 shadow-lg shadow-primary/10' 
            : 'bg-transparent'
        }`}
      >
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="nav-link font-nav font-medium"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm nav-link font-nav font-medium"
            >
              {link.name}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
            aria-label="Toggle theme"
          >
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} className="w-4 h-4" />
          </button>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
