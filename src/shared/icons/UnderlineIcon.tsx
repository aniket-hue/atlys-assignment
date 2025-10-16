import type { IconProps } from './types';

export const UnderlineIcon: React.FC<IconProps> = ({ className, width = 200, height = 200 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      className={className}
      aria-label="Underline icon"
      role="img"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 5v6a4 4 0 0 0 4 4v0a4 4 0 0 0 4-4V5M5 19h14"
      />
    </svg>
  );
};

export default UnderlineIcon;
