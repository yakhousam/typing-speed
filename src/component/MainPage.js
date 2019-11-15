import React, { useReducer, useEffect, useRef, useState } from "react";
import Chart from "./Chart";
import {
  Section,
  UserInput,
  TextBox,
  Main,
  ButtonReload,
  Timer
} from "./styledComponents";

import {
  setInput,
  incrementCursor,
  addError,
  removeError,
  reload,
  updateDisplayTxt,
  decTimer,
  startTimer,
  gameOver,
  updateDataChart
} from "../actions";
import {
  checkInput,
  calcAccuracy,
  saveResultLocalStorage,
  getOffsetTop
} from "../utils";
import { initState } from "../store";
import reducer from "../reducer";

const MainPage = () => {
  const [state, dispatch] = useReducer(reducer, initState);
  const sectionText = useRef();
  const {
    input,
    cursor,
    displayText,
    textArr,
    errorArr,
    timer,
    isTimerStarted,
    score,
    dataChart
  } = state;
  const handleChange = e => {
    if (timer < 1 || cursor > textArr.length - 1) {
      return;
    }

    if (!isTimerStarted && timer > 0) {
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
  const [offsetTop, setOffsetTop] = useState();
  useEffect(() => {
    if (cursor === 0) {
      setOffsetTop(getOffsetTop(sectionText));
    } else {
      const offset = getOffsetTop(sectionText, offsetTop);
      if (offset > offsetTop) {
        setOffsetTop(offset);
      }
    }
  }, [cursor, sectionText, offsetTop, timer]);

  useEffect(() => {
    if (timer > 0) {
      updateDisplayTxt(dispatch);
    }
  }, [cursor, errorArr, input, timer]);

  useEffect(() => {
    if (timer > 0 && isTimerStarted) {
      const interval = setInterval(() => {
        decTimer(dispatch);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer < 1 && isTimerStarted) {
      gameOver(dispatch);
    }
  }, [timer, isTimerStarted]);

  useEffect(() => {
    if (timer < 1 && score > 0) {
      const data = saveResultLocalStorage({ score, errorArr });
      console.log("data =", data);
      updateDataChart(data, dispatch);
    }
  }, [score, errorArr, timer]);
  useEffect(() => {
    sectionText.current.scroll(0, 0);
  },[]);

  return (
    <Main>
      <Section ref={sectionText}>
        <TextBox height="3em">{displayText}</TextBox>
      </Section>
      <Section>
        <UserInput
          type="text"
          autoFocus
          value={input}
          onChange={handleChange}
        />
        {timer < 1 && (
          <ButtonReload
            onClick={() => {
              reload(dispatch);
              sectionText.current.scroll({
                top: 0,
                left: 0,
                behavior: "smooth"
              });
            }}
          >
            Reload
          </ButtonReload>
        )}
        {timer > 0 && <Timer>{timer}</Timer>}
      </Section>
      {true && (
        <>
          <Section justify="space-around">
            <div>WPM: {score}</div>
            <div>Accuracy: {calcAccuracy({ score, errorArr })}</div>
            <div>ERR: {errorArr.length}</div>
          </Section>
          <Chart
            title="WPM"
            data={dataChart.map(d => ({ date: d.date, value: d.score }))}
          />
          <Chart
            title="Accuracy"
            data={dataChart.map(d => ({ date: d.date, value: d.accuracy }))}
          />
        </>
      )}
    </Main>
  );
};

export default MainPage;
