import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Notch_VisibleNO.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 4:406 */
export const Notch_VisibleNO: FC<Props> = memo(function Notch_VisibleNO(props = {}) {
  return (
    <div
      className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    ></div>
  );
});
