// Home Page
import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import faviconLogo from '/public/favicon.ico'
import floralPattern from '/public/img/home/FloralPattern.svg'
import bigCircle from '/public/img/home/LargeCircle.svg'
import redStar from '/public/img/home/RedStar.svg'
import blueStar from '/public/img/home/BlueStar.svg'
import sVector from '/public/img/home/S-ShapeVector.svg'

export default function Page() {
	const faviconLink = (
		<link
			rel='shortcut icon'
			href={faviconLogo.src}
			type='image/x-icon'
		/>
	)

	const paragraph = `Our menu is packed with delicious options that are sure 
	to satisfy your cravings. Indulge in our expertly crafted sushi rolls or 
	try our expertly prepared nigiri, featuring the finest cuts of fish and 
	seafood served atop a bed of perfectly seasoned sushi rice. No matter what 
	you choose, our Japanese food menu is sure to impress. So why wait?`

	return (
		<React.Fragment>
			{faviconLink}
			<div className={styles.container}>
				<Image
					src={floralPattern}
					alt='floral'
					className={styles.floral}
				/>
				<Image
					src={bigCircle}
					alt='bigCircle'
					className={styles.bigCircle}
				/>
				<Image
					src={sVector}
					alt='S-Vector'
					className={styles.sVector}
				/>
			</div>
			<main className={styles.mainContainer}>
				<h1 className={styles.header}>
					How about
					<br />
					<span className={styles.headerSpan}> Japanese food?</span>
				</h1>

				<div className={styles.starContainer}>
					<Image
						src={redStar}
						alt='floral'
					/>
					<Image
						src={blueStar}
						alt='bigCircle'
					/>
					<Image
						src={redStar}
						alt='floral'
					/>
					<Image
						src={redStar}
						alt='floral'
					/>
				</div>
				<p className={styles.paragraph}>{paragraph}</p>
				<button className={styles.orderBtn}>Order now</button>
			</main>
		</React.Fragment>
	)
}
