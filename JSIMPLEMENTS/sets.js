const basicSets = () => {
  // add, remove, has,values,  size, union, intersection, difference, subset
  var mySet = function () {
    this.collection = [];

    this.has = function (value) {
      return (this.collection.indexOf(value) !== -1);
    }

    this.values = function () {
      return this.collection;
    }

    this.size = function () {
      return this.collection.length;
    }

    this.add = function (value) {
      if (!this.has(value)) {
        this.collection.push(value);
        return true;
      }
      return false;
    }

    this.remove = function (value) {
      if (this.has(value)) {
        const index = this.collection.indexOf(value);
        this.collection.splice(index, 1);
        return true;
      }
      return false;
    }

    this.union = function (otherSet) {
      let unionSet = new mySet();
      let firstSet = this.values();
      let secondSet = otherSet.values();
      firstSet.forEach(function (val) {
        unionSet.add(val);
      });
      secondSet.forEach(function (val) {
        unionSet.add(val);
      });
      return unionSet;
    }

    this.intersection = function (otherSet) {
      let intersectionSet = new mySet();
      let firstSet = this.values();
      firstSet.forEach(function (val) {
        if (otherSet.has(val)) {
          intersectionSet.add(val);
        }
      });
      return intersectionSet;
    }

    this.difference = function (otherSet) {
      let setDifference = new mySet();
      let firstSet = this.values();
      firstSet.forEach(function (val) {
        if (!otherSet.has(val)) {
          setDifference.add(val);
        }
      });
      return setDifference;
    }

    this.subset = function (otherSet) {
      let firstSet = this.values();
      return firstSet.every(function (val) {
        return otherSet.has(val);
      });
    }
  }


  // test
  let setOne = new mySet();
  let setTwo = new mySet();
  setOne.add("a");
  setOne.add("b");
  setOne.add("b");
  setOne.add("c");
  setOne.add("d");
  setOne.add("e");
  console.log('setOne==========', setOne.values())
  setOne.remove("e");
  setOne.remove("e");
  console.log('setOne==========', setOne.values())
  console.log('size of setOne', setOne.size())
  setTwo.add("a");
  setTwo.add("z");
  setTwo.add("b");
  setTwo.add("e");
  setTwo.add("f");
  setTwo.add("g");
  console.log('setTwo==========', setTwo.values())
  console.log('union of setOne and SetTwo=======', setOne.union(setTwo).values())
  console.log('intersection of setOne and SetTwo=======', setOne.intersection(setTwo).values())
  console.log('difference of setOne and SetTwo=======', setOne.difference(setTwo).values())
  console.log('is setOne subset to SetTwo=======', setOne.subset(setTwo))
};

const mainFunction = () => {
  basicSets();
};

mainFunction();