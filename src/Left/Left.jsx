import React from 'react';

import DICTIONARY from '../commons/dictionary';

import styles from './Left.module.scss';
import ava from '../assets/images/me.png';

const age = new Date().getFullYear() - new Date(1990, 0, 28).getFullYear();

const LeftContent = ({ lang }) => {
  return (
    <div className={styles.Left}>
      <div className={styles.Left__TitleInfo}>
        <div className={styles.Left__ImageWrapper}>
          <div className={styles.Left__Image}>
            <img src={ava} alt="avatar" style={{ width: 200, height: 200 }} />
          </div>
        </div>
        <section className={styles.Left__TitleName}>
          <h1 className={styles.Left__MainName}>{DICTIONARY[`${lang}`].main_name}</h1>
          <h2 className={styles.Left__JobTitle}>{DICTIONARY[`${lang}`].job_title}</h2>
        </section>
      </div>

      <section className={styles.Left__Contacts}>
        <h1 className={styles.Left__Title}>{DICTIONARY[`${lang}`].title}</h1>
        <div className={styles.Left__Line}>
          <span className={styles.Left__Label}>{DICTIONARY[`${lang}`].age_label}</span>
          <p className={styles.Left__Contact}>{age}</p>
        </div>
        <div className={styles.Left__Line}>
          <span className={styles.Left__Label}>e-mail</span>
          <p className={styles.Left__Contact}>vam.pochta@yahoo.com</p>
        </div>
        <div className={styles.Left__Line}>
          <span className={styles.Left__Label}>telegram</span>
          <p className={styles.Left__Contact}>@Kate_eryomina</p>
        </div>
      </section>

      <section className={styles.Left__Contacts}>
        <h1 className={styles.Left__Title}>{DICTIONARY[`${lang}`].skills}</h1>
        <div className={styles.Left__SkillWrapper}>
          <p className={styles.Left__Skill}>React</p>
          <p className={styles.Left__Skill}>TypeScript</p>
          <p className={styles.Left__Skill}>RTK Query</p>
          <p className={styles.Left__Skill}>WebSocket</p>

          <p className={styles.Left__Skill}>JavaScript</p>

          <p className={styles.Left__Skill}>Webpack</p>
          <p className={styles.Left__Skill}>Vite</p>

          <p className={styles.Left__Skill}>Jest</p>
          <p className={styles.Left__Skill}>Vitest</p>

          <p className={styles.Left__Skill}>HTML5/CSS3</p>
          <p className={styles.Left__Skill}>Git, GitFlow</p>
          <p className={styles.Left__Skill}>Figma</p>
        </div>
      </section>

      <section className={styles.Left__Contacts}>
        <h1 className={styles.Left__Title}>{DICTIONARY[`${lang}`].languages}</h1>
        <div className={styles.Left__SkillWrapper}>
          <p className={styles.Left__Skill}>{DICTIONARY[`${lang}`].rus}</p>

          <p className={styles.Left__Skill}>{DICTIONARY[`${lang}`].english}</p>
        </div>
      </section>
    </div>
  );
};

export default LeftContent;
