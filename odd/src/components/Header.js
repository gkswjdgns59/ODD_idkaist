import React, {useState} from "react";
import styles from "./ui.module.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    
    return (
        <>
            <div className={styles.header}>
                <div className={styles.leftHeader}>
                    <img
                        src="/assets/ODD.png"
                        height="30rem"
                    />
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.wobble}>
                        <img src="/assets/icon_ghost.png" height="30rem"/>
                    </div>
                    <div className={styles.wobble}>
                        <img
                            src="/assets/icon_menu.png" 
                            height="25rem"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                </div>
            </div>
            {open &&
                <div className={styles.menu}>
                    <div className={styles.menuText}>About us</div>
                    <div className={styles.menuText}>Language</div>
                    <div className={styles.menuText}>Setting</div>
                </div>
            }
        </>
    )
}