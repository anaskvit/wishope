import { memo, SVGProps } from 'react';

const EmptyBarIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.5 0H2.5C3.05228 0 3.5 0.447715 3.5 1V9C3.5 9.55228 3.05228 10 2.5 10H1.5C0.947715 10 0.5 9.55228 0.5 9V1C0.5 0.447715 0.947715 0 1.5 0Z'
      fill='#3C3C43'
    />
  </svg>
);

const Memo = memo(EmptyBarIcon);
export { Memo as EmptyBarIcon };
