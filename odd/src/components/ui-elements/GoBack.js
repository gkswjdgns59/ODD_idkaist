import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import socket from "./../../socket-client"

export default function GoBack(props) {

    const goBack = () => {
        const floor = props.cur.slice(0, 1) + '00';
        socket.emit('knock', floor);
        socket.emit('warpRequest');
    }

    return (
        <div className = {styles.buttonContainer}>
            <img
                src = {'./assets/back.png'}
                className = {styles.buttonImg}
                onClick = {() => {goBack()}}
            />
        </div>
    )
}