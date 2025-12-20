import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Shield, Heart, Landmark, Building2, Briefcase, Scale, FileText, Gavel, BadgeDollarSign, Home, ArrowRight } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { CTASection } from '@/components/home/CTASection';
import { useLanguage } from '@/contexts/LanguageContext';

const PracticeAreas = () => {
  const { language, t } = useLanguage();

  const meta = {
    en: {
      title: 'Practice Areas | Av. Oktay Şekerli - Legal Services in Northern Cyprus',
      description: 'Comprehensive legal services in Criminal Law, Family Law, Estates, Administrative Law, Employment Law, Corporate Law, Insurance, Contracts, and more across Northern Cyprus.',
    },
    tr: {
      title: 'Çalışma Alanları | Av. Oktay Şekerli - KKTC Hukuki Hizmetler',
      description: 'Ceza Hukuku, Aile Hukuku, Terekeler, İdare Hukuku, İş Hukuku, Şirketler Hukuku, Sigorta, Sözleşmeler ve daha fazlasında kapsamlı hukuki hizmetler.',
    },
  };

  const areas = [
    {
      icon: Shield,
      titleKey: 'practice.criminal.title',
      descKey: 'practice.criminal.desc',
      slug: 'criminal-law',
      details: {
        en: 'I provide vigorous defense in all criminal proceedings, from investigation through trial and appeal. My approach ensures that your rights are protected at every stage, with a focus on achieving the best possible outcome.',
        tr: 'Soruşturmadan yargılamaya ve temyize kadar tüm ceza davalarında güçlü savunma sağlıyorum. Yaklaşımım, en iyi sonucu elde etmeye odaklanarak her aşamada haklarınızın korunmasını sağlar.',
      },
    },
    {
      icon: Heart,
      titleKey: 'practice.family.title',
      descKey: 'practice.family.desc',
      slug: 'family-law',
      details: {
        en: 'Family matters require both legal expertise and sensitivity. I provide compassionate counsel for divorce, child custody, alimony, and all family-related legal issues, always prioritizing the well-being of all parties involved.',
        tr: 'Aile meseleleri hem hukuki uzmanlık hem de hassasiyet gerektirir. Boşanma, çocuk velayeti, nafaka ve tüm aileyle ilgili hukuki konularda, tüm tarafların refahını ön planda tutarak şefkatli danışmanlık sağlıyorum.',
      },
    },
    {
      icon: Landmark,
      titleKey: 'practice.estates.title',
      descKey: 'practice.estates.desc',
      slug: 'estates',
      details: {
        en: 'Expert guidance on succession, probate, and estate matters. I help clients navigate the complexities of inheritance law, ensuring smooth transfer of assets and resolution of estate disputes.',
        tr: 'Miras, veraset ve tereke konularında uzman rehberlik. Müvekkillerimin miras hukukunun karmaşıklıklarında yol almalarına yardımcı oluyor, varlıkların sorunsuz devri ve tereke uyuşmazlıklarının çözümünü sağlıyorum.',
      },
    },
    {
      icon: Building2,
      titleKey: 'practice.admin.title',
      descKey: 'practice.admin.desc',
      slug: 'administrative-law',
      details: {
        en: 'Representation in disputes with government bodies and public authorities. I challenge unlawful administrative decisions and protect your rights in dealings with state institutions.',
        tr: 'Devlet kurumları ve kamu otoriteleriyle uyuşmazlıklarda temsil. Hukuka aykırı idari kararlara itiraz ediyor ve devlet kurumlarıyla ilişkilerinizde haklarınızı koruyorum.',
      },
    },
    {
      icon: Briefcase,
      titleKey: 'practice.labor.title',
      descKey: 'practice.labor.desc',
      slug: 'employment-law',
      details: {
        en: 'Protection of employee rights and resolution of workplace disputes. I handle wrongful termination, discrimination, unpaid wages, and all matters relating to employment relationships.',
        tr: 'Çalışan haklarının korunması ve işyeri uyuşmazlıklarının çözümü. Haksız fesih, ayrımcılık, ödenmemiş ücretler ve iş ilişkilerine dair tüm konuları ele alıyorum.',
      },
    },
    {
      icon: Scale,
      titleKey: 'practice.corporate.title',
      descKey: 'practice.corporate.desc',
      slug: 'corporate-law',
      details: {
        en: 'Comprehensive legal support for businesses including company formation, commercial contracts, mergers, and corporate governance. I help businesses navigate complex regulatory requirements.',
        tr: 'Şirket kuruluşu, ticari sözleşmeler, birleşmeler ve kurumsal yönetim dahil işletmeler için kapsamlı hukuki destek. İşletmelerin karmaşık mevzuat gereksinimlerinde yol almalarına yardımcı oluyorum.',
      },
    },
    {
      icon: FileText,
      titleKey: 'practice.insurance.title',
      descKey: 'practice.insurance.desc',
      slug: 'insurance-law',
      details: {
        en: 'Claims disputes and policy interpretation for all insurance matters. I represent clients in disputes with insurance companies, ensuring fair treatment and proper compensation.',
        tr: 'Tüm sigorta konularında tazminat uyuşmazlıkları ve poliçe yorumu. Sigorta şirketleriyle uyuşmazlıklarda müvekkilleri temsil ediyor, adil muamele ve uygun tazminatı sağlıyorum.',
      },
    },
    {
      icon: Gavel,
      titleKey: 'practice.contracts.title',
      descKey: 'practice.contracts.desc',
      slug: 'contract-law',
      details: {
        en: 'Drafting, review, and dispute resolution for all types of contracts. I ensure your agreements are legally sound and protect your interests in commercial and personal matters.',
        tr: 'Her türlü sözleşme için hazırlama, inceleme ve uyuşmazlık çözümü. Sözleşmelerinizin hukuki açıdan sağlam olmasını ve ticari ve kişisel konularda çıkarlarınızı korumasını sağlıyorum.',
      },
    },
    {
      icon: BadgeDollarSign,
      titleKey: 'practice.compensation.title',
      descKey: 'practice.compensation.desc',
      slug: 'compensation',
      details: {
        en: 'Personal injury and civil liability claims for fair compensation. I fight for your rights to receive proper compensation for damages, injuries, and losses you have suffered.',
        tr: 'Adil tazminat için kişisel yaralanma ve hukuki sorumluluk davaları. Maruz kaldığınız zararlar, yaralanmalar ve kayıplar için uygun tazminat alma haklarınız için mücadele ediyorum.',
      },
    },
    {
      icon: Home,
      titleKey: 'practice.ipc.title',
      descKey: 'practice.ipc.desc',
      slug: 'immovable-property-commission',
      details: {
        en: 'Specialized representation before the Immovable Property Commission for property disputes. I help clients navigate the unique legal framework for property claims in Northern Cyprus.',
        tr: 'Mülk uyuşmazlıkları için Taşınmaz Mal Komisyonu önünde uzmanlaşmış temsil. Müvekkillerimin Kuzey Kıbrıs\'taki mülk talepleri için benzersiz hukuki çerçevede yol almalarına yardımcı oluyorum.',
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

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-muted border border-border">
            <p className="text-sm text-muted-foreground text-center">
              {language === 'en' 
                ? 'The information provided on this page is for general informational purposes only and does not constitute legal advice. Each case is unique and outcomes may vary depending on specific circumstances.'
                : 'Bu sayfada sağlanan bilgiler yalnızca genel bilgilendirme amaçlıdır ve hukuki tavsiye niteliği taşımaz. Her dava benzersizdir ve sonuçlar belirli koşullara bağlı olarak değişebilir.'
              }
            </p>
          </div>
        </div>
      </section>

      <CTASection />
    </Layout>
  );
};

export default PracticeAreas;
