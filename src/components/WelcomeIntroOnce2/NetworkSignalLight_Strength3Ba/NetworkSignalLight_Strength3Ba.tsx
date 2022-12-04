import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { EmptyBarIcon } from './EmptyBarIcon';
import classes from './NetworkSignalLight_Strength3Ba.module.css';
import { PathIcon } from './PathIcon';
import { PathIcon2 } from './PathIcon2';
import { PathIcon3 } from './PathIcon3';
import { PathIcon4 } from './PathIcon4';
import { PathIcon5 } from './PathIcon5';
import { PathIcon6 } from './PathIcon6';

interface Props {
  className?: string;
  swap?: {
    emptyBar?: ReactNode;
  };
}
/* @figmaId 4:420 */
export const NetworkSignalLight_Strength3Ba: FC<Props> = memo(function NetworkSignalLight_Strength3Ba(props = {}) {
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
      <div className={classes.emptyBar}>{props.swap?.emptyBar || <EmptyBarIcon className={classes.icon4} />}</div>
      <div className={classes.path4}>
        <PathIcon4 className={classes.icon5} />
      </div>
      <div className={classes.path5}>
        <PathIcon5 className={classes.icon6} />
      </div>
      <div className={classes.path6}>
        <PathIcon6 className={classes.icon7} />
      </div>
    </div>
  );
});
