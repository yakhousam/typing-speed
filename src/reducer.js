import {
  SET_INPUT,
  UPDATE_DISPLAY_TXT,
  INC_CURSOR,
  ADD_ERROR,
  REMOVE_ERROR,
  RELOAD
} from "./actions";
import { formatDisplayTxt, formatTxt } from "./utils";

const reducer = (state, action) => {
  console.log(action.type, state.cursor);
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
      return {...state, errorArr:[], cursor:0, displayText: formatTxt(state.textArr.join(' '))}

    default:
      return state;
  }
};

export default reducer;
