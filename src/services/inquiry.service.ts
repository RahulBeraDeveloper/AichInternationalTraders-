import { buildInquiryMailto } from '@/lib/inquiry';
import type { InquiryFormData } from '@/types';

/**
 * Sends an export inquiry.
 * Today: opens the visitor's mail client. When the backend exists, replace the body with
 *   await http('/inquiries', { method: 'POST', body: JSON.stringify(data) });
 * Callers (useInquiryForm) do not need to change.
 */
export async function submitInquiry(data: InquiryFormData): Promise<void> {
  window.location.href = buildInquiryMailto(data);
}
