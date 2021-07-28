class Programs {
  constructor() {
  }

  pattern1(number) {
    function expectedOutput() {
      return {
        type: 'expectedOutput',
        input: 3,
        output: '1 11.22 111.222.333'
      }
    }

    function actualOutput(number) {
      let result = ' ';
      const delimeter = '.';
      const tempArr = [];
      for (let i = 1; i <= number; i++) {
        tempArr.push(i);
        result = result + ' ' + combineRepeatCharacterWithDelimeter(tempArr, i);
      }

      function repeatSameCharacter(repeatCount, character) {
        let bufferCharacter = ' ';
        for (let j = 1; j <= repeatCount; j++) {
          bufferCharacter = bufferCharacter + '' + character;
        }
        return bufferCharacter;
      }

      function combineRepeatCharacterWithDelimeter(tempArr, i) {
        let tempJoin = ' ';
        for (let k = 0; k < tempArr.length; k++) {

          tempJoin = (tempJoin == ' ') ? (tempJoin + repeatSameCharacter(i, tempArr[k])) : (tempJoin + delimeter + repeatSameCharacter(i, tempArr[k]));
        }
        return tempJoin;
      }
      return result;
    }
    return {
      expectedOutput: expectedOutput(),
      actualOutput: actualOutput(number)
    }
  }
};

const myPrograms = new Programs();
console.log(myPrograms.pattern1(3))