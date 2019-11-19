import { formatTxt, getDataLocalSorage } from "./utils";
import { getRandomWordList } from "./wordList";

const wordList = getRandomWordList(200);

export const initState = {
  displayText: formatTxt(wordList),
  textArr: wordList,
  input: "",
  errorArr: [],
  errorArrTxt: [],
  cursor: 0,
  timer: 15,
  isTimerStarted: false,
  score: 0,
  dataChart: [ ...getDataLocalSorage()],
  accuracy: 100,
  currentWordOffsetTop: 0,
  toolTip: {
    visible: false,
    top: 0,
    left: 0,
    txt: ""
  }
};
