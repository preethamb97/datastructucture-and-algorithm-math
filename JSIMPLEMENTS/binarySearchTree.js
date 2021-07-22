class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {

  }

  remove(data) {

  }

  findMin() {

  }

  findMax() {

  }

  find(data) {

  }

  isPresent(data) {

  }


}

let myBST = new BST();
myBST.add(10);
myBST.add(11);
myBST.add(12);
myBST.add(6);
myBST.add(60);
myBST.add(7);
myBST.add(21);
myBST.remove(7);
console.log(myBST.findMax());
console.log(myBST.findMax());