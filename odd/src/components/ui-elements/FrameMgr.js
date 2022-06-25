import React, { useState, useEffect } from "react";
import axios from 'axios';
import Frame from "./Frame";
import socket from "./../../socket-client";
import styles from './page.module.css';

export default function FrameMgr() {
    const [response, setResponse] = useState({});
    const [roomNumber, setRoomNumber] = useState('000');
    const [pos, setPos] = useState(0);

    useEffect(() => {
        setRoomNumber('000'); // get from server

        const NOTION_DATABASE_ID = 'IDKAIST-Courses-b56f3727db2743f89b89193ef60a9734';

        axios
            .get(`https://notion-api.splitbee.io/v1/table/${NOTION_DATABASE_ID}`)
            .then(({data}) => {
                setResponse(data)
            })
    }, []);

    useEffect(() => {
        socket.on('moveBackground', (value) => {
            setPos(pos + value);
        })
    }, [pos])
  
    const buildFrames = (data) => {
        let product = [];

        for (let i = 0; i < data.length; i++) {
            let isPDF = false;
            let id;
            if (data[i].Course.includes(`ID${roomNumber}`)) {
                if (data[i].PDF != null) {
                    isPDF = true;
                    id = data[i].PDF[0].url;
                } else {
                    isPDF = false;
                    id = data[i].id;
                }
    
                product.push(
                    <Frame
                        key = {`Frame ${i}`}
                        PDF = {isPDF}
                        ID = {id}
                    />
                )            
            }
        }
        return product;
    }

    return (
        <div style={{
            position : 'absolute',
            top : 350,
            left : pos,
            display: 'flex',
            gap: '40rem'
        }}>
            {buildFrames(response)}
        </div>
    )
}