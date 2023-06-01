"use client";
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion"
import styles from "../styles/about.module.css";

export default function FaqItem(props) {
    const [openDropdown, setOpenDropdown] = useState(false)
    const [buttonText, setButtonText] = useState("v")

    useEffect(() => {
        if (openDropdown) {
            setButtonText("^")
        }
        else {
            setButtonText("v")
        }
    }, [openDropdown])



    return (
        <div className={styles.faq_item} onClick={() => setOpenDropdown(!openDropdown)}>
            <div className={styles.question_container }>
                <p className={styles.question}>{props.question}</p>
                <button>{buttonText}</button>
            </div>
            <motion.div
                initial={false}
                animate={{ height: openDropdown && 'auto' || 0, width: openDropdown && 'auto' || 0 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}>
                <p className={styles.answer}>{props.answer}</p>
            </motion.div>
        </div>
    );
}