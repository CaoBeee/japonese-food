'use client'
import React, { useContext } from 'react'
import Cart from '../../components/cart'
import CartContext from '../../components/cartContext'
import MenuSelections from '../../components/menuSelections'
import MenuGallery from '../../components/menuGallery'
import styles from '../../styles/order.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Order() {
	const { cartItems } = useContext(CartContext)
	if (typeof window !== 'undefined') {
		const deliveryAddress = localStorage.getItem('deliveryAddress')
	}
	return (
		<>
			<title>Order</title>
			<div className={styles.container}>
				<MenuSelections />
				<MenuGallery />
				<div className={styles.order_container}>
					<Cart cartItems={cartItems} />
					<div className={styles.address}>
						<p>
							<b>
								<em>Delivering to:</em>
							</b>
							<br />
							{deliveryAddress}
							<br />
							<br />
							<Link
								className={usePathname() === '/Delivery' ? styles.active : ''}
								href='/Delivery'
							>
								Click here to change
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
