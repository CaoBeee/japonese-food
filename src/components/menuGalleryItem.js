"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { getCookie, setCookie } from 'cookies-next';
import styles from '../styles/gallery.module.css';

export default function MenuItem(props) {
    const [Hovered, setHovered] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const handleClick = (e) => {
        if (!addedToCart) {
            setAddedToCart(true);
            const interval = setInterval(() => {
                setAddedToCart(false)
            }, 2000);
            return () => clearInterval(interval);
        }
    };
    return (
        <span className={styles.item_container }>
            <Image style={{ scale: Hovered && 1.1 || 1 }} src={props.Image} height={147} width={147} />
            <span style={{ opacity: Hovered && 1 || 0, scale: Hovered && 1.1 || 1 }} className={styles.hover_container} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)  }>
                <h2 style={{ opacity: (!addedToCart && Hovered) && 1 || 0 }}>{props.title}</h2>
                <p style={{ opacity: (!addedToCart && Hovered) && 1 || 0 }}>{props.description}</p>
                <button style={{ opacity: (!addedToCart && Hovered) && 1 || 0 , cursor: !addedToCart && 'pointer' || 'default'}} onClick={handleClick}>Add to Cart</button>
                <h2 className={styles.item_added_notif} style={{ opacity: addedToCart && 1 || 0 }}>Added to Cart!</h2>
            </span>
        </span>
        )
}