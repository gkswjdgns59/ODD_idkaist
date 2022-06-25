// import components
import './App.css';
import Header from './components/Header';
import { SceneHallway } from './components/game-elements/Scenes';
import Phaser from "phaser";
import FrameMgr from './components/ui-elements/FrameMgr';

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
  return (
    <div className="App">
      <Header/>
      <FrameMgr/>
    </div>
  );
}

export default App;
