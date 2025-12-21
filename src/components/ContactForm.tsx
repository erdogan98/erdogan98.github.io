import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const formSchema = z.object({
  name: z.string().min(2, 'Name is required').max(100),
  email: z.string().email('Invalid email address').max(255),
  phone: z.string().min(10, 'Phone number is required').max(20),
  matter: z.string().min(1, 'Please select a matter type'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { language, t } = useLanguage();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      matter: '',
      message: '',
    },
  });

  const matterTypes = [
    { value: 'criminal', label: t('matter.criminal') },
    { value: 'family', label: t('matter.family') },
    { value: 'estates', label: t('matter.estates') },
    { value: 'admin', label: t('matter.admin') },
    { value: 'labor', label: t('matter.labor') },
    { value: 'corporate', label: t('matter.corporate') },
    { value: 'insurance', label: t('matter.insurance') },
    { value: 'contracts', label: t('matter.contracts') },
    { value: 'compensation', label: t('matter.compensation') },
    { value: 'ipc', label: t('matter.ipc') },
    { value: 'other', label: t('matter.other') },
  ];

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Build WhatsApp message
    const matterLabel = matterTypes.find(m => m.value === data.matter)?.label || data.matter;
    const message = language === 'en' 
      ? `Hello, my name is ${data.name}.\n\nEmail: ${data.email}\nPhone: ${data.phone}\nMatter Type: ${matterLabel}\n\nMessage:\n${data.message}`
      : `Merhaba, benim adım ${data.name}.\n\nE-posta: ${data.email}\nTelefon: ${data.phone}\nKonu Türü: ${matterLabel}\n\nMesaj:\n${data.message}`;
    
    const phoneNumber = '905488364029';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Show success toast
    toast({
      title: language === 'en' ? "Redirecting to WhatsApp..." : "WhatsApp'a yönlendiriliyorsunuz...",
      description: language === 'en' 
        ? "You'll be able to send your message directly." 
        : "Mesajınızı doğrudan gönderebileceksiniz.",
    });
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
    
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.name')}</FormLabel>
              <FormControl>
                <Input placeholder="John Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.email')}</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t('contact.phone')}</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+90 555 123 4567" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="matter"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.matter')}</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a matter type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {matterTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('contact.message')}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Please describe your legal matter..."
                  className="min-h-[120px] resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <p className="text-sm text-muted-foreground">
          {t('contact.disclaimer')}
        </p>

        <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              {t('contact.submit')}
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
