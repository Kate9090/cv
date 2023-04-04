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

				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						Сентябрь 2019 - февраль 2023
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							ПАО Сбербанк
						</div>
						<p className={styles.Right__Description}>
							Разрабатывала внутреннее ПО на React + Redux/Recoil. 
							Переводила компоненты на TypeScript.
							Переводила проект на React 18.
							Отвечала за отображение графиков (ChartJs), таблиц и форм, календарей. 
							Разрабатывала кастомные компоненты (селекты и автокомплиты с множественным выбором; и простые инпуты и кнопки и тд).
							Год велась разработка на VueJs в связке с Vuex. Полгода использовала Mobx.
						</p>
					</div>
				</div>
				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						Август 2018 - Август 2019
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							ООО Учи.ру
						</div>
						<p className={styles.Right__Description}>
							Разрабатывала внутреннее ПО на React + Redux/Recoil. 
							Переводила компоненты на TypeScript.
							Переводила проект на React 18.
							Отвечала за отображение графиков (ChartJs), таблиц и форм, календарей. 
							Разрабатывала кастомные компоненты (селекты и автокомплиты с множественным выбором; и простые инпуты и кнопки и тд).
							Год велась разработка на VueJs в связке с Vuex. Полгода использовала Mobx.
						</p>
					</div>
				</div>
				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						Январь 2018 - Июль 2018
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							ООО PayOnline System
						</div>
						<p className={styles.Right__Description}>
							Разрабатывала внутреннее ПО на React + Redux/Recoil. 
							Переводила компоненты на TypeScript.
							Переводила проект на React 18.
							Отвечала за отображение графиков (ChartJs), таблиц и форм, календарей. 
							Разрабатывала кастомные компоненты (селекты и автокомплиты с множественным выбором; и простые инпуты и кнопки и тд).
							Год велась разработка на VueJs в связке с Vuex. Полгода использовала Mobx.
						</p>
					</div>
				</div>
				
			</section>

			<section className={styles.Right__EducationWrapper}>
				<h1 className={styles.Right__Title}>Образование</h1>
			</section>
		</div>
	)
}

export default RightContent;
