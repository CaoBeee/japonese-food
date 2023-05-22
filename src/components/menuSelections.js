"use client";
import React, { useEffect, useState } from 'react';
import MenuText from './menuSelectionText';
import {getCookie, setCookie } from 'cookies-next';
import styles from '../styles/menuSelections.module.css';

export default function MenuSelections() {
    const [selection, setSelection] = useState(0);
    const [curHovered, setCurHovered] = useState(0);
    const notHoveredDecoration = 'none';
    const hoveredDecoration = 'underline';

    useEffect(() => {
        setSelection(getCookie('menu_state'));
        const listenCookieChange = () => {
            setSelection(getCookie('menu_state'));
        }
        window.addEventListener("cookie", listenCookieChange);
        return () => window.removeEventListener("cookie", listenCookieChange);
    }, [])


    return (
        <span className={styles.container}>
            <MenuText color={selection == 1 && '#ED5B55' || 'black'} fontSize={selection == 1 && 32 || 30} onClick={() => { setSelection(1), setCookie('menu_state', 1); window.dispatchEvent(new Event("cookie")) }}
                onMouseEnter={() => setCurHovered(1)} onMouseLeave={() => setCurHovered(0)} textDecoration={curHovered == 1 && selection != 1 && hoveredDecoration || notHoveredDecoration}
                textShadow={selection == 1 && "2px 0 4px rgba(237, 91, 85, 0.5)" || "none"} title='Popular Items' />
            <MenuText color={selection == 2 && '#ED5B55' || 'black'} fontSize={selection == 2 && 32 || 30} onClick={() => { setSelection(2), setCookie('menu_state', 2); window.dispatchEvent(new Event("cookie")) }}
                onMouseEnter={() => setCurHovered(2)} onMouseLeave={() => setCurHovered(0)} textDecoration={curHovered == 2 && selection != 2 && hoveredDecoration || notHoveredDecoration}
                textShadow={selection == 2 && "2px 0 4px rgba(237, 91, 85, 0.5)" || "none"}  title='Sushi Rolls' />
            <MenuText color={selection == 3 && '#ED5B55' || 'black'} fontSize={selection == 3 && 32 || 30} onClick={() => { setSelection(3), setCookie('menu_state', 3); window.dispatchEvent(new Event("cookie")) }}
                onMouseEnter={() => setCurHovered(3)} onMouseLeave={() => setCurHovered(0)} textDecoration={curHovered == 3 && selection != 3 && hoveredDecoration || notHoveredDecoration}
                textShadow={selection == 3 && "2px 0 4px rgba(237, 91, 85, 0.5)" || "none"}  title='Sashimi & Nigiri' />
            <MenuText color={selection == 4 && '#ED5B55' || 'black'} fontSize={selection == 4 && 32 || 30} onClick={() => { setSelection(4), setCookie('menu_state', 4); window.dispatchEvent(new Event("cookie")) }}
                onMouseEnter={() => setCurHovered(4)} onMouseLeave={() => setCurHovered(0)} textDecoration={curHovered == 4 && selection != 4 && hoveredDecoration || notHoveredDecoration}
                textShadow={selection == 4 && "2px 0 4px rgba(237, 91, 85, 0.5)" || "none" } title='Sides & Beverages' />
        </span>
    )
}