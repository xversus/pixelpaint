import { CHANGE_COLOR, PAINT_CELL } from "../actions/index";

const initialState = {
    cells: new Array(1225).fill("aliceblue"),
    currentColor: "aliceblue"
};

function makeAction(state = initialState, action) {
    switch(action.type) {
        case CHANGE_COLOR:
            return { ...state, currentColor: action.currentColor };
        case PAINT_CELL:
            return {
                ...state,
                cells: state.cells.map(function (elem, index) {
                    return action.cellId === index ? state.currentColor : elem;
                })
            };
        default:
            return state;
    }
}

export default makeAction;