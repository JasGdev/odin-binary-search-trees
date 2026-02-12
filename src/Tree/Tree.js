import { Node } from "../Node/Node.js";
// BST
// | height of left subtree - height of right subtree | < 1

export class Tree {
	constructor(array) {
		this.root = Tree.#buildTree(array);
	}

	static #buildTree(array) {
		// returns the root node
		let arr = [...new Set(array)].sort((a, b) => a - b);

		// use recursion to build tree from sorted array
		// find middle element and make it root
		// recursively repeat for left subarray and then right subarray

		if (array.length == 0) {
			return null;
		}

		let rootIndex = Math.floor(arr.length / 2);
		let root = new Node(arr[rootIndex]);

		root.left = Tree.#buildTree(arr.slice(0, rootIndex));
		root.right = Tree.#buildTree(arr.slice(rootIndex + 1, arr.length));

		return root;
	}

	includes(value) {
		let currentNode = this.root;
		while (currentNode != null) {
			if (value == currentNode.data) return true;
			currentNode = value < currentNode.data ? currentNode.left : currentNode.right;
		}
		return false;
	}

	insert(value) {
		let currentNode = this.root;
		while (currentNode != null) {
            if (currentNode.data === value) return;

			let nextNode = value < currentNode.data ? currentNode.left : currentNode.right;
			if (nextNode === null) {
				if (value < currentNode.data) {
					currentNode.left = new Node(value);
					return;
				} else if (value > currentNode.data) {
					currentNode.right = new Node(value);
					return;
				}
			}
			currentNode = nextNode;
		}
	}

	deleteItem(value) {
		// this.root.
	}
}
