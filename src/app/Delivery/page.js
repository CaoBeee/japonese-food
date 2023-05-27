'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Delivery.module.css'
import sushi from '/public/img/delivery/Sushi.svg'
import Link from 'next/link'
import AutocompleteContext from '@/components/autocompleteContext'
import Head from 'next/head'

export default function Delivery() {
	//GEOAPIFY
	function onPlaceSelect(value) {
		console.log(value)
	}

	function onSuggestionChange(value) {
		console.log(value)
	}

	return (
		<>
			<Head>
				<link
					rel='preload'
					href='/public/img/delivery/Sushi.svg'
					as='image'
				/>
			</Head>
			<div className={styles.container}>
				<div className={styles.headerContainer}>
					<div className={styles.leftContainer}>
						<div style={{ display: 'block' }}>
							<div className={styles.header}>
								<h1>
									You order,
									<br />
									<span className={styles.headerSpan}> we deliver.</span>
									<br />
								</h1>
							</div>
							<AutocompleteContext></AutocompleteContext>
							<p>Not ready to order yet? Take a look at our menu for something delicious.</p>
							<Link
								className={styles.menuBtnLink}
								href={'/Order'}
							>
								<button className={styles.menuBtn}>Menu</button>
							</Link>
						</div>
					</div>
				</div>
				<div className={styles.sushiBackgroundContainer}>
					<Image
						src={sushi.src}
						alt='sushi'
						fill='fill'
						className={styles.sushi}
						priority={true}
					></Image>
				</div>
			</div>
		</>
	)
}
