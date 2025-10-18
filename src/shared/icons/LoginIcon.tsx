import type { IconProps } from './types';

export const LoginIcon: React.FC<IconProps> = ({ className, width = 200, height = 200 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="#000000"
      className={className}
      aria-label="Login icon"
      role="img"
    >
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path d="M14 8V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2" />
        <path d="M20 12H7l3-3m0 6l-3-3" />
      </g>
    </svg>
  );
};

export default LoginIcon;
