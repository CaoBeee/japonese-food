import React from 'react'
import JaponLogo from './japonLogo'
// import NavigationBar from '../components/globalLayout'

export default function Layout({ children }) {
	return (
		<React.Fragment>
			<JaponLogo />
			<main>{children}</main>
		</React.Fragment>
	)
}
