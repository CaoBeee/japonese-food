import React from 'react'
import '../styles/globals.css'
import JaponLogo from '@/components/japonLogo'
import Image from 'next/image'
import NavigationBar from '@/components/navigationBar'
import scallopPattern from '/public/img/home/BlueScallopPattern.svg'
import topVectorLine from '/public/img/home/TopVectorLines.svg'
import botVectorLine from '/public/img/home/BottomVectorLines.svg'

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
				</div>
				<Image
					src={scallopPattern}
					alt='scallop pattern'
					className='scallop'
				/>
				<Image
					src={topVectorLine}
					alt=''
					className='topVectorLine'
				/>
				<div>{children}</div>
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
