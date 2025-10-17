import { cn } from '@shared/lib/cn';
import { SlotOutlet, SlotProvider } from '@shared/ui/slot';

import { useModal } from './ctx';
import type { PropsWithChildren } from 'react';

function ModalContentInner({ children, className }: PropsWithChildren<{ className?: string }>) {
  const { isOpen } = useModal();

  return (
    <div className={cn('bg-gray-50 rounded-4xl p-2 w-full mx-auto z-10 relative shadow-md max-w-fit')}>
      <div
        className={cn(
          'rounded-3xl bg-white w-full border border-gray-200 group z-10 relative min-w-[410px]',
          'text-gray-800 shadow-sm transition-all duration-300 px-12 pt-16 pb-10',
          {
            'opacity-0 scale-95': !isOpen,
            'opacity-100 scale-100': isOpen,
          },
          className,
        )}
      >
        {children}
      </div>

      <SlotOutlet name="footer" fallback={<div className="px-12 pb-4">Default footer content</div>} />
    </div>
  );
}

export function ModalContent({ children, className }: PropsWithChildren<{ className?: string }>) {
  return (
    <SlotProvider>
      <ModalContentInner className={className}>{children}</ModalContentInner>
    </SlotProvider>
  );
}

export function ModalFooter({ children }: PropsWithChildren) {
  return <div className="px-12 pb-4">{children}</div>;
}
