import styled from "styled-components";


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



export const StyledTextBox = styled.div`
  font-size: 36px;
  font-family: monospace;
  display: flex;
  flex-wrap: wrap;
  height: ${props => props.height || 'auto'} ;

  overflow: auto;
  background: #eeeff8;
 border:  solid thin black
  
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
  text-decoration: underline;
  color: ${props => {
    if (props.errStyle) {
      return "red";
    }else{
      return "";
    }
  }};
`;

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

export const Button = styled.div`
  font-size: 24px;
  padding: .2em .5em;
  border-radius: 5px;
  color: #fff;
  background: #6148ff;
  border: thin solid #6148ff;

  &:hover{    
    cursor: pointer;
   background: transparent;
    color: #6148ff;
  }
`

