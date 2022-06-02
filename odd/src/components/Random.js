import React, {useState} from "react";
import styles from "./random.module.css";

export default function Header() {
    const [open, setOpen] = useState(false);
    
    return (
        <div>
            {open
            ? <div className={styles.bool1}> true </div>
            : <div className={styles.bool2}> false </div>
            }
            <div onClick={()=>setOpen(!open)} className={styles.button}> button </div>
        </div>
    )
}