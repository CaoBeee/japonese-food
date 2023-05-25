'use client'
import React from 'react'
import Link from 'next/link'
import { setCookie } from 'cookies-next'
import styles from '@/styles/navigationBar.module.css'
import { usePathname } from 'next/navigation'

const NavigationBar = () => {
	const saveMenu = () => {
		setCookie('menu_selection_state', 1)
		window.dispatchEvent(new Event('cookie'))
	}
	return (
		<nav>
			<ul className={styles.navBar}>
				<li>
					<Link
						className={usePathname() === '/' ? styles.active : ''}
						href='/'
					>
						Home
					</Link>
				</li>
				<li className={styles.separator}>|</li>
				<li>
					<Link
						className={usePathname() === '/Delivery' ? styles.active : ''}
						href='/Delivery'
					>
						Delivery
					</Link>
				</li>
				<li className={styles.separator}>|</li>
				<li>
					<Link
						className={usePathname() === '/Contact' ? styles.active : ''}
						href='/Contact'
					>
						Contact
					</Link>
				</li>
				<li className={styles.separator}>|</li>
				<li>
					<Link
						className={usePathname() === '/Order' ? styles.active : ''}
						href='/Order'
						onClick={() => {
							saveMenu()
						}}
					>
						Order
					</Link>
				</li>
				<li className={styles.separator}>|</li>
				<li>
					<Link
						className={usePathname() === '/About' ? styles.active : ''}
						href='/About'
					>
						About
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default NavigationBar
