import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSnippet() {
  const { language, t } = useLanguage();

  const values = [
    t('about.value1'),
    t('about.value2'),
    t('about.value3'),
    t('about.value4'),
  ];

  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider mb-4 block">
              {t('about.title')}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-6">
              {t('about.subtitle')}
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('about.description')}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="p-1 bg-primary/10 rounded-full">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{value}</span>
                </div>
              ))}
            </div>
            <Button asChild>
              <Link to="/about" className="inline-flex items-center gap-2">
                {t('hero.learnMore')}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] bg-primary/10 border border-border overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="font-serif text-xl text-primary italic leading-relaxed">
                    {language === 'en' 
                      ? '"My commitment to my clients is to provide transparent, solution-oriented, and professional legal support at every stage."'
                      : '"Müvekkillerime taahhüdüm, her aşamada şeffaf, çözüm odaklı ve profesyonel hukuki destek sunmaktır."'
                    }
                  </p>
                  <p className="mt-4 text-muted-foreground">— Av. Oktay Şekerli</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
