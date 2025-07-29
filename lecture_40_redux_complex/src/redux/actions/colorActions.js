export const SET_RED = 'COLOR/RED';
export const SET_GREEN = 'COLOR/GREEN';
export const SET_BLUE = 'COLOR/BLUE';

export const setRed = (color) => {
  return {
    type: SET_RED,
    payload: color
  }
}

export const setGreen = (color) => {
  return {
    type: SET_GREEN,
    payload: color
  }
}

export const setBlue = (color) => {
  return {
    type: SET_BLUE,
    payload: color
  }
}