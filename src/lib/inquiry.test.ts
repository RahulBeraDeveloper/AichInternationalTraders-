import { describe, expect, it } from 'vitest';
import { buildInquiryMailto } from './inquiry';
import type { InquiryFormData } from '@/types';

const sample: InquiryFormData = {
  name: 'Jane Doe',
  company: 'Global Traders',
  email: 'jane@example.com',
  phone: '+1 555 0100',
  country: 'Netherlands',
  packaging: 'Bulk 25kg PP Bags',
  message: '5 tonnes of cardamom',
};

describe('buildInquiryMailto', () => {
  it('addresses the company inbox and uses the company in the subject', () => {
    const url = buildInquiryMailto(sample);
    expect(url.startsWith('mailto:aichinternationaltraders@gmail.com?subject=')).toBe(true);
    expect(decodeURIComponent(url)).toContain('Import Quote Request - Global Traders');
  });

  it('falls back to the sender name when no company is given', () => {
    const url = decodeURIComponent(buildInquiryMailto({ ...sample, company: '' }));
    expect(url).toContain('Import Quote Request - Jane Doe');
  });
});
