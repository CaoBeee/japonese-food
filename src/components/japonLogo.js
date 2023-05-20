'use client'

import React from 'react'
import styles from '../styles/japonLogo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/img/logo_japoneseFood.svg'
import vectorBG from '/public/img/LogoVector.svg'

export default function JaponLogo() {
	return (
		<header
			className={styles.container}
			style={{
				background: `url(${vectorBG.src})`,
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
			}}
		>
			<Link href='/'>
				<Image
					className={styles.logo}
					src={logo}
					alt='Japon Logo'
					height={105}
					width={105}
					priority
				/>
			</Link>
		</header>
	)
}
