import styled from "styled-components";

export const Word = styled.span`
  margin-right: 0.5em;
  background-color: ${props => (props.selected ? "rgba(0,0,0,0.1)" : "unset")};
  color: ${props => (props.errStyle ? "red" : "inherit")};
`;
