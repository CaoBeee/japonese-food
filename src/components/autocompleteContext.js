'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Delivery.module.css'
import addressIcon from '/public/img/delivery/InputAddressIcon.svg'
import arrow from '/public/img/delivery/InputArrowIcon.svg'
import {
	GeoapifyGeocoderAutocomplete,
	GeoapifyContext,
} from '@geoapify/react-geocoder-autocomplete'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import Link from 'next/link'

export default function AutocompleteContext() {
	function onPlaceSelect(value) {
		console.log(value)
		setDeliveryAddress(value?.properties.formatted)
	}

	function onSuggestionChange(value) {
		console.log(value)
	}

	const [deliveryAddress, setDeliveryAddress] = useState('');

	const onArrowClick = () => {
		localStorage.setItem('deliveryAddress', deliveryAddress)
		console.log(deliveryAddress)
	}

	const onEnter = (e) => () => {
		console.log(e.key)
		if (e.key === 'Enter' || e.keyCode === 13) {
			localStorage.setItem('deliveryAddress', deliveryAddress)
			console.log(deliveryAddress)
		}
	}

	return (
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
					value={deliveryAddress}
					limit={2}
					placeholder='Enter delivery address'
					BiasByCountryCode={'US'}
					skipIcons={false}
					debounceDelay={300}
					placeSelect={onPlaceSelect}
					suggestionsChange={onSuggestionChange}
					onUserInput={(e) =>	setDeliveryAddress(e)}
				/>
				<Link
					className={styles.arrow}
					href={'/Order'}
					onClick={onArrowClick}
				>
					<Image
						src={arrow}
						alt='Icon'
					/>
					</Link>
			</div>
		</GeoapifyContext>
	)
}
