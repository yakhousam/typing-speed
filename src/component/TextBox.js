import React, { useEffect, useRef } from "react";
import { StyledTextBox } from "./styledComponents";
import { updateToolTip, updateCurrentWordOffset } from "../actions";
import { getOffsetTop } from "../utils";

function TextBox(props) {
  const {
    toolTip,
    errorArrTxt,
    errorArr,
    input,
    currentWordOffsetTop,
    cursor,
    displayText
  } = props.state;
  const { dispatch } = props;
  const textBoxRef = useRef();
  useEffect(() => {
    if (cursor === 0) {
      textBoxRef.current.scroll(0, 0);
    }
  }, [cursor]);
  useEffect(() => {
    if (input === "") {
      const offset = getOffsetTop(textBoxRef);
      if (offset > currentWordOffsetTop) {
        if (currentWordOffsetTop > 0) {
          textBoxRef.current.scroll({
            top: textBoxRef.current.scrollTop + (offset - currentWordOffsetTop),
            behavior: "smooth"
          });
        }
        updateCurrentWordOffset({dispatch, offset});
      }
    }
  }, [input, currentWordOffsetTop, dispatch]);
  return (
    <StyledTextBox
      id="textBox"
      ref={textBoxRef}
      height="5em"
      onMouseOut={() => {
        updateToolTip({dispatch, toolTip:{ ...toolTip, txt: "", visible: false }});
      }}
      onMouseOver={e => {
        const { id } = e.target;
        const error = errorArrTxt.find(el => el.id === +id);
        if (error) {
          updateToolTip({dispatch,toolTip: {
            ...toolTip,
            visible: true,
            txt: error.input
          }});
        } else if (errorArr.includes(+id)) { 
          updateToolTip({dispatch, toolTip:{
            ...toolTip,
            visible: true,
            txt: ""
          }});
        }
      }}
      onMouseMove={e => {
        const left = e.clientX;
        const top = e.clientY;
        if (toolTip.visible) {
          updateToolTip({dispatch, toolTip: { ...toolTip, left, top }});
        }
      }}
    >
      {displayText}
    </StyledTextBox>
  );
}

export default TextBox;
