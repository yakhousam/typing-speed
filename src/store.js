import {formatTxt, getDataLocalSorage} from './utils'
import { getRandomWordList } from './wordList'

const wordList = getRandomWordList(200)

export const initState = {
  displayText: formatTxt(wordList),
  textArr: wordList,
  input: "",
  errorArr: [],
  errorArrTxt:[],
  cursor: 0,
  timer: 15,
  isTimerStarted: false,
  score: 0,
  dataChart: [{score:0, accuracy: 0},...getDataLocalSorage()],
 
};
