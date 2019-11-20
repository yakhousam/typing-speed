import React from "react";
import styled from "styled-components";
import UserInput from "./UserInput";
import { reload } from "../actions";
import reloadImg from "./reload.png";

const InputContainer = ({ state, dispatch }) => {
  return (
    <Section>
     {state.timer > 0 && <UserInput state={state} dispatch={dispatch} />}
      {state.timer < 1 && (
        <ButtonReload
          onClick={() => {
            reload({dispatch, state});
          }}
        />
      )}
    </Section>
  );
};

const Section = styled.section`
  padding: 20px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.flexDirection || "row"}
  justify-content: ${props => props.justify || "center"} ;
  overflow: auto;
  background: #eeeff8;
 border:  solid thin black;

`;

const ButtonReload = styled.div`
  margin-left: 10px;
  background-image: url(${reloadImg});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 50px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;

export default InputContainer;
