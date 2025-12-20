import { Award, CheckCircle, Users, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function TrustSignals() {
  const { t } = useLanguage();

  const signals = [
    { icon: Award, label: t('trust.experience') },
    { icon: CheckCircle, label: t('trust.cases') },
    { icon: Users, label: t('trust.clients') },
    { icon: Globe, label: t('trust.languages') },
  ];

  return (
    <section className="py-12 bg-card border-b border-border">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {signals.map((signal, index) => (
            <div key={index} className="flex flex-col items-center text-center gap-3">
              <div className="p-3 bg-primary/10 rounded-full">
                <signal.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-medium text-foreground">{signal.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
