import React, { useEffect, useState } from 'react'
import { motion, useViewportScroll, useSpring, useTransform } from 'framer-motion';
import styles from './test4.module.css'
import imgA from './merperson.png';

export default function Test4() {

    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

    return (
        <div className={styles.container}>
            <svg className={styles.progress_icon} viewBox="0 0 60 60">
                <motion.path
                    fill="none"
                    strokeWidth="5"
                    stroke="white"
                    strokeDasharray="0 1"
                    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                    style={{
                        pathLength,
                        rotate: 90,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1 // Reverse direction of line animation
                    }}
                />
            </svg>
            <motion.div
                className={styles.Image}
                animate={{
                    x: 100
                }}
                initial={{
                    x: 0
                }}
            >
                <img src={imgA} width='120' height='120'></img>
            </motion.div>
        </div>
    )
}
