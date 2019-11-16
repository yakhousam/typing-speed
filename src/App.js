import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

import { Grid } from "./component/styledComponents";
import MainPage from "./component/MainPage";
import SideBare from "./component/SideBare";

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
  const [score, setScore] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [timer, setTimer] = useState(60);
  return (
    <>
      <GlobalStyle />
      <Grid>
        <MainPage setScore={setScore} setAccuracy={setAccuracy} setTimer={setTimer} />
        <SideBare score={score} accuracy={accuracy} timer={timer} />
      </Grid>
    </>
  );
}

export default App;
