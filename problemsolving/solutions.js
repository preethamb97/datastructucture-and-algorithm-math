const randomlyReorderArray = (inputArr) => {
  console.log('=================================', 'randomlyReorderArray');
  // input [1, 2, 3, 4, 5, 6, 7, 8]
  // time complexity : O(n)
  for (let i = inputArr.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * inputArr.length);
    const temp = inputArr[randomNumber % i];
    inputArr[randomNumber % i] = inputArr[i];
    inputArr[i] = temp;
  }
  return inputArr;
};

const longestConsecutiveCharacters = (input) => {
  console.log('=================================', 'longestConsecutiveCharacters');
  // input : AABCDDBBBEA
  // keeping track of 5 things
  // max character 
  // max character length
  // current character
  // previous character
  // count
  let myObject = {};
  var previousCharacter;
  var maxCharacter;
  var currentCharacter;
  var count = 0;
  for (let i = 0; i < input.length; i++) {
    previousCharacter = currentCharacter;
    currentCharacter = input[i];

    if (!(currentCharacter in myObject)) {
      myObject[currentCharacter] = 0;
    }
    if (maxCharacter == undefined) {
      maxCharacter = currentCharacter;
    }
    if (previousCharacter != currentCharacter) {
      count = 1;
      if (myObject[currentCharacter] < count) {
        myObject[currentCharacter] = count;
      }
      if (myObject[currentCharacter] > myObject[maxCharacter]) {
        maxCharacter = currentCharacter;
      }
    } else if (previousCharacter == currentCharacter) {
      count++;
      myObject[currentCharacter] = count;
      if (myObject[currentCharacter] > myObject[maxCharacter]) {
        maxCharacter = currentCharacter;
      }
    }
  }
  return maxCharacter;
};

const twoSum = (input, target) => {
  let myStorage = {};
  // given numbers return indexes of 2 numbers such that sum add up to 9
  for (let i = 0; i < input.length; i++) {
    if (myStorage[input[i]] != undefined) return [myStorage[input[i]], i];
    myStorage[target - input[i]] = i;
  }
}

const main = () => {
  console.log(randomlyReorderArray([1, 2, 3, 4, 5, 6, 7, 8]));
  console.log(longestConsecutiveCharacters('AABCGGDDBBBEA'));
  console.log(twoSum([2, 7, 11, 15], 9));

}

main();