import { Link } from 'react-router-dom';
import { Scale, Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo & Description */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <Scale className="h-8 w-8" />
              <div className="flex flex-col">
                <span className="font-serif text-xl font-semibold">Legal Excellence</span>
                <span className="text-xs opacity-70 tracking-wider uppercase">Attorneys at Law</span>
              </div>
            </Link>
            <p className="text-sm opacity-80 leading-relaxed">
              {t('footer.disclaimer')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/practice-areas" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t('nav.practiceAreas')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">{t('contact.title')}</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm opacity-80">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Levent Business District<br />Istanbul, Turkey 34330</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+90 (212) 555-0100</span>
              </li>
              <li className="flex items-center gap-3 text-sm opacity-80">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@legalexcellence.com</span>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-6">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  {t('footer.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-center text-sm opacity-70">
            © {currentYear} Legal Excellence. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
