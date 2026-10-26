import type { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from 'react';

const control =
  'w-full bg-black/60 border border-amber-500/20 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-amber-400';
const labelClass = 'text-[11px] text-gray-300 block mb-1 font-semibold uppercase';

type Common = { label: string };

export function InputField({ label, ...props }: Common & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <input className={control} {...props} />
    </div>
  );
}

export function TextareaField({ label, ...props }: Common & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <textarea className={control} {...props} />
    </div>
  );
}

export function SelectField({ label, children, ...props }: Common & SelectHTMLAttributes<HTMLSelectElement> & { children: ReactNode }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      <select className={control} {...props}>
        {children}
      </select>
    </div>
  );
}
