import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface Props {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeading({ eyebrow, title, description, className, eyebrowClassName, titleClassName, descriptionClassName }: Props) {
  return (
    <div className={className}>
      <span className={cn('text-xs font-bold uppercase tracking-widest text-amber-400', eyebrowClassName)}>{eyebrow}</span>
      <h2 className={cn('font-black text-white', titleClassName)}>{title}</h2>
      {description && <p className={descriptionClassName}>{description}</p>}
    </div>
  );
}
