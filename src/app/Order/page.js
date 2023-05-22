"use client";
import React, {useEffect, useState } from 'react';
import MenuSelections from '../../components/menuSelections';
import PopularGallery from '../../components/popularGallery';
import SushiRollGallery from '../../components/sushiRollGallery';
import { getCookie} from 'cookies-next';
import styles from '../../styles/order.module.css';

export default function Order(props) {
    const [selectionState, setSelectionState] = useState(0);
    useEffect(() => {
        setSelectionState(getCookie('menu_state'));
        const listenCookieChange = () => {
            setSelectionState(getCookie('menu_state'));
        }
        window.addEventListener("cookie", listenCookieChange);
        return () => window.removeEventListener("cookie", listenCookieChange);
    }, [])
    return (
        <div className={styles.container }>
            <MenuSelections />
            {selectionState == 1 &&
                <PopularGallery />
            }
            {selectionState == 2 &&
                <SushiRollGallery />
            }
        </div>
    )
}
