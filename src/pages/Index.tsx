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
      title: 'Av. Oktay Şekerli | Attorney at Law in Lefkoşa, Northern Cyprus',
      description: 'Expert legal representation in Criminal Law, Family Law, Estates, Corporate Law, and more. Licensed attorney serving Lefkoşa, Girne, Gazimağusa, and all of Northern Cyprus. Bilingual EN/TR service.',
    },
    tr: {
      title: 'Av. Oktay Şekerli | Lefkoşa Avukat, Kuzey Kıbrıs',
      description: 'Ceza Hukuku, Aile Hukuku, Terekeler, Şirketler Hukuku ve daha fazlasında uzman hukuki temsil. Lefkoşa, Girne, Gazimağusa ve tüm Kuzey Kıbrıs\'a hizmet veren kayıtlı avukat. TR/EN iki dilde hizmet.',
    },
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Av. Oktay Şekerli - Attorney at Law",
    "alternateName": "Av. Oktay Şekerli - Avukat",
    "description": meta[language].description,
    "url": "https://oktaysekerli.com",
    "telephone": "+90-548-836-40-29",
    "email": "sekerlioktay@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Posta Sokak No: 23, Piro İşhanı, Kat: 1, Daire No: 1",
      "addressLocality": "Lefkoşa",
      "addressCountry": "CY"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "35.1856",
      "longitude": "33.3597"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "areaServed": [
      { "@type": "City", "name": "Lefkoşa" },
      { "@type": "City", "name": "Girne" },
      { "@type": "City", "name": "Gazimağusa" },
      { "@type": "City", "name": "Güzelyurt" },
      { "@type": "City", "name": "Lefke" },
      { "@type": "City", "name": "İskele" }
    ],
    "knowsLanguage": ["en", "tr"],
    "priceRange": "$$",
    "sameAs": [],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Legal Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Criminal Law" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Family Law" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Estates & Inheritance" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Administrative Law" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Employment Law" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate & Commercial Law" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Insurance Law" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Contract Law" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Compensation Claims" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Immovable Property Commission" } }
      ]
    }
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
          {JSON.stringify(structuredData)}
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
