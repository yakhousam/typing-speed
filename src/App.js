import React from "react";
import "./App.css";

import { Grid } from "./component/styledComponents";
import MainPage from "./component/MainPage";
import SideBare from "./component/SideBare";

function App() {
  return (
    <Grid>
      <MainPage />
      <SideBare />
    </Grid>
  );
}

export default App;
