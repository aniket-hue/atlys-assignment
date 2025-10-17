import { cn } from '@shared/lib/cn';

import type { ChangeEventHandler } from 'react';

interface InputProps {
  id: string;
  className?: string;
  placeholder: string;
  type: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value?: string;
}

export function Input({ id, className, placeholder, type, onChange, value }: InputProps) {
  return (
    <input
      className={cn(
        'w-full p-2 h-10 text-xs rounded-md border-none bg-gray-100 outline-none focus:ring-violet-800 focus:ring-2 transition-all duration-300',
        className,
      )}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      id={id}
    />
  );
}
