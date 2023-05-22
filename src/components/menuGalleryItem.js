"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import styles from '../styles/gallery.module.css';

export default function MenuItem(props) {
    const [Hovered, setHovered] = useState(false);
    const [addedToCart, setAddedToCart] = useState(false);
    const handleClick = (e) => {
        setAddedToCart(true);
        const interval = setInterval(() => {
            setAddedToCart(false)
        }, 3000);
        return () => clearInterval(interval);
    };
    return (
        <span className={styles.item_container }>
            <Image src={props.Image} height={147} width={147} />
            <span style={{ opacity: Hovered && 1 || 0 }} className={styles.hover_container} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false) }>
                <h1 style={{ opacity: (!addedToCart && Hovered) && 1 || 0 }}>{props.title}</h1>
                <p style={{ opacity: (!addedToCart && Hovered) && 1 || 0 }}>{props.description}</p>
                <button style={{ opacity: (!addedToCart && Hovered) && 1 || 0 }} onClick={handleClick}>Add to Cart</button>
                <h1 className={styles.item_added_notif} style={{ opacity: addedToCart && 1 || 0 }}>Added to Cart!</h1>
            </span>
        </span>
        )
}