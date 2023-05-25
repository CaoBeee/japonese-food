"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { hasCookie, getCookie, setCookie } from 'cookies-next';
import Image from 'next/image'
import assorted from '/public/img/menu/assortedNigiri.jpg'
import trash from '/public/img/menu/Trash.png';
import CartContext from './cartContext';
import styles from '../styles/cart.module.css';

export default function CartItem({ menuId, menuTitle, menuImage, title, initialPrice, quantity }) {
    const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useContext(
        CartContext
    );
    const handleRemoveFromCart = (productId) => {
        removeFromCart(productId);

    };
    const handleIncrementQuantity = (productId) => {
        incrementQuantity(productId);
    };
    const handleDecrementQuantity = (productId) => {
        decrementQuantity(productId);
    }
    const cookie = menuTitle + ' Count2'
    const [itemCount, setItemCount] = useState(quantity)
    var price = (Math.round(initialPrice * quantity * 100) / 100).toFixed(2);
    return (
        <span className={styles.item_container}>
            <Image className={styles.item_image} src={menuImage} alt=""/>
            <span className={styles.item_info_container}>
                <h3>{menuTitle}</h3>
                <p>4 Pieces</p>
                <p>Soy Sauce</p>
            </span>
            <span className={styles.quantity_buttons_container}>
                {quantity <= 1 &&
                    <button onClick={() => handleRemoveFromCart(menuId)}><Image src={trash} /></button>
                }
                {quantity > 1 &&
                    <button onClick={() => handleDecrementQuantity(menuId)}>-</button>
                }
                <p>{quantity}</p>
                <button onClick={() => handleIncrementQuantity(menuId)}>+</button>
            </span>
            <text className={styles.price}>${price}</text>
        </span>
    )
}