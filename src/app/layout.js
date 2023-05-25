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
				<JaponLogo />
				<NavigationBar />
				<Image
					src={scallopPattern}
					alt='scallop pattern'
					className='scallop'
				/>
					<div className='lineContainer'>
						<Image
							src={topVectorLine}
							alt=''
							className='topVectorLine'
						/>
					</div>{' '}
					<CartProvider>
						<div>{children}</div>
					</CartProvider>

				<div
					className='botLineContainer'
					style={{
						backgroundImage: `url(${botVectorLine.src})`,
						backgroundRepeat: 'no-repeat',
					}}
				></div>
			</body>
		</html>
	)
}
