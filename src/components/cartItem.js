"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import assorted from '/public/img/menu/assortedNigiri.jpg'
import styles from '../styles/cart.module.css';

export default function CartItem(props) {
    return (
        <span className={styles.item_container}>
            <Image className={styles.item_image} src={assorted} />
            <span className={styles.item_info_container }>
                <h3>Assorted Nigiri</h3>
                <p>Item Count</p>
                <p>Soy Sauce</p>
            </span>
            <span className={styles.quantity_buttons_container }>
                <button>-</button>
                <text>32</text>
                <button>+</button>
            </span>
            <text className={styles.price }>$9.99</text>
        </span>
        )
}