import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import { PACKAGING_OPTIONS } from '@/config/site';
import { submitInquiry } from '@/services/inquiry.service';
import type { InquiryFormData } from '@/types';

const INITIAL: InquiryFormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  country: '',
  packaging: PACKAGING_OPTIONS[0],
  message: '',
};

const RESET_DELAY_MS = 4000;

export function useInquiryForm() {
  const [data, setData] = useState<InquiryFormData>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const setField =
    (field: keyof InquiryFormData) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setData((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    await submitInquiry(data);
    timer.current = setTimeout(() => {
      setSubmitted(false);
      setData(INITIAL);
    }, RESET_DELAY_MS);
  };

  return { data, submitted, setField, handleSubmit };
}
