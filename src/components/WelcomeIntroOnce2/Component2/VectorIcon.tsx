import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 22 23' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M1.39861 22.8284C1.67149 22.9314 1.97853 23 2.28558 23C2.76317 23 3.24076 22.8284 3.65008 22.5538L20.5361 13.3211L20.7066 13.1495C21.1501 12.7033 21.3889 12.1541 21.3889 11.5363C21.3889 10.9185 21.1501 10.335 20.7066 9.92318L20.5361 9.75157L3.65008 0.450171C3.03605 -0.0303227 2.14908 -0.133285 1.39861 0.175604C0.545756 0.518814 4.35299e-09 1.3769 4.35299e-09 2.30362V20.7004C-5.62823e-05 21.6272 0.545756 22.4852 1.39861 22.8284V22.8284Z'
      stroke='white'
      strokeWidth={2.73902}
      strokeMiterlimit={10}
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
