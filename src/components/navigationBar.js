'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import styles from '@/styles/navigationBar.module.css'

const NavigationBar = () => {
	const [activePage, setActivePage] = useState('/')
	return (
		<nav>
			<ul className={styles.navBar}>
				<li>
					<Link
						href='/'
						className={activePage === '/' ? 'active' : ''}
					>
						Home
					</Link>
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
		</nav>
	)
}

export default NavigationBar
