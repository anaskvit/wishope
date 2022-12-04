import { memo, SVGProps } from 'react';

const Rectangle21StrokeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 23 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3 0H20C21.6569 0 23 1.34315 23 3V9C23 10.6569 21.6569 12 20 12H3C1.34315 12 0 10.6569 0 9V3C0 1.34315 1.34315 0 3 0ZM3 1C1.89543 1 1 1.89543 1 3V9C1 10.1046 1.89543 11 3 11H20C21.1046 11 22 10.1046 22 9V3C22 1.89543 21.1046 1 20 1H3Z'
      fill='#3C3C43'
      fillOpacity={0.6}
    />
  </svg>
);

const Memo = memo(Rectangle21StrokeIcon);
export { Memo as Rectangle21StrokeIcon };
