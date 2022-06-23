// import components
import Header from './components/Header';

import Test6 from './components/Test6/Test6';

import './App.css';
import { SceneHallway } from './components/game-elements/Scenes';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Phaser from "phaser";
import 'react-notion/src/styles.css';
import { NotionRenderer } from 'react-notion';
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import styles from './App.module.css';

import IMG_left1 from './components/images/left1.png';
import IMG_left2 from './components/images/left2.png';
import IMG_left3 from './components/images/left3.png';
import IMG_left4 from './components/images/left4.png';
import IMG_right1 from './components/images/right1.png';
import IMG_right2 from './components/images/right2.png';
import IMG_right3 from './components/images/right3.png';
import IMG_right4 from './components/images/right4.png';
import IMG_hotel from './components/images/hotel.png';
import IMG_pot from './components/images/hotel_pot.png';
import IMG_letter from './components/images/letter.png';
import IMG_button from './components/images/button.png';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  scale: {
    mode: Phaser.Scale.RESIZE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.innerWidth,
    height: window.innerHeight
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  pixelArt: true,
  transparent: true,
  scene: [ SceneHallway ]
};

const game = new Phaser.Game(config);

function App() {
  const [response, setResponse] = useState({});
  const [enter, setEnter] = useState(false);
  const { scrollYProgress } = useViewportScroll();

  const xLeft1 = useTransform(scrollYProgress, [0.15, 1], ["0px", "-4000px"]);
  const xLeft2 = useTransform(scrollYProgress, [0.3, 1], ["0px", "-4000px"]);
  const xLeft3 = useTransform(scrollYProgress, [0.45, 1], ["0px", "-4000px"]);
  const xLeft4 = useTransform(scrollYProgress, [0.6, 1], ["0px", "-4000px"]);
  
  const xRight1 = useTransform(scrollYProgress, [0.15, 1], ["0px", "4000px"]);
  const xRight2 = useTransform(scrollYProgress, [0.3, 1], ["0px", "4000px"]);
  const xRight3 = useTransform(scrollYProgress, [0.45, 1], ["0px", "4000px"]);
  const xRight4 = useTransform(scrollYProgress, [0.6, 1], ["0px", "4000px"]);

  const scaleHotel = useTransform(scrollYProgress, [0.6, 1], ["0.3","1"]);

  const yLetter = useTransform(scrollYProgress, [0.05, 0.35], ["0","-100vh"]);
  const scaleLetter = useTransform(scrollYProgress, [0, 0.4], ["1","0.7"]);


  useEffect(() => {
    const NOTION_PAGE_ID = 'be4ddb06be8d423785dcd8a4372d1e05';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({data}) => {
        setResponse(data);
      })
  }, []);


  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      console.log(latest);
    });
  }, []);


  return (
    <div className={styles.App}>
      {/* {Object.keys(response).length && (
        <NotionRenderer blockMap={response} fullPage={true} />
      )} */}
      {/* <Expire delay="100000"><Test5/></Expire> */}
      {/* <div className="Entrance_container">
        
      </div> */}
      {/* <Test5/> */}
      {/* <Test6/> */}
      <div className={styles.container}>
        <motion.div
          className={styles.hotel_box}
          style={{
            scale: scaleHotel
          }}
        >
          <img src={IMG_hotel}></img>
        </motion.div>


        <motion.div
          className={styles.box}
          style={{
            x: xLeft4
          }}
        >
          <img src={IMG_left4}></img>
        </motion.div>
        <motion.div
          className={styles.box}
          style={{
            x: xRight4
          }}
        >
          <img src={IMG_right4}></img>
        </motion.div>


        <motion.div
          className={styles.box}
          style={{
            x: xLeft3
          }}
        >
          <img src={IMG_left3}></img>
        </motion.div>
        <motion.div
          className={styles.box}
          style={{
            x: xRight3
          }}
        >
          <img src={IMG_right3}></img>
        </motion.div>


        <motion.div
          className={styles.box}
          style={{
            x: xLeft2
          }}
        >
          <img src={IMG_left2}></img>
        </motion.div>
        <motion.div
          className={styles.box}
          style={{
            x: xRight2
          }}
        >
          <img src={IMG_right2}></img>
        </motion.div>


        <motion.div
          className={styles.box}
          style={{
            x: xLeft1
          }}
        >
          <img src={IMG_left1}></img>
        </motion.div>
        <motion.div
          className={styles.box}
          style={{
            x: xRight1
          }}
        >
          <img src={IMG_right1}></img>
        </motion.div>

        <motion.div
          className={styles.letter_box}
          style={{
            y: yLetter,
            scale: scaleLetter
          }}
        >
          <motion.div
            className={styles.button}
            // onClick={() => {
              //   setIsClick(!isClick)
            // }}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            transition={{
              duration: 0.3
            }}
          >
              SCROLL
          </motion.div>
          <img src={IMG_letter}></img>
        </motion.div>


      </div>
      <Header/>
    </div>
  );
}



export default App;
