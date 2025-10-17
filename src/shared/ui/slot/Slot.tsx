import { useSlots } from './ctx';
import { type PropsWithChildren, useEffect } from 'react';

export function Slot({ name, children }: PropsWithChildren<{ name: string }>) {
  const { registerSlot, unregisterSlot } = useSlots();

  useEffect(() => {
    registerSlot(name, children);

    return () => unregisterSlot(name);
  }, [name, children, registerSlot, unregisterSlot]);

  return null;
}
