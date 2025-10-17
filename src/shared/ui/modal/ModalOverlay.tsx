import { useModal } from './ctx';
import type { PropsWithChildren } from 'react';

export function ModalOverlay() {
  const { setIsOpen } = useModal();

  return (
    <div
      className="fixed inset-0 bg-black/50 z-10"
      onClick={() => {
        setIsOpen(false);
      }}
      role="button"
      tabIndex={-1}
    />
  );
}
