'use client'
import React from 'react'
import '../styles/globals.css'
import JaponLogo from '@/components/japonLogo'
import Image from 'next/image'
import NavigationBar from '@/components/navigationBar'
import scallopPattern from '/public/img/home/BlueScallopPattern.svg'
import topVectorLine from '/public/img/home/TopVectorLines.svg'
import botVectorLine from '/public/img/home/BottomVectorLines.svg'
import Footer from '@/components/footer'
import { CartProvider } from '../components/cartContext'

export const metadata = {
	title: 'Japon',
	description: 'Japanese Food',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body>
				<header className='header'>
					<JaponLogo />
					<NavigationBar />
					<Image
						src={scallopPattern}
						alt='scallop pattern'
						className='scallop'
					/>
					<Image
						src={topVectorLine}
						alt='bottom vector line'
						className='topVectorLine'
						width={1377.99}
						height={364.22}
					/>
				</header>
				<CartProvider>
					<div>{children}</div>
				</CartProvider>
				<Image
					src={botVectorLine}
					alt='bottom vector lines'
					className='botVectorLine'
				/>
				<footer className='footer'>
					<Footer />
				</footer>
			</body>
		</html>
	)
}
