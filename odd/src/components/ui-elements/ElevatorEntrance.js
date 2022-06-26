import React, { useEffect, useState } from 'react';
import styles from './page.module.css';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import Elevator from "../Elevator";

const StyledModal = styled(Modal)`
    position: absolute;
    z-index: 1040;
    outline: none;
    background-color: rgba(255, 255, 255, 1);
`;

const Backdrop = styled("div")`

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