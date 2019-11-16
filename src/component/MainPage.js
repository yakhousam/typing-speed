import React, { useReducer, useEffect, useRef, useState } from "react";
import Chart from "./Chart";
import {
  Section,
  UserInput,
  TextBox,
  Main,
  ButtonReload,
  Timer,
  ChartsContainer,
  ToolTip
} from "./styledComponents";

import {
  setInput,
  incrementCursor,
  addError,
  addErrorTxt,
  removeError,
  reload,
  updateDisplayTxt,
  decTimer,
  startTimer,
  gameOver,
  updateDataChart,
  getNewTxt
} from "../actions";
import {
  checkInput,
  calcAccuracy,
  saveResultLocalStorage,
  getOffsetTop
} from "../utils";
import { initState } from "../store";
import reducer from "../reducer";

const MainPage = ({ setScore, setAccuracy, setTimer }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const [offsetTop, setOffsetTop] = useState(0);
  const [toolTip, setToolTip] = useState({
    visible: false,
    top: 0,
    left: 0,
    txt: ""
  });
  const textBoxRef = useRef();
  const {
    input,
    cursor,
    displayText,
    textArr,
    errorArr,
    errorArrTxt,
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
        addError(dispatch, input);
      }
    } else {
      if (errorArr.includes(cursor)) {
        removeError(dispatch);
      }
    }
    if (input.endsWith(" ")) {
      if (errorArr.includes(cursor)) {
        addErrorTxt(dispatch, { id: cursor, input });
      }
      incrementCursor(dispatch);
      input = "";

      const offset = getOffsetTop(textBoxRef);
      if (offset > offsetTop) {
        if (offsetTop > 0) {
          textBoxRef.current.scroll({
            top: textBoxRef.current.scrollTop + (offset - offsetTop),
            behavior: "smooth"
          });
        }
        setOffsetTop(offset);
      }
    }
    setInput(input, dispatch);
  };

  useEffect(() => {
    if (timer > 0) {
      updateDisplayTxt(dispatch);
      setTimer(timer);
    }
  }, [cursor, errorArr, input, timer, setTimer]);

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
      setScore(score);
      setAccuracy(calcAccuracy({ score, errorArr }));
      setTimer(timer);
    }
  }, [score, errorArr, timer, setScore, setAccuracy, setTimer]);
  useEffect(() => {
    textBoxRef.current.scroll(0, 0);
  }, []);

  return (
    <>
      <Main>
        <button
          onClick={() => {
            getNewTxt(dispatch);
          }}
        >
          New text
        </button>
        <TextBox
          id="textBox"
          ref={textBoxRef}
          height="5em"
          onMouseOut={() => {
            setToolTip({ ...toolTip, visible: false });
          }}
          onMouseOver={e => {
            const { id = 20000 } = e.target;
            const error = errorArrTxt.find(el => el.id === +id);
            if (error) {
              setToolTip({
                ...toolTip,
                visible: true,
                txt: error.input
              });
            }
          }}
          onMouseMove={e => {
            const left = e.clientX;
            const top = e.clientY;
            if (toolTip.visible) {
              setToolTip({ ...toolTip, left, top });
            }
          }}
        >
          {displayText}
        </TextBox>
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
                setScore(0);
                setAccuracy(100);
                textBoxRef.current.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth"
                });
              }}
            />
          )}
        </Section>
      </Main>
      {true && (
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
      )}
      <ToolTip {...toolTip}>{toolTip.txt}</ToolTip>
    </>
  );
};

export default MainPage;
