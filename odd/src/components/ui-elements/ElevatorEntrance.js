import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import Elevator from "../Elevator";

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
    background-color: rgba(255, 255, 255, 0.6);
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

export default function ElevatorEntrance() {
    const [enter, setEnter] = useState(false);
    const renderBackdrop = (props) => <Backdrop {...props} />;

    const onReportClose = () => {setEnter(false)}
    return (
        <>
            <img
                className={styles.entrance}
                src={'./assets/entrance.png'}
                onClick={() => setEnter(true)}
            />
            <StyledModal
                show = {enter}
                onHide = {() => setEnter(false)}
                renderBackdrop = {renderBackdrop}
            >
                <Elevator report={onReportClose}/>
            </StyledModal>
        </>
    )

}