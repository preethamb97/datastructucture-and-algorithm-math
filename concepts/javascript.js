const hoisting = () => {
  // hoisting
  // 1. Variable declarations are scanned and are made undefined
  // 2. Function declarations are scanned and are made available
  console.log(myHoisting)
  console.log(x)
  console.log(testHoisting)
  var x;
  function myHoisting() {
    console.log('function is available');
  }

  var testHoisting = () => {
    console.log('code wont work because variable is allocated for testHoisting variable in arrow funtion')
  }

  // output
  // [Function: myHoisting]
  // undefined
  // undefined
};

const stringMethods = () => {
  var stringOne = '    coding is love  ';
  var stringTwo = 'javascript is awesome';
  console.log(stringOne.charAt(1));
  console.log(stringOne.charCodeAt(1));
  console.log(String.fromCharCode(111));
  console.log(stringOne.charCodeAt(1));
  console.log(stringOne.concat(stringTwo))
  console.log(stringOne.endsWith("ve"))
  console.log(stringOne.startsWith("co"))
  console.log(stringOne.includes("co"))
  console.log(stringOne.match(/lo/g))
  console.log(stringOne.repeat(3))
  console.log(stringOne.replace(/love/g, "good"))
  console.log(stringOne.search("is"))
  console.log(stringOne.slice(2, 4))
  console.log(stringOne.split(" "))
  console.log(stringOne.substr(2, 4))
  console.log(stringOne.substring(2, 4))
  console.log(stringOne.toLowerCase())
  console.log(stringOne.toUpperCase())
  console.log(stringOne.trim())
  //output
  // 32
  // o
  // 32
  //     coding is love  javascript is awesome
  // false
  // false
  // true
  // [ 'lo' ]
  //     coding is love      coding is love      coding is love  
  //     coding is good  
  // 11

  // [ '', '', '', '', 'coding', 'is', 'love', '', '' ]
  //   co

  //     coding is love  
  //     CODING IS LOVE  
  // coding is love
}

const immediatelyInvokedFunctionExpression = () => {
  (testFunc = function test(number = 2) {
    console.log(`immediatelyInvokedFunctionExpression ${number}`)
  })();
  testFunc(10);
}

const callBindApplyUsage = () => {
  // bind returns a function
  const cat = {
    name: 'billi',
    speak(sound) {
      return `${this.name} says "${sound}"`
    },
  }
  console.log(cat.speak('Meow'));

  const catSpeak = cat.speak;
  console.log(catSpeak('Meowww'))

  const catSpeak1 = cat.speak.bind(cat);
  console.log(catSpeak1('Meowwwwwwww'));

  const catSpeak2 = cat.speak.bind({name: 'tommy'});
  console.log(catSpeak2('Meowwwwwwwwwwww'));

  const catSpeak4 = cat.speak.bind({name: 'tommy'}, 'Meowwwwwwwwwwwwwwww');
  console.log(catSpeak4());

  // call will imediatly call the fucntion
  console.log(catSpeak.call(cat, 'meow1'))

  // apply execepts the arguments in array format
  console.log(catSpeak.apply(cat, ["meow"]));
}

const main = () => {
  hoisting();
  stringMethods();
  immediatelyInvokedFunctionExpression();
  callBindApplyUsage();
};

main();