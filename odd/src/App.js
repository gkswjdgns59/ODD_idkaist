import './App.css';
import Header from './components/Header';

import Example from './components/Ghost';
import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: window.innerWidth,
  height: window.innerHeight,
  pixelArt: true,
  transparent: true,
  scene: [ Example ]
};

const game = new Phaser.Game(config);

import ServerTester from './ServerTester';
import 'react-notion/src/styles.css';
import { NotionRenderer } from 'react-notion';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
