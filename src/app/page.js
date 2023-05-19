//App Level Page
import React from 'react'
import favicon from '../../public/favicon.ico'
import Layout from '@/components/layout'

export default function Home() {
	return (
		<React.Fragment>
			<Layout>
				<link
					rel='shortcut icon'
					href={favicon.src}
					type='image/x-icon'
				/>
				<h1>App Level</h1>
			</Layout>
		</React.Fragment>
	)
}

{
}
