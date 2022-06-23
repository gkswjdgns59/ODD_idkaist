// import components
import Header from './components/Header';
import Test5 from './components/Test5/Test5';

import Test6 from './components/Test6/Test6';

import './App.css';
import { SceneHallway } from './components/game-elements/Scenes';
import Phaser from "phaser";
import 'react-notion/src/styles.css';
import { NotionRenderer } from 'react-notion';
import { useEffect, useState } from 'react';
import axios from 'axios';


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
  
  useEffect(() => {
    const NOTION_PAGE_ID = 'be4ddb06be8d423785dcd8a4372d1e05';
    axios
      .get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`)
      .then(({data}) => {
        setResponse(data);
      })
  }, []);
  return (
    <div className="App">
      {/* {Object.keys(response).length && (
        <NotionRenderer blockMap={response} fullPage={true} />
      )} */}
      {/* <Expire delay="100000"><Test5/></Expire> */}
      {/* <div className="Entrance_container">
        
      </div> */}
      {/* <Test5/> */}
      <Test6/>
      <Header/>
    </div>
  );
}



export default App;
