import React from "react";
import styled from "styled-components";
import {
  setInput,
  incrementCursor,
  addError,
  addErrorTxt,
  removeError,
  startTimer
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
    if (timer < 1 || cursor > textArr.length - 1) {
      return;
    }
    if (!isTimerStarted && timer > 0) {
      startTimer({start: true, dispatch});
    }
    let input = e.target.value;
    if (!checkInput(input, textArr[cursor])) {
      if (!errorArr.includes(cursor)) {
        addError({dispatch, error: cursor});
      }
    } else {
      if (errorArr.includes(cursor)) {
        removeError({dispatch, errorArr, error: cursor});
      }
    }
    if (input.endsWith(" ")) {
      if (errorArr.includes(cursor)) {
        addErrorTxt({dispatch, error: { id: cursor, input }});
      }
      incrementCursor({dispatch});
      input = "";
    }
    setInput({input, dispatch});
  };
  return <StyledInput type="text" autoFocus value={input} onChange={handleChange} />;
}

const StyledInput = styled.input`
  font-weight: bold;
  with: 400px;
  height: 3em;
  font-size: 22px;
`;

export default UserInput;
