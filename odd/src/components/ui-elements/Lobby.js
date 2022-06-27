import React, { useState } from "react"
import styles from './page.module.css';

export default function Lobby() {
    // 구글 폼 링크
    const FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLScqsE4Z4DT6gcTuWSJHYliTvXozDz5gsBlKQfYHfMhe9i6JkA/viewform?vc=0&c=0&w=1&flr=0';

    const [active, setActive] = useState(false);

    const goQuiz = () => {
        window.open(FORM_LINK, '__blank');
        setActive(false);
    }

    return (
        <>
            <img
                src={'./assets/lobby.png'}
                className={styles.lobby}
                onClick={()=>setActive(true)}
            />
            {active &&
                <div 
                    className={styles.talk}
                    onClick={()=>goQuiz()}
                >
                    ODD 호텔에 오신 것을 환영합니다~ <br/>
                    문제 하나 풀고 갈래요?
                </div>
            }
        </>
    )
}