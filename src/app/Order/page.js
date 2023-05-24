"use client";
import React, { useEffect, useState } from 'react';
import Cart from '../../components/cart';
import MenuSelections from '../../components/menuSelections';
import MenuGallery from '../../components/menuGallery';
import { getCookie} from 'cookies-next';
import styles from '../../styles/order.module.css';

export default function Order(props) {
    const [selectionState, setSelectionState] = useState(0);
    useEffect(() => {
        setSelectionState(getCookie('menu_selection_state'));
        const listenCookieChange = () => {
            setSelectionState(getCookie('menu_selection_state'));
        }
        window.addEventListener("cookie", listenCookieChange);
        return () => window.removeEventListener("cookie", listenCookieChange);
    }, [])
    return (
        <div className={styles.container }>
            <MenuSelections />
            <MenuGallery />
            <Cart/>
        </div>
    )
}
