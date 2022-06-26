import React, {useState, useEffect} from 'react';
import { motion } from "framer-motion";
import styles from './ui.module.css';
// import IMG_elevator from './images/elevator.png'
import socket from '../socket-client';

export default function Elevator(props) {
    let reportClose;

    useEffect(() => {
        reportClose = props.report;
    }, []);

    const onClose = (floor) => {
        socket.emit('knock', floor);
        reportClose();
    }

    return (
        <motion.div className={styles.elevator_container}>
            <img src={'./assets/elevator.png'}></img>
            <div className={styles.floor}>
                <li
                    onClick = {() => onClose('400')}
                >4 - ID400</li>
                <li
                    onClick = {() => onClose('300')}
                >3 - ID300</li>
                                <li
                    onClick = {() => onClose('200')}
                >2 - ID200</li>
                <li
                    onClick = {() => onClose('100')}
                >1 - LOBBY</li>            
            </div>
        </div>
    )

}