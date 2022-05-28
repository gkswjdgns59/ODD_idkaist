import React, { useEffect, useState } from 'react';
import socket from "./socket-client";

export default function ServerTester() {
    const [list, setList] = useState({});
    const [roomNumber, setRoomNumber] = useState(100);
    const [roomMate, setRoomMate] = useState([]);
  

    const moveRoom = () => {
    socket.emit('move', roomNumber + 100);
    setRoomNumber(roomNumber + 100);
    }

    useEffect(() => {
    socket.on('update', (userList) => {
        console.log('got it!');
        setList(userList);
        
        const newRoomMate = Object.keys(userList).filter(key =>
        userList[key].roomNumber == userList[socket.id].roomNumber);
        setRoomMate(newRoomMate);
    })
    }, []);

    return (
        <>
            <div>
                my userID : {socket.id}
            </div>
            <div onClick={() => {moveRoom()}}>
                my current room : {roomNumber}
            </div>
            <ul>
                roommates :
                {roomMate.map((value, idx) => (<li key={idx}>{value}</li>))}
            </ul>
        </>
    )
}