import {formatTxt, getDataLocalSorage} from './utils'

const txt = "I'm unstoppable, I'm a Porsche with no brakes";

export const initState = {
  displayText: formatTxt(txt),
  textArr: txt.split(/\s+/),
  input: "",
  errorArr: [],
  cursor: 0,
  timer: 10,
  isTimerStarted: false,
  score: 0,
  dataChart: getDataLocalSorage()
};
