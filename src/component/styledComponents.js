import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  grid-template-rows: auto;
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
  grid-row: 1;
  padding: 20px;
`;
export const Section = styled.section`
  border: solid thin black;
  padding: 20px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.flexDirection || 'row'}
  justify-content: ${props => props.justify || 'center'} ;
  overflow: auto;
`;

export const TextBox = styled.div`
  font-size: 36px;
  font-family: monospace;
  display: flex;
  flex-wrap: wrap;
  height: ${props => props.height || 'auto'} ;
  
`;

export const UserInput = styled.input`
  font-weight: bold;
  with: 400px;
  height: 3em;
  font-size: 22px;
`;

export const Timer = styled.span`
  font-size: 22px;
  margin-left: 1em;
`

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
