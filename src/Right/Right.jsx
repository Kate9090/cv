import React from 'react';

import styles from './Right.module.scss';

const RightContent = () => {
	return (
		<div className={styles.Right}>
			<section>
				<h1 className={styles.Right__Name}>Еремина Екатерина</h1>
				<h2 className={styles.Right__JobTitle}>Фронтенд-разработчик</h2>
			</section>

			<section>
				<h1 className={styles.Right__Title}>Опыт работы</h1>
				
			</section>
		</div>
	)
}

export default RightContent;
