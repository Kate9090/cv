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
							Помогла перевести компоненты на TypeScript и на React 18.
							Отвечала за отображение графиков (ChartJs), таблиц и форм, календарей. 
							Разработала кастомные UI компоненты (селекты и автокомплиты с множественным выбором; и простые инпуты и кнопки и тд).
							Год вела разработку на VueJs в связке с Vuex и Vuetify, помогла команде Чатов в управлении сотрудниками, отображая информацию по их занятостям в виде дашбордов и граиков.
							Полгода использовала Mobx с React для отображения визуальной части приложения для выплаты дивидендов.
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
							Разработала конструктор для создания олимпиад на VueJs.
							 Ускорила запуск олимпиад. 
							 Занималась версткой игр и ландингов для олимпиад школьников.
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
							Разрабатывала адаптивный дизайн приложения для эквайринга и верстала его. 
						</p>
					</div>
				</div>
				
			</section>

			<section className={styles.Right__EducationWrapper}>
				<h1 className={styles.Right__Title}>Образование</h1>

				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
					Сентябрь 2011 - Июнь 2013
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							МГТУ им Н.Э. Баумана
						</div>
						<p className={styles.Right__Description}>
							Магистратура: Специальность -  Ракетно-космические композиционные материалы и конструкции. Диплом с отличием.
						</p>
					</div>
				</div>

				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						Сентябрь 2007 - Июнь 2011
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							МГТУ им Н.Э. Баумана
						</div>
						<p className={styles.Right__Description}>
						Бакалавриат: Специальность - Ракетно-космические композиционные материалы и конструкции. Диплом с отличием.
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default RightContent;
