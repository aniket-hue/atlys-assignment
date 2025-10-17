import { useSlots } from './ctx';

export function SlotOutlet({ name, fallback }: { name: string; fallback?: React.ReactNode }) {
  const { getSlot } = useSlots();
  const slotContent = getSlot(name);

  return <>{slotContent || fallback}</>;
}
