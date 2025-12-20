import { Helmet } from 'react-helmet-async';
import { Layout } from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Terms = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last updated: January 2024',
      sections: [
        {
          heading: 'Disclaimer',
          text: 'The information provided on this website is for general informational purposes only and does not constitute legal advice. No attorney-client relationship is created by your use of this website or by contacting us through this website.',
        },
        {
          heading: 'No Legal Advice',
          text: 'The content on this website should not be used as a substitute for competent legal advice from a licensed attorney. Every legal situation is different, and the outcome of your case will depend on the specific facts and circumstances.',
        },
        {
          heading: 'No Guarantee of Results',
          text: 'Past results do not guarantee similar outcomes in future cases. Any case results or testimonials presented on this website are not a guarantee, warranty, or prediction regarding the outcome of your legal matter.',
        },
        {
          heading: 'Confidentiality',
          text: 'Information submitted through our website is not confidential and is not protected by attorney-client privilege until an attorney-client relationship is formally established.',
        },
        {
          heading: 'Use of Website',
          text: 'By using this website, you agree to these terms of service. We reserve the right to modify these terms at any time without prior notice. Your continued use of the website following any changes constitutes your acceptance of the new terms.',
        },
        {
          heading: 'Limitation of Liability',
          text: 'We shall not be liable for any damages arising from your use of this website or your reliance on any information provided herein.',
        },
      ],
    },
    tr: {
      title: 'Kullanım Koşulları',
      lastUpdated: 'Son güncelleme: Ocak 2024',
      sections: [
        {
          heading: 'Sorumluluk Reddi',
          text: 'Bu web sitesinde sağlanan bilgiler yalnızca genel bilgi amaçlıdır ve hukuki tavsiye niteliği taşımaz. Bu web sitesini kullanmanız veya bu web sitesi aracılığıyla bizimle iletişime geçmeniz herhangi bir avukat-müvekkil ilişkisi oluşturmaz.',
        },
        {
          heading: 'Hukuki Tavsiye Değildir',
          text: 'Bu web sitesindeki içerik, lisanslı bir avukattan alınan yetkin hukuki tavsiyenin yerine kullanılmamalıdır. Her hukuki durum farklıdır ve davanızın sonucu belirli olgulara ve koşullara bağlı olacaktır.',
        },
        {
          heading: 'Sonuç Garantisi Yok',
          text: 'Geçmiş sonuçlar, gelecekteki davalarda benzer sonuçları garanti etmez. Bu web sitesinde sunulan dava sonuçları veya referanslar, hukuki meselenizin sonucuna ilişkin bir garanti, teminat veya tahmin değildir.',
        },
        {
          heading: 'Gizlilik',
          text: 'Web sitemiz aracılığıyla gönderilen bilgiler gizli değildir ve avukat-müvekkil ilişkisi resmi olarak kurulana kadar avukat-müvekkil ayrıcalığı ile korunmaz.',
        },
        {
          heading: 'Web Sitesi Kullanımı',
          text: 'Bu web sitesini kullanarak bu kullanım koşullarını kabul etmiş olursunuz. Bu koşulları önceden bildirimde bulunmaksızın herhangi bir zamanda değiştirme hakkımızı saklı tutarız. Herhangi bir değişikliğin ardından web sitesini kullanmaya devam etmeniz, yeni koşulları kabul ettiğiniz anlamına gelir.',
        },
        {
          heading: 'Sorumluluk Sınırlaması',
          text: 'Bu web sitesini kullanımınızdan veya burada sağlanan herhangi bir bilgiye güvenmenizden kaynaklanan zararlardan sorumlu olmayacağız.',
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

export default Terms;
