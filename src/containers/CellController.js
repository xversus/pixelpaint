import { connect } from "react-redux";
import { paintCell } from "../actions/index";
import Cell from "../components/Cell";

const mapStateToProps = state => {
    return {
        cells: state.cells,
        currentColor: state.currentColor
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onCellClick: (cellId) => {
             dispatch(paintCell(cellId))
        },
    }
};

const mergeProps = (propsFromState, propsFromDispatch, ownProps) => {
    return {
        onCellClick: propsFromDispatch.onCellClick,
        cellId: ownProps.cellId,
        cellColor: propsFromState.cells[ownProps.cellId],
    };
};

const CellController = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Cell);

export default CellController;