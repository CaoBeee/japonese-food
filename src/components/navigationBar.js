import React from 'react'
import Link from 'next/link'
import styles from '@/styles/navigationBar.module.css'

export default function NavigationBar() {
	return (
		<React.Fragment>
			<ul className={styles.navBar}>
				<li>
					<Link href='/'>Home</Link>
				</li>
				<li>|</li>
				<li>
					<Link href='/Delivery'>Delivery</Link>
				</li>
				<li>|</li>
				<li>
					<Link href='/Contact'>Contact</Link>
				</li>
				<li>|</li>
				<li>
					<Link href='/Order'>Order</Link>
				</li>
				<li>|</li>
				<li>
					<Link href='/About'>About</Link>
				</li>
			</ul>
		</React.Fragment>
	)
}
