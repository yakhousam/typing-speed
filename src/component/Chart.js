import React, { useEffect, useRef } from "react";
import { Section, Svg } from "./styledComponents";
import * as d3 from "d3";

const Chart = ({ data }) => {
  useEffect(() => {
    d3.selectAll("svg").remove();
    var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;


    const svg = d3.select("#svg")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  

          var x = d3.scaleTime()
          .domain(d3.extent(data, function(d) { return d.date; }))
          .range([ 0, width ]);
        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));
    
        // Add Y axis
        var y = d3.scaleLinear()
          .domain([0, d3.max(data, function(d) { return +d.score; })])
          .range([ height, 0 ]);
        svg.append("g")
          .call(d3.axisLeft(y));
    
        // Add the line
        svg.append("path")
          .datum(data)
          .attr("fill", "none")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("d", d3.line()
            .x(function(d) { return x(d.date) })
            .y(function(d) { return y(d.score) })
            )
    
  }, [data]);

  return (
    <Section id="svg">
      {/* <h1>date: {}</h1> */}
      {/* <Svg id="svg" width="500" height="300" /> */}
      {/* {data.map((el, i) => (
        <ul key={i}>
          <li>date: {new Date(el.date).toLocaleString()}</li>
          <li>WPM: {el.score}</li>
          <li>Accuracy: {el.accuracy}</li>
        </ul>
      ))} */}
    </Section>
  );
};

export default Chart;
