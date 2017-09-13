/*
  This function checks if a string has been properly enclosed in
  its opening and closing braces/characters
*/
function isClosed(str) {
  const openingCharacter = '^', closingCharacter = '$';
  if (str) {
    let stack = [];
    let characterArray = str.split('');
    let characterArrayLength = characterArray.length;
    for (let i = 0; i < characterArrayLength; i++) {
      if (characterArray[i] === openingCharacter) {
        stack.push(openingCharacter);
      } else if (characterArray[i] === closingCharacter) {
        if (stack.length) {
          stack.pop();
        } else {
          return false;
        }
      }
    }

    return !stack.length;
  } else {
    return true;
  }
}

export { isClosed };