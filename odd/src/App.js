// import components
import './App.css';
import Header from './components/Header';
import { SceneHallway } from './components/game-elements/Scenes';
import Phaser from "phaser";
import 'react-notion/src/styles.css';
import { NotionRenderer } from 'react-notion';
import { useEffect, useState } from 'react';
import axios from 'axios';
import phaserReact from "phaser3-react";

// const config = {
//   parent: 'your games parent divs id',
//   dom: { createContainer: true },
//   plugins: {
//     global: [
//       {
//         key: 'phaser-react',
//         plugin: phaserReact,
//         start: true
//       }
//     ]
//   }
// }

const config = {
  dom: { createContainer: true },
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
  const [response, setResponse] = useState({});
  
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
      <Header/>
    </div>
  );
}

export default App;
