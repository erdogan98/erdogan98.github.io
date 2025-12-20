import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ContactForm } from '@/components/ContactForm';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { language, t } = useLanguage();

  const meta = {
    en: {
      title: 'Contact Us | Legal Excellence',
      description: 'Get in touch with our legal team for a consultation. Located in Istanbul, we serve clients throughout Turkey and internationally.',
    },
    tr: {
      title: 'İletişim | Legal Excellence',
      description: 'Danışmanlık için hukuk ekibimizle iletişime geçin. İstanbul\'da bulunan firmamız, Türkiye genelinde ve uluslararası alanda müvekkillere hizmet vermektedir.',
    },
  };

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
                    ? 'Our team is ready to assist you with your legal needs. Reach out to schedule a consultation.'
                    : 'Ekibimiz hukuki ihtiyaçlarınızda size yardımcı olmaya hazır. Danışmanlık randevusu için bize ulaşın.'}
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
                      Levent Business District<br />
                      Istanbul, Turkey 34330
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Phone</h3>
                    <a href="tel:+902125550100" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      +90 (212) 555-0100
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Email</h3>
                    <a href="mailto:contact@legalexcellence.com" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                      contact@legalexcellence.com
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
                      href="https://wa.me/902125550100"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:text-primary transition-colors"
                    >
                      +90 (212) 555-0100
                    </a>
                  </div>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.6534891853!2d29.01015931541566!3d41.08114097929062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab5e5e75c1cb3%3A0x5e6e77f09b75b8d2!2sLevent%2C%20Istanbul!5e0!3m2!1sen!2str!4v1625000000000!5m2!1sen!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
