import LeftContent from './Left/Left';
import RightContent from './Right/Right';

import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.App}>
      <LeftContent />
      <RightContent />
    </div>
  );
}

export default App;
