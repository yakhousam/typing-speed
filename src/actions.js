import { formatTxt, calcAccuracy, formatDisplayTxt } from "./utils";
import { getRandomWordList } from "./wordList";

export const SET_INPUT = "SET_INPUT";
export const UPDATE_DISPLAY_TXT = "UPDATE_DISPLAY_TXT";
export const INC_CURSOR = "INC_CURSOR";
export const ADD_ERROR = "ADD_ERROR";
export const ADD_ERROR_TXT = "ADD_ERROR_TXT";
export const REMOVE_ERROR = "REMOVE_ERROR";
export const RELOAD = "RELOAD";
export const START_TIMER = "START_TIMER";
export const DEC_TIMER = "DEC_TIMER";
export const INC_TIMER = "INC_TIMER";
export const GAME_OVER = "GAME_OVER";
export const UPDATE_DATA_CHART = "UPDATE_DATA_CHART";
export const GET_NEW_TXT = "GET_NEW_TXT";
export const UPDATE_CURRENT_WORD_OFFSET = "UPDATE_CURRENT_WORD_OFFSET";
export const UPDATE_TOOLTIP = "UPDATE_TOOLTIP";
export const UPDATE_SCORE = "UPDATE_SCORE";
export const UPDATE_INTERVAL = "UPDATE_INTERVAL";
export const TOGGLE_TRAINING = "TOGGLE_TRAINING";

export const setInput = input => ({ type: SET_INPUT, input });

export const updateDisplayTxt = ({ dispatch, state }) => {
  const displayText = formatDisplayTxt(state);
  dispatch({
    type: UPDATE_DISPLAY_TXT,
    update: { errorArr: state.errorArr, displayText, input: state.input }
  });
};
export const incrementCursor = () => ({ type: INC_CURSOR });

export const addError = ({ dispatch, error }) => {
  dispatch({ type: ADD_ERROR, error });
};
export const addErrorTxt = error  => ({ type: ADD_ERROR_TXT, error })

export const removeError = ({ dispatch, errorArr, error }) => {
  const newErrorArr = errorArr.filter(el => el !== error);
  dispatch({ type: REMOVE_ERROR, newErrorArr });
};
export const reload = ({ dispatch, state }) => {
  const displayText = formatTxt(state.textArr);
  dispatch({ type: RELOAD, displayText });
};
export const startTimer = (start) => ({ type: START_TIMER, start });

export const decTimer = ({ dispatch }) => {
  dispatch({ type: DEC_TIMER });
};
export const incTimer = ({ dispatch }) => {
  dispatch({ type: INC_TIMER });
};
export const gameOver = ({ dispatch, state }) => {
  const x =
    state.cursor - state.errorArr.filter(el => el !== state.cursor).length;
  const score = x > 0 ? x : 0;
  const errorArr = state.errorArr.filter(el => el !== state.cursor);
  const accuracy = calcAccuracy({ score, errorArr });
  const update = {
    // cursor: 0,
    isTimerStarted: false,
    currentWordOffsetTop: 0,
    input: "",
    displayText: [
      ...state.displayText.slice(0, state.cursor),
      ...formatTxt(state.textArr).slice(state.cursor)
    ],
    timer: state.training ? state.timer : 0,
    score: state.training ? state.score : score,
    errorArr,
    accuracy
  };
  dispatch({ type: GAME_OVER, update });
};
export const updateDataChart = ({ data, dispatch }) => {
  dispatch({ type: UPDATE_DATA_CHART, data });
};

export const getNewTxt = ({ dispatch }) => {
  const wordList = getRandomWordList(200);
  const displayText = formatTxt(wordList);
  const textArr = wordList;
  dispatch({ type: GET_NEW_TXT, displayText, textArr });
};
export const updateCurrentWordOffset = ({ dispatch, offset }) => {
  dispatch({ type: UPDATE_CURRENT_WORD_OFFSET, offset });
};
export const updateToolTip = ({ dispatch, toolTip }) => {
  dispatch({ type: UPDATE_TOOLTIP, toolTip });
};
export const updateScore = ({ dispatch, accuracy, score }) => {
  dispatch({ type: UPDATE_SCORE, accuracy, score });
};

export const updateInterval = ({ dispatch, interval }) => {
  dispatch({ type: UPDATE_INTERVAL, interval });
};
export const toggleTraining = ({ dispatch, state }) => {
  const displayText = formatTxt(state.textArr);
  dispatch({ type: TOGGLE_TRAINING, displayText });
};
