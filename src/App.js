import React, { useReducer, useEffect } from "react";
import "./App.css";
import { initState } from "./state";
import reducer from "./reducer";
import {
  updateDisplayTxt,
} from "./actions";

import {Grid} from './component/styledComponents'
import MainPage from './component/MainPage'
import SideBare from './component/SideBare'

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
  const { input, cursor, errorArr } = state;
  useEffect(() => {
    updateDisplayTxt(dispatch);
  }, [cursor, errorArr, input]);
  
  
  return (
    <Grid>
      <MainPage state={state} dispatch={dispatch} />
     <SideBare />
    </Grid>
  );
}

export default App;
