"use client";
import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image'
import logo from '/public/img/logo/JaponeseFood.svg'
import CartItem from './cartItem';
import CartContext from './cartContext';
import trash from '/public/img/menu/Trash.png';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import 'animate.css';
import styles from '../styles/cart.module.css';

export default function Cart({ cartItems }) {
    const { cart, getTotalPrice, isCartEmpty, clearCart, isItemInCart } = useContext(CartContext);

    const handleClearCart = () => {
        clearCart();
        localStorage.clear();
        console.log(isCartEmpty == true);
    };
    return (

        <div className={styles.container}>
            <h2>My Order</h2>
            <div className={styles.transition_container }>
                <CSSTransition
                    in={isCartEmpty()}
                    timeout={1000}
                    classNames={{ enter: 'animate__animated', enterActive: 'animate__fadeIn', exit: 'animate__animated', exitActive: 'animate__fadeOut' }}
                    unmountOnExit            >
                    <span className={styles.empty_container}>
                        <Image className={styles.logo} src={logo} />
                        <p className={styles.empty_text}>Your cart is empty</p>
                    </span>
                </CSSTransition>
                <span className={styles.checkout_container}>
                    
                    <TransitionGroup className={styles.cart_items_container} component="span">
                            {
                                cart.map((item) => (
                                    <CSSTransition in={isItemInCart(item.id)} key={item.id} timeout={1000} classNames={{ enter: 'animate__animated', enterActive: 'animate__fadeIn', exit: 'animate__animated', exitActive: 'animate__fadeOut' }}>
                                        <CartItem menuId={item.id} menuTitle={item.name} menuImage={item.image} initialPrice={item.price} quantity={item.quantity} />
                                    </CSSTransition>
                                ))
                            }
                        </TransitionGroup>
                    <CSSTransition
                        in={!isCartEmpty()}
                        timeout={1000}
                        classNames={{ enter: 'animate__animated', enterActive: 'animate__fadeIn', exit: 'animate__animated', exitActive: 'animate__fadeOut' }}
                        unmountOnExit            >
                        <span className={styles.total_container}>
                            <button onClick={handleClearCart} className={styles.clear_button}><Image src={trash} /><p>Clear Cart</p></button>
                            <p className={styles.total_text}> Total:</p>
                            <p className={styles.total_price}>${(Math.round(getTotalPrice() * 100) / 100).toFixed(2)}</p>
                        </span>
                    </CSSTransition>
                    <CSSTransition
                        in={!isCartEmpty()}
                        timeout={1000}
                        classNames={{ enter: 'animate__animated', enterActive: 'animate__fadeIn', exit: 'animate__animated', exitActive: 'animate__fadeOut' }}
                        unmountOnExit            >
                        <button className={styles.checkout_button}>
                            Checkout Now
                        </button>
                    </CSSTransition>
                </span>
            </div>
        </div>
    )
}