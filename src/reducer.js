import {
  SET_INPUT,
  UPDATE_DISPLAY_TXT,
  INC_CURSOR,
  ADD_ERROR,
  REMOVE_ERROR,
  RELOAD,
  DEC_TIMER,
  START_TIMER,
  GAME_OVER
} from "./actions";
import { formatDisplayTxt } from "./utils";
import {initState} from './state'

const reducer = (state, action) => {
  console.log(action);
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
    case INC_CURSOR:
      return { ...state, cursor: state.cursor + 1 };
    case RELOAD:
      return {...initState}
    case DEC_TIMER:
      return {...state, timer: state.timer - 1}
    case START_TIMER:
      return {...state, isTimerStarted: true}

    default:
      return state;
  }
};

export default reducer;
