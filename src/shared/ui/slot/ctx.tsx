import type { SlotContextType } from './types';
import { createContext, type PropsWithChildren, useCallback, useContext, useState } from 'react';

const SlotContext = createContext<SlotContextType>({
  slots: {},
  registerSlot: () => {
    throw new Error('registerSlot is not implemented');
  },
  unregisterSlot: () => {
    throw new Error('unregisterSlot is not implemented');
  },
  getSlot: () => {
    throw new Error('getSlot is not implemented');
  },
});

export function SlotProvider({ children }: PropsWithChildren) {
  const [slots, setSlots] = useState<Record<string, React.ReactNode>>({});

  const registerSlot = useCallback((name: string, content: React.ReactNode) => {
    setSlots((prev) => ({ ...prev, [name]: content }));
  }, []);

  const unregisterSlot = useCallback((name: string) => {
    setSlots((prev) => {
      const { [name]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const getSlot = useCallback(
    (name: string) => {
      return slots[name];
    },
    [slots],
  );

  return (
    <SlotContext.Provider value={{ slots, registerSlot, unregisterSlot, getSlot }}>{children}</SlotContext.Provider>
  );
}

export function useSlots() {
  return useContext(SlotContext);
}
