import React, {useState} from "react";
import styles from "./ui.module.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    // const [open2, setOpen2] = useState(false);
    
    return (
        <div className={styles.headerWrapper}>
            <div className={styles.header}>
                <div className={styles.leftHeader}>
                    <img
                        src="/assets/ODD.png"
                    />
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.wobble}>
                        <img src="/assets/icon_ghost.png" />
                    </div>
                    <div className={styles.wobble}>
                        <img
                            src="/assets/icon_menu.png"
                            onClick={() => setOpen(!open)}
                        />
                    </div>
                </div>
            </div>
            {open &&
                <div className={styles.menu}>
                    <a style={{textDecoration: 'none'}} href="https://2022idkaist.notion.site/About-IDKAIST-150043c2ef334ecb8c7cb6b572855f9b" target='_blank' aria-label='IDKAIST'>
                        <div className={styles.menuText}>About IDKAIST</div>
                    </a>
                    <a style={{textDecoration: 'none'}} href="https://2022idkaist.notion.site/About-ODD-2f5cae4cb3d0464a9b029de767292a03" target='_blank' aria-label='ODD'>
                        <div className={styles.menuText}>About ODD</div>
                    </a>
                    {/* {open2 
                    ? <div className={styles.menuText} onClick={() => setOpen2(!open2)}>
                        Language: Korean
                    </div>
                    : <div className={styles.menuText} onClick={() => setOpen2(!open2)}>
                        Language: English
                    </div>
                    }
                    <div className={styles.menuText}>Setting</div> */}
                </div>
            }
        </div>
    )
}