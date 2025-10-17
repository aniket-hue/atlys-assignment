import type { IconProps } from './types';

export const MicIcon: React.FC<IconProps> = ({ className, width = 200, height = 200 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 256 256"
      className={className}
      aria-label="Video icon"
      role="img"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeDasharray="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="4"
        strokeOpacity="1"
        strokeWidth="16"
      >
        <path
          fill="currentColor"
          d="M 47.999992,48 H 160 c 17.728,0 32,14.272 32,32 v 96 c 0,17.728 -14.272,32 -32,32 H 47.999992 c -17.728,0 -32,-14.272 -32,-32 V 80 c 0,-17.728 14.272,-32 32,-32 z"
        />
        <path fill="currentColor" d="m 192,160 48,32 V 64 l -48,32" />
      </g>
    </svg>
  );
};

export default MicIcon;
