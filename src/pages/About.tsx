import { Helmet } from 'react-helmet-async';
import { Award, BookOpen, Users, Target, Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language, t } = useLanguage();

  const meta = {
    en: {
      title: 'About Us | Legal Excellence',
      description: 'Learn about our legacy of legal excellence. Over 25 years of experience providing trusted legal counsel in Istanbul and beyond.',
    },
    tr: {
      title: 'Hakkımızda | Legal Excellence',
      description: 'Hukuki mükemmellik mirasımız hakkında bilgi edinin. İstanbul ve ötesinde güvenilir hukuki danışmanlık sağlayan 25 yılı aşkın deneyim.',
    },
  };

  const credentials = [
    { en: 'Istanbul Bar Association', tr: 'İstanbul Barosu' },
    { en: 'Turkish Bar Association', tr: 'Türkiye Barolar Birliği' },
    { en: 'International Bar Association', tr: 'Uluslararası Barolar Birliği' },
    { en: 'American Bar Association (International)', tr: 'Amerikan Barolar Birliği (Uluslararası)' },
  ];

  const values = [
    {
      icon: Award,
      title: { en: 'Excellence', tr: 'Mükemmellik' },
      desc: { en: 'We strive for the highest standards in every case we handle.', tr: 'Ele aldığımız her davada en yüksek standartları hedefliyoruz.' },
    },
    {
      icon: BookOpen,
      title: { en: 'Integrity', tr: 'Dürüstlük' },
      desc: { en: 'Honest, transparent communication is the foundation of our practice.', tr: 'Dürüst, şeffaf iletişim uygulamalarımızın temelidir.' },
    },
    {
      icon: Users,
      title: { en: 'Client Focus', tr: 'Müvekkil Odaklılık' },
      desc: { en: 'Your goals are our priority. We tailor our approach to your needs.', tr: 'Hedefleriniz önceliğimizdir. Yaklaşımımızı ihtiyaçlarınıza göre şekillendiriyoruz.' },
    },
    {
      icon: Target,
      title: { en: 'Results', tr: 'Sonuç' },
      desc: { en: 'We are committed to achieving the best possible outcomes for our clients.', tr: 'Müvekkillerimiz için mümkün olan en iyi sonuçları elde etmeye kararlıyız.' },
    },
  ];

  return (
    <Layout>
      <Helmet>
        <html lang={language} />
        <title>{meta[language].title}</title>
        <meta name="description" content={meta[language].description} />
      </Helmet>

      {/* Hero */}
      <section className="py-24 bg-primary">
        <div className="container">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-4 block">
              {t('about.title')}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              {t('about.subtitle')}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                {t('about.mission')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {t('about.missionText')}
              </p>
              <div className="space-y-4">
                {credentials.map((cred, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-1 bg-primary/10 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{cred[language]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card border border-border p-8">
              <blockquote className="font-serif text-xl text-foreground italic leading-relaxed">
                "The good of the people shall be the highest law."
              </blockquote>
              <p className="mt-4 text-muted-foreground">— Marcus Tullius Cicero</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
              {t('about.values')}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 p-4 bg-primary/10 inline-block">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title[language]}
                </h3>
                <p className="text-muted-foreground">
                  {value.desc[language]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default About;
