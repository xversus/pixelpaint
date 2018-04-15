import React from 'react';
import './App.css';
import Canvas from './Canvas.jsx';
import FunctionalPalette from '../containers/FunctionalPalette';
import FunctionalNavigation from '../containers/FunctionalNavigation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FunctionalNavigation />
      </header>

      <Canvas />
      <p />
      <FunctionalPalette />

    </div>
  );
}

export default App;
