import { connect } from 'react-redux';
import { paintCell } from '../actions/index';
import Cell from '../components/Cell.jsx';

const mapStateToProps = (state, ownProps) => ({
  cells: state.cells,
  cellColor: state.cells[ownProps.cellId],
});

const mapDispatchToProps = dispatch => ({
  onCellClick: (cellId) => {
    dispatch(paintCell(cellId));
  },
});

const CellControl =
connect(mapStateToProps, mapDispatchToProps)(Cell);

export default CellControl;
