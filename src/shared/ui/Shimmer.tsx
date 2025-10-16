import { cn } from '../lib/cn';

export function Shimmer({ className }: { className: string }) {
  return (
    <p className={cn('animate-pulse rounded-full bg-gray-200 text-sm', className)} style={{ lineHeight: 1 }}>
      &nbsp;
    </p>
  );
}
