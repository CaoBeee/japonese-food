'use client'
import React, { useContext } from 'react'
import Image from 'next/image'
import trash from '/public/img/menu/Trash.png'
import CartContext from './cartContext'
import styles from '../styles/cart.module.css'

export default function CartItem({ menuId, menuTitle, menuImage, title, initialPrice, quantity }) {
	const { removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext)
	const handleRemoveFromCart = productId => {
		removeFromCart(productId)
	}
	const handleIncrementQuantity = productId => {
		incrementQuantity(productId)
	}
	const handleDecrementQuantity = productId => {
		decrementQuantity(productId)
	}
	var price = (Math.round(initialPrice * quantity * 100) / 100).toFixed(2)
	return (
		<span className={styles.item_container}>
			<Image
				className={styles.item_image}
				src={menuImage}
				alt=''
			/>
			<span className={styles.item_info_container}>
				<h3>{menuTitle}</h3>
				<p>4 Pieces</p>
				<p>Soy Sauce</p>
				<p
					onClick={() => handleRemoveFromCart(menuId)}
					id={styles.remove_item}
				>
					Remove
				</p>
			</span>
			<span className={styles.quantity_buttons_container}>
				{quantity <= 1 && (
					<button onClick={() => handleRemoveFromCart(menuId)}>
						<Image
							src={trash}
							alt='trash'
						/>
					</button>
				)}
				{quantity > 1 && <button onClick={() => handleDecrementQuantity(menuId)}>-</button>}
				<p>{quantity}</p>
				<button onClick={() => handleIncrementQuantity(menuId)}>+</button>
			</span>
			<p className={styles.price}>${price}</p>
		</span>
	)
}
