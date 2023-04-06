import React from 'react';

import styles from './Left.module.scss';

const age = new Date().getFullYear() - new Date(1990, 0, 28).getFullYear();

const LeftContent = () => {
	return (
		<div className={styles.Left}>
			<div className={styles.Left__TitleInfo}>
				<div className={styles.Left__ImageWrapper}>
					<div className={styles.Left__Image} />
				</div>
				<section className={styles.Left__TitleName}>
					<h1 className={styles.Left__MainName}>Еремина Екатерина</h1>
					<h2 className={styles.Left__JobTitle}>Фронтенд-разработчик</h2>
				</section>
			</div>

			<section className={styles.Left__Contacts}>
				<h1 className={styles.Left__Title}>Обо мне</h1>
				<div className={styles.Left__Line}>
				<span className={styles.Left__Label}>возраст</span>
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
				<h1 className={styles.Left__Title}>Навыки</h1>
				<div className={styles.Left__SkillWrapper}>
					<p className={styles.Left__Skill}>React</p>
				
					<p className={styles.Left__Skill}>TypeScript</p>

					<p className={styles.Left__Skill}>JavaScript</p>
				
					<p className={styles.Left__Skill}>Redux</p>
				
					<p className={styles.Left__Skill}>Webpack</p>

					<p className={styles.Left__Skill}>Vue</p>

					<p className={styles.Left__Skill}>Vuex</p>
				
					<p className={styles.Left__Skill}>Html/Css</p>
				</div>
			</section>
		</div>
	)
}

export default LeftContent;
