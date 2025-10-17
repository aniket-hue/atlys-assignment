export interface SlotContextType {
  slots: Record<string, React.ReactNode>;
  registerSlot: (name: string, content: React.ReactNode) => void;
  unregisterSlot: (name: string) => void;
  getSlot: (name: string) => React.ReactNode | undefined;
}
