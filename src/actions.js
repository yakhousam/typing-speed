export const SET_INPUT = "SET_INPUT"
export const UPDATE_DISPLAY_TXT = "UPDATE_DISPLAY_TXT"
export const INC_CURSOR = "INC_CURSOR"
export const SET_ERROR = "SET_ERROR"
export const REMOVE_ERROR = "REMOVE_ERROR"

export const setInput = (input, dispatch) => {
  dispatch({type: SET_INPUT, input})
}
export const updateDisplayTxt = (cursor, dispatch) => {
  dispatch({type: UPDATE_DISPLAY_TXT, cursor})
}
export const incrementCursor = (dispatch) => {
  dispatch({type: INC_CURSOR})
}
export const setError = (cursor, dispatch) => {
  dispatch({type: SET_ERROR, cursor})
}
export const removeError = (cursor, dispatch) => {
  dispatch({type: REMOVE_ERROR, cursor})
}



