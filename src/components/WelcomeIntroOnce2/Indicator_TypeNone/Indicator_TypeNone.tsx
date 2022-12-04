import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Indicator_TypeNone.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 4:523 */
export const Indicator_TypeNone: FC<Props> = memo(function Indicator_TypeNone(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
