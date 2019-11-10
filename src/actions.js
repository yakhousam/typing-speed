export const SET_INPUT = "SET_INPUT"
export const UPDATE_DISPLAY_TXT = "UPDATE_DISPLAY_TXT"
export const INC_CURSOR = "INC_CURSOR"
export const ADD_ERROR = "ADD_ERROR"
export const REMOVE_ERROR = "REMOVE_ERROR"

export const setInput = (input, dispatch) => {
  dispatch({type: SET_INPUT, input})
}
export const updateDisplayTxt = (dispatch) => {
  dispatch({type: UPDATE_DISPLAY_TXT})
}
export const incrementCursor = (dispatch) => {
  dispatch({type: INC_CURSOR})
}
export const addError = (dispatch) => {
  dispatch({type: ADD_ERROR})
}
export const removeError = (dispatch) => {
  dispatch({type: REMOVE_ERROR})
}



