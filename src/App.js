import React, { useReducer, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import SideBare from "./component/SideBare";
import Chart from "./component/Chart";
import TextBox from "./component/TextBox";
import ToolTip from "./component/ToolTip";
import InputContainer from "./component/InputContainer";
import { Grid, Main, ChartsContainer } from "./component/styledComponents";

import {
  decTimer,
  gameOver,
  updateDataChart,
  getNewTxt,
  updateScore,
  updateInterval
} from "./actions";
import { saveResultLocalStorage, calcAccuracy } from "./utils";
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
    timer,
    isTimerStarted,
    score,
    dataChart,
    accuracy,
    cursor,
    errorArr,
    interval
  } = state;

  
  useEffect(() => {
    // decrement timer and call gameOver when timer=0
    if (timer > 0 && isTimerStarted && !interval) {
      const timerInterval = setInterval(() => {
        decTimer({ dispatch });
      }, 1000);
      updateInterval({dispatch, interval: timerInterval});
    }
    if (timer < 1 && isTimerStarted) {
      clearInterval(interval);
      updateInterval({dispatch ,interval: undefined});
      gameOver({ dispatch, state });
    }
  }, [timer, isTimerStarted, interval, state]);

  useEffect(() => {
    // update score and accuracy
    if (timer > 0) {
      const words = cursor - errorArr.filter(el => el !== cursor).length;
      const wpm =
        words > 0 && timer < 15
          ? (words * initState.timer) / (initState.timer - timer)
          : 0;
      const accuracy = calcAccuracy({ score: words, errorArr: errorArr });
      updateScore({ dispatch, accuracy, score: wpm.toFixed(0) });
    }
  }, [cursor, errorArr, timer]);

  useEffect(() => {
    // save user progress in localstorage
    if (timer < 1 && score > 0 && !isTimerStarted ) {
      const data = saveResultLocalStorage({ score, accuracy });
      console.log("data =", data);
      updateDataChart({ data, dispatch });
      console.log(state)
    }
  }, [score, accuracy, timer, isTimerStarted]);

  return (
    <>
      <GlobalStyle />
      <Grid>
        <SideBare score={score} accuracy={accuracy} timer={timer} />
        <Main>
          <button
            onClick={() => {
              clearInterval(interval)
              getNewTxt({ dispatch, state });
            }}
          >
            Get random text
          </button>
          <TextBox state={state} dispatch={dispatch} />
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
