import React from "react";
import { SideBare as Aside, ScoreContainer } from "./styledComponents";

const SideBare = ({ score, accuracy, timer }) => {
  return (
    <Aside>
      <ScoreContainer>
        <div style={{ fontSize: "72px" }}>
          <p>WPM</p>
          <p>{score}</p>
        </div>
        <div style={{ fontSize: "24px", color: 'orange' }}>
          Accuracy: <span>{accuracy}</span>%
        </div>
        <div style={{ fontSize: "72px" }}>
          <p>Timer</p>
          <p style={{color: timer < 11 ? 'red' : '' }} >{timer}</p>
        </div>
      </ScoreContainer>
    </Aside>
  );
};

export default SideBare;
