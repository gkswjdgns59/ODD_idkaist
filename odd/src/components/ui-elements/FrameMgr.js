import React, { useState, useEffect } from "react";
import axios from 'axios';
import Frame from "./Frame";
import styles from './page.module.css';

export default function FrameMgr() {
    const [response, setResponse] = useState({});

    useEffect(() => {
        const NOTION_DATABASE_ID = 'IDKAIST-Courses-b56f3727db2743f89b89193ef60a9734';

        axios
            .get(`https://notion-api.splitbee.io/v1/table/${NOTION_DATABASE_ID}`)
            .then(({data}) => {
                setResponse(data)
            })
    }, []);
  
    const buildFrames = (data) => {
        let product = [];

        for (let i = 0; i < data.length; i++) {
            let isPDF = false;
            let id;
            if (data[i].Course === "ID000 Example") {
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
                )            }
        }
        return product;
    }

    return (
        <div className={styles.frameContainer}>
            {buildFrames(response)}
        </div>
    )
}