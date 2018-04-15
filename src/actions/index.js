export const PAINT_CELL = 'PAINT_CELL';
export const CHANGE_COLOR = 'CHANGE_COLOR';
export const CLEAR_CANVAS = 'CLEAR_CANVAS';
export const LOAD_PICTURE = 'LOAD_PICTURE';
export const CHANGE_PALETTE_VISIBILITY = 'CHANGE_PALETTE_VISIBILITY';

export const paintCell = cellId => ({
  type: PAINT_CELL,
  payload: cellId,
});

export const changeColor = currentColor => ({
  type: CHANGE_COLOR,
  payload: currentColor,
});

export const clearCanvas = () => ({
  type: CLEAR_CANVAS,
});

export const loadPicture = () => ({
  type: LOAD_PICTURE,
});

export const changePaletteVisibility = () => ({
  type: CHANGE_PALETTE_VISIBILITY,
});
