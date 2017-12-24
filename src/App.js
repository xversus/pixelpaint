import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas.js';
import ColorPalette from './ColorPalette.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Canvas />
        <p/>
        <ColorPalette />

      </div>
    );
  }
}

export default App;