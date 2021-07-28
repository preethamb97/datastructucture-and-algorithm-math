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
    const node = this.root;
    if (node == null) {
      this.root = new Node(data);
      return data;
    } else {
      //
      function recursiveTree(node) {
        // console.log(node.data,'====', data)
        if (data < node.data) {
          if (node.left == null) {
            node.left = new Node(data);
            return data;
          } else {
            return recursiveTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right == null) {
            node.right = new Node(data);
            return data;
          } else {
            return recursiveTree(node.right);
          }
        } else {
          return null;
        }
      }
      return recursiveTree(node);
    }
  }

  findMax() {
    function recursiveCall(node) {
      if (node.data == null) {
        return null;
      } else if (node.right == null) {
        return node.data;
      } else {
        return recursiveCall(node.right);
      }
    }
    return recursiveCall(this.root);
  }

  findMin() {
    function recursiveCall(node) {
      if (node.data == null) {
        return null;
      } else if (node.left == null) {
        return node.data;
      } else {
        return recursiveCall(node.left);
      }
    }
    return recursiveCall(this.root);
  }

  isPresent(lookUp) {
    function recursiveCall(node) {
      if (node.data == null) {
        return false;
      } else if (node.data == lookUp) {
        return true;
      } else if (lookUp < node.data) {
        if (node.left == null) {
          return false;
        } else {
          return recursiveCall(node.left);
        }
      } else if (lookUp > node.data) {
        if (node.right == null) {
          return false;
        } else {
          return recursiveCall(node.right);
        }
      } else {
        return false;
      }
    }
    return recursiveCall(this.root);
  }
}

let myBST = new BST();
console.log(myBST.add(10));
console.log(myBST.add(2));
console.log(myBST.add(11));
console.log(myBST.add(22));
console.log(myBST.add(1));
console.log(myBST.add(33));
console.log(myBST.add(14));
console.log(myBST.add(55));
console.log(myBST.add(12));
// myBST.remove(7);
console.log('---------------MAX', myBST.findMax());
console.log('---------------MIN', myBST.findMin());
console.log('---------------isPresent', myBST.isPresent(1111));
console.log('---------------isPresent', myBST.isPresent(1));
console.log('---------------isPresent', myBST.isPresent(55));