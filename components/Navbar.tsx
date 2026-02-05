import React, { useState, useEffect } from 'react';
import { Menu, X, Atom } from 'lucide-react';

/*
Inicio · Enfoque · Proceso · Trabajo · Contacto
*/
const links = [
  { name: 'Inicio', href: '#home' },
  { name: 'Enfoque', href: '#focus' },
  { name: 'Proceso', href: '#process' },
  { name: 'Trabajo', href: '#work' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contacto', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/70 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center group h-16">
          <img
            src="/assets/logo.svg"
            alt="Soarity"
            className="h-16 md:h-36 w-auto object-contain transition-all duration-300"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.innerHTML = '<span class="font-display font-bold text-xl tracking-tight text-white">SOARITY</span>';
            }}
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/50 hover:text-white transition-colors uppercase tracking-widest font-sans"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-brand-accent text-brand-black px-6 py-2 rounded-full font-bold text-sm hover:bg-brand-accent/90 transition-all uppercase tracking-widest font-sans"
          >
            Comenzar
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-white/80 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};