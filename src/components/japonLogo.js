import React from 'react'
import styles from '../styles/japonLogo.module.css'
import Image from 'next/image'
import logoSVG from '../../public/img/logo_japonesefood.png'
import logoVector from '/public/img/LogoVector.svg'

export default function JaponLogo() {
	return (
		<React.Fragment>
			<Image
				className={styles.vector}
				src={logoVector}
				alt=''
				height={100}
				width={200}
				priority
			/>
			<a href='/'>
				<Image
					className={styles.logo}
					src={logoSVG}
					alt=''
					height={100}
					width={100}
					priority
				/>
			</a>
		</React.Fragment>
	)
}
