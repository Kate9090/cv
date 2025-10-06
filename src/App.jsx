import { useState } from 'react';

import LeftContent from './Left/Left';
import RightContent from './Right/Right';

import cx from 'classnames';

import styles from './App.module.scss';

const App = () => {
  const [lang, setLang] = useState('ru');

  const handleChangeLang = (lang) => {
    setLang(lang);
  };

  return (
    <div className={styles.App}>
      <nav>
        <ul className={styles.App__LangWrapper}>
          <li
            className={cx(styles.App__Lang, lang === 'ru' && styles['App__Lang--active'])}
            onClick={() => handleChangeLang('ru')}
          >
            ru
          </li>
          <li
            className={cx(styles.App__Lang, lang === 'en' && styles['App__Lang--active'])}
            onClick={() => handleChangeLang('en')}
          >
            en
          </li>
        </ul>
      </nav>
      <LeftContent lang={lang} />
      <RightContent lang={lang} />
    </div>
  );
};

export default App;
