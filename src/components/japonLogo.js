'use client'

import React from 'react'
import styles from '../styles/japonLogo.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '/public/img/logo/JaponeseFood.svg'
import logoVector from '/public/img/logo/Vector.svg'

export default function JaponLogo() {
	return (
		<div className={styles.container}>
			<Image
				src={logoVector}
				className={styles.logoVectorShape}
				alt='logo background shape'
				width={342}
				height={201}
			></Image>
			<div className={styles.logo}>
				<Link href='/'>
					<Image
						src={logo}
						alt='Japon Logo'
						height={105}
						width={105}
						priority
					/>
				</Link>
			</div>
		</div>
	)
}
