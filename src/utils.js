import React from "react";
import { Word, Char } from "./component/styledComponents";

export const checkInput = (input = "", str = "") => {
  if (input.trim() !== str.slice(0, input.length)) {
    return false;
  }
  return true;
};

export const formatDisplayTxt = state => {
  const { cursor, errorArr, input, textArr } = state;
  if (cursor > textArr.length) return state.displayText;
  let currentWord;
  if (!input) {
    currentWord = (
      <Word errStyle={errorArr.includes(cursor)} selected key={cursor}>
        {textArr[cursor]}
      </Word>
    );
  } else {
    currentWord = (
      <Word errStyle={errorArr.includes(cursor)} selected key={cursor}>
        {textArr[cursor].slice(0, input.length - 1)}
        <Char>{textArr[cursor].charAt(input.length - 1)}</Char>
        {textArr[cursor].slice(input.length)}
      </Word>
    );
  }
  if (cursor === 0) {
    return [currentWord, ...state.displayText.slice(1)];
  }
  if (cursor === 1) {
    return [
      <Word errStyle={errorArr.includes(0)} key={0}>
        {state.textArr[0]}
      </Word>,
      currentWord,
      ...state.displayText.slice(2)
    ];
  }
  return [
    ...state.displayText.slice(0, cursor - 1),
    <Word errStyle={errorArr.includes(cursor - 1)} key={cursor - 1}>
      {state.textArr[cursor - 1]}
    </Word>,
    currentWord,
    ...state.displayText.slice(cursor + 1)
  ];
};
