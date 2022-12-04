import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { _941Icon } from './_941Icon';
import classes from './TimeLight_ColorClear.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
}
/* @figmaId 4:534 */
export const TimeLight_ColorClear: FC<Props> = memo(function TimeLight_ColorClear(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes._941}>
        <_941Icon className={classes.icon} />
      </div>
    </div>
  );
});
