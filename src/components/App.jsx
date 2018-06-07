import React from 'react';
import '../stylesheets/App.css';
import Canvas from './Canvas.jsx';
import PaletteControl from '../containers/PaletteControl';
import NavigationControl from '../containers/NavigationControl';

const App = () => (
  <div className='app'>
    <header className='app-header'>
      <NavigationControl />
    </header>

    <Canvas />
    <p />
    <PaletteControl />

  </div>
);

export default App;
