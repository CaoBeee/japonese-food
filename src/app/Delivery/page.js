'use client'
import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Delivery.module.css'
import sushi from '/public/img/delivery/Sushi.png'
import Link from 'next/link'
import AutocompleteContext from '@/components/autocompleteContext'

export default function Delivery() {
	//GEOAPIFY
	function onPlaceSelect(value) {
		console.log(value)
	}

	function onSuggestionChange(value) {
		console.log(value)
	}

	return (
		<div className={styles.container}>
			<div className={styles.leftContainer}>
				<h1 className={styles.header}> You order,</h1>
				<span className={styles.headerSpan}> we deliver.</span>
				<AutocompleteContext />
				<p className={styles.paragraph}>
					Not ready to order yet? Take a look at our menu for something delicious.
				</p>
				<Link
					className={styles.menuBtnLink}
					href={'/Order'}
				>
					<button className={styles.menuBtn}>Menu</button>
				</Link>
			</div>

			<div className={styles.sushiBackgroundContainer}>
				<Image
					src={sushi.src}
					alt='sushi'
					width={908}
					height={951}
					className={styles.sushi}
					priority={true}
				/>
			</div>
		</div>
	)
}
