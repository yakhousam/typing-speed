import React from "react";
import { Section, UserInput, TextBox, Main, ButtonReload } from "./styledComponents";

import { setInput, incrementCursor, addError, removeError, reload } from "../actions";
import { checkInput } from "../utils";

const MainPage = ({ state, dispatch }) => {
  const { input, cursor, displayText, textArr, errorArr } = state;
  const handleChange = e => {
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

  return (
    <Main>
      <Section>
        <TextBox>{displayText}</TextBox>
      </Section>
      <Section>
        <UserInput type="text" value={input} onChange={handleChange} />
        <ButtonReload onClick={() => {
          reload(dispatch)
        }
        }>Reload</ButtonReload>
      </Section>
    </Main>
  );
};

export default MainPage;
