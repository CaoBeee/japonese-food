'use client'

import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Delivery.module.css'
import sushi from '/public/img/delivery/Sushi.svg'
import addressIcon from '/public/img/delivery/InputAddressIcon.svg'
import arrow from '/public/img/delivery/InputArrowIcon.svg'
import {
	GeoapifyGeocoderAutocomplete,
	GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import Link from 'next/link'

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
						<GeoapifyContext apiKey={process.env.NEXT_PUBLIC_GEOAPIFY_API_KEY}>
							<div
								id='autocomplete'
								className='autocomplete-container'
							>
								<Image
									className={styles.addressIcon}
									src={addressIcon}
									alt='Icon'
								/>
								<GeoapifyGeocoderAutocomplete
									limit={2}
									placeholder='Enter delivery address'
									BiasByCountryCode={'US'}
									skipIcons={false}
									debounceDelay={300}
									placeSelect={onPlaceSelect}
									suggestionsChange={onSuggestionChange}
								></GeoapifyGeocoderAutocomplete>
								<Link
									className={styles.arrow}
									href={'/Order'}
								>
									<Image
										src={arrow}
										alt='Icon'
									/>
								</Link>
							</div>
						</GeoapifyContext>
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
			<div
				className={styles.sushi}
				style={{
					backgroundImage: `url(${sushi.src})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: '900px 810px',
				}}
			></div>
		</div>
	)
}
