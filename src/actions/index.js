export const PAINT_CELL = "PAINT_CELL";
export const CHANGE_COLOR = "CHANGE_COLOR";
export const CLEAR_CANVAS = "CLEAR_CANVAS";
export const LOAD_PICTURE = "LOAD_PICTURE";
export const CHANGE_PALETTE_VISIBILITY = "CHANGE_PALETTE_VISIBILITY";

export const paintCell = (cellId) => {
    return {
        type: PAINT_CELL,
        cellId: cellId
    };
};

export const changeColor = (currentColor) => {
    return {
        type: CHANGE_COLOR,
        currentColor: currentColor
    };
};

export const clearCanvas = () => {
    return {
        type: CLEAR_CANVAS
    };
};

export const loadPicture = () => {
    return {
        type: LOAD_PICTURE
    };
};

export const changePaletteVisibility = () => {
    return {
        type: CHANGE_PALETTE_VISIBILITY
    };
};