import React from 'react';
import './App.css';
import VisibleCell from '../containers/VisibleCell';

const Canvas = () => {
  const table = [];

  for (let i = 0, cellId = 0; i < 35; i += 1) {
    const line = [];
    for (let j = 0; j < 35; j += 1, cellId += 1) {
      line.push(<VisibleCell
        key={cellId}
        cellId={cellId}
        cellColor="aliceblue"
      />);
    }
    table.push(<div
      key={i}
      className="canvasLine"
    >
      {line}
    </div>);
  }

  return (
    <div className="Canvas">
      {table}
    </div>
  );
};

export default Canvas;
