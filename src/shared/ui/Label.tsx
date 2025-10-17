export function Label({ children, htmlFor }: { children: React.ReactNode; htmlFor: string }) {
  return (
    <label className="block text-xs font-medium text-neutral-800 mb-1" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
