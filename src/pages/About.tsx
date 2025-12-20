import { Helmet } from 'react-helmet-async';
import { Award, BookOpen, Users, Target, Check, GraduationCap, MapPin, Languages } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { language, t } = useLanguage();

  const meta = {
    en: {
      title: 'About Av. Oktay Şekerli | Attorney at Law in Northern Cyprus',
      description: 'Learn about Av. Oktay Şekerli - Licensed attorney with the Lefkoşa Bar since 2022. LL.M. in Public Law, PhD Candidate. Bilingual legal services in English and Turkish.',
    },
    tr: {
      title: 'Hakkımda | Av. Oktay Şekerli - KKTC Avukat',
      description: 'Av. Oktay Şekerli hakkında - 2022\'den beri Lefkoşa Barosu\'na kayıtlı avukat. Kamu Hukuku Yüksek Lisans, Doktora Adayı. Türkçe ve İngilizce hukuki hizmet.',
    },
  };

  const education = [
    { key: 'educationLLB', icon: GraduationCap },
    { key: 'educationLLM', icon: GraduationCap },
    { key: 'educationPhD', icon: GraduationCap },
  ];

  const credentials = [
    { 
      en: 'Lefkoşa District Bar Association (Member since 2022)', 
      tr: 'Lefkoşa Mahalli Barosu (2022\'den beri üye)' 
    },
  ];

  const values = [
    {
      icon: Award,
      title: { en: 'Transparency', tr: 'Şeffaflık' },
      desc: { 
        en: 'Open communication and regular updates throughout the legal process.', 
        tr: 'Hukuki süreç boyunca açık iletişim ve düzenli bilgilendirme.' 
      },
    },
    {
      icon: BookOpen,
      title: { en: 'Confidentiality', tr: 'Gizlilik' },
      desc: { 
        en: 'Your information is protected with the utmost discretion.', 
        tr: 'Bilgileriniz en üst düzeyde gizlilikle korunmaktadır.' 
      },
    },
    {
      icon: Users,
      title: { en: 'Diligence', tr: 'Özen' },
      desc: { 
        en: 'Each case is handled with careful attention to its unique circumstances.', 
        tr: 'Her dosya kendine özgü koşullarıyla dikkatle ele alınmaktadır.' 
      },
    },
    {
      icon: Target,
      title: { en: 'Integrity', tr: 'Dürüstlük' },
      desc: { 
        en: 'Committed to ethical principles and honest legal counsel.', 
        tr: 'Etik ilkelere ve dürüst hukuki danışmanlığa bağlılık.' 
      },
    },
  ];

  const areasServed = ['Lefkoşa', 'Girne', 'Gazimağusa', 'Güzelyurt', 'Lefke', 'İskele'];

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

      {/* Education & Credentials */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-foreground mb-6">
                {t('about.education')}
              </h2>
              <div className="space-y-4 mb-8">
                {education.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="p-1 bg-primary/10 rounded-full mt-1">
                      <item.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{t(`about.${item.key}`)}</span>
                  </div>
                ))}
              </div>
              <div className="p-4 bg-card border border-border">
                <p className="text-sm text-muted-foreground italic">
                  {t('about.thesis')}
                </p>
              </div>
              
              {/* Bar Membership */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {language === 'en' ? 'Bar Membership' : 'Baro Üyeliği'}
                </h3>
                {credentials.map((cred, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-1 bg-primary/10 rounded-full">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{cred[language]}</span>
                  </div>
                ))}
              </div>

              {/* Languages */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Languages className="h-5 w-5 text-primary" />
                  {language === 'en' ? 'Languages' : 'Diller'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'en' ? 'English and Turkish' : 'Türkçe ve İngilizce'}
                </p>
              </div>
            </div>

            {/* Client Message */}
            <div className="space-y-8">
              <div className="bg-card border border-border p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  {t('about.mission')}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.missionText')}
                </p>
              </div>

              {/* Areas Served */}
              <div className="bg-card border border-border p-8">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t('about.areasServed')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {areasServed.map((area) => (
                    <span key={area} className="px-3 py-1 bg-primary/10 text-primary text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
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
