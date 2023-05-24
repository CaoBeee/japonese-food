'use client'
import React, { useEffect, useState } from 'react';
import { getCookie, setCookie } from 'cookies-next';
import MenuItem from './menuGalleryItem';
import philly from '/public/img/menu/phillyRoll.jpg';
import philly2 from '/public/img/menu/phillyRoll2.jpg';
import maki from '/public/img/menu/makiRoll.jpg';
import assorted from '/public/img/menu/assortedNigiri.jpg'
import styles from '../styles/gallery.module.css';

export default function MenuGallery() {
    const [selectionState, setSelectionState] = useState(0);
    const [menuState, setMenuState] = useState(0);
    useEffect(() => {
        setSelectionState(getCookie('menu_selection_state'));
        const listenCookieChange = () => {
            setSelectionState(getCookie('menu_selection_state'));
            setMenuState(0);
        }
        window.addEventListener("cookie", listenCookieChange);
        return () => window.removeEventListener("cookie", listenCookieChange);
    }, [])
    var curSelectionLen = 0
    const menuItemArr = [<MenuItem Image={philly} title="Philidelphia Roll" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />,
    <MenuItem Image={philly} title="Philidelphia Roll" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />,
    <MenuItem Image={philly} title="Philidelphia Roll" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />,
    <MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />,
    <MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />,
    <MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />,
    <MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." />,
    <MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." />,
    <MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." />,
    <MenuItem Image={assorted} title="Assorted Nigiri" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." />,
    <MenuItem Image={assorted} title="Assorted Nigiri" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." />,
    <MenuItem Image={assorted} title="Assorted Nigiri" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." />,
    <MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />,
    <MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." />,
    <MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." />,
    <MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." />
    ]
    const sushiRolls = menuItemArr.filter(function (menuItemArr) {
        return menuItemArr.props.title.includes('Roll');
    })
    const nigiri = menuItemArr.filter(function (menuItemArr) {
        return menuItemArr.props.title.includes('Nigiri');
    })
    const sidesBeverges = menuItemArr.filter(function (menuItemArr) {
        return !menuItemArr.props.title.includes('Roll') && !menuItemArr.props.title.includes('Nigiri');
    })
    if (selectionState == 1) {
        curSelectionLen = menuItemArr.length
    }
    else if (selectionState == 2) {
        curSelectionLen = sushiRolls.length
    }
    else if (selectionState == 3) {
        curSelectionLen = nigiri.length
    }
    else {
        curSelectionLen = sidesBeverges.length
    }
    return (
        <span className={styles.gallery_container}>
            {selectionState == 1 &&
                <span className={styles.gallery_items_container}>
                    {menuItemArr.slice(3 * menuState, 9 + (3 * menuState))}
                </span>
            }
            {selectionState == 2 &&
                <span className={styles.gallery_items_container}>
                    {sushiRolls.slice(3 * menuState, 9 + (3 * menuState))}
                </span>
            }
            {selectionState == 3 &&
                <span className={styles.gallery_items_container}>
                    {nigiri.slice(3 * menuState, 9 + (3 * menuState))}
                </span>
            }
            {selectionState == 4 &&
                <span className={styles.gallery_items_container}>
                    {sidesBeverges}
                </span>
            }
            {curSelectionLen > 9 &&
                <span className={styles.more_less_container}>
                    {menuState > 0 &&
                        <span className={styles.up_span} onClick={() => setMenuState(menuState - 1)}>
                            <div className={styles.up_arrow} />
                            <p className={styles.less}>Go Back</p>
                        </span>
                    }
                    {menuState <= (curSelectionLen - 9) / 3 &&
                        <span className={styles.down_span} onClick={() => setMenuState(menuState + 1)}>
                            <p className={styles.more}>More Items</p>
                            <div className={styles.down_arrow} />
                        </span>
                    }
                </span>
            }
        </span>
    )
}