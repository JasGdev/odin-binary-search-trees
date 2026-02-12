import { Node } from '../Node/Node.js';
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
		if (this.root === null) {
			this.root = new Node(value);
			return;
		}
		let currentNode = this.root;
		while (currentNode != null) {
			if (currentNode.data === value) return;
			let shouldGoLeft = value < currentNode.data;
			let nextNode = shouldGoLeft ? currentNode.left : currentNode.right;
			if (nextNode === null) {
				if (shouldGoLeft) {
					currentNode.left = new Node(value);
					return;
				} else {
					currentNode.right = new Node(value);
					return;
				}
			}
			currentNode = nextNode;
		}
	}

	deleteItem(value) {
		// traverse until find value
		// when find value matching node, remember node's parent, left and right
		// if left and right are null, remove the node's reference in parent
		// if only 1 child is null, set node's reference to non-null child in parent
		// if both child are present
		// find smallest value in right subtree, and swap places
		// delete the value

		this.root = this.#deleteRec(this.root, value);
	}

	#deleteRec(root, x) {
		if (root === null) return root;

		if (root.data > x) root.left = this.#deleteRec(root.left, x);
		else if (root.data < x) root.right = this.#deleteRec(root.right, x);
		else {
			// Node with 0 or 1 child
			if (root.left === null) return root.right;
			if (root.right === null) return root.left;

			// Node with 2 children
			const succ = this.getSuccessor(root);
			root.data = succ.data;
			root.right = this.#deleteRec(root.right, succ.data);
		}
		return root;
	}

	getSuccessor(curr) {
		curr = curr.right;
		while (curr.data != null && curr.left != null) {
			curr = curr.left;
		}
		return curr;
	}

	levelOrderForEach(callback) {
		// insert into queue a node
		// when it is time dequeue it, add its children to the queue
		if (callback === undefined) {
			throw new Error('callback function is required');
		}
		let queue = [this.root];
		while (queue.length > 0) {
			let node = queue.shift();
			if (node.left !== null) queue.push(node.left);
			if (node.right !== null) queue.push(node.right);
			callback(node.data);
		}
	}

	levelOrderForEachRec(callback) {
		if (callback === undefined) {
			throw new Error('callback function is required');
		}
		let queueArr = [this.root];
		this.#levelOrderForEachRecHelper(callback, queueArr);
		// insert into queue a node
		// when it is time dequeue it, add its children to the queue
	}

	#levelOrderForEachRecHelper(callback, queue) {
		let node = queue.shift();
		if (node == null) {
			return;
		}
		if (node.left !== null) queue.push(node.left);
		if (node.right !== null) queue.push(node.right);
		callback(node.data);
		this.#levelOrderForEachRecHelper(callback, queue);
	}

	inOrderForEach(callback, root = this.root) {
		if (callback === undefined) {
			throw new Error('callback function is required');
		}

		if (root === null) return;

		this.inOrderForEach(callback, root.left);
		callback(root.data);
		this.inOrderForEach(callback, root.right);
	}

	preOrderForEach(callback, root = this.root) {
		if (callback === undefined) {
			throw new Error('callback function is required');
		}

		if (root === null) return;

		callback(root.data);
		this.preOrderForEach(callback, root.left);
		this.preOrderForEach(callback, root.right);
	}

	postOrderForEach(callback, root = this.root) {
		if (callback === undefined) {
			throw new Error('callback function is required');
		}

		if (root === null) return;

		this.postOrderForEach(callback, root.left);
		this.postOrderForEach(callback, root.right);
		callback(root.data);
	}

	height(value) {
		let node = this.root;
        
		while (node.data != value) {
			const shouldGoLeft = value < node.data;
			node = shouldGoLeft ? node.left : node.right;
            if (node === null) return undefined
		}
        return this.longestPathToLeaf(node)
	}

	longestPathToLeaf(node, count = 0) {
		let maxCount;
		if (node == null) return count-1;
		let leftMax = this.longestPathToLeaf(node.left, count + 1);
		let rightMax = this.longestPathToLeaf(node.right, count + 1);
		maxCount = Math.max(leftMax, rightMax);
		return maxCount;
	}

	depth(value, node = this.root, count = 0) {
		if (node === null) return undefined;
		if (node.data === value) return count;
		const shouldGoLeft = value < node.data;
		if (shouldGoLeft) {
			return this.depth(value, node.left, count + 1);
		} else {
			return this.depth(value, node.right, count + 1);
		}
	}

    isBalanced(node = this.root){
        if (node === null) return true
        if (node.left === null && node.right === null) return true

        const rightHeight = this.height(node.right.data)
        const leftHeight = this.height(node.left.data)


        if (!node.left === null && node.right === null){
            if (leftHeight > 1) return false
        }
        if (node.left === null && !node.right === null){
            if (rightHeight > 1) return false
        }
        // both nodes are not null
        else if (Math.abs(rightHeight - leftHeight) < 1){
            if (this.isBalanced(node.left) && this.isBalanced(node.right)){
                return true
            }

        }

        return false
    }
}
