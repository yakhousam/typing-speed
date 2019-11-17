import React from "react";
import styled from "styled-components";

const ToolTip = (props ) => {
  return <StyledToolTip {...props}>{props.txt || '" "'}</StyledToolTip>;
};

const StyledToolTip = styled.div`
  padding: .2em .5em;
  font-size: 36px;
  background: white;
  border: solid thin black;
  visibility: ${props => (props.visible ? "visible" : "hidden")}

  position: absolute;
  top: ${props => props.top + 10 + "px"}
  left: ${props => props.left + 10 + "px"}
`;

export default ToolTip;
