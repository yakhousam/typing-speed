import {
  SET_INPUT,
  UPDATE_DISPLAY_TXT,
  INC_CURSOR,
  ADD_ERROR,
  ADD_ERROR_TXT,
  REMOVE_ERROR,
  RELOAD,
  DEC_TIMER,
  START_TIMER,
  GAME_OVER,
  UPDATE_DATA_CHART,
  GET_NEW_TXT,
  UPDATE_CURRENT_WORD_OFFSET
} from "./actions";

import { formatDisplayTxt, formatTxt, calcAccuracy } from "./utils";
import { initState } from "./store";
import { getRandomWordList } from './wordList'

const reducer = (state, action) => {
  if (action.type === GAME_OVER) {
    console.log(state);
  }
    //  console.log(action.type);
  // if(![DEC_TIMER, UPDATE_DISPLAY_TXT, SET_INPUT].includes(action.type)){
  // }
  switch (action.type) {
    case SET_INPUT:
      return { ...state, input: action.input };
    case UPDATE_DISPLAY_TXT:
      return {
        ...state,
        displayText: formatDisplayTxt(state)
      };
    case ADD_ERROR:
      return {
        ...state,
        errorArr: [...state.errorArr, state.cursor]        
      };
    case REMOVE_ERROR:
      return {
        ...state,
        errorArr: state.errorArr.filter(el => el !== state.cursor)
      };
    case ADD_ERROR_TXT:
      return {
        ...state,
        errorArrTxt: [...state.errorArrTxt, action.error]
      }
    case INC_CURSOR:
      return { ...state, cursor: state.cursor + 1 };
    case RELOAD:
      return { ...initState, displayText: formatTxt(state.textArr), textArr: [...state.textArr], dataChart: [...state.dataChart] };
    case DEC_TIMER:
      return { ...state, timer: state.timer - 1 };
    case START_TIMER:
      return { ...state, isTimerStarted: true };
    case GAME_OVER:
      const x = state.cursor - state.errorArr.filter(el => el !== state.cursor).length;
      const score = x > 0 ? x : 0;
      const errorArr = state.errorArr.filter(el => el !== state.cursor);
      return {
        ...state,
        isTimerStarted: false,
        currentWordOffsetTop: 0,
        input: "",
        displayText: [
          ...state.displayText.slice(0, state.cursor),
          ...formatTxt(state.textArr).slice(state.cursor)
        ],
        score,
        errorArr,
        accuracy: calcAccuracy({score, errorArr})
      };
    case UPDATE_DATA_CHART:
      return{...state, dataChart: [...state.dataChart, action.data]}
    case GET_NEW_TXT:
      const wordList = getRandomWordList(200)
      return {...state, displayText: formatTxt(wordList), textArr: wordList }
    case UPDATE_CURRENT_WORD_OFFSET:
      return {...state, currentWordOffsetTop: action.offset }

    default:
      return state;
  }
};

export default reducer;
