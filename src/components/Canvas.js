import React from "react";
import "./App.css";
import CellController from "../containers/VisibleCell.js";

const Canvas = function() {
    let table = [];
    let cellId = 0;

    for(let i = 0; i < 35; i++) {
        let line = [];
        for(let j = 0; j < 35; j++, cellId++) {
            line.push(<CellController key={cellId} cellId={cellId} cellColor="aliceblue"/>);
        }
        table.push(<div key={i} className="canvasLine">{line}</div>);
    }

    return (
        <div className="Canvas">
          {table}
        </div>
    );
};

export default Canvas;