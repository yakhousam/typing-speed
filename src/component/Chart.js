import React, { useEffect, useRef } from "react";
import { Section } from "./styledComponents";
import * as d3 from "d3";

const Chart = ({ data, title }) => {
  const svgRef = useRef();
  useEffect(() => {
    d3.select(svgRef.current).select('svg').remove()
    const margin = { top: 20, right: 30, bottom: 30, left: 60 },
      width = 860 - margin.left - margin.right,
      height = 200 - margin.top - margin.bottom;

    const svg = d3
      .select(svgRef.current)      
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let x = d3
      .scaleLinear()
      .domain([0, data.length])
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

    // Add Y axis
    let y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function(d) {
          return +d.value;
        })
      ])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x(function(d, i) {
            return x(i);
          })
          .y(function(d) {
            return y(d.value);
          })
      );
      svg.append("text")
      .attr("x",  (- height / 2))             
      .attr("y",  -30)
      .attr('transform', 'rotate(-90)') 
      .style("font-size", "16px")
      .style('text-anchor', 'middle') 
      .text(title);


  }, [data, title]);

  return <Section ref={svgRef} />;
};

export default Chart;
