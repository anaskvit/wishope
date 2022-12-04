import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './Component2.module.css';
import { VectorIcon } from './VectorIcon';

interface Props {
  className?: string;
}
/* @figmaId 120:3303 */
export const Component2: FC<Props> = memo(function Component2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle124}></div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.signUp}>Sign Up</div>
    </div>
  );
});
