import React, { useState, useEffect } from "react";
import axios from 'axios';
import Frame from "./Frame";
import styles from './page.module.css';

export default function FrameMgr() {
    const [response, setResponse] = useState({});

    useEffect(() => {
    const NOTION_PAGE_ID = '5f319b7f8d7d4ded8500b637e8b5a686?v=7b3723b1b6de401fba43aac2191d7d5b';

    axios
        .get(`https://notion-api.splitbee.io/v1/table/${NOTION_PAGE_ID}`)
        .then(({data}) => {
            setResponse(data)
        })


    }, []);
  
    const buildFrames = (data) => {
        let product = [];

        for (let i = 0; i < data.length; i++) {
            let isPDF = false;
            let id;

            if (data[i].PDF != null) {
                isPDF = true;
                // console.log(data[i].PDF[0]);
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
        return product;
    }

    return (
        <div className={styles.frameContainer}>
            {buildFrames(response)}
        </div>
    )
}