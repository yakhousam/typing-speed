import {formatTxt, getDataLocalSorage} from './utils'
import { getRandomWordList } from './wordList'

const wordList = getRandomWordList(60)

export const initState = {
  displayText: formatTxt(wordList),
  textArr: wordList,
  input: "",
  errorArr: [],
  cursor: 0,
  timer: 15,
  isTimerStarted: false,
  score: 0,
  dataChart: getDataLocalSorage(),
 
};
