import React, {useState} from "react";
import "./App.css";

import { Grid } from "./component/styledComponents";
import MainPage from "./component/MainPage";
import SideBare from "./component/SideBare";


function App() {
const [score, setScore] = useState(0)
const [accuracy, setAccuracy] = useState(100)
  return (
    <Grid>
      <MainPage setScore={setScore} setAccuracy={setAccuracy} />
      <SideBare score={score} accuracy={accuracy} />
    </Grid>
  );
}

export default App;
