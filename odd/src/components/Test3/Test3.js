import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styles from './test3.module.css'

export default function Test3() {

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.box}
                animate ={{
                    scale: [1, 1.3, 1.3, 1],
                    borderRadius: ["20%", "20%", "50%", "50%"],
                    rotate: [0, 0, 270, 270]
                }}
                transition={{
                    duration: 2
                }}
            >
            </motion.div>
        </div>
    )
}
