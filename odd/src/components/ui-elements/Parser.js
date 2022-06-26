import React, { useState, useEffect } from "react";
import socket from "./../../socket-client";
import FrameMgr from "./FrameMgr";
import DoorMgr from "./DoorMgr";

export default function Parser() {
    const [isRoom, setIsRoom] = useState(false);
    useEffect(() => {
        socket.emit('whereIam');
        socket.on('whereUare', (num) => {
            if (num.toString().slice(-2) === '00') {
                setIsRoom(false);
            } else {
                setIsRoom(true);
            }
        })
    }, [isRoom]);

    return(
        <>
            {isRoom 
                ? <FrameMgr/>
                : <DoorMgr/>
            }
        </>
    )
}