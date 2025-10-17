import { cn } from '@shared/lib/cn';

import { ModalContext } from './ctx';
import { type PropsWithChildren, useState } from 'react';

export function Modal({ children }: PropsWithChildren) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        className={cn(
          'fixed inset-0 flex items-center justify-center transition-opacity duration-300',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none',
        )}
      >
        {children}
      </div>
    </ModalContext.Provider>
  );
}
