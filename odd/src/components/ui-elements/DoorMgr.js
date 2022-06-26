import React, { useEffect, useState } from 'react';
import Door from './Door';
import socket from "./../../socket-client";

export default function DoorMgr() {
    const [floorNumber, setFloorNumber] = useState('200');
    const [pos, setPos] = useState(0);

    useEffect(() => {
        socket.emit('whereIam');
        socket.on('whereUare', (num) => {
            setFloorNumber(num);
        });
    }, []);

    useEffect(() => {
        socket.on('moveBackground', (value) => {
            setPos(pos + value);
        });
    }, [pos]);

    const buildDoors = (floor) => {
        let product = [];
        for (let i in DoorDb[floor]) {
            product.push(
                <Door
                    key = {`Door ${i}`}
                    roomNumber = {i.toString()}
                />
            )
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
            {buildDoors(floorNumber)}
        </div>    
    )
}

const DoorDb = {
    200 : {
        201 : {
            roomNumber : 201,
            title : 'Introduction to Design',
        },
        211 : {
            roomNumber : 211,
            title : 'Graphic Design',
        },
        212 : {
            roomNumber : 212,
            title : 'Basic Design'
        },
        217 : {
            roomNumber : 217,
            title : 'Presentation Technique'
        },
        218 : {
            roomNumber : 218,
            title : 'Photo Techniques'
        },
        219 : {
            roomNumber : 219,
            title: 'Computer Aided Design'
        },
    },
    300 : {
        301 : {
            roomNumber : 301,
            title : 'Interactive Product Design'
        },
        303 : {
            roomNumber : 303,
            title : 'Design Methods'
        },
        307 : {
            roomNumber : 307,
            title : 'Interface Design'
        },
        311 : {
            roomNumber : 311,
            title : 'Software Prototyping'
        },
    },
    400 : {
        403 : {
            roomNumber : 403,
            title : 'System Design'
        },
        409 : {
            roomNumber : 409,
            title : 'Graduation Design Studio I'
        },
        416 : {
            roomNumber : 416,
            title : 'Portfolio and Exhibition Design'
        },
        490 : {
            roomNumber : 490,
            title : 'Undergraduate Thesis Project'
        },
    }
}