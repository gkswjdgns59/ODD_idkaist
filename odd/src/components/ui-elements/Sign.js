import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import { CourseDb } from "../CourseDb";

export default function Sign(props) {
    const [size, setSize] = useState('Small');
    const [roomNumber, setRoomNumber] = useState('000');
    const [title, setTitle] = useState('');

    useEffect(() => {
        setSize(props.size);
        setRoomNumber(props.cur.toString());
    }, [props])

    useEffect(() => {
        if (roomNumber !== undefined) {
            if (roomNumber.slice(1, 3) !== '00') {
                setTitle(CourseDb[roomNumber].title);
            }
        }
    }, [roomNumber])

    const readySign = (num, text) => {
        if (num !== undefined) {
            if (text.length < 1) {
                // console.log(num.slice(2) + 'F');
                return num.slice(0, 1) + 'F';
            } else {
                return `ID ${num} - ${text}`
            }
        }
    }

    return (
        <>
            <img
                src={`./assets/Sign_${size}.png`}
                className={styles.signImg}
            />
            <div 
                className={styles.signText}
            >
                {/* {`ID ${roomNumber} - ${title}`} */}
                {readySign(roomNumber, title)}
            </div>
        </>
    )
}