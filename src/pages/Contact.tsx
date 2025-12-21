import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ContactForm } from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language, t } = useLanguage();

  const meta = {
    en: {
      title: 'Contact | Av. Oktay Şekerli - Attorney at Law in Lefkoşa',
      description: 'Get in touch with Av. Oktay Şekerli for a legal consultation. Located in Lefkoşa, serving clients throughout Northern Cyprus in English and Turkish.',
    },
    tr: {
      title: 'İletişim | Av. Oktay Şekerli - Lefkoşa Avukat',
      description: 'Hukuki danışmanlık için Av. Oktay Şekerli ile iletişime geçin. Lefkoşa merkezli, Kuzey Kıbrıs genelinde Türkçe ve İngilizce hizmet.',
    },
  };

  const phone = '+90 548 836 40 29';
  const phoneClean = '905488364029';
  const email = 'sekerlioktay@gmail.com';

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
              {t('contact.title')}
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  {language === 'en' ? 'Get in Touch' : 'İletişime Geçin'}
                </h2>
                <p className="text-muted-foreground">
                  {language === 'en'
                    ? 'I am ready to assist you with your legal needs. Reach out to schedule a consultation.'
                    : 'Hukuki ihtiyaçlarınızda size yardımcı olmaya hazırım. Danışmanlık randevusu için bana ulaşın.'}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{t('contact.address')}</h3>
                    <p className="text-muted-foreground text-sm">
                      Posta Sokak No: 23<br />
                      Piro İşhanı, Kat: 1, Daire No: 1<br />
                      Lefkoşa, KKTC
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">
                      {language === 'en' ? 'Phone' : 'Telefon'}
                    </h3>
                    <a href={`tel:${phoneClean}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a href={`mailto:${email}`} className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">{t('contact.hours')}</h3>
                    <p className="text-muted-foreground text-sm">{t('contact.hoursText')}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">WhatsApp</h3>
                    <a
                      href={`https://wa.me/${phoneClean}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Areas Served */}
              <div className="pt-6 border-t border-border">
                <h3 className="font-medium text-foreground mb-4">{t('about.areasServed')}</h3>
                <div className="flex flex-wrap gap-2">
                  {['Lefkoşa', 'Girne', 'Gazimağusa', 'Güzelyurt', 'Lefke', 'İskele'].map((area) => (
                    <span key={area} className="px-3 py-1 bg-primary/10 text-primary text-sm">
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border p-8">
                <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
                  {t('nav.consultation')}
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="h-96 bg-muted">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d815.4!2d33.3597!3d35.1856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDExJzA4LjIiTiAzM8KwMjEnMzQuOSJF!5e0!3m2!1sen!2s!4v1625000000000!5m2!1sen!2s&markers=color:red%7C35.1856,33.3597"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={language === 'en' ? 'Office Location - Posta Sokak No: 23, Lefkoşa' : 'Ofis Konumu - Posta Sokak No: 23, Lefkoşa'}
        />
      </section>
    </Layout>
  );
};

export default Contact;
