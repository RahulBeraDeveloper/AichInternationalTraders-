import { siteConfig } from '@/config/site';
import type { InquiryFormData } from '@/types';

/** Builds the mailto: URL used by the inquiry form while no backend exists. */
export const buildInquiryMailto = (data: InquiryFormData): string => {
  const subject = encodeURIComponent(`Import Quote Request - ${data.company || data.name}`);
  const body = encodeURIComponent(
    `Name: ${data.name}\n` +
      `Company: ${data.company}\n` +
      `Email: ${data.email}\n` +
      `Phone/WhatsApp: ${data.phone}\n` +
      `Destination Country: ${data.country}\n` +
      `Packaging: ${data.packaging}\n\n` +
      `Message / Quantity Needed:\n${data.message}`,
  );
  return `mailto:${siteConfig.contact.email}?subject=${subject}&body=${body}`;
};
