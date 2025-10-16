import type { IconProps } from './types';

export const ItalicIcon: React.FC<IconProps> = ({ className, width = 200, height = 200 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      aria-label="Italic icon"
      role="img"
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 4h-9m4 16H5M15 4L9 20"
      />
    </svg>
  );
};

export default ItalicIcon;
