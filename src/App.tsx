import { memo } from 'react';
import type { FC } from 'react';

import classes from './App.module.css';
import resets from './components/_resets.module.css';
import { WelcomeIntroOnce2 } from './components/WelcomeIntroOnce2/WelcomeIntroOnce2';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <WelcomeIntroOnce2 />
    </div>
  );
});
