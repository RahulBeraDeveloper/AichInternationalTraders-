import logo from '@/assets/images/logo.jpg';
import { cn } from '@/lib/cn';

/** Round gold-ringed brand mark. */
export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn('rounded-full bg-gradient-to-br from-amber-200 to-amber-700 p-0.5', className)}>
      <img src={logo} alt="AIT logo" className="h-full w-full rounded-full object-cover" />
    </div>
  );
}
