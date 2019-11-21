import React from "react";
import styled from "styled-components";
import TextBox from "../component/TextBox";
import InputContainer from "../container/InputContainer";
import { getNewTxt } from "../actions";
import { Button } from "../component/styledComponents";

const Main = ({ state, dispatch }) => {
  return (
    <StyledMain>
      <ButtonContainer>
        <ButtonGetText
          onClick={() => {
            clearInterval(state.interval);
            getNewTxt({ dispatch, state });
          }}
        >
          Get random text
        </ButtonGetText>
      </ButtonContainer>
      <TextBox state={state} dispatch={dispatch} />
      <InputContainer state={state} dispatch={dispatch} />
    </StyledMain>
  );
};

const StyledMain = styled.main`
  grid-column: 2;
  grid-row: 1;
  padding: 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonGetText = styled(Button)`
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`

export default Main;
