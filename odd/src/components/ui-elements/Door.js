import React, { useEffect, useState } from "react";
import styles from './page.module.css';
import socket from "./../../socket-client";
import axios from 'axios';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import PageNotion from "./PageNotion";

const StyledModal = styled(Modal)`
    position: fixed;
    z-index: 1040;
    overflow-x: hidden;
    overflow-y: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 5px;
    outline: none;
    background-color: rgba(255, 255, 255, 1);
    box-shadow: 0px 4px 10px rgba(71, 71, 71, 0.25);
`;

const Backdrop = styled("div")`
    position: fixed;
    z-index: 1040;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.1;
`;

export default function Door(props) {
    const [doorImg, setDoorImg] = useState(null);
    const [profImg, setProfImg] = useState(null);
    const [response, setResponse] = useState({});
    const [open, setOpen] = useState(false);
    const renderBackdrop = (props) => <Backdrop {...props} />;

    const NOTION_DB_ID = 'a527ba46431d462e93a69b220cfb4e32?v=d0b78286ae3d446fbed35c320b95ed63?v=d0b78286ae3d446fbed35c320b95ed63';

    useEffect(() => {
        setDoorImg(`./assets/door_${props.roomNumber}.png`);
        setProfImg(`./assets/prof_${props.roomNumber}.png`);

        axios
            .get(`https://notion-api.splitbee.io/v1/table/${NOTION_DB_ID}`)
            .then(({data}) => {
                setResponse(data)
            })
    }, []);

    const enterRoom = () => {
        socket.emit('knock', props.roomNumber);
    }

    const getID = (res) => {
        let id;

        for (let i = 0; i < res.length; i++) {

            if(res[i].num.includes(props.roomNumber)) {
                id = res[i].id;
            }
        }

        return id;
    }

    return (
        <div className={styles.doorFrame}>
            <img
                src={doorImg}
                className={styles.doorImg}
                onClick={() => enterRoom()}
            ></img>
            <img
                src={profImg}
                className={styles.profImg}
                onClick={() => setOpen(true)}
            ></img>
            <StyledModal
                show = {open}
                onHide = {() => setOpen(false)}
                renderBackdrop = {renderBackdrop}
            >
                <PageNotion ID={getID(response)} />
            </StyledModal>
        </div>
    )
}

