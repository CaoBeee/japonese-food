'use client'

import React from 'react'
import styles from '../styles/japonLogo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/img/logo/JaponeseFood.svg'
import vectorBG from '/public/img/logo/Vector.svg'

export default function JaponLogo() {
	return (
		<div
			className={styles.logoContainer}
			style={{
				background: `url(${vectorBG.src})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
			}}
		>
			<Link
				href='/'
				className={styles.logo}
			>
				<Image
					src={logo}
					alt='Japon Logo'
					height={105}
					width={105}
					priority
				/>
			</Link>
		</div>
	)
}
