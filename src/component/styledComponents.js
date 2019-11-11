import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  grid-template-rows: 80px auto;
  min-height: 100vh;
`;

export const SideBare = styled.aside`
  grid-column: 1;
  grid-row: 1 / span 2;
  background: grey;
`;

export const Header = styled.header`
  grid-column: 2;
  grid-row: 1;
`;
export const Main = styled.main`
  grid-column: 2;
  grid-row: 2;
  padding: 20px;
`;
export const Section = styled.section`
  border: solid thin black;
  padding: 20px;
  margin: 30px 0;
`;

export const TextBox = styled.div`
  font-size: 36px;
  display: flex;
  flex-wrap: wrap;
`;

export const UserInput = styled.input`
  font-weight: bold;
`;

export const Word = styled.span`
  margin-right: 0.5em;
  background-color: ${props => (props.selected ? "rgba(0,0,0,0.1)" : "unset")};
  color: ${props => {
    if (props.errStyle) {
      return "red";
    }
    if (props.isCorrect) {
      return "green";
    }
    return "inherit";
  }};
`;

export const Char = styled.span`
  font-weight: bold;
  color: ${props => {
    if (props.errStyle) {
      return "red";
    }else{
      return "green";
    }
  }};
`;
export const ButtonReload = styled.button`

`