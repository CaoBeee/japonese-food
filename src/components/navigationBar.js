'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { setCookie } from 'cookies-next'
import styles from '@/styles/navigationBar.module.css'

const NavigationBar = () => {
	const [isActive, setActive] = useState()
	const handleClick = link => () => {
		setActive(link)
	}

	const handleOrderClick = link => {
		setActive(link)
		setCookie('menu_state', 1)
		window.dispatchEvent(new Event('cookie'))
	}

	return (
		<nav>
			<ul className={styles.navBar}>
				<li>
					<Link
						className={isActive === '/' ? styles.active : ''}
						href='/'
						onClick={handleClick('/')}
					>
						Home
					</Link>
				</li>
				<li className={styles.separator}>|</li>
				<li>
					<Link
						className={isActive === '/Delivery' ? styles.active : ''}
						href='/Delivery'
						onClick={handleClick('/Delivery')}
					>
						Delivery
					</Link>
				</li>
				<li className={styles.separator}>|</li>
				<li>
					<Link
						className={isActive === '/Contact' ? styles.active : ''}
						href='/Contact'
						onClick={handleClick('/Contact')}
					>
						Contact
					</Link>
				</li>
				<li className={styles.separator}>|</li>
				<li>
					<Link
						className={isActive === '/Order' ? styles.active : ''}
						href='/Order'
						onClick={() => {
							handleOrderClick('/Order')
						}}
					>
						Order
					</Link>
				</li>
				<li className={styles.separator}>|</li>
				<li>
					<Link
						className={isActive === '/About' ? styles.active : ''}
						href='/About'
						onClick={handleClick('/About')}
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavigationBar
