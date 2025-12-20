import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scale, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage, Language } from '@/contexts/LanguageContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/practice-areas', label: t('nav.practiceAreas') },
    { href: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'tr' : 'en');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <Scale className="h-8 w-8 text-primary" />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold text-foreground">Av. Oktay Şekerli</span>
            <span className="text-xs text-muted-foreground tracking-wider uppercase">
              {language === 'en' ? 'Attorney at Law' : 'Avukat'}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.href) ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="h-4 w-4" />
            <span className="uppercase font-medium">{language}</span>
          </button>

          {/* CTA Button */}
          <Button asChild className="hidden md:inline-flex">
            <Link to="/contact">{t('nav.consultation')}</Link>
          </Button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-base font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? 'text-primary' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                {t('nav.consultation')}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
