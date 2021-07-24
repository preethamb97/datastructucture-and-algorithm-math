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
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left == null) {
            node.left = new Node(data);
            return data;
          } else if (node.left != null) {
            return searchTree(node.left);
          }

        } else if (data > node.data) {
          if (node.right == null) {
            node.right = new Node(data);
            return data;
          } else if (node.right != null) {
            return searchTree(node.right);
          }

        } else {
          return null;
        }
      }

      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while(current.left != null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while(current.right != null) {
      current = current.right;
    }
    return current.data;
  }


}

let myBST = new BST();
console.log(myBST.add(10));
console.log(myBST.add(2));
console.log(myBST.add(11));
console.log(myBST.add(22));
console.log(myBST.add(99));
console.log(myBST.add(33));
console.log(myBST.add(14));
console.log(myBST.add(55));
console.log(myBST.add(12));
// myBST.remove(7);
// console.log(myBST.findMax());
// console.log(myBST.findMax());