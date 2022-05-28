import React from 'react';
import styles from "./aboutus.module.css";

export default function AboutUs() {
    return (
        <> 
            <div className={styles.aboutsection}>
                <h1>About Us Page</h1>
                <p>sadi gua hak saeng hoi.</p>
                <p>igeo hana haneundae mut sigan gulim.</p>
            </div>

            <div className={styles.ourteam}>
                <h2>Our Team</h2>
            </div>
            
            <div className={styles.row}>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="/assets/icon_ghost.png" alt="Daeuk" styles="width:100%"/>
                        <div className={styles.container}>
                            <h2>Daeuk Kim</h2>
                            <p className={styles.title}> Industrial Design & President</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>kdo@kaist.ac.kr</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="/assets/icon_ghost.png" alt="Daeuk" styles="width:100%"/>
                        <div className={styles.container}>
                            <h2>Daeuk Kim</h2>
                            <p className={styles.title}> Industrial Design & President</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>kdo@kaist.ac.kr</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="/assets/icon_ghost.png" alt="Daeuk" styles="width:100%"/>
                        <div className={styles.container}>
                            <h2>Daeuk Kim</h2>
                            <p className={styles.title}> Industrial Design & President</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>kdo@kaist.ac.kr</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>

                <div className={styles.column}>
                    <div className={styles.card}>
                        <img src="/assets/icon_ghost.png" alt="Daeuk" styles="width:100%"/>
                        <div className={styles.container}>
                            <h2>Daeuk Kim</h2>
                            <p className={styles.title}> Industrial Design & President</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>kdo@kaist.ac.kr</p>
                            <p><button className={styles.button}>Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>





        </>


    )
}