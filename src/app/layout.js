import favicon from '../../public/favicon.ico'
import Head from 'next/head'

export default function RootLayout({ children }) {
	return (
		<html>
			<head>
				<link
					rel='shortcut icon'
					href={favicon.src}
					type='image/x-icon'
				/>
			</head>
			<body>{children}</body>
		</html>
	)
}
