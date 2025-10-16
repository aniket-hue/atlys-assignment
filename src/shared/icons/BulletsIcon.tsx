import type { IconProps } from './types';

export const BulletsIcon: React.FC<IconProps> = ({ className, width = 200, height = 200 }) => {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-label="Bullets icon"
      role="img"
    >
      <g fill="none">
        <circle cx="4.443" cy="5.081" r="1.331" fill="currentColor" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.123 5.08h11.765"
        />
        <circle cx="4.443" cy="12" r="1.331" fill="currentColor" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.123 12h11.765"
        />
        <circle cx="4.443" cy="18.919" r="1.331" fill="currentColor" />
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M9.123 18.92h11.765"
        />
      </g>
    </svg>
  );
};

export default BulletsIcon;
