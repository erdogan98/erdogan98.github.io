import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Building2, Gavel, Heart, Home, Shield, Plane, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';

const PracticeAreas = () => {
  const { language, t } = useLanguage();

  const meta = {
    en: {
      title: 'Practice Areas | Legal Excellence',
      description: 'Comprehensive legal services including corporate law, litigation, family law, real estate, criminal defense, and immigration law.',
    },
    tr: {
      title: 'Çalışma Alanları | Legal Excellence',
      description: 'Şirketler hukuku, dava, aile hukuku, gayrimenkul, ceza savunması ve göç hukuku dahil kapsamlı hukuki hizmetler.',
    },
  };

  const areas = [
    {
      icon: Building2,
      titleKey: 'practice.corporate.title',
      descKey: 'practice.corporate.desc',
      slug: 'corporate-law',
      details: {
        en: 'Our corporate law practice provides comprehensive legal support for businesses of all sizes. We handle company formation, mergers and acquisitions, corporate governance, shareholder agreements, and regulatory compliance.',
        tr: 'Şirketler hukuku pratiğimiz, her ölçekteki işletmeler için kapsamlı hukuki destek sağlar. Şirket kuruluşu, birleşme ve devralmalar, kurumsal yönetim, hissedar sözleşmeleri ve mevzuat uyumunu ele alıyoruz.',
      },
    },
    {
      icon: Gavel,
      titleKey: 'practice.litigation.title',
      descKey: 'practice.litigation.desc',
      slug: 'litigation',
      details: {
        en: 'Our litigation team represents clients in complex civil and commercial disputes. We provide strong advocacy in court proceedings, arbitration, and mediation to protect your interests.',
        tr: 'Dava ekibimiz, müvekkilleri karmaşık hukuk ve ticari uyuşmazlıklarda temsil eder. Çıkarlarınızı korumak için mahkeme süreçleri, tahkim ve arabuluculukta güçlü savunuculuk sağlıyoruz.',
      },
    },
    {
      icon: Heart,
      titleKey: 'practice.family.title',
      descKey: 'practice.family.desc',
      slug: 'family-law',
      details: {
        en: 'We understand the sensitive nature of family matters. Our team provides compassionate legal counsel for divorce, child custody, alimony, adoption, and other family law issues.',
        tr: 'Aile meselelerinin hassas doğasını anlıyoruz. Ekibimiz boşanma, çocuk velayeti, nafaka, evlat edinme ve diğer aile hukuku konularında şefkatli hukuki danışmanlık sağlar.',
      },
    },
    {
      icon: Home,
      titleKey: 'practice.real.title',
      descKey: 'practice.real.desc',
      slug: 'real-estate',
      details: {
        en: 'Our real estate practice covers all aspects of property transactions, from purchase and sale agreements to construction contracts, zoning matters, and property disputes.',
        tr: 'Gayrimenkul pratiğimiz, satın alma ve satış sözleşmelerinden inşaat sözleşmelerine, imar meselelerine ve mülk uyuşmazlıklarına kadar mülk işlemlerinin tüm yönlerini kapsar.',
      },
    },
    {
      icon: Shield,
      titleKey: 'practice.criminal.title',
      descKey: 'practice.criminal.desc',
      slug: 'criminal-defense',
      details: {
        en: 'Our criminal defense lawyers provide vigorous representation in all types of criminal proceedings, from white-collar crimes to serious felonies, protecting your rights at every stage.',
        tr: 'Ceza savunma avukatlarımız, beyaz yaka suçlarından ağır cezalara kadar her türlü ceza davasında, her aşamada haklarınızı koruyarak güçlü temsil sağlar.',
      },
    },
    {
      icon: Plane,
      titleKey: 'practice.immigration.title',
      descKey: 'practice.immigration.desc',
      slug: 'immigration',
      details: {
        en: 'Our immigration team assists individuals and businesses with visa applications, work permits, citizenship, residency, and immigration appeals, ensuring smooth transitions.',
        tr: 'Göç ekibimiz, bireylere ve işletmelere vize başvuruları, çalışma izinleri, vatandaşlık, oturma izni ve göç itirazlarında yardımcı olarak sorunsuz geçişler sağlar.',
      },
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
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-primary-foreground mb-6">
              {t('practice.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {t('practice.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {areas.map((area, index) => (
              <div
                key={index}
                className="p-8 bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="mb-4 p-3 bg-primary/10 inline-block">
                  <area.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  {t(area.titleKey)}
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {area.details[language]}
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  {t('nav.consultation')} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default PracticeAreas;
