// Queues
// FIFO

// size, enqueue, dequeue, front, print, isempty
const basicQueues = () => {
  var myQueue = function () {
    this.collection = [];

    this.print = function () {
      return this.collection;
    }

    this.size = function () {
      return this.collection.length;
    }

    this.front = function () {
      return this.collection[0];
    }

    this.isEmpty = function () {
      return (this.collection.length == 0);
    }

    this.enqueue = function (value) {
      this.collection.push(value);
      return value;
    }

    this.dequeue = function () {
      this.collection.shift();
    }
  }

  var basicQueue = new myQueue();
  basicQueue.enqueue('a');
  basicQueue.enqueue('b');
  basicQueue.enqueue('c');
  console.log('=====print', basicQueue.print())
  console.log('=====front', basicQueue.front())
  basicQueue.dequeue();
  console.log('=====print', basicQueue.print())
  console.log('=====front', basicQueue.front())
}

const mainFunction = () => {
  basicQueues();
}

mainFunction();