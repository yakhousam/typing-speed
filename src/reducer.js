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
import { initState } from "./state";

const reducer = (state, action) => {
  if (action.type === GAME_OVER) {
    console.log(state);
  }
  console.log(action.type);
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
      return { ...initState };
    case DEC_TIMER:
      return { ...state, timer: state.timer - 1 };
    case START_TIMER:
      return { ...state, isTimerStarted: true };
    case GAME_OVER:
      const x = state.cursor - state.errorArr.length;
      return {
        ...state,
        isTimerStarted: false,
        input: "",
        displayText: [
          ...state.displayText.slice(0, state.cursor),
          ...initState.displayText.slice(state.cursor)
        ],
        score: x > 0 ? x : 0,
        errorArr:
          state.errorArr[state.errorArr.length - 1] === state.cursor
            ? state.errorArr.slice(0, -1)
            : state.errorArr
      };

    default:
      return state;
  }
};

export default reducer;
