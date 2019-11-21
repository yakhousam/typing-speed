import React from "react";
import { Word, Char } from "./component/styledComponents";

export const checkInput = (input = "", str = "") => {
  if (input.trim() !== str.slice(0, input.length)) {
    return false;
  }
  return true;
};

export const formatTxt = wordList =>
  wordList.map((word, i) =>
    i === 0 ? (
      <Word id={i} selected key={i}>
         <Char >
          {word.charAt(0)}
        </Char>
        {word.slice(1)}
      </Word>
    ) : (
      <Word id={i} key={i}>
        {word}
      </Word>
    )
  );

export const calcAccuracy = ({ score, errorArr }) => {
  const calc = 100 - (errorArr.length * 100) / (errorArr.length + score);
  return calc ? calc.toFixed(0) : 100;
};

export const saveResultLocalStorage = ({ score, accuracy }) => {
  const tapingSpeedData = window.localStorage.getItem("tapingSpeedData")
    ? JSON.parse(window.localStorage.getItem("tapingSpeedData"))
    : [];
  const data = {
    date: Date.now(),
    accuracy,
    score
  };
  tapingSpeedData.push(data);
  console.log({ tapingSpeedData });
  window.localStorage.setItem(
    "tapingSpeedData",
    JSON.stringify(tapingSpeedData)
  );
  return data;
};

export const getDataLocalSorage = () => {
  const tapingSpeedData = window.localStorage.getItem("tapingSpeedData")
    ? JSON.parse(window.localStorage.getItem("tapingSpeedData"))
    : [];
  return tapingSpeedData;
};

export const formatDisplayTxt = state => {
  console.log("format text ----");
  const { cursor, errorArr, input, textArr } = state;
   if (cursor > textArr.length -1){
    return [
      ...state.displayText.slice(0, -1),
      <Word
      errStyle={errorArr.includes(textArr.length -1)}
      isCorrect={!errorArr.includes(textArr.length -1)}
      key={textArr.length -1}
      id={textArr.length -1}
      className="last"
    >
      { textArr[textArr.length -1] }
      </Word>
    ]
   }
  let currentWord;
  if (!input) {
    console.log("input is empty", cursor);
    currentWord = (
      <Word
        errStyle={errorArr.includes(cursor)}
        selected
        key={cursor}
        id={cursor}
        className="last"
      >
        <Char >
          {textArr[cursor].charAt(0)}
        </Char>
        {textArr[cursor].slice(1)}
      </Word>
    );
  } else {
    currentWord = (
      <Word
        errStyle={errorArr.includes(cursor)}
        selected
        key={cursor}
        id={cursor}
        className="last"
      >
        <span style={{ color: !errorArr.includes(cursor) ? "green" : "" }}>
          {textArr[cursor].slice(0, input.length )}
        </span>
        <Char >
          {textArr[cursor].charAt(input.length )}
        </Char>
        {textArr[cursor].slice(input.length + 1)}
      </Word>
    );
  }
  if (cursor === 0) {
    return [currentWord, ...state.displayText.slice(1)];
  }
  if (cursor === 1) {
    return [
      <Word
        errStyle={errorArr.includes(0)}
        isCorrect={!errorArr.includes(0)}
        id={0}
        key={0}
      >
        {state.textArr[0]}
      </Word>,
      currentWord,
      ...state.displayText.slice(2)
    ];
  }
  if (cursor < textArr.length) {
    return [
      ...state.displayText.slice(0, cursor - 1),
      <Word
        errStyle={errorArr.includes(cursor - 1)}
        isCorrect={!errorArr.includes(cursor - 1)}
        key={cursor - 1}
        id={cursor - 1}
      >
        {state.textArr[cursor - 1]}
      </Word>,
      currentWord,
      ...state.displayText.slice(cursor + 1)
    ];
  } else {
    return [
      ...state.displayText.slice(0, cursor - 1),
      <Word
        errStyle={errorArr.includes(cursor - 1)}
        isCorrect={!errorArr.includes(cursor - 1)}
        key={cursor - 1}
        id={cursor - 1}
      >
        {state.textArr[cursor - 1]}
      </Word>
    ];
  }
};

export const getOffsetTop = textBoxRef => {
  const nextWord = textBoxRef.current.querySelector(".last");
  if (nextWord) {
    return nextWord.offsetTop;
  } else {
    return textBoxRef.current.querySelector("span").offsetTop;
  }
};
