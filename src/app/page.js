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

	const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
		labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
		laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
		voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
		cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`

	return (
		<React.Fragment>
			{faviconLink}
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
			<div className={styles.container}>
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
			</div>
		</React.Fragment>
	)
}
