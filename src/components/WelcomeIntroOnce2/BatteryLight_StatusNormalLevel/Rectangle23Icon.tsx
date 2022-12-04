import { memo, SVGProps } from 'react';

const Rectangle23Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0V0C0.552285 0 1 0.447715 1 1V3C1 3.55228 0.552285 4 0 4V4V0Z' fill='#3C3C43' fillOpacity={0.6} />
  </svg>
);

const Memo = memo(Rectangle23Icon);
export { Memo as Rectangle23Icon };
