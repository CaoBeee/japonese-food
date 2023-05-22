import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import { getCookie, setCookie } from 'cookies-next';
import MenuItem from './menuGalleryItem';
import philly from '/public/img/menu/phillyRoll.jpg';
import philly2 from '/public/img/menu/phillyRoll2.jpg';
import maki from '/public/img/menu/makiRoll.jpg';
import assorted from '/public/img/menu/assortedNigiri.jpg'
import styles from '../styles/gallery.module.css';

export default function PopularGallery() {
    return (
        <span className={styles.gallery_container}>
            <MenuItem Image={philly} title="Philidelphia Roll" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori."/>
            <MenuItem Image={philly} title="Philidelphia Roll" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />
            <MenuItem Image={philly} title="Philidelphia Roll" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />
            <MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />
            <MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori."  />
            <MenuItem Image={philly2} title="Philidelphia Roll II" description="Fresh salmon, cream cheese, cucumber and sushi rice rolled in nori." />
            <MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori."  />
            <MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." />
            <MenuItem Image={maki} title="Maki Roll" description="Imitation crab, carrots, pickled radish and sushi rice rolled in nori." />
        </span>
        )
}