import { connect } from 'react-redux';
import Cell from '../components/Cell.jsx';

const mapStateToProps = (state, ownProps) => ({
  cellColor: state.cells[ownProps.cellId],
});

const CellControl =
  connect(mapStateToProps)(Cell);

export default CellControl;
