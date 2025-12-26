import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Privacy = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last updated: January 2024',
      sections: [
        {
          heading: 'Information We Collect',
          text: 'We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us. This may include your name, email address, phone number, and details about your legal matter.',
        },
        {
          heading: 'How We Use Your Information',
          text: 'We use the information we collect to respond to your inquiries, provide legal services, communicate with you about our services, and improve our website and services.',
        },
        {
          heading: 'Information Sharing',
          text: 'We do not sell or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business, provided they agree to keep this information confidential.',
        },
        {
          heading: 'Data Security',
          text: 'We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.',
        },
        {
          heading: 'Your Rights',
          text: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your information. To exercise these rights, please contact us using the information provided below.',
        },
        {
          heading: 'Contact Us',
          text: 'If you have questions about this Privacy Policy, please contact us at contact@legalexcellence.com or +90 (548) 836-40 29',
        },
      ],
    },
    tr: {
      title: 'Gizlilik Politikası',
      lastUpdated: 'Son güncelleme: Ocak 2024',
      sections: [
        {
          heading: 'Topladığımız Bilgiler',
          text: 'İletişim formu doldurduğunuzda, danışmanlık talep ettiğinizde veya bizimle iletişime geçtiğinizde doğrudan bize sağladığınız bilgileri topluyoruz. Bu bilgiler adınızı, e-posta adresinizi, telefon numaranızı ve hukuki meselenizle ilgili ayrıntıları içerebilir.',
        },
        {
          heading: 'Bilgilerinizi Nasıl Kullanıyoruz',
          text: 'Topladığımız bilgileri sorularınızı yanıtlamak, hukuki hizmetler sağlamak, hizmetlerimiz hakkında sizinle iletişim kurmak ve web sitemizi ve hizmetlerimizi geliştirmek için kullanıyoruz.',
        },
        {
          heading: 'Bilgi Paylaşımı',
          text: 'Kişisel bilgilerinizi üçüncü taraflara satmıyor veya kiralamıyoruz. Bilgilerinizi, bu bilgileri gizli tutmayı kabul etmeleri koşuluyla, web sitemizi işletmemize ve işimizi yürütmemize yardımcı olan hizmet sağlayıcılarla paylaşabiliriz.',
        },
        {
          heading: 'Veri Güvenliği',
          text: 'Kişisel bilgilerinizi yetkisiz erişime, değiştirmeye, ifşa etmeye veya imhaya karşı korumak için uygun güvenlik önlemleri uyguluyoruz.',
        },
        {
          heading: 'Haklarınız',
          text: 'Kişisel bilgilerinize erişme, düzeltme veya silme hakkına sahipsiniz. Ayrıca bilgilerinizin belirli işlemlerine itiraz edebilir veya bunları kısıtlayabilirsiniz. Bu hakları kullanmak için lütfen aşağıda verilen bilgileri kullanarak bizimle iletişime geçin.',
        },
        {
          heading: 'Bize Ulaşın',
          text: 'Bu Gizlilik Politikası hakkında sorularınız varsa, lütfen contact@legalexcellence.com veya +90 (548) 836-40 29 üzerinden bize ulaşın.',
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

export default Privacy;
