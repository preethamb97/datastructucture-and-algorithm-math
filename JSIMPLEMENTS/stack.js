//stacks

// functions: push, pop, peek, length



const basicUsageOfStackPalindromeExample = () => {
  // palindrome
  var letters = [];// this is our stack
  var word = 'racecar';
  var rword = '';

  for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
  }

  for (let i = 0; i < word.length; i++) {
    rword += letters.pop();
  }

  if (rword == word) {
    console.log(`word ${word} is a palindrome.`);
  } else {
    console.log(`word ${word} is not a palindrome.`);
  }
}

const stackImplement = function () {
  var Stack = function () {
    this.count = 0;
    this.storage = {};

    this.push = function (value) {
      this.storage[this.count] = value;
      this.count++;
    };

    this.pop = function () {
      if (this.count == 0) return;
      this.count--;
      var result = this.storage[this.count];
      delete this.storage[this.count];
      return result;
    };

    this.peek = function () {
      if (this.count == 0) return;
      return this.storage[this.count - 1];
    };

    this.size = function () {
      return this.count;
    }
  };

  var myStack = new Stack();
  console.log('size======', myStack.size());
  myStack.push('preetham');
  console.log('size======', myStack.size());
  myStack.push('coding is awesome');
  myStack.push('datastructure learn');
  console.log('size======', myStack.size());
  console.log('count======', myStack.count)
  console.log('peek======', myStack.peek());
  console.log('pop======', myStack.pop());
  console.log('size======', myStack.size())
}

const mainFunction = () => {
  basicUsageOfStackPalindromeExample();
  stackImplement();
};

mainFunction();