import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 3 8' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1 0H2C2.55228 0 3 0.447715 3 1V7C3 7.55228 2.55228 8 2 8H1C0.447715 8 0 7.55228 0 7V1C0 0.447715 0.447715 0 1 0Z'
      fill='#D1D1D6'
    />
  </svg>
);

const Memo = memo(PathIcon);
export { Memo as PathIcon };
