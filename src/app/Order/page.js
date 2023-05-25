"use client";
import React, { useContext } from 'react';
import Cart from '../../components/cart';
import CartContext from '../../components/cartContext';
import MenuSelections from '../../components/menuSelections';
import MenuGallery from '../../components/menuGallery';
import styles from '../../styles/order.module.css';

export default function Order() {
    const { cartItems } = useContext(CartContext);
    return (
        <div className={styles.container }>
            <MenuSelections />
            <MenuGallery />
            <Cart cartItems={cartItems} />
        </div>
    )
}
