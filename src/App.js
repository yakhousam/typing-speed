import React, { useReducer, useEffect } from "react";
import { createGlobalStyle } from "styled-components";
import Main from "./container/Main";
import SideBare from "./component/SideBare";
import Chart from "./component/Chart";

import ToolTip from "./component/ToolTip";
import { Grid, ChartsContainer } from "./component/styledComponents";

import {
  decTimer,
  gameOver,
  updateDataChart,
  updateScore,
  updateInterval,
  incTimer
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
    interval,
    training
  } = state;

  useEffect(() => {
    // decrement timer and call gameOver when timer=0
    if (!training && timer > 0 && isTimerStarted && !interval) {
      const timerInterval = setInterval(() => {
        decTimer({ dispatch });
      }, 1000);
      updateInterval({ dispatch, interval: timerInterval });
    }
    if (!training && timer < 1 && isTimerStarted) {
      clearInterval(interval);
      updateInterval({ dispatch, interval: undefined });
      gameOver({ dispatch, state });
    }
  }, [timer, isTimerStarted, interval, state, training]);

  useEffect(() => {
    // update score and accuracy
    if ((!training && timer > 0) || (training && isTimerStarted)) {
      const words = cursor - errorArr.filter(el => el !== cursor).length;
      let wpm
      if (!training) {
        wpm =
          words > 0 && timer < initState.timer
            ? (words * initState.timer) / (initState.timer - timer)
            : 0;
      }else{
        wpm = words > 0 && timer > 0 
          ? (words * 60) / (timer)
          : 0;
      }

      const accuracy = calcAccuracy({ score: words, errorArr: errorArr });
      updateScore({ dispatch, accuracy, score: wpm.toFixed(0) });
    }
  }, [cursor, errorArr, timer, training, isTimerStarted]);

  useEffect(() => {
    // save user progress in localstorage
    if (!training && timer < 1 && score > 0 && !isTimerStarted) {
      const data = saveResultLocalStorage({ score, accuracy });
      console.log("data =", data);
      updateDataChart({ data, dispatch });
    }
  }, [score, accuracy, timer, isTimerStarted, training]);

  useEffect(() => {
    if (training && !interval && isTimerStarted) {
      const timerInterval = setInterval(() => {
        incTimer({ dispatch });
      }, 1000);
      updateInterval({ dispatch, interval: timerInterval, training });
    }
  });

  return (
    <>
      <GlobalStyle />
      <Grid>
        <SideBare score={score} accuracy={accuracy} timer={timer} />
        <Main state={state} dispatch={dispatch} />
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
