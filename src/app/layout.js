import Head from 'next/head'
import favicon from '../../public/favicon.ico'

export default function RootLayout({ children }) {
	return (
		<html>
			<Head>
				<title>Japon</title>
				<link
					rel='shortcut icon'
					href={favicon.src}
					type='image/x-icon'
				/>
			</Head>
			<body>{children}</body>
		</html>
	)
}
