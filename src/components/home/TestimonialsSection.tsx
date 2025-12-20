import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const testimonials = [
  {
    quote: {
      en: "The team at Legal Excellence provided exceptional support during our corporate restructuring. Their expertise and dedication were invaluable.",
      tr: "Legal Excellence ekibi, kurumsal yeniden yapılanmamız sırasında olağanüstü destek sağladı. Uzmanlıkları ve özveri paha biçilemezdi."
    },
    author: "Mehmet Yılmaz",
    role: { en: "CEO, Tech Ventures", tr: "CEO, Tech Ventures" }
  },
  {
    quote: {
      en: "Professional, responsive, and truly committed to achieving the best outcome. I highly recommend their family law services.",
      tr: "Profesyonel, duyarlı ve en iyi sonucu elde etmeye gerçekten bağlı. Aile hukuku hizmetlerini şiddetle tavsiye ediyorum."
    },
    author: "Ayşe Kaya",
    role: { en: "Private Client", tr: "Bireysel Müvekkil" }
  },
  {
    quote: {
      en: "Their immigration expertise made our relocation process seamless. We couldn't have done it without their guidance.",
      tr: "Göç uzmanlıkları, taşınma sürecimizi sorunsuz hale getirdi. Rehberlikleri olmadan başaramazdık."
    },
    author: "John Smith",
    role: { en: "Expat Professional", tr: "Expat Profesyonel" }
  }
];

export function TestimonialsSection() {
  const { t, language } = useLanguage();

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border relative"
            >
              <Quote className="h-10 w-10 text-primary/20 absolute top-6 right-6" />
              <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                "{testimonial.quote[language]}"
              </p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role[language]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
