import { memo, SVGProps } from 'react';

const PathIcon6 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 0.5H2C2.55228 0.5 3 0.947715 3 1.5V4C3 4.55228 2.55228 5 2 5H1C0.447715 5 0 4.55228 0 4V1.5C0 0.947715 0.447715 0.5 1 0.5Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(PathIcon6);
export { Memo as PathIcon6 };
