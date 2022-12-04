import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './BatteryLight_StatusNormalLevel.module.css';
import { Rectangle21StrokeIcon } from './Rectangle21StrokeIcon';
import { Rectangle23Icon } from './Rectangle23Icon';

interface Props {
  className?: string;
  swap?: {
    rectangle23?: ReactNode;
    rectangle21Stroke?: ReactNode;
  };
}
/* @figmaId 4:482 */
export const BatteryLight_StatusNormalLevel: FC<Props> = memo(function BatteryLight_StatusNormalLevel(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle23}>
        {props.swap?.rectangle23 || <Rectangle23Icon className={classes.icon} />}
      </div>
      <div className={classes.rectangle21Stroke}>
        {props.swap?.rectangle21Stroke || <Rectangle21StrokeIcon className={classes.icon2} />}
      </div>
      <div className={classes.rectangle20}></div>
    </div>
  );
});
