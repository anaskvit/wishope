import { memo, SVGProps } from 'react';

const PathIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 4' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.13267 0.469849C6.7235 0.469849 8.25092 0.997592 9.49521 1.97491L9.67106 2.11303C9.81126 2.22315 9.82357 2.43064 9.69738 2.55649L8.5666 3.68412C8.46202 3.78842 8.29653 3.8004 8.17793 3.71226L8.04009 3.60981C7.19969 2.98523 6.18633 2.6502 5.13267 2.6502C4.07251 2.6502 3.05323 2.9894 2.21005 3.62115L2.07207 3.72453C1.95346 3.81339 1.78737 3.80169 1.68247 3.69709L0.552103 2.56986C0.426179 2.44429 0.438134 2.23732 0.577686 2.127L0.752538 1.98876C1.99979 1.00273 3.53416 0.469849 5.13267 0.469849Z'
      fill='black'
    />
  </svg>
);

const Memo = memo(PathIcon2);
export { Memo as PathIcon2 };
