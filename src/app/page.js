'use client'

import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import faviconLogo from '/public/favicon.ico'
import floralPattern from '/public/img/home/FloralPattern.svg'
import bigCircle from '/public/img/home/LargeCircle.svg'
import redStar from '/public/img/home/RedStar.svg'
import blueStar from '/public/img/home/BlueStar.svg'
import sVector from '/public/img/home/S-ShapeVector.svg'
import Link from 'next/link'

export default function Home() {
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
				<div className={styles.leftContainer}>
					<h1 className={styles.header}>How about</h1>
					<span className={styles.headerSpan}> Japanese food?</span>
					<div className={styles.starContainer}>
						<Image
							src={redStar}
							alt='red star'
						/>
						<Image
							src={blueStar}
							alt='blue star'
						/>
						<Image
							src={redStar}
							alt='red star'
						/>
						<Image
							src={redStar}
							alt='red star'
						/>
					</div>
					<p className={styles.paragraph}>{paragraph}</p>
					<Link
						className={styles.orderLink}
						href='/Order'
					>
						<button className={styles.orderBtn}>Order now</button>
					</Link>
				</div>
				<div className={styles.vectorContainer}>
					<div className={styles.floral}>
						<Image
							src={floralPattern}
							alt='floral'
							width={132}
							height={142}
						/>
					</div>
					<div className={styles.sVector}>
						<Image
							src={sVector}
							alt='S-Vector'
							width={208}
							height={227}
						/>
					</div>
					<div className={styles.bigCircle}>
						<Image
							src={bigCircle}
							alt='bigCircle'
							width={750}
							sizes={750}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}
