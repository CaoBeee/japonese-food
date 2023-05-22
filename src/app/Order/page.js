"use client";
import React, { useState } from 'react';
import MenuSelections from '../../components/menuSelections';
import PopularGallery from '../../components/popularGallery';
import styles from '../../styles/order.module.css';

export default function Order(props) {

    return (
        <div className={styles.container }>
            <MenuSelections />
            <PopularGallery />
        </div>
    )
}
