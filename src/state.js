import React from "react";
import { Word } from "./component/styledComponents";
const txt = "I'm unstoppable, I'm a Porsche with no brakes";
const formatTxt = txt =>
  txt.split(/\s+/).map((word, i) => <Word key={i}>{word}</Word>);

export const initState = {
  displayText: formatTxt(txt),
  textArr: txt.split(/\s+/),
  input: "",
  errorArr: [],
  cursor: 0
};
