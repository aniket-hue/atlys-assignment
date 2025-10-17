import { createContext, useContext } from 'react';

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const ModalContext = createContext<ModalContextType>({
  isOpen: false,
  // biome-ignore lint/suspicious/noEmptyBlockStatements: we don't need to implement this function
  setIsOpen: () => {},
});

export function useModal() {
  return useContext(ModalContext);
}
