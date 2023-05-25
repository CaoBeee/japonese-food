"use client";
import React, { useEffect, useContext, useState } from 'react';
import Image from 'next/image'
import { hasCookie, setCookie, getCookie, deleteCookie } from 'cookies-next';
import CartContext from './cartContext';
import styles from '../styles/gallery.module.css';

export default function MenuItem({ menuId, title, menuImage, description, initialPrice }) {
    const { addToCart, isItemInCart, cart } = useContext(CartContext);
    const [Hovered, setHovered] = useState(isItemInCart);
    const [showingAddNotif, setshowingAddNotif] = useState(false);
    const [alreadyInCart, setAlreadyInCart] = useState(isItemInCart(menuId));
    const [buttonText, setButtonText] = useState(
        localStorage.getItem(`menu-${menuId}`) || (alreadyInCart ? 'In Cart' : 'Add to Cart')
    );



    const handleClick = () => {
        if (isItemInCart(menuId)) {
            return;
        }
        const product = {
            id: menuId,
            image: menuImage,
            name: title,
            price: initialPrice,
        };
        addToCart(product);
        if (!showingAddNotif) {
            setshowingAddNotif(true);
            const timeOut = setTimeout(() => {
                setshowingAddNotif(false)
            }, 2000);

            return () => { clearTimeout(timeOut ); }
        }
    };

    useEffect(() => {
        if (alreadyInCart) {
            localStorage.setItem(`menu-${menuId}`, 'In Cart');
            const timeOut = setTimeout(() => {
                setButtonText('In Cart')
            }, 1250);
            return () => { clearTimeout(timeOut) };

        } else {
            localStorage.removeItem(`menu-${menuId}`);
            setButtonText('Add to Cart')
        }
    }, [alreadyInCart, menuId]);

    useEffect(() => {
        const cartIsEmpty = cart.length === 0;
        setAlreadyInCart(isItemInCart(menuId) && !cartIsEmpty);
    }, [cart, isItemInCart, menuId]);

    return (
        <span className={styles.item_container} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
            <Image style={{ scale: (Hovered || showingAddNotif) && 1.1 || 1 }} src={menuImage} height={147} width={147} alt="" />
            <span style={{ opacity: (Hovered || showingAddNotif) && 1 || 0, scale: (Hovered || showingAddNotif) && 1.1 || 1 }} className={styles.hover_container}>
                <h2 style={{ opacity: (!showingAddNotif && Hovered) && 1 || 0 }}>{title}</h2>
                <p style={{ opacity: (!showingAddNotif && Hovered) && 1 || 0 }}>{description}</p>

                <button style={{ opacity: (!showingAddNotif && Hovered) && 1 || 0, cursor: !alreadyInCart && 'pointer' || 'default' }} onClick={handleClick}>{buttonText}</button>) :

                <h2 className={styles.item_added_notif} style={{ opacity: showingAddNotif && 1 || 0 }}>Added to Cart!</h2>
            </span>
        </span>
    )
}