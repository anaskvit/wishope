import { memo, SVGProps } from 'react';

const PathIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 6' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.5 0H2.5C3.05228 0 3.5 0.447715 3.5 1V5C3.5 5.55228 3.05228 6 2.5 6H1.5C0.947715 6 0.5 5.55228 0.5 5V1C0.5 0.447715 0.947715 0 1.5 0Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(PathIcon5);
export { Memo as PathIcon5 };
