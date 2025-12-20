import { Link } from 'react-router-dom';
import { Shield, Heart, Landmark, Building2, Briefcase, Scale, FileText, Gavel, BadgeDollarSign, Home, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function PracticeAreasSection() {
  const { language, t } = useLanguage();

  const areas = [
    { icon: Shield, titleKey: 'practice.criminal.title', descKey: 'practice.criminal.desc', slug: 'criminal-law' },
    { icon: Heart, titleKey: 'practice.family.title', descKey: 'practice.family.desc', slug: 'family-law' },
    { icon: Landmark, titleKey: 'practice.estates.title', descKey: 'practice.estates.desc', slug: 'estates' },
    { icon: Building2, titleKey: 'practice.admin.title', descKey: 'practice.admin.desc', slug: 'administrative-law' },
    { icon: Briefcase, titleKey: 'practice.labor.title', descKey: 'practice.labor.desc', slug: 'employment-law' },
    { icon: Scale, titleKey: 'practice.corporate.title', descKey: 'practice.corporate.desc', slug: 'corporate-law' },
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
              to="/practice-areas"
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
                {language === 'en' ? 'Learn more' : 'Daha fazla'} <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/practice-areas"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            {language === 'en' ? 'View all practice areas' : 'Tüm çalışma alanlarını görüntüle'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
