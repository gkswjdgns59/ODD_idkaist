import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styles from './test2.module.css'

export default function Test2() {


    const boxVariant = {
        hidden: {
            x: -50
        },
        visible: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    }
    
    const liVariant = {
        hidden: {
            y: 40,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
        }
    }

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.box}
                variants={boxVariant}
                animate="visible"
                initial="hidden"
            >
                {[1,2,3].map(box => {
                    return (
                        <motion.li
                            className={styles.boxItem}
                            variants={liVariant}
                        >
                        </motion.li>
                    )
                })}
            </motion.div>
        </div>
    )
}
