import React from "react";
import { SideBare as Aside, Section } from "./styledComponents";

const SideBare = ({score, accuracy}) => {
  return (
    <Aside>
      <Section justify="space-around">
        <div>WPM: {score}</div>
        <div>Accuracy: {accuracy}</div>
      </Section>
    </Aside>
  );
};

export default SideBare;
