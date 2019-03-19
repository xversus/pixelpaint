import React from 'react';
import { connect } from 'react-redux';
import { paintCell } from '../actions/index';
import '../stylesheets/App.css';
import CellControl from './CellControl';

class Canvas extends React.Component {
  render() {
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
      <div className='canvas' onClick={this.props.onCellClick}>
        {table}
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  onCellClick: (event) => {
    const { name } = event.target;
    if (name) {
      dispatch(paintCell(Number(name)));
    }
  },
});

const CanvasControl =
  connect(null, mapDispatchToProps)(Canvas);

export default CanvasControl;
