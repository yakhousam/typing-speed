import React, { useReducer, useEffect } from "react";
import "./App.css";
import { initState } from "./state";
import reducer from "./reducer";
import {
  setInput,
  updateDisplayTxt,
  incrementCursor,
  addError,
  removeError
} from "./actions";
import { checkInput } from "./utils";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  font-size: 20px;
    font-family: monospace;
  }`;

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { input, cursor, displayText, textArr, errorArr } = state;
  useEffect(() => {
    updateDisplayTxt(dispatch);
  }, [cursor, errorArr, input]);
  return (
    <>
      <GlobalStyle />
      <div>{displayText}</div>
      <input
        type="text"
        value={input}
        onChange={e => {
          let input = e.target.value;
          if (!checkInput(input, textArr[cursor])) {
            console.log("---wrong---");
            if (!errorArr.includes(cursor)) {
              addError(dispatch);
            }
          } else {
            if (errorArr.includes(cursor)) {
              removeError(dispatch);
            }
          }
          if (input.endsWith(" ")) {
            incrementCursor(dispatch);
            input = "";
          }
          setInput(input, dispatch);
        }}
      />
    </>
  );
}

export default App;
