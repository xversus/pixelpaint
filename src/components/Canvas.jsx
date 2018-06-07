import React from 'react';
import '../stylesheets/App.css';
import CellControl from '../containers/CellControl';

const Canvas = () => {
  const table = [];

  for (let i = 0, cellId = 0; i < 35; i += 1) {
    const line = [];
    for (let j = 0; j < 35; j += 1, cellId += 1) {
      line.push(<CellControl
        key={cellId}
        cellId={cellId}
        cellColor='aliceblue'
      />);
    }
    table.push(<div
      key={i}
      className='canvas-line'
    >
      {line}
    </div>);
  }

  return (
    <div className='canvas'>
      {table}
    </div>
  );
};

export default Canvas;
