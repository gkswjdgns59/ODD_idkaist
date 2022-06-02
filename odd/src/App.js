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

function App() {
  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
