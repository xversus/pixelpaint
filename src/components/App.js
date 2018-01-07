import React, { Component } from "react";
import "./App.css";
import Canvas from "./Canvas.js";
import FunctionalPalette from "../containers/FunctionalPalette.js";
import FunctionalNavigation from "../containers/FunctionalNavigation.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FunctionalNavigation />
        </header>

        <Canvas />
        <p/>
        <FunctionalPalette />

      </div>
    );
  }
}

export default App;