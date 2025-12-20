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
    'hero.title': 'Dedicated Legal Representation in Northern Cyprus',
    'hero.subtitle': 'Protecting your rights with integrity, transparency, and professional excellence. Bilingual legal services in English and Turkish.',
    'hero.cta': 'Schedule a Consultation',
    'hero.learnMore': 'Learn More',
    
    // Trust Signals
    'trust.experience': 'Lefkoşa Bar Member Since 2022',
    'trust.cases': 'Master\'s in Public Law',
    'trust.clients': 'PhD Candidate',
    'trust.languages': 'EN/TR Bilingual Service',
    
    // Practice Areas
    'practice.title': 'Practice Areas',
    'practice.subtitle': 'Comprehensive legal services tailored to your needs across Northern Cyprus',
    'practice.criminal.title': 'Criminal Law',
    'practice.criminal.desc': 'Vigorous defense in all criminal proceedings, protecting your rights at every stage.',
    'practice.family.title': 'Family Law',
    'practice.family.desc': 'Compassionate counsel for divorce, custody, alimony, and family matters.',
    'practice.estates.title': 'Estates & Inheritance',
    'practice.estates.desc': 'Expert guidance on succession, probate, and estate planning matters.',
    'practice.admin.title': 'Administrative Law',
    'practice.admin.desc': 'Representation in disputes with government bodies and public authorities.',
    'practice.labor.title': 'Employment Law',
    'practice.labor.desc': 'Protection of employee rights and resolution of workplace disputes.',
    'practice.corporate.title': 'Corporate & Commercial Law',
    'practice.corporate.desc': 'Business formation, contracts, and commercial transactions.',
    'practice.insurance.title': 'Insurance Law',
    'practice.insurance.desc': 'Claims disputes and policy interpretation for all insurance matters.',
    'practice.contracts.title': 'Contract Law',
    'practice.contracts.desc': 'Drafting, review, and dispute resolution for all types of contracts.',
    'practice.compensation.title': 'Compensation Claims',
    'practice.compensation.desc': 'Personal injury and civil liability claims for fair compensation.',
    'practice.ipc.title': 'Immovable Property Commission',
    'practice.ipc.desc': 'Specialized representation before the IPC for property disputes.',
    
    // About
    'about.title': 'About Av. Oktay Şekerli',
    'about.subtitle': 'Committed to Justice, Dedicated to You',
    'about.description': 'Av. Oktay Şekerli completed his secondary education at Güzelyurt Türk Maarif Koleji (GTMK) before obtaining his law degree from Başkent University Faculty of Law in 2021. Following a one-year legal internship and successful completion of the bar examination, he has been practicing as a registered attorney with the Lefkoşa District Bar since 2022.',
    'about.mission': 'My Commitment to Clients',
    'about.missionText': 'Legal issues often create complex and sensitive situations for individuals and institutions. In these processes, accessing accurate information, effectively protecting rights, and having a reliable guide are of paramount importance. My goal is to provide transparent, solution-oriented, and professional legal support at every stage my clients need. In pursuing these goals, I serve within the framework of universal legal principles and professional ethics—committed to impartiality, confidentiality, and diligence.',
    'about.values': 'Core Values',
    'about.value1': 'Transparency',
    'about.value2': 'Confidentiality',
    'about.value3': 'Diligence',
    'about.value4': 'Integrity',
    'about.education': 'Education & Credentials',
    'about.educationLLB': 'LL.B., Başkent University Faculty of Law (2021)',
    'about.educationLLM': 'LL.M., Eastern Mediterranean University - Public Law (2025)',
    'about.educationPhD': 'PhD Candidate, Near East University - Public Law',
    'about.thesis': 'Thesis: "Constitutional Protection of Refugee Rights in the Turkish Republic of Northern Cyprus from an International and Comparative Law Perspective"',
    'about.areasServed': 'Areas Served',
    
    // Testimonials
    'testimonials.title': 'Client Testimonials',
    'testimonials.subtitle': 'What our clients say about us',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Get in touch to discuss your legal needs',
    'contact.name': 'Full Name',
    'contact.email': 'Email Address',
    'contact.phone': 'Phone Number',
    'contact.matter': 'Legal Matter Type',
    'contact.message': 'Your Message',
    'contact.submit': 'Send Message',
    'contact.address': 'Office Address',
    'contact.hours': 'Office Hours',
    'contact.hoursText': 'Monday - Friday: 9:00 AM - 6:00 PM',
    'contact.disclaimer': 'Submitting this form does not create an attorney-client relationship.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    'footer.disclaimer': 'The information on this website is for general information purposes only. Nothing on this site should be taken as legal advice for any individual case or situation. This website does not create an attorney-client relationship.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    
    // Cookie Banner
    'cookie.message': 'We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.',
    'cookie.accept': 'Accept All',
    'cookie.decline': 'Decline',
    'cookie.settings': 'Cookie Settings',
    
    // Matter Types
    'matter.criminal': 'Criminal Law',
    'matter.family': 'Family Law',
    'matter.estates': 'Estates & Inheritance',
    'matter.admin': 'Administrative Law',
    'matter.labor': 'Employment Law',
    'matter.corporate': 'Corporate & Commercial Law',
    'matter.insurance': 'Insurance Law',
    'matter.contracts': 'Contract Law',
    'matter.compensation': 'Compensation Claims',
    'matter.ipc': 'Immovable Property Commission',
    'matter.other': 'Other',
  },
  tr: {
    // Navigation
    'nav.home': 'Ana Sayfa',
    'nav.about': 'Hakkımda',
    'nav.practiceAreas': 'Çalışma Alanları',
    'nav.contact': 'İletişim',
    'nav.consultation': 'Danışmanlık Talep Et',
    
    // Hero
    'hero.title': 'Kuzey Kıbrıs\'ta Güvenilir Hukuki Temsil',
    'hero.subtitle': 'Haklarınızı dürüstlük, şeffaflık ve profesyonel mükemmellikle koruyorum. Türkçe ve İngilizce dillerinde hukuki hizmet.',
    'hero.cta': 'Randevu Al',
    'hero.learnMore': 'Daha Fazla',
    
    // Trust Signals
    'trust.experience': '2022\'den Beri Lefkoşa Barosu Üyesi',
    'trust.cases': 'Kamu Hukuku Yüksek Lisans',
    'trust.clients': 'Doktora Adayı',
    'trust.languages': 'TR/EN İki Dilde Hizmet',
    
    // Practice Areas
    'practice.title': 'Çalışma Alanları',
    'practice.subtitle': 'Kuzey Kıbrıs genelinde ihtiyaçlarınıza özel kapsamlı hukuki hizmetler',
    'practice.criminal.title': 'Ceza Hukuku',
    'practice.criminal.desc': 'Her aşamada haklarınızı koruyarak tüm ceza davalarında güçlü savunma.',
    'practice.family.title': 'Aile Hukuku',
    'practice.family.desc': 'Boşanma, velayet, nafaka ve aile meseleleri için şefkatli danışmanlık.',
    'practice.estates.title': 'Terekeler',
    'practice.estates.desc': 'Miras, veraset ve tereke planlaması konularında uzman rehberlik.',
    'practice.admin.title': 'İdare Hukuku',
    'practice.admin.desc': 'Devlet kurumları ve kamu otoriteleriyle uyuşmazlıklarda temsil.',
    'practice.labor.title': 'İş Hukuku',
    'practice.labor.desc': 'Çalışan haklarının korunması ve işyeri uyuşmazlıklarının çözümü.',
    'practice.corporate.title': 'Şirketler ve Ticaret Hukuku',
    'practice.corporate.desc': 'Şirket kuruluşu, sözleşmeler ve ticari işlemler.',
    'practice.insurance.title': 'Sigorta Hukuku',
    'practice.insurance.desc': 'Tüm sigorta konularında tazminat talepleri ve poliçe yorumu.',
    'practice.contracts.title': 'Sözleşmeler Hukuku',
    'practice.contracts.desc': 'Her türlü sözleşme için hazırlama, inceleme ve uyuşmazlık çözümü.',
    'practice.compensation.title': 'Tazminat Davaları',
    'practice.compensation.desc': 'Adil tazminat için kişisel yaralanma ve hukuki sorumluluk davaları.',
    'practice.ipc.title': 'Taşınmaz Mal Komisyonu',
    'practice.ipc.desc': 'Mülk uyuşmazlıkları için TMK önünde uzmanlaşmış temsil.',
    
    // About
    'about.title': 'Av. Oktay Şekerli Hakkında',
    'about.subtitle': 'Adalete Bağlı, Size Adanmış',
    'about.description': 'Av. Oktay Şekerli, ortaokul ve lise eğitimini Güzelyurt Türk Maarif Koleji\'nde (GTMK) tamamladıktan sonra 2021 yılında Başkent Üniversitesi Hukuk Fakültesi\'nde lisans eğitimini tamamlamıştır. Bir yıllık avukatlık stajı ve baro sınavını başarıyla geçtikten sonra 2022 yılından beri Lefkoşa Mahalli Barosu\'na kayıtlı avukat olarak mesleğini icra etmektedir.',
    'about.mission': 'Müvekkillerime Taahhüdüm',
    'about.missionText': 'Hukuki sorunlar, bireylerin ve kurumların hayatında çoğu zaman karmaşık ve hassas süreçler doğurur. Bu süreçlerde doğru bilgiye ulaşmak, hakların etkin bir şekilde korunmasını sağlamak ve güvenilir bir rehberle ilerlemek büyük önem taşır. Hedefim, müvekkillerime ihtiyaç duydukları her aşamada şeffaf, çözüm odaklı ve profesyonel hukuki destek sunmaktır. Bu hedefler doğrultusunda hukukun evrensel ilkeleri ve mesleki etik kurallar çerçevesinde; tarafsızlık, gizlilik ve özen prensiplerine bağlı kalarak hizmet vermekteyim.',
    'about.values': 'Temel Değerler',
    'about.value1': 'Şeffaflık',
    'about.value2': 'Gizlilik',
    'about.value3': 'Özen',
    'about.value4': 'Dürüstlük',
    'about.education': 'Eğitim ve Kimlik Bilgileri',
    'about.educationLLB': 'Hukuk Lisansı, Başkent Üniversitesi Hukuk Fakültesi (2021)',
    'about.educationLLM': 'Yüksek Lisans, Doğu Akdeniz Üniversitesi - Kamu Hukuku (2025)',
    'about.educationPhD': 'Doktora Adayı, Yakın Doğu Üniversitesi - Kamu Hukuku',
    'about.thesis': 'Tez: "Uluslararası ve Karşılaştırmalı Hukuk Perspektifinden Kuzey Kıbrıs Türk Cumhuriyeti\'nde Mülteci Haklarının Anayasal Korunması"',
    'about.areasServed': 'Hizmet Verilen Bölgeler',
    
    // Testimonials
    'testimonials.title': 'Müvekkil Görüşleri',
    'testimonials.subtitle': 'Müvekkillerimiz hakkımızda ne diyor',
    
    // Contact
    'contact.title': 'İletişim',
    'contact.subtitle': 'Hukuki ihtiyaçlarınızı görüşmek için bize ulaşın',
    'contact.name': 'Ad Soyad',
    'contact.email': 'E-posta Adresi',
    'contact.phone': 'Telefon Numarası',
    'contact.matter': 'Hukuki Konu Türü',
    'contact.message': 'Mesajınız',
    'contact.submit': 'Mesaj Gönder',
    'contact.address': 'Ofis Adresi',
    'contact.hours': 'Çalışma Saatleri',
    'contact.hoursText': 'Pazartesi - Cuma: 09:00 - 18:00',
    'contact.disclaimer': 'Bu formu göndermek avukat-müvekkil ilişkisi oluşturmaz.',
    
    // Footer
    'footer.rights': 'Tüm hakları saklıdır.',
    'footer.disclaimer': 'Bu web sitesindeki bilgiler yalnızca genel bilgi amaçlıdır. Bu sitedeki hiçbir şey herhangi bir bireysel durum veya koşul için hukuki tavsiye olarak alınmamalıdır. Bu web sitesi avukat-müvekkil ilişkisi oluşturmaz.',
    'footer.privacy': 'Gizlilik Politikası',
    'footer.terms': 'Kullanım Koşulları',
    'footer.cookies': 'Çerez Politikası',
    
    // Cookie Banner
    'cookie.message': 'Deneyiminizi geliştirmek için çerezler kullanıyoruz. Bu siteyi ziyaret etmeye devam ederek çerez kullanımımızı kabul etmiş olursunuz.',
    'cookie.accept': 'Tümünü Kabul Et',
    'cookie.decline': 'Reddet',
    'cookie.settings': 'Çerez Ayarları',
    
    // Matter Types
    'matter.criminal': 'Ceza Hukuku',
    'matter.family': 'Aile Hukuku',
    'matter.estates': 'Terekeler',
    'matter.admin': 'İdare Hukuku',
    'matter.labor': 'İş Hukuku',
    'matter.corporate': 'Şirketler ve Ticaret Hukuku',
    'matter.insurance': 'Sigorta Hukuku',
    'matter.contracts': 'Sözleşmeler Hukuku',
    'matter.compensation': 'Tazminat Davaları',
    'matter.ipc': 'Taşınmaz Mal Komisyonu',
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
