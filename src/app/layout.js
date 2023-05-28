import React from 'react'
import '../styles/globals.css'
import JaponLogo from '@/components/japonLogo'
import Image from 'next/image'
import NavigationBar from '@/components/navigationBar'
import scallopPattern from '/public/img/home/BlueScallopPattern.svg'
import topVectorLine from '/public/img/home/TopVectorLines.svg'
import botVectorLine from '/public/img/home/BottomVectorLines.svg'
import { CartProvider } from '../components/cartContext'

export const metadata = {
	title: 'Japon',
	description: 'Japanese Food',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<div className='header'>
					<JaponLogo />
					<NavigationBar />
					<Image
						src={scallopPattern}
						alt='scallop pattern'
						className='scallop'
						width={461}
						height={68}
					/>
					<Image
						src={topVectorLine}
						alt='bottom vector line'
						className='topVectorLine'
						width={1377.99}
						height={364.22}
					/>
				</div>
				<CartProvider>
					<div>{children}</div>
				</CartProvider>
				<Image
					src={botVectorLine}
					alt='bottom vector lines'
					className='botVectorLine'
					width={1424}
					height={368.82}
				/>
			</body>
		</html>
	)
}
