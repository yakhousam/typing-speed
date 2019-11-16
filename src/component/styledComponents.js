import styled from "styled-components";
import reload from './reload.png'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 300px minmax(0, 1fr);
  grid-template-rows: 1.5fr 1fr;
  height: 100vh;
  background: #f6f7ff;
`;

export const SideBare = styled.aside`
  grid-column: 1;
  grid-row: 1 ;
  
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
  padding: 20px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  flex-direction: ${props => props.flexDirection || 'row'}
  justify-content: ${props => props.justify || 'center'} ;
  overflow: auto;
  background: #eeeff8;
 border:  solid thin black;

`;

export const TextBox = styled.div`
  font-size: 36px;
  font-family: monospace;
  display: flex;
  flex-wrap: wrap;
  height: ${props => props.height || 'auto'} ;

  overflow: auto;
  background: #eeeff8;
 border:  solid thin black
  
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

  padding: 0 .2em;
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
export const ButtonReload = styled.div`
  margin-left: 10px;
  background-image: url(${reload});
  background-size: 90%;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 50px;
  box-shadow:  0 0  5px rgba(0,0,0,0.5);
  border-radius: 50%;

  &:hover{
    cursor: pointer;
  }
  
`
export const StyledChart = styled.div`

`
export const ChartsContainer = styled.section`
  grid-row: 2;
  grid-column: 1 / span 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #6148ff;
  border-top-left-radius: 200px;
  padding-left: 100px

`
export const ScoreContainer = styled.div`
 height: 100%;  
  background: #6148ff;
  border-bottom-right-radius: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;

  & p{
    margin: 0;
    text-align: center;
    color: #6de576;
  }
`

export const ToolTip = styled.div`
  padding: .2em .5em;
  font-size: 36px;
  background: white;
  border: solid thin black;
  visibility: ${props => props.visible ? 'visible' : 'hidden'}

  position: absolute;
  top: ${props => props.top + 10 + 'px'}
  left: ${props => props.left + 10 + 'px'}
`