// import components
import './App.css';
import styles from './App.module.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { SceneHallway } from './components/game-elements/Scenes';
import Phaser from "phaser";
import phaserReact from "phaser3-react";
import Parser from './components/ui-elements/Parser';

import IMG_left1 from './components/images/left1.png';
import IMG_left2 from './components/images/left2.png';
import IMG_left3 from './components/images/left3.png';
import IMG_left4 from './components/images/left4.png';
import IMG_right1 from './components/images/right1.png';
import IMG_right2 from './components/images/right2.png';
import IMG_right3 from './components/images/right3.png';
import IMG_right4 from './components/images/right4.png';
import IMG_hotel from './components/images/hotel.png';
import IMG_letter from './components/images/letter.png';


const config = {
  dom: { createContainer : true },
  plugins: {
    global: [
      {
        key: 'phaser-react',
        plugin: phaserReact,
        start: true
      }
    ]
  },
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


  const [entered, setEntered] = useState(false);
  const { scrollYProgress } = useViewportScroll();

  const xLeft1 = useTransform(scrollYProgress, [0.05, 0.7], ["0px", "-4000px"]);
  const xLeft2 = useTransform(scrollYProgress, [0.15, 0.7], ["0px", "-4000px"]);
  const xLeft3 = useTransform(scrollYProgress, [0.25, 0.7], ["0px", "-4000px"]);
  const xLeft4 = useTransform(scrollYProgress, [0.35, 0.7], ["0px", "-4000px"]);
  
  const xRight1 = useTransform(scrollYProgress, [0.05, 0.7], ["0px", "4000px"]);
  const xRight2 = useTransform(scrollYProgress, [0.15, 0.7], ["0px", "4000px"]);
  const xRight3 = useTransform(scrollYProgress, [0.25, 0.7], ["0px", "4000px"]);
  const xRight4 = useTransform(scrollYProgress, [0.35, 0.7], ["0px", "4000px"]);

  const scaleHotel = useTransform(scrollYProgress, [0.35, 0.7], ["1","3"]);

  const yLetter = useTransform(scrollYProgress, [0.1, 0.55], ["0","-100vh"]);
  const scaleLetter = useTransform(scrollYProgress, [0.1, 0.45], ["1","0.5"]);

  const opacity = useTransform(scrollYProgress, [0.8, 0.9], ["1", "0"]);

  useEffect(() => {
    scrollYProgress.onChange(scrollYProgress => {
      if (scrollYProgress >= 0.9 & !entered) {
        setEntered(true);
        document.body.style.height = "100vh";
      }
    });
  }, []);


  return (
    <div className={styles.App}>
      <Parser />
      {entered ||
        <motion.div
          className={styles.container}
          style={{
            opacity: opacity
          }}
        >
          <motion.div
            className={styles.hotel_box}
            style={{
              scale: scaleHotel
            }}
          >
            <img src={IMG_hotel} className={styles.hotel_img}></img>
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
            <img src={IMG_letter}></img>
          </motion.div>


        </motion.div>
      }
      <Header/>
      <div className={styles.help}>
        <img
          src={'./assets/arrow.png'}
          className={styles.arrow}
        />
        <div>좌우 방향키로 유령을 움직여 ODD 호텔을 구경하세요.</div>
      </div>
    </div>
  );
}

export default App;
