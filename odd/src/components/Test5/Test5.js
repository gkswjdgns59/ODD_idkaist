import React, { useState } from 'react'
import { motion } from 'framer-motion';
import styles from './test5.module.css'
import IMG_left1 from './left1.png';
import IMG_left2 from './left2.png';
import IMG_left3 from './left3.png';
import IMG_left4 from './left4.png';
import IMG_right1 from './right1.png';
import IMG_right2 from './right2.png';
import IMG_right3 from './right3.png';
import IMG_right4 from './right4.png';
import IMG_hotel from './hotel.png';
import IMG_letter from './letter.png';
import IMG_button from './button.png';

export default function Test5() {

    const [isClick, setIsClick] = useState(false);
    const [show, setShow] = useState(true);

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.hotel_box}
                animate={{
                    scale: isClick? [1, 1, 3] : 1
                }}
                initial={{y: 0, scale: 1}}
                transition={{
                    duration: 2.5
                }}
            >
                <img src={IMG_hotel}></img>
            </motion.div>


            <motion.div
                className={styles.box}
                animate ={{
                    x: isClick ? [0, 0, 0, -4000] : 0
                }}
                initial={{x: 0}}
                transition={{
                    duration: 2
                }}
            >
                <img src={IMG_left4}></img>
            </motion.div>
            <motion.div
                className={styles.box}
                animate={{
                    x: isClick ? [0, 0, 0, 4000] : 0
                }}
                initial={{x: 0}}
                transition={{
                    duration: 2
                }}
            >
                <img src={IMG_right4}></img>
            </motion.div>


            <motion.div
                className={styles.box}
                animate ={{
                    x: isClick ? [0, 0, 0, -4000] : 0
                }}
                initial={{x: 0}}
                transition={{
                    duration: 1.8
                }}
            >
                <img src={IMG_left3}></img>
            </motion.div>
            <motion.div
                className={styles.box}
                animate={{
                    x: isClick ? [0, 0, 0, 4000] : 0
                }}
                initial={{x: 0}}
                transition={{
                    duration: 1.8
                }}
            >
                <img src={IMG_right3}></img>
            </motion.div>


            <motion.div
                className={styles.box}
                animate ={{
                    x: isClick ? [0, 0, 0, -4000] : 0
                }}
                initial={{x: 0}}
                transition={{
                    duration: 1.6
                }}
            >
                <img src={IMG_left2}></img>
            </motion.div>
            <motion.div
                className={styles.box}
                animate ={{
                    x: isClick ? [0, 0, 0, 4000] : 0
                }}
                initial={{x: 0}}
                transition={{
                    duration: 1.6
                }}
            >
                <img src={IMG_right2}></img>
            </motion.div>


            <motion.div
                className={styles.box}
                animate ={{
                    x: isClick ? [0, 0, 0, -4000] : 0
                }}
                initial={{x: 0}}
                transition={{
                    duration: 1.4
                }}
            >
                <img src={IMG_left1}></img>
            </motion.div>
            <motion.div
                className={styles.box}
                animate ={{
                    x: isClick ? [0, 0, 0, 4000] : 0
                }}
                initial={{x: 0}}
                transition={{
                    duration: 1.4
                }}
            >
                <img src={IMG_right1}></img>
            </motion.div>

            {isClick ||
                <motion.div
                    className={styles.letter}
                    initial={{opacity: 1}}
                    transition={{
                        duration: 0.3
                    }}
                >
                    <img src={IMG_letter}></img>
                    <motion.div
                        className={styles.button}
                        onClick={() => {
                            setIsClick(!isClick)
                        }}
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.9}}
                        transition={{
                            duration: 0.3
                        }}
                    >
                        환영합니다
                    </motion.div>
                </motion.div>
            }
            
        </div>
    )
}
