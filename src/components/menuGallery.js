'use client'
import React, { useEffect, useContext, useState } from 'react';
import { hasCookie, getCookie } from 'cookies-next';
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
        if (hasCookie('menu_selection_state')) {
            setSelectionState(getCookie('menu_selection_state'));
        }
        else {
            setSelectionState(1);
        }
        const listenCookieChange = () => {
            setSelectionState(getCookie('menu_selection_state'));
            setMenuState(0);
        }
        window.addEventListener("cookie", listenCookieChange);
        return () => window.removeEventListener("cookie", listenCookieChange);
    }, [])
    var curSelectionLen = 0
    const menuItemArr = [<MenuItem menuId={1} menuImage={philly} title="Philidelphia Roll 1" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." initialPrice={9.99} />,
        <MenuItem menuId={2} menuImage={philly} title="Philidelphia Roll 2" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." initialPrice={9.99} />,
        <MenuItem menuId={3} menuImage={philly} title="Philidelphia Roll 3" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." initialPrice={6.99} />,
        <MenuItem menuId={4} menuImage={philly2} title="Philidelphia Roll 4" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." initialPrice={7.99} />,
        <MenuItem menuId={5} menuImage={philly2} title="Philidelphia Roll 5" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." initialPrice={8.99} />,
        <MenuItem menuId={6} menuImage={philly2} title="Philidelphia Roll 6" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." initialPrice={10.99} />,
        <MenuItem menuId={7} menuImage={maki} title="Maki Roll 1" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." initialPrice={11.99} />,
        <MenuItem menuId={8} menuImage={maki} title="Maki Roll 2" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." initialPrice={12.99} />,
        <MenuItem menuId={9} menuImage={maki} title="Maki Roll 3" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." initialPrice={13.99} />,
        <MenuItem menuId={10} menuImage={assorted} title="Assorted Nigiri 1" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." initialPrice={14.99} />,
        <MenuItem menuId={11} menuImage={assorted} title="Assorted Nigiri 2" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." initialPrice={15.99} />,
        <MenuItem menuId={12} menuImage={assorted} title="Assorted Nigiri 3" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." initialPrice={16.99} />,
        <MenuItem menuId={13} menuImage={philly2} title="Philidelphia Roll 7" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." initialPrice={17.99} />,
        <MenuItem menuId={14} menuImage={maki} title="Maki Roll 4" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." initialPrice={18.99} />,
        <MenuItem menuId={15} menuImage={maki} title="Maki Roll 5" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." initialPrice={19.99} />,
        <MenuItem menuId={16} menuImage={maki} title="Maki Roll 6" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." initialPrice={20.99} />,
        <MenuItem menuId={17} menuImage={philly2} title="Philidelphia Roll 8" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." initialPrice={21.99} />,
        <MenuItem menuId={18} menuImage={philly} title="Philidelphia Roll 9" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." initialPrice={22.99} />,
        <MenuItem menuId={19} menuImage={assorted} title="Assorted Nigiri 4" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." initialPrice={23.99} />
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
                    {menuItemArr.slice(9 * menuState, 9 * (menuState + 1))}
                </span>
            }
            {selectionState == 2 &&
                <span className={styles.gallery_items_container}>
                    {sushiRolls.slice(9 * menuState, 9 * (menuState + 1))}
                </span>
            }
            {selectionState == 3 &&
                <span className={styles.gallery_items_container}>
                    {nigiri.slice(9 * menuState, 9 * (menuState + 1))}
                </span>
            }
            {selectionState == 4 &&
                <span className={styles.gallery_items_container}>
                    {sidesBeverges.slice(9 * menuState, 9 * (menuState + 1))}
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
                    {menuState <= (curSelectionLen - 9) / 9 &&
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