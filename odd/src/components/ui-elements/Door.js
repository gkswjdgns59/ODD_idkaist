import React, { useEffect, useState } from "react";
import styles from './page.module.css';

export default function Door(props) {
    const [doorImg, setDoorImg] = useState(null);
    // const [profImg, setProfImg] = useState(null);

    useEffect(() => {
        setDoorImg(`./assets/door_${props.roomNumber}.png`);
        // setProfImg(`./images/prof_${props.roomNumber}`);
    }, []);

    const enterRoom = () => {
        console.log(props.roomNumber);
    }

    return (
        <div>
            <img
                src={doorImg}
                className={styles.doorImg}
                onClick={() => enterRoom()}
            ></img>
            {/* <img src={profImg}></img> */}
        </div>
    )
}