import { memo, SVGProps } from 'react';

const PathIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 6 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M3.13271 0.939575C3.77221 0.939575 4.39359 1.10762 4.94111 1.42804L5.16294 1.55787C5.33113 1.65629 5.3607 1.88665 5.22281 2.02415L3.32873 3.91298C3.21239 4.02899 3.02376 4.02899 2.90742 3.91298L1.02551 2.03629C0.888227 1.89939 0.916842 1.67021 1.0836 1.57106L1.30295 1.44064C1.85549 1.1121 2.48477 0.939575 3.13271 0.939575Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(PathIcon);
export { Memo as PathIcon };
