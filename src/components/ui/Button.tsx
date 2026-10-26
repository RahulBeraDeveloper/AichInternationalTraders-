import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'outline' | 'whatsapp';

const base = 'flex items-center justify-center gap-2 font-extrabold uppercase text-xs tracking-widest transition-all';

const variants: Record<Variant, string> = {
  primary: 'gold-gradient-bg text-black',
  outline:
    'border border-amber-500/30 hover:border-amber-400 text-amber-200 font-bold bg-amber-950/20 backdrop-blur-md hover:bg-amber-500/10',
  whatsapp: 'border border-emerald-500/40 text-emerald-300 font-bold hover:bg-emerald-500/10',
};

interface OwnProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type AnchorProps = OwnProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = OwnProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

/** Renders an <a> when `href` is given, otherwise a <button>. */
export function Button(props: AnchorProps | NativeButtonProps) {
  const { variant = 'primary', className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ('href' in rest && rest.href !== undefined) {
    return (
      <a className={classes} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }
  return (
    <button type="button" className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
