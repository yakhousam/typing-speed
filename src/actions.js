export const SET_INPUT = "SET_INPUT";
export const UPDATE_DISPLAY_TXT = "UPDATE_DISPLAY_TXT";
export const INC_CURSOR = "INC_CURSOR";
export const ADD_ERROR = "ADD_ERROR";
export const ADD_ERROR_TXT = "ADD_ERROR_TXT";
export const REMOVE_ERROR = "REMOVE_ERROR";
export const RELOAD = "RELOAD";
export const START_TIMER = "START_TIMER";
export const DEC_TIMER = "DEC_TIMER";
export const GAME_OVER = "GAME_OVER";
export const UPDATE_DATA_CHART = "UPDATE_DATA_CHART"


export const setInput = (input, dispatch) => {
  dispatch({ type: SET_INPUT, input });
};
export const updateDisplayTxt = dispatch => {
  dispatch({ type: UPDATE_DISPLAY_TXT });
};
export const incrementCursor = dispatch => {
  dispatch({ type: INC_CURSOR });
};

export const addError = (dispatch, input) => {
  dispatch({ type: ADD_ERROR, input });
};
export const addErrorTxt = (dispatch, error) => {
  dispatch({ type: ADD_ERROR_TXT, error });
};

export const removeError = dispatch => {
  dispatch({ type: REMOVE_ERROR });
};
export const reload = dispatch => {
  dispatch({ type: RELOAD });
};
export const startTimer = (start, dispatch) => {
  dispatch({ type: START_TIMER, start });
};

export const decTimer = dispatch => {
  dispatch({ type: DEC_TIMER });
};
export const gameOver = dispatch => {
  dispatch({ type: GAME_OVER });
};
export const updateDataChart = (data, dispatch) => {
  dispatch({type: UPDATE_DATA_CHART, data})
}

