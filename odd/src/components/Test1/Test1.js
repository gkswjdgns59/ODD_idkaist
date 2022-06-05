import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styles from './test1.module.css'

export default function Test1() {
    const [isAnimating, setIsAnimating] = useState(false)

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.box}
                animate={{
                    x: isAnimating ? 1000 : 0,
                    opacity: isAnimating ? 1 : 0.1,
                    backgroundColor: isAnimating ? "yellowgreen" : "blue"
                }}
                initial={{ 
                    opacity: 0.1,
                    backgroundColor: "blue"
                }}
                transition={{
                    type: "spring",
                    // duration: 1
                    stiffness: 300,
                    damping: 50
                }}
                onClick={() => setIsAnimating(!isAnimating)}
            >
            </motion.div>
        </div>
    )
}
