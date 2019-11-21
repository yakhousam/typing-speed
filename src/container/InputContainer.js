import React from "react";
import styled from "styled-components";
import UserInput from "../component/UserInput";
import { reload, toggleTraining } from "../actions";
// import reloadImg from "./reload.png";
import { Button } from "../component/styledComponents";

const InputContainer = ({ state, dispatch }) => {
  return (
    <Section>
      {!state.training && state.timer > 0 && <UserInput state={state} dispatch={dispatch} />}
      {state.training && state.cursor <= state.textArr.length -1 && <UserInput state={state} dispatch={dispatch} />}

      {!state.training && state.timer < 1 && (
        <ButtonReload
          onClick={() => {
            reload({ dispatch, state });
          }}
        >
          reload
        </ButtonReload>
      )}
       {state.training && !state.interval && state.timer > 0 && (
        <ButtonReload
          onClick={() => {
            reload({ dispatch, state });
          }}
        >
          reload
        </ButtonReload>
      )}
      <ToggleButton
        training={state.training}
        onClick={() => {
          toggleTraining({ dispatch, state });
        
        }}
      >
        {!state.training ? (
          <div className="toggle-test">Test</div>
        ) : (
          <div className="toogle-training">Training</div>
        )}
      </ToggleButton>
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

const ButtonReload = styled(Button)`
  text-transform: uppercase;
`;

const ToggleButton = styled.div`
  width: 150px;
  height: 2em;
  font-size: 16px;
  margin: 0 20px;
  border: solid thin black;
  display: flex;
  align-items: center;
  background: ${props => (props.training ? "#00b3b4" : "#f2395a")};
  color: white;
  cursor: pointer;

  .toggle-test {
    background: white;
    color: #f2395a;
    padding: 0.2em 0.5em;
  }
  .toogle-training {
    margin-left: auto;
    background: white;
    color: #00b3b4;
    padding: 0.2em 0.5em;
  }
`;

export default InputContainer;
