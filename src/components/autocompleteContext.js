import React from 'react'
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
	//GEOAPIFY
	function onPlaceSelect(value) {
		console.log(value)
	}

	function onSuggestionChange(value) {
		console.log(value)
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
	)
}