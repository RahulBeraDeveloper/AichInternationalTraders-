import { CheckCircle2, Send } from 'lucide-react';
import { PACKAGING_OPTIONS, siteConfig } from '@/config/site';
import { Button } from '@/components/ui';
import { useInquiryForm } from '../hooks/useInquiryForm';
import { InputField, SelectField, TextareaField } from './FormField';

export function InquiryForm() {
  const { data, submitted, setField, handleSubmit } = useInquiryForm();
  const { email, phoneDisplay } = siteConfig.contact;

  return (
    <div className="glass-card rounded-3xl border border-amber-500/30 p-8 shadow-2xl sm:p-10 lg:col-span-7">
      <h3 className="mb-1 text-xl font-extrabold text-white">Submit Direct Export Inquiry</h3>
      <p className="mb-6 text-xs text-gray-400">
        Submitting this form prepares your inquiry directly to <span className="text-amber-300">{email}</span>.
      </p>

      {submitted ? (
        <div className="space-y-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-amber-400" />
          <h4 className="gold-gradient-text text-lg font-bold">Inquiry Prepared & Email App Opened</h4>
          <p className="text-xs text-gray-300">
            If your mail client didn't open automatically, you can also email us directly at <strong>{email}</strong> or
            message us on WhatsApp ({phoneDisplay}).
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField label="Full Name *" required type="text" value={data.name} onChange={setField('name')} placeholder="John Doe" />
            <InputField label="Company / Importer Name" type="text" value={data.company} onChange={setField('company')} placeholder="Global Traders Corp" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField label="Email Address *" required type="email" value={data.email} onChange={setField('email')} placeholder="john@importer.com" />
            <InputField label="Phone / WhatsApp *" required type="text" value={data.phone} onChange={setField('phone')} placeholder="+1 (555) 000-0000" />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <InputField label="Destination Country *" required type="text" value={data.country} onChange={setField('country')} placeholder="e.g. Netherlands, USA, Singapore" />
            <SelectField label="Packaging Format" value={data.packaging} onChange={setField('packaging')}>
              {PACKAGING_OPTIONS.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </SelectField>
          </div>
          <TextareaField
            label="Requirement / Quantity Details *"
            required
            rows={3}
            value={data.message}
            onChange={setField('message')}
            placeholder="Specify spices required (Cardamom, Pepper, Turmeric, Cumin, Chilli), target tonnage, or destination port..."
          />
          <Button type="submit" className="w-full rounded-xl py-4 shadow-lg shadow-amber-500/20 hover:brightness-110">
            <Send className="h-4 w-4" /> Send Direct Email Inquiry
          </Button>
        </form>
      )}
    </div>
  );
}
