import { connect } from "react-redux";
import {changePaletteVisibility} from "../actions/index";
import ColorPalette from "../components/ColorPalette";


const mapStateToProps = state => {
    return {
        paletteVisibility: state.paletteVisibility
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onHideClick: () => {
            dispatch(changePaletteVisibility())
        }
    }
};

const mergeProps = (propsFromState, propsFromDispatch) => {
    return {
        onHideClick: propsFromDispatch.onHideClick,
        visibility: propsFromState.paletteVisibility
    };
};

const FunctionalPalette = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ColorPalette);

export default FunctionalPalette;