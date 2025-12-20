import { Link } from 'react-router-dom';
import { Building2, Gavel, Heart, Home, Shield, Plane, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function PracticeAreasSection() {
  const { t } = useLanguage();

  const areas = [
    { icon: Building2, titleKey: 'practice.corporate.title', descKey: 'practice.corporate.desc', slug: 'corporate-law' },
    { icon: Gavel, titleKey: 'practice.litigation.title', descKey: 'practice.litigation.desc', slug: 'litigation' },
    { icon: Heart, titleKey: 'practice.family.title', descKey: 'practice.family.desc', slug: 'family-law' },
    { icon: Home, titleKey: 'practice.real.title', descKey: 'practice.real.desc', slug: 'real-estate' },
    { icon: Shield, titleKey: 'practice.criminal.title', descKey: 'practice.criminal.desc', slug: 'criminal-defense' },
    { icon: Plane, titleKey: 'practice.immigration.title', descKey: 'practice.immigration.desc', slug: 'immigration' },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t('practice.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('practice.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <Link
              key={index}
              to={`/practice-areas/${area.slug}`}
              className="group p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="mb-4 p-3 bg-primary/10 inline-block">
                <area.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {t(area.titleKey)}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t(area.descKey)}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
