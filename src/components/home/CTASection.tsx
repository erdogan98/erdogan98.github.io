import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function CTASection() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-primary">
      <div className="container text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-primary-foreground mb-6">
          {t('nav.consultation')}
        </h2>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact" className="inline-flex items-center gap-2">
              {t('hero.cta')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="tel:+902125550100" className="inline-flex items-center gap-2">
              <Phone className="h-5 w-5" />
              +90 (212) 555-0100
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
