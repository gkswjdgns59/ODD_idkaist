import React from "react"
import styles from './page.module.css';

export default function Lobby() {
    return (
        <>
            <img
                src={'./assets/lobby.png'}
                className={styles.lobby}
            />
        </>
    )
}