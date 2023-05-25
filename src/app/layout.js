import '../styles/globals.css'
import JaponLogo from '@/components/japonLogo'
import Image from 'next/image'
import NavigationBar from '@/components/navigationBar'
import scallopPattern from '/public/img/home/BlueScallopPattern.svg'
import topVectorLine from '/public/img/home/TopVectorLines.svg'
import botVectorLine from '/public/img/home/BottomVectorLines.svg'
import { CartProvider } from '../components/cartContext'

export const metadata = {
	title: 'Next.js',
	description: 'Generated by Next.js',
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
				<section>
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
				</section>

				<section>
					<div className='lineContainer'>
						<Image
							src={botVectorLine}
							alt=''
							className='botVectorLine'
						/>
					</div>
					</section>
			</body>
		</html>
	)
}
