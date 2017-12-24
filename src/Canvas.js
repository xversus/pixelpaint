import React from 'react';
import './App.css';
import Cell from './Cell.js';

function Canvas() {
    var table = [];

    for(let i = 0; i < 35; i++) {
        let line = [];
        for(let j = 0; j < 35; j++) {
            line.push(<Cell />);
        }
        table.push(<div className="canvasLine">{line}</div>);
    };

    return (
        <div className="Canvas">{table}</div>
    );
}

export default Canvas;