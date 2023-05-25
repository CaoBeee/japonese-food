"use client";
import React, { useContext, useState } from 'react';
import Image from 'next/image'
import logo from '/public/img/logo/JaponeseFood.svg'
import CartItem from './cartItem';
import CartContext from './cartContext';
import trash from '/public/img/menu/Trash.png';
import styles from '../styles/cart.module.css';

export default function Cart({ cartItems }) {
    const { cart, getTotalPrice, isCartEmpty, clearCart } = useContext(CartContext);


    const handleClearCart = () => {
        clearCart();
        localStorage.clear();
    };

    return (
        <span className={styles.container}>
            <h2>My Order</h2>
            {isCartEmpty() ?
                (<span><Image className={styles.logo} src={logo} /><p className={styles.empty_text}>Your cart is empty</p></span>) :
                <div className={styles.checkout_container}>
                    <span className={styles.cart_items_container}>
                        {
                            cart.map((item) => (
                                <CartItem menuId={item.id} menuTitle={item.name} menuImage={item.image} initialPrice={item.price} quantity={item.quantity} />
                            ))
                        }
                    </span>
                    <span className={styles.total_container}>
                        <button onClick={handleClearCart} className={styles.clear_button}><Image src={trash} /><p>Clear Cart</p></button>
                        <p className={styles.total_text}> Total:</p>
                        <p className={styles.total_price}>${(Math.round(getTotalPrice() * 100) / 100).toFixed(2)}</p>
                    </span>
                </div>
            }
        </span>
    )
}