"use client";
import React, { useState } from 'react';
import selections from '../../styles/menuSelections.module.css';
import MenuSelections from '../../components/menuSelections'

export default function Order(props) {
    const [selection, setSelection] = useState(0);

    return (
        <MenuSelections/>
    )
}
