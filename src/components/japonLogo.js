import React from 'react'
import styles from '../styles/japonLogo.module.css'
import Image from 'next/image'
import logo from '../../public/img/logo_japonesefood.png'
import vector from '/public/img/LogoVector.svg'

export default function JaponLogo() {
	return (
		<>
			<Image
				className={styles.vector}
				src={vector}
				alt=''
				height={100}
				width={200}
				priority
			/>
			<a href='/'>
				<Image
					className={styles.logo}
					src={logo}
					alt=''
					height={100}
					width={100}
					priority
				/>
			</a>
		</>
	)
}
