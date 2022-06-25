import React, { useState, useEffect } from "react";
import 'react-notion/src/styles.css';
import { NotionRenderer } from 'react-notion';
import axios from 'axios';
import styles from './page.module.css';

export default function PageNotion(props) {
    const [response, setResponse] = useState({});

    useEffect(() => {
        axios
        .get(`https://notion-api.splitbee.io/v1/page/${props.ID}`)
        .then(({data}) => {
            setResponse(data);
        })
    }, [props.ID]);
    
    
    return (
        <div className={styles.pageContainer}>
            {Object.keys(response).length && (
                <NotionRenderer blockMap={response} fullPage={true} />
            )}
        </div>
    )
}