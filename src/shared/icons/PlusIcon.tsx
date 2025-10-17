import type { IconProps } from './types';

export const PlusIcon: React.FC<IconProps> = ({ className, width = 200, height = 200 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 304 384"
      className={className}
      aria-label="Plus icon"
      role="img"
    >
      <path fill="currentColor" d="M299 213H171v128h-43V213H0v-42h128V43h43v128h128v42z" />
    </svg>
  );
};

export default PlusIcon;
