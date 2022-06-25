import React, { useState } from "react";
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import styles from './page.module.css';
import PageNotion from "./PageNotion";

// import pdfjs
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const SERVER_HEADER = 'https://odd-cors-server.herokuapp.com';

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
    background-color: #FBFBFB;
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

export default function Frame(props) {
    const [openPage, setOpenPage] = useState(false);
    const [openPDF, setOpenPDF] = useState(false);
    const renderBackdrop = (props) => <Backdrop {...props} />;

    const openModal = () => {
        if (props.PDF === true) {
            setOpenPDF(true);
        } else {
            setOpenPage(true);
        }
    }

    return (
        <div className={styles.frame}>
            <img src="/assets/frame.png" className={styles.frameImage} />
            <div className={styles.frameButton}
                onClick= {() => {openModal()}}
            >
                button
            </div>
            {/* notion page의 경우 'react-notion'을 통해 render */}
                <StyledModal
                    show = {openPage}
                    onHide = {() => setOpenPage(false)}
                    renderBackdrop = {renderBackdrop}
                >
                    <PageNotion ID={props.ID} />
                </StyledModal>
            
            {/* pdf의 경우 'react-pdf'를 사용하되, CORS 보안 우회를 위해 self-hosting한 서버를 거쳐 fetch함 */}
            <StyledModal
                show = {openPDF}
                onHide = {() => setOpenPDF(false)}
                renderBackdrop = {renderBackdrop}
            >
                <Document
                    file={{url: `${SERVER_HEADER}/${props.ID}`}}
                >
                    <Page pageNumber={1} width={window.innerWidth / 2}></Page>
                </Document>
            </StyledModal>
        </div>
    )
}