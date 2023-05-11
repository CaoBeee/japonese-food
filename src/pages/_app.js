import '../styles/globals.css'
import RootLayout from '../layouts/RootLayout'
import Head from 'next/head'
import favicon from '../../public/favicon.ico'

function MyApp({ Component, pageProps }) {
	return (
		<RootLayout>
			<Head>
				<title>Japon</title>
				<link
					rel='shortcut icon'
					href={favicon.src}
					type='image/x-icon'
				/>
			</Head>
			<Component {...pageProps} />
		</RootLayout>
	)
}

export default MyApp
