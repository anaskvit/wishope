import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { PathIcon } from './PathIcon';
import { PathIcon2 } from './PathIcon2';
import { PathIcon3 } from './PathIcon3';
import classes from './WiFiSignalLight_Property13Bars.module.css';

interface Props {
  className?: string;
}
/* @figmaId 4:457 */
export const WiFiSignalLight_Property13Bars: FC<Props> = memo(function WiFiSignalLight_Property13Bars(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.path}>
        <PathIcon className={classes.icon} />
      </div>
      <div className={classes.path2}>
        <PathIcon2 className={classes.icon2} />
      </div>
      <div className={classes.path3}>
        <PathIcon3 className={classes.icon3} />
      </div>
    </div>
  );
});
