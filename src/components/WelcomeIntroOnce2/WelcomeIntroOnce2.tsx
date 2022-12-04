import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component2 } from './Component2/Component2';
import { EmptyBarIcon } from './EmptyBarIcon';
import { IPhoneXStatusBars_Property1Tra } from './IPhoneXStatusBars_Property1Tra/IPhoneXStatusBars_Property1Tra';
import { Rectangle21StrokeIcon } from './Rectangle21StrokeIcon';
import { Rectangle23Icon } from './Rectangle23Icon';
import classes from './WelcomeIntroOnce2.module.css';

interface Props {
  className?: string;
}
/* @figmaId 31:140 */
export const WelcomeIntroOnce2: FC<Props> = memo(function WelcomeIntroOnce2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <IPhoneXStatusBars_Property1Tra className={classes.iPhoneXStatusBarsStatusbarLigh} />
      <div className={classes.statusWorkInProgress}>
        <div className={classes.background}></div>
        <div className={classes.workInProgress}>Work in progress</div>
      </div>
      <div className={classes.background2}></div>
      <div className={classes.wISHOPEACADEMY}>WISHOPE ACADEMY</div>
      <div className={classes.wishopeIsDesignedToEliminateTh}>
        <div className={classes.textBlock}>
          Wishope is designed to eliminate the deceptions and frustrations that can occur in academic life. With
          Wishope, you can access the entire academic world, from the comfort of your own device. Wishope also provides
          a platform for you to connect with other students, faculty, and professionals in the field, so you can get the
          advice and support you need to reach your academic goals. With Wishope, you can make the most of your academic
          life and unlock your full potential.
        </div>
        <div className={classes.textBlock2}>
          <p></p>
        </div>
      </div>
      <div className={classes.socialDistanceAtSchoolBro1}></div>
      <Component2 />
      <IPhoneXStatusBars_Property1Tra
        className={classes.iPhoneXStatusBarsStatusbarLigh2}
        swap={{
          emptyBar: <EmptyBarIcon className={classes.icon} />,
          rectangle23: <Rectangle23Icon className={classes.icon2} />,
          rectangle21Stroke: <Rectangle21StrokeIcon className={classes.icon3} />,
        }}
      />
      <div className={classes.statusWorkInProgress2}>
        <div className={classes.background3}></div>
        <div className={classes.workInProgress2}>Work in progress</div>
      </div>
      <div className={classes.logoSon1}></div>
    </div>
  );
});
