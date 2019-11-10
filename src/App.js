import React, { useReducer, useEffect } from "react";
import "./App.css";
import { initState } from "./state";
import reducer from "./reducer";
import { setInput, updateDisplayTxt, incrementCursor, setError, removeError } from "./actions";
import {checkInput} from './utils'

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { input, cursor, displayText, textArr, errorArr } = state;
  useEffect(() => {
    updateDisplayTxt(cursor, dispatch);
  }, [cursor, errorArr]);
  return (
    <>
      <div>{displayText}</div>
      <input
        type="text"
        value={input}
        onChange={e => {
          let input = e.target.value;
          if(!checkInput(input, textArr[cursor])){
            console.log('---wrong---')
            if(!errorArr.includes(cursor)){
              setError(cursor, dispatch)
            }
          }else{
            if(errorArr.includes(cursor)){
              removeError(cursor, dispatch)
            }
          }
          if (input.endsWith(' ')){
            incrementCursor(dispatch);
            input = ""
          } 
          setInput(input, dispatch);
        }}
      />
    </>
  );
}

export default App;
