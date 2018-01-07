import { connect } from "react-redux";
import { changeColor } from "../actions/index";
import CurrentColorView, { anotherColorHandler } from "../components/CurrentColorView";

const mapStateToProps = state => {
    return {
        color: state.currentColor
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAnotherColorClick: () => {},
        onColorChange: () => {
            dispatch(changeColor(anotherColorHandler.value))
        }
    }
};

const mergeProps = (propsFromState, propsFromDispatch) => {
    return {
        color: propsFromState.color,
        onColorChange: propsFromDispatch.onColorChange,
        onAnotherColorClick: () => {
            anotherColorHandler.click();
        }
    };
};

const VisibleCurrentColorView = connect(mapStateToProps, mapDispatchToProps, mergeProps)(CurrentColorView);

export default VisibleCurrentColorView;