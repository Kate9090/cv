import React from 'react';

import styles from './Left.module.scss';

const url = '../assets/images/me.png'

const LeftContent = () => {
	return (
		<div className={styles.Left}>
			<div className={styles.Left__ImageWrapper} />

			<section className={styles.Left__Contacts}>
				<h1 className={styles.Left__Title}>Обо мне</h1>
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
