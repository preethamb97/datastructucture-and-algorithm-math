// Queues
// FIFO

// size, enqueue, dequeue, front, print, isempty
const basicQueues = () => {
  let myQueue = function () {
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

const priorityQueue = () => {
  let myQueue = function () {
    this.collection = [];

    this.print = function () {
      return this.collection;
    }

    this.size = function () {
      return this.collection.length;
    }

    this.enqueue = function (value) {
      let isAdded = false;
      if (this.collection.length == 0) {
        this.collection.push(value);
        return this.collection[0];
      }

      for (let i = 0; i < this.collection.length; i++) {
        if (this.collection[i][1] > value[1]) {
          this.collection.splice(i, 0, value);
          isAdded = true;
          break;
        }
      }
      if (isAdded == false) {
        this.collection.push(value);
      }
      return value;

    }

    this.dequeue = function () {
      this.collection.shift();
      return this.collection;
    }

    this.isEmpty = function () {
      return (this.collection.length == 0);
    }
  }

  let myPriorityQueue = new myQueue();
  console.log('--------------priority queues-------------------');
  myPriorityQueue.enqueue(["rank 10", 10]);
  console.log('print=======', myPriorityQueue.print());
  console.log('length=======', myPriorityQueue.size());
  myPriorityQueue.enqueue(["rank 5", 5]);
  myPriorityQueue.enqueue(["rank 2", 2]);
  myPriorityQueue.enqueue(["rank 7", 7]);
  myPriorityQueue.enqueue(["rank 24", 24]);
  myPriorityQueue.enqueue(["rank 15", 15]);
  console.log('print=======', myPriorityQueue.print());
  console.log('length=======', myPriorityQueue.size());
  myPriorityQueue.dequeue();
  myPriorityQueue.dequeue();
  console.log('print=======', myPriorityQueue.print());
  console.log('length=======', myPriorityQueue.size());
};

const mainFunction = () => {
  basicQueues();
  priorityQueue();
}

mainFunction();