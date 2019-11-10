export const checkInput = (input='', str='') => {
  if(input.trim() !== str.slice(0, input.length)){
    return false
  }
  return true
}
