"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import logo from '/public/img/logo/JaponeseFood.svg'
import CartItem from './cartItem';
import styles from '../styles/cart.module.css';

export default function Cart(props) {
	const [empty, setEmpty] = useState(false);
	return (
		<span className={styles.container}>
			<h2>My Order</h2>
			{empty && 
				<><Image className={styles.logo} src={logo} /><p className={styles.empty_text }>Your cart is empty</p></>
			}
			{!empty &&
				<CartItem/>
			}
		</span>
		)
}