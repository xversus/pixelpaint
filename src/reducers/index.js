import {CHANGE_COLOR, CHANGE_PALETTE_VISIBILITY, CLEAR_CANVAS, LOAD_PICTURE, PAINT_CELL} from "../actions/index";

const initialState = {
    cells: new Array(1225).fill("aliceblue"),
    currentColor: "aliceblue",
    paletteVisibility: "inline-block"
};

function makeAction(state = initialState, action) {
    switch(action.type) {
        case CHANGE_COLOR:
            return { ...state, currentColor: action.currentColor };
        case PAINT_CELL:
            return {
                ...state,
                cells: state.cells.map((elem, index) => (action.cellId === index ? state.currentColor : elem))
            };
        case CLEAR_CANVAS:
            return {
                ...state,
                cells: state.cells.map(() => ("aliceblue"))
            };
        case LOAD_PICTURE:
            return {
                ...state,
                cells: JSON.parse(localStorage.getItem("canvas"))
            };
        case CHANGE_PALETTE_VISIBILITY:
            return {
                ...state,
                paletteVisibility: state.paletteVisibility === "none" ? "inline-block" : "none"
            };
        default:
            return state;
    }
}

export default makeAction;