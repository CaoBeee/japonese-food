'use client'
import React, { useState } from 'react';
import MenuItem from './menuGalleryItem';
import philly from '/public/img/menu/phillyRoll.jpg';
import philly2 from '/public/img/menu/phillyRoll2.jpg';
import maki from '/public/img/menu/makiRoll.jpg';
import assorted from '/public/img/menu/assortedNigiri.jpg'
import styles from '../styles/gallery.module.css';

export default function PopularGallery() {
    const [menuState, setMenuState] = useState(0);
    return (
        <span className={styles.gallery_container }>
            <span className={styles.gallery_items_container}>
                { menuState == 0 &&
                <><MenuItem Image={philly} title="Philidelphia Roll" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." /><MenuItem Image={philly} title="Philidelphia Roll" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." /><MenuItem Image={philly} title="Philidelphia Roll" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." /></>
                }
                {(menuState == 0 || menuState == 1) &&
                <><MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." /><MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." /><MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." /></>
                }
                {(menuState == 0 || menuState == 1 ) &&
                <><MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." /><MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." /><MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." /></>
                }
                {menuState == 1 &&
                    <><MenuItem Image={assorted} title="Assorted Nigiri" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." /><MenuItem Image={assorted} title="Assorted Nigiri" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." /><MenuItem Image={assorted} title="Assorted Nigiri" description="Sushi rice topped with either tuna, yellow tail, salmon or unagi." /></>
                }
            </span>
            <span className={styles.more_less_container}>
                {menuState > 0 &&
                    <span className={styles.up_span} onClick={() => setMenuState(menuState - 1)}>
                        <div className={styles.up_arrow} />
                        <p className={styles.less}>Go Back</p>
                    </span>
                }
                {menuState < 1 &&
                    <span className={styles.down_span} onClick={() => setMenuState(menuState+1) }>
                        <p className={styles.more}>More Items</p>
                        <div className={styles.down_arrow} />
                    </span>
                }
            </span>
        </span>
        )
}