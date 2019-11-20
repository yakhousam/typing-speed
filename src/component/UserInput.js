import React, {useState} from "react";
import styled from "styled-components";
import {
  setInput,
  incrementCursor,
  addErrorTxt,
  // addError,
  // removeError,
  startTimer,
  updateDisplayTxt
} from "../actions";
import { checkInput } from "../utils";

const UserInput = (props) =>  {
  const { dispatch } = props;
  const {
    textArr,
    isTimerStarted,
    timer,
    cursor,
    input,
    errorArr
  } = props.state;
  const handleChange = e => {
    let newErroArr = [...errorArr]
    let newCursor = cursor
    if (timer < 1 || cursor > textArr.length - 1) {
      return;
    }
    if (!isTimerStarted && timer > 0) {
      startTimer({start: true, dispatch});
    }
    let input = e.target.value;
    console.log('input =', input)
    if (!checkInput(input, textArr[cursor])) {
      if (!errorArr.includes(cursor)) {
        // addError({dispatch, error: cursor});
        newErroArr.push(cursor)
      }
    } else {
      if (errorArr.includes(cursor)) {
        // removeError({dispatch, errorArr, error: cursor});
        newErroArr = newErroArr.filter(err => err !== cursor)
      }
    }
    if (input.endsWith(" ")) {
      if (newErroArr.includes(cursor)) {
        addErrorTxt({dispatch, error: { id: cursor, input }});
      }
      incrementCursor({dispatch});
      input = "";
      newCursor++
    }
    setInput({input, dispatch, });
    updateDisplayTxt({dispatch, state: {
      ...props.state, 
      input,
      errorArr: [...newErroArr],
      cursor: newCursor
    }})
  };
  const [isFocus, setIsFocus] = useState(false)
  return <StyledInput 
  type="text" 
  placeholder={!isFocus && timer > 0 ? "Type your text here...!" : ''}
  autoFocus 
  value={input} 
  onChange={handleChange} 
  onFocus={() => {
    setIsFocus(true)
  }}
  onBlur={() => {
    setIsFocus(false)
  } }
  isFocus={isFocus}
  />;
}

const StyledInput = styled.input`
  font-weight: bold;
  width: 400px;
  height: 3em;
  font-size: 22px;
  background: none;
  text-align: center;
  padding-top: 1em;
  
  ${props => props.isFocus ? `
    border: none;
    border-bottom: thin solid green;
  ` : `
    border: thin dashed green;
  `}
`;

export default UserInput;
