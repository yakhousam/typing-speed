import React, { useState } from "react";
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

const UserInput = props => {
  const { dispatch } = props;
  const {
    textArr,
    isTimerStarted,
    timer,
    cursor,
    input,
    errorArr,
    training
  } = props.state;
  const handleChange = e => {
    let newErroArr = [...errorArr];
    let newCursor = cursor;
    if ((!training && timer < 1) || cursor > textArr.length - 1) {
      return;
    }
    if (!training && !isTimerStarted && timer > 0) {
      dispatch(startTimer(true));
    }
    if (training && !isTimerStarted) {
      dispatch(startTimer(true));
    }
    let input = e.target.value;
    console.log("input =", input);
    if (!checkInput(input, textArr[cursor])) {
      if (!errorArr.includes(cursor)) {
        // addError({dispatch, error: cursor});
        newErroArr.push(cursor);
      }
    } else {
      if (errorArr.includes(cursor)) {
        // removeError({dispatch, errorArr, error: cursor});
        newErroArr = newErroArr.filter(err => err !== cursor);
      }
    }
    if (input.endsWith(" ")) {
      if (newErroArr.includes(cursor)) {
        dispatch(addErrorTxt({ id: cursor, input }));
      }
      dispatch(incrementCursor());
      input = "";
      newCursor++;
    }
    // dispatch(setInput(input));
    updateDisplayTxt({
      dispatch,
      state: {
        ...props.state,
        input,
        errorArr: [...newErroArr],
        cursor: newCursor
      }
    });
  };
  const [isFocus, setIsFocus] = useState(false);
  return (
    <StyledInput
      type="text"
      placeholder={!isFocus && timer > 0 ? "Type your text here...!" : ""}
      autoFocus
      value={input}
      onChange={handleChange}
      onFocus={() => {
        setIsFocus(true);
      }}
      onBlur={() => {
        setIsFocus(false);
      }}
      isFocus={isFocus}
    />
  );
};

const StyledInput = styled.input`
  width: 400px;
  margin: auto;
  background: transparent;
  text-align: center;
  font-size: 24px;
  padding: 0.2em 0.5em;

  ${props =>
    props.isFocus
      ? `
    border: thin solid transparent;
    border-bottom: thin solid #6148ff;
  `
      : `
    border: thin dashed #6148ff;
  `}
`;

export default UserInput;
