import React from 'react';

import DICTIONARY from '../commons/dictionary';

import styles from './Right.module.scss';

const RightContent = ({lang}) => {
	return (
		<div className={styles.Right}>
			<section>
				<h1 className={styles.Right__Name}>{DICTIONARY[`${lang}`].main_name}</h1>
				<h2 className={styles.Right__JobTitle}>{DICTIONARY[`${lang}`].job_title}</h2>
			</section>

			<section>
				<h1 className={styles.Right__Title}>{DICTIONARY[`${lang}`].expirience_title}</h1>
				
				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						{DICTIONARY[`${lang}`].june} 2023 - {DICTIONARY[`${lang}`].present}
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
						 {DICTIONARY[`${lang}`].mygames}
						</div>
						<p className={styles.Right__Description}>
							{DICTIONARY[`${lang}`].mygames_expirience}
						</p>
					</div>
				</div>

				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						{DICTIONARY[`${lang}`].september} 2019 - {DICTIONARY[`${lang}`].february} 2023
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
						 {DICTIONARY[`${lang}`].sberbank}
						</div>
						<p className={styles.Right__Description}>
							{DICTIONARY[`${lang}`].sberbank_expirience}
						</p>
					</div>
				</div>
				
				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						{DICTIONARY[`${lang}`].december} 2020 - {DICTIONARY[`${lang}`].august} 2021
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							{DICTIONARY[`${lang}`].lipgart}
						</div>
						<p className={styles.Right__Description}>
							{DICTIONARY[`${lang}`].lipgart_expirience}
						</p>
					</div>
				</div>
				
				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						{DICTIONARY[`${lang}`].august} 2018 - {DICTIONARY[`${lang}`].august} 2019
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							{DICTIONARY[`${lang}`].uchiRu}
						</div>
						<p className={styles.Right__Description}>
							{DICTIONARY[`${lang}`].uchiRu_expirience}
						</p>
					</div>
				</div>

				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						{DICTIONARY[`${lang}`].january} 2018 - {DICTIONARY[`${lang}`].july} 2018
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							{DICTIONARY[`${lang}`].payOnline}
						</div>
						<p className={styles.Right__Description}>
							{DICTIONARY[`${lang}`].payOnline_expirience}
						</p>
					</div>
				</div>
				
			</section>

			<section className={styles.Right__EducationWrapper}>
				<h1 className={styles.Right__Title}>{DICTIONARY[`${lang}`].education_title}</h1>

				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						{DICTIONARY[`${lang}`].september} 2011 - {DICTIONARY[`${lang}`].june} 2013
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							{DICTIONARY[`${lang}`].MSTU}
						</div>
						<p className={styles.Right__Description}>
							{DICTIONARY[`${lang}`].master_degree}
						</p>
					</div>
				</div>

				<div className={styles.Right__ExpirienceWrapper}>
					<div className={styles.Right__Period}>
						{DICTIONARY[`${lang}`].september} 2007 - {DICTIONARY[`${lang}`].june} 2011
					</div>
					<div className={styles.Right__DescriptionWtapper}>
						<div className={styles.Right__Organization}>
							{DICTIONARY[`${lang}`].MSTU}
						</div>
						<p className={styles.Right__Description}>
						 {DICTIONARY[`${lang}`].bachelor_degree}
						</p>
					</div>
				</div>
			</section>
		</div>
	)
}

export default RightContent;
