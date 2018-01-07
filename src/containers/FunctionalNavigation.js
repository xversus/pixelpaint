import { connect } from "react-redux";
import { clearCanvas, loadPicture } from "../actions/index";
import Navigation from "../components/Navigation";


const mapStateToProps = state => {
    return {
        cells: state.cells
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onClearClick: () => {
            dispatch(clearCanvas())
        },
        onSaveClick: () => {},
        onLoadClick: () => {
            dispatch(loadPicture())
        }
    }
};

const mergeProps = (propsFromState, propsFromDispatch) => {
    return {
        onClearClick: propsFromDispatch.onClearClick,
        onLoadClick: propsFromDispatch.onLoadClick,
        onColorChange: propsFromDispatch.onColorChange,
        onSaveClick: () => {
            localStorage.setItem("canvas", JSON.stringify(propsFromState.cells));
        }
    };
};

const FunctionalNavigation = connect(mapStateToProps, mapDispatchToProps, mergeProps)(Navigation);

export default FunctionalNavigation;