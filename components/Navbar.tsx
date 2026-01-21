import React, { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'O Menu', href: '#pilares' },
    { label: 'Processo', href: '#processo' },
    { label: 'Blog', href: '#blog-preview' },
  ];

  // Handle scroll for active section highlight
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['sobre', 'menu', 'processo', 'blog-preview'];
      const scrollPosition = window.scrollY + 150;

      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          current = '#' + section;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen ? 'bg-white/95 backdrop-blur-md border-b border-primary/10 shadow-sm' : 'bg-transparent border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Coffee className="h-8 w-8 text-primary" strokeWidth={2} />
            <span className="font-display font-semibold text-xl tracking-tight text-primary">
              Terapia com Café
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`transition-colors font-medium text-sm uppercase tracking-wide relative group cursor-pointer ${isActive ? 'text-primary' : 'text-gray-600 hover:text-primary'
                    }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </a>
              );
            })}
            <a
              href="#agendar"
              className="bg-action text-white px-6 py-2.5 rounded-full font-medium hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Agendar Sessão
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none p-2"
              aria-label="Menu principal"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-primary/10 shadow-xl overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 border-l-4 ${isActive
                    ? 'bg-secondary/10 text-secondary border-secondary'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-primary border-transparent hover:border-primary/30'
                  }`}
              >
                <div className="flex justify-between items-center">
                  {item.label}
                  {isActive && <span className="w-2 h-2 rounded-full bg-secondary"></span>}
                </div>
              </a>
            );
          })}
          <div className="pt-2 px-2">
            <a
              href="#agendar"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full text-center bg-action text-white px-6 py-3 rounded-lg font-bold shadow-md active:scale-95 transition-transform"
            >
              Agendar Sessão
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};