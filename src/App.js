import React, { useReducer, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import SideBare from "./component/SideBare";
import Chart from "./component/Chart";
import TextBox from './component/TextBox'
import ToolTip from './component/ToolTip'
import InputContainer from './component/InputContainer'
import {
  Grid,
  Main,
  ChartsContainer,
} from "./component/styledComponents";

import {
  updateDisplayTxt,
  decTimer,
  gameOver,
  updateDataChart,
  getNewTxt
} from "./actions";
import {  saveResultLocalStorage } from "./utils";
import { initState } from "./store";
import reducer from "./reducer";

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  html, body{
    margin: 0;
    padding: 0;
  }
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const {
    input,
    cursor,
    errorArr,
    timer,
    isTimerStarted,
    score,
    dataChart,
    accuracy
  } = state;  

  

  useEffect(() => {
    if (timer > 0 && isTimerStarted) {
      const interval = setInterval(() => {
        decTimer({dispatch});
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer < 1 && isTimerStarted) {
      gameOver({dispatch, state});
    }
  }, [timer, isTimerStarted]);

  useEffect(() => {
    if (timer > 0) {
      updateDisplayTxt({dispatch, state});
    }
  }, [cursor, errorArr, input, timer]);

  useEffect(() => {
    if (timer < 1 && score > 0) {
      const data = saveResultLocalStorage({ score, accuracy });
      console.log("data =", data);
      updateDataChart({data, dispatch});
    }
  }, [score, accuracy, timer]);
 
  return (
    <>
      <GlobalStyle />
      <Grid>
        <SideBare score={score} accuracy={accuracy} timer={timer} />
        <Main>
          <button
            onClick={() => {
              getNewTxt({dispatch, state});
              // updateDisplayTxt({dispatch, state});
            }}
          >
            New text
          </button>
          <TextBox  state={state} dispatch={dispatch} />
          <InputContainer state={state} dispatch={dispatch} />
        </Main>
        
          <ChartsContainer>
            <Chart
              title="WPM"
              data={dataChart.map(d => ({ date: d.date, value: d.score }))}
            />
            <Chart
              title="Accuracy"
              data={dataChart.map(d => ({ date: d.date, value: d.accuracy }))}
            />
          </ChartsContainer>
        
        <ToolTip {...state.toolTip} />
      </Grid>
    </>
  );
}

export default App;
