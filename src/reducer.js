import React from "react";
import { Word } from "./styledComponents";
import {
  SET_INPUT,
  UPDATE_DISPLAY_TXT,
  INC_CURSOR,
  SET_ERROR,
  REMOVE_ERROR
} from "./actions";
// import { initState } from "./state";

function formatDisplayTxt(cursor, state) {
  const { errorArr } = state;
  if (cursor === 0) {
    const err = errorArr.includes(0)
    return [
      <Word errStyle={err} selected key={0}>
        {state.textArr[0]}
      </Word>,
      ...state.displayText.slice(1)
    ];
  }
  if (cursor === 1) {
    const err = errorArr.includes(0)
    const err1 = errorArr.includes(1)
    return [
      <Word errStyle={err} key={0}>{state.textArr[0]}</Word>,
      <Word errStyle={err1} selected key={1}>
        {state.textArr[1]}
      </Word>,
      ...state.displayText.slice(2)
    ];
  }
  const err = errorArr.includes(cursor - 1)
  const err1 = errorArr.includes(cursor)
  return [
    ...state.displayText.slice(0, cursor - 1),
    <Word errStyle={err} key={cursor - 1}>{state.textArr[cursor - 1]}</Word>,
    <Word errStyle={err1} selected key={cursor}>
      {state.textArr[cursor]}
    </Word>,
    ...state.displayText.slice(cursor + 1)
  ];
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_INPUT:
      return { ...state, input: action.input };
    case UPDATE_DISPLAY_TXT:
      return {
        ...state,
        displayText: formatDisplayTxt(action.cursor, state)
      };
    case SET_ERROR:
      return {
        ...state,
        errorArr: [...state.errorArr, action.cursor]
      };
    case REMOVE_ERROR:
      return { ...state, errorArr: state.errorArr.filter(el => el !== action.cursor)}
    case INC_CURSOR:
      return { ...state, cursor: state.cursor + 1 };

    default:
      return state;
  }
};

export default reducer;
