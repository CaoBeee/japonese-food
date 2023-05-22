import React from 'react';
import Image from 'next/image'
import styles from '../styles/gallery.module.css';

export default function MenuItem(props) {
    return (
        <span className={styles.item_container }>
            <Image src={props.Image} height={147} width={147} />
            <span className={styles.hover_container }>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <button>Add to Cart</button>
            </span>
        </span>
        )
}