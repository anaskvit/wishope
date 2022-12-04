import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BatteryLight_StatusNormalLevel } from '../BatteryLight_StatusNormalLevel/BatteryLight_StatusNormalLevel';
import { Indicator_TypeNone } from '../Indicator_TypeNone/Indicator_TypeNone';
import { NetworkSignalLight_Strength3Ba } from '../NetworkSignalLight_Strength3Ba/NetworkSignalLight_Strength3Ba';
import { Notch_VisibleNO } from '../Notch_VisibleNO/Notch_VisibleNO';
import { TimeLight_ColorClear } from '../TimeLight_ColorClear/TimeLight_ColorClear';
import { WiFiSignalLight_Property13Bars } from '../WiFiSignalLight_Property13Bars/WiFiSignalLight_Property13Bars';
import classes from './IPhoneXStatusBars_Property1Tra.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    emptyBar?: ReactNode;
    rectangle23?: ReactNode;
    rectangle21Stroke?: ReactNode;
  };
}
/* @figmaId 4:741 */
export const IPhoneXStatusBars_Property1Tra: FC<Props> = memo(function IPhoneXStatusBars_Property1Tra(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <Notch_VisibleNO className={classes.notch} />
      <div className={classes.statusIcons}>
        <NetworkSignalLight_Strength3Ba
          swap={{
            emptyBar: props.swap?.emptyBar,
          }}
        />
        <WiFiSignalLight_Property13Bars />
        <BatteryLight_StatusNormalLevel
          swap={{
            rectangle23: props.swap?.rectangle23,
            rectangle21Stroke: props.swap?.rectangle21Stroke,
          }}
        />
      </div>
      <Indicator_TypeNone className={classes.indicator} />
      <TimeLight_ColorClear className={classes.timeLight} />
    </div>
  );
});
