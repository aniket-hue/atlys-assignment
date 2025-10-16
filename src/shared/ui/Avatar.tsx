import { useMemo, useState } from 'react';
import { cn } from '../lib/cn';

interface AvatarProps {
  src: string;
  name: string;
  className?: string;
  color?: string;
}

const soothingColors = [
  '#FF6B6B',
  '#4ECDC4',
  '#45B29D',
  '#F7DC6F',
  '#F5CBA7',
  '#D6EAF8',
  '#85C1E9',
  '#A2D9CE',
  '#F5B041',
  '#F1948A',
];

export function Avatar({ src, name, className }: AvatarProps) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  function handleLoad() {
    setIsImageLoaded(true);
  }

  const initials = name
    .split(' ')
    .map((word) => word[0])
    .join('');

  const randomColor = useMemo(() => {
    return soothingColors[Math.floor(Math.random() * soothingColors.length)];
  }, []);

  return (
    <div className={cn('w-10 h-10 rounded-xl relative overflow-hidden', className)}>
      <img onLoad={handleLoad} src={src} alt={name} className="w-full h-full object-cover z-0" />

      {!isImageLoaded && (
        <div
          className="uppercase text-center text-white text-xl absolute inset-0 z-10 flex items-center justify-center "
          style={{ backgroundColor: randomColor }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}
