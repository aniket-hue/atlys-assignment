import { cn } from '@shared/lib/cn';

import { ModalContext } from './ctx';
import type { ModalRef } from './types';
import { forwardRef, type PropsWithChildren, useImperativeHandle, useState } from 'react';

export const Modal = forwardRef<ModalRef, PropsWithChildren>(({ children }, ref) => {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
    toggle: () => setIsOpen(!isOpen),
  }));

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        className={cn(
          'fixed inset-0 flex items-center justify-center transition-opacity duration-300 z-[100]',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        {children}
      </div>
    </ModalContext.Provider>
  );
});
