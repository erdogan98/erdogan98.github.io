import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'tr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.practiceAreas': 'Practice Areas',
    'nav.contact': 'Contact',
    'nav.consultation': 'Request Consultation',
    
    // Hero
    'hero.title': 'Excellence in Legal Representation',
    'hero.subtitle': 'Trusted counsel for complex legal matters. We deliver results with integrity, dedication, and expertise.',
    'hero.cta': 'Schedule a Consultation',
    'hero.learnMore': 'Learn More',
    
    // Trust Signals
    'trust.experience': '25+ Years Experience',
    'trust.cases': '500+ Cases Won',
    'trust.clients': '1000+ Satisfied Clients',
    'trust.languages': 'Bilingual Service',
    
    // Practice Areas
    'practice.title': 'Practice Areas',
    'practice.subtitle': 'Comprehensive legal services tailored to your needs',
    'practice.corporate.title': 'Corporate Law',
    'practice.corporate.desc': 'Business formation, mergers, acquisitions, and corporate governance.',
    'practice.litigation.title': 'Litigation',
    'practice.litigation.desc': 'Civil and commercial dispute resolution and court representation.',
    'practice.family.title': 'Family Law',
    'practice.family.desc': 'Divorce, custody, adoption, and family mediation services.',
    'practice.real.title': 'Real Estate',
    'practice.real.desc': 'Property transactions, zoning, and real estate disputes.',
    'practice.criminal.title': 'Criminal Defense',
    'practice.criminal.desc': 'Defense in criminal proceedings and white-collar crime.',
    'practice.immigration.title': 'Immigration',
    'practice.immigration.desc': 'Visa applications, citizenship, and immigration appeals.',
    
    // About
    'about.title': 'About Our Firm',
    'about.subtitle': 'A Legacy of Legal Excellence',
    'about.description': 'With over two decades of experience, our firm has established itself as a leader in providing comprehensive legal services. We combine traditional values with modern approaches to deliver exceptional results for our clients.',
    'about.mission': 'Our Mission',
    'about.missionText': 'To provide exceptional legal representation with integrity, professionalism, and a commitment to achieving the best possible outcomes for our clients.',
    'about.values': 'Our Values',
    'about.value1': 'Integrity',
    'about.value2': 'Excellence',
    'about.value3': 'Client Focus',
    'about.value4': 'Innovation',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What our clients say about us',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for a consultation',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.matter': 'Legal Matter Type',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.address': 'Address',
    'contact.hours': 'Office Hours',
    'contact.hoursText': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.disclaimer': 'Submitting this form does not create an attorney-client relationship.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': 'The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    
    // Cookie Banner
    'cookie.message': 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
    'cookie.accept': 'Accept All',
    'cookie.decline': 'Decline',
    'cookie.settings': 'Cookie Settings',
    
    // Matter Types
    'matter.corporate': 'Corporate Law',
    'matter.litigation': 'Litigation',
    'matter.family': 'Family Law',
    'matter.real': 'Real Estate',
    'matter.criminal': 'Criminal Defense',
    'matter.immigration': 'Immigration',
    'matter.other': 'Other',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımızda',
    'nav.practiceAreas': 'Çalışma Alanları',
    'nav.contact': 'İletişim',
    'nav.consultation': 'Danışmanlık Talep Et',
    
    // Hero
    'hero.title': 'Hukuki Temsilde Mükemmellik',
    'hero.subtitle': 'Karmaşık hukuki meseleler için güvenilir danışmanlık. Dürüstlük, özveri ve uzmanlıkla sonuç alıyoruz.',
    'hero.cta': 'Randevu Al',
    'hero.learnMore': 'Daha Fazla',
    
    // Trust Signals
    'trust.experience': '25+ Yıl Deneyim',
    'trust.cases': '500+ Kazanılan Dava',
    'trust.clients': '1000+ Memnun Müvekkil',
    'trust.languages': 'İki Dilde Hizmet',
    
    // Practice Areas
    'practice.title': 'Çalışma Alanları',
    'practice.subtitle': 'İhtiyaçlarınıza özel kapsamlı hukuki hizmetler',
    'practice.corporate.title': 'Şirketler Hukuku',
    'practice.corporate.desc': 'Şirket kuruluşu, birleşmeler, devralmalar ve kurumsal yönetim.',
    'practice.litigation.title': 'Dava Hukuku',
    'practice.litigation.desc': 'Hukuk ve ticari uyuşmazlık çözümü ve mahkeme temsili.',
    'practice.family.title': 'Aile Hukuku',
    'practice.family.desc': 'Boşanma, velayet, evlat edinme ve aile arabuluculuk hizmetleri.',
    'practice.real.title': 'Gayrimenkul',
    'practice.real.desc': 'Mülk işlemleri, imar ve gayrimenkul uyuşmazlıkları.',
    'practice.criminal.title': 'Ceza Savunması',
    'practice.criminal.desc': 'Ceza davalarında savunma ve beyaz yaka suçları.',
    'practice.immigration.title': 'Göç Hukuku',
    'practice.immigration.desc': 'Vize başvuruları, vatandaşlık ve göç itirazları.',
    
    // About
    'about.title': 'Hakkımızda',
    'about.subtitle': 'Hukuki Mükemmellik Mirası',
    'about.description': 'Yirmi yılı aşkın deneyimimizle, kapsamlı hukuki hizmetler sunmada lider konuma ulaştık. Müvekkillerimiz için olağanüstü sonuçlar elde etmek için geleneksel değerleri modern yaklaşımlarla birleştiriyoruz.',
    'about.mission': 'Misyonumuz',
    'about.missionText': 'Dürüstlük, profesyonellik ve müvekkillerimiz için en iyi sonuçları elde etme taahhüdü ile olağanüstü hukuki temsil sağlamak.',
    'about.values': 'Değerlerimiz',
    'about.value1': 'Dürüstlük',
    'about.value2': 'Mükemmellik',
    'about.value3': 'Müvekkil Odaklılık',
    'about.value4': 'Yenilikçilik',
    
    // Testimonials
    'testimonials.title': 'Müvekkil Görüşleri',
    'testimonials.subtitle': 'Müvekkillerimiz bizim hakkımızda ne diyor',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Danışmanlık için bizimle iletişime geçin',
    'contact.name': 'Ad Soyad',
    'contact.email': 'E-posta Adresi',
    'contact.phone': 'Telefon Numarası',
    'contact.matter': 'Hukuki Konu Türü',
    'contact.message': 'Mesajınız',
    'contact.submit': 'Mesaj Gönder',
    'contact.address': 'Adres',
    'contact.hours': 'Çalışma Saatleri',
    'contact.hoursText': 'Pazartesi - Cuma: 09:00 - 18:00',
    'contact.disclaimer': 'Bu formu göndermek avukat-müvekkil ilişkisi oluşturmaz.',
    
    // Footer
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.disclaimer': 'Bu web sitesindeki bilgiler yalnızca genel bilgi amaçlıdır. Bu sitedeki hiçbir şey herhangi bir bireysel durum veya koşul için hukuki tavsiye olarak alınmamalıdır.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Koşulları',
    'footer.cookies': 'Çerez Politikası',
    
    // Cookie Banner
    'cookie.message': 'Deneyiminizi geliştirmek için çerezler kullanıyoruz. Bu siteyi ziyaret etmeye devam ederek çerez kullanımımızı kabul etmiş olursunuz.',
    'cookie.accept': 'Tümünü Kabul Et',
    'cookie.decline': 'Reddet',
    'cookie.settings': 'Çerez Ayarları',
    
    // Matter Types
    'matter.corporate': 'Şirketler Hukuku',
    'matter.litigation': 'Dava Hukuku',
    'matter.family': 'Aile Hukuku',
    'matter.real': 'Gayrimenkul',
    'matter.criminal': 'Ceza Savunması',
    'matter.immigration': 'Göç Hukuku',
    'matter.other': 'Diğer',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
