import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Cookies = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Cookie Policy',
      lastUpdated: 'Last updated: January 2024',
      sections: [
        {
          heading: 'What Are Cookies',
          text: 'Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and to provide information to website owners.',
        },
        {
          heading: 'How We Use Cookies',
          text: 'We use cookies to understand how you use our website, remember your preferences, and improve your experience. We may also use cookies for analytics purposes to help us understand how visitors interact with our website.',
        },
        {
          heading: 'Types of Cookies We Use',
          text: 'Essential cookies: Required for the website to function properly. Analytics cookies: Help us understand how visitors use our website. Preference cookies: Remember your settings and preferences.',
        },
        {
          heading: 'Third-Party Cookies',
          text: 'We may use third-party services that set their own cookies, such as Google Analytics for website analytics. These third parties have their own privacy policies governing their use of cookies.',
        },
        {
          heading: 'Managing Cookies',
          text: 'Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options" or "Preferences" menu of your browser. You can also delete cookies that have already been set.',
        },
        {
          heading: 'Contact Us',
          text: 'If you have questions about our use of cookies, please contact us at contact@legalexcellence.com.',
        },
      ],
    },
    tr: {
      title: 'Çerez Politikası',
      lastUpdated: 'Son güncelleme: Ocak 2024',
      sections: [
        {
          heading: 'Çerezler Nedir',
          text: 'Çerezler, web sitemizi ziyaret ettiğinizde bilgisayarınıza veya mobil cihazınıza yerleştirilen küçük metin dosyalarıdır. Web sitelerinin daha verimli çalışmasını sağlamak ve web sitesi sahiplerine bilgi sağlamak için yaygın olarak kullanılırlar.',
        },
        {
          heading: 'Çerezleri Nasıl Kullanıyoruz',
          text: 'Web sitemizi nasıl kullandığınızı anlamak, tercihlerinizi hatırlamak ve deneyiminizi geliştirmek için çerezler kullanıyoruz. Ayrıca ziyaretçilerin web sitemizle nasıl etkileşim kurduğunu anlamamıza yardımcı olmak için analitik amaçlarla çerezler kullanabiliriz.',
        },
        {
          heading: 'Kullandığımız Çerez Türleri',
          text: 'Temel çerezler: Web sitesinin düzgün çalışması için gereklidir. Analitik çerezler: Ziyaretçilerin web sitemizi nasıl kullandığını anlamamıza yardımcı olur. Tercih çerezleri: Ayarlarınızı ve tercihlerinizi hatırlar.',
        },
        {
          heading: 'Üçüncü Taraf Çerezleri',
          text: 'Web sitesi analitiği için Google Analytics gibi kendi çerezlerini ayarlayan üçüncü taraf hizmetleri kullanabiliriz. Bu üçüncü tarafların çerez kullanımını yöneten kendi gizlilik politikaları vardır.',
        },
        {
          heading: 'Çerezleri Yönetme',
          text: 'Çoğu web tarayıcısı, ayarları aracılığıyla çerezleri kontrol etmenize olanak tanır. Bu ayarları genellikle tarayıcınızın "Seçenekler" veya "Tercihler" menüsünde bulabilirsiniz. Ayrıca önceden ayarlanmış çerezleri de silebilirsiniz.',
        },
        {
          heading: 'Bize Ulaşın',
          text: 'Çerez kullanımımız hakkında sorularınız varsa, lütfen contact@legalexcellence.com adresinden bizimle iletişime geçin.',
        },
      ],
    },
  };

  const pageContent = content[language];

  return (
    <Layout>
      <Helmet>
        <html lang={language} />
        <title>{pageContent.title} | Legal Excellence</title>
      </Helmet>

      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
          <h1 className="font-serif text-4xl font-semibold text-foreground mb-4">
            {pageContent.title}
          </h1>
          <p className="text-muted-foreground mb-12">{pageContent.lastUpdated}</p>

          <div className="space-y-8">
            {pageContent.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  {section.heading}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Cookies;
