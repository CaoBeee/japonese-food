import styles from '../styles/japonLogo.module.css'
// import Layout from './layout'
import Image from 'next/image'
import logo from '../../public/img/logo_japonesefood.png'
import logoVector from '/public/img/LogoVector.svg'

export default function JaponLogo() {
	return (
		<div className={styles.logoContainer}>
			<Image
				className={styles.vector}
				src={logoVector}
				alt='shape'
				height={100}
				width={200}
			/>
			<Image
				className={styles.logo}
				src={logo}
				alt='Japon Logo'
				height={100}
				width={100}
			/>
		</div>
	)
}
