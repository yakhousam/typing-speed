import * as actionsTypes from "./actions";

import { initState } from "./store";

const reducer = (state, action) => {
  if (action.type === actionsTypes.GAME_OVER) {
    console.log(state);
  }
  if (![actionsTypes.DEC_TIMER].includes(action.type)) {
    //  console.log(state)
    console.log(action.type);
  }
  switch (action.type) {
    case actionsTypes.SET_INPUT:
      return { ...state, input: action.input };
    case actionsTypes.UPDATE_DISPLAY_TXT:
      return {
        ...state,
        ...action.update
      };
    case actionsTypes.ADD_ERROR:
      return {
        ...state,
        errorArr: [...state.errorArr, action.error]
      };
    case actionsTypes.REMOVE_ERROR:
      return {
        ...state,
        errorArr: [...action.newErrorArr]
      };
    case actionsTypes.ADD_ERROR_TXT:
      return {
        ...state,
        errorArrTxt: [...state.errorArrTxt, action.error]
      };
    case actionsTypes.INC_CURSOR:
      return { ...state, cursor: state.cursor + 1 };
    case actionsTypes.RELOAD:
      return {
        ...initState,
        displayText: action.displayText,
        textArr: [...state.textArr],
        dataChart: [...state.dataChart]
      };
    case actionsTypes.DEC_TIMER:
      return { ...state, timer: state.timer - 1 };
    case actionsTypes.INC_TIMER:
      return { ...state, timer: state.timer + 1 };
    case actionsTypes.START_TIMER:
      return { ...state, isTimerStarted: true };
    case actionsTypes.GAME_OVER:
      return {
        ...state,
        ...action.update
      };
    case actionsTypes.UPDATE_DATA_CHART:
      return { ...state, dataChart: [...state.dataChart, action.data] };
    case actionsTypes.GET_NEW_TXT:
      return {
        ...initState,
        displayText: action.displayText,
        textArr: action.textArr,
        dataChart: [...state.dataChart]
      };
    case actionsTypes.UPDATE_CURRENT_WORD_OFFSET:
      return { ...state, currentWordOffsetTop: action.offset };
    case actionsTypes.UPDATE_TOOLTIP:
      return { ...state, toolTip: { ...state.toolTip, ...action.toolTip } };
    case actionsTypes.UPDATE_SCORE:
      return { ...state, score: action.score, accuracy: action.accuracy };
    case actionsTypes.UPDATE_INTERVAL:
      return { ...state, interval: action.interval };
    case actionsTypes.TOGGLE_TRAINING:
      return { ...state, training: !state.training, timer: !state.training ? 0 : initState.timer}

    default:
      return state;
  }
};

export default reducer;
