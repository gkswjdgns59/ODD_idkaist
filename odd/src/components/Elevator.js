import React, { useState, useRef, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styles from './ui.module.css';

import IMG_elevator from './images/elevator.png'

export default function Elevator() {

    return (
        <motion.div className={styles.elevator_container}>
            <img src={IMG_elevator}></img>
            <div className={styles.floor}>
                <li>4 - ID400</li>
                <li>3 - ID300</li>
                <li>2 - ID200</li>
                <li>1 - LOBBY</li>
            </div>
        </motion.div>
    )

}