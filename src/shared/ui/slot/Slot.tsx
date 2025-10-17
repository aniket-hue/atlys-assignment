import { type PropsWithChildren, useEffect } from 'react';
import { useSlots } from './ctx';

export function Slot({ name, children }: PropsWithChildren<{ name: string }>) {
  const { registerSlot, unregisterSlot } = useSlots();

  useEffect(() => {
    registerSlot(name, children);

    return () => unregisterSlot(name);
  }, [name, children, registerSlot, unregisterSlot]);

  return null;
}
