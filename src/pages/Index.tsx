import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustSignals } from '@/components/home/TrustSignals';
import { PracticeAreasSection } from '@/components/home/PracticeAreasSection';
import { AboutSnippet } from '@/components/home/AboutSnippet';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  const { language } = useLanguage();

  const meta = {
    en: {
      title: 'Legal Excellence | Trusted Attorneys in Istanbul',
      description: 'Expert legal representation in corporate law, litigation, family law, and more. Over 25 years of excellence serving clients in Turkey and internationally.',
    },
    tr: {
      title: 'Legal Excellence | İstanbul\'da Güvenilir Avukatlar',
      description: 'Şirketler hukuku, dava, aile hukuku ve daha fazlasında uzman hukuki temsil. Türkiye\'de ve uluslararası alanda müvekkillere hizmet veren 25 yılı aşkın mükemmellik.',
    },
  };

  return (
    <Layout>
      <Helmet>
        <html lang={language} />
        <title>{meta[language].title}</title>
        <meta name="description" content={meta[language].description} />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="tr" href="/tr" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LegalService",
            "name": "Legal Excellence",
            "description": meta[language].description,
            "url": "https://legalexcellence.com",
            "telephone": "+90-212-555-0100",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Levent Business District",
              "addressLocality": "Istanbul",
              "postalCode": "34330",
              "addressCountry": "TR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "41.0811",
              "longitude": "29.0126"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "priceRange": "$$$$"
          })}
        </script>
      </Helmet>
      
      <HeroSection />
      <TrustSignals />
      <PracticeAreasSection />
      <AboutSnippet />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
