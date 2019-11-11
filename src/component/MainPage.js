import React, { useReducer, useEffect } from "react";
import {
  Section,
  UserInput,
  TextBox,
  Main,
  ButtonReload
} from "./styledComponents";

import {
  setInput,
  incrementCursor,
  addError,
  removeError,
  reload,
  updateDisplayTxt,
  decTimer,
  startTimer
} from "../actions";
import { checkInput } from "../utils";
import { initState } from "../state";
import reducer from "../reducer";

const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const { input, cursor, displayText, textArr, errorArr, timer, start } = state;
  const handleChange = e => {
    if(timer < 1){
      setInput("", dispatch)
      return
    }
    if (!start && timer > 0) {
      startTimer(true, dispatch);
    }
    let input = e.target.value;
    if (!checkInput(input, textArr[cursor])) {
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
  };
  useEffect(() => {
    updateDisplayTxt(dispatch);
  }, [cursor, errorArr, input]);

  useEffect(() => {
    if (timer > 0 && start) {
      const interval = setInterval(() => {
        decTimer(dispatch);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer < 1) {
      startTimer(false, dispatch);
    }
  }, [timer, start]);

  return (
    <Main>
      <Section>
        <TextBox>{displayText}</TextBox>
      </Section>
      <Section>
        <UserInput type="text" value={input} onChange={handleChange} />
        {timer < 1 && (
          <ButtonReload
            onClick={() => {
              reload(dispatch);
            }}
          >
            Reload
          </ButtonReload>
        )}
        {timer > 0 && <span>{timer}</span>}
      </Section>
      {timer < 1 && (
        <Section>
          <div>
            WPM: {errorArr.length ? cursor - errorArr.length + 1 : cursor}
          </div>
          <div>
            ERR: {errorArr.length}
          </div>
        </Section>
      )}
    </Main>
  );
};

export default MainPage;
