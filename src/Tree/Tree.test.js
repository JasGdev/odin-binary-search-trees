import { Tree } from './Tree.js';
import { Node } from '../Node/Node.js';
import { prettyPrint } from '../helper.js';

let tree;

beforeEach(() => {});

describe('logic implementation', () => {
	test('Splitting left and right subtree', () => {
		let arr = [0, 1, 2, 3, 4];
		const rootIndex = 2;
		let left = arr.slice(0, rootIndex);
		let right = arr.slice(rootIndex + 1, arr.length);
		expect(left).toEqual([0, 1]);
		expect(right).toEqual([3, 4]);
	});

	test('sorting and removing duplicate from array', () => {
		let array = [5, 1, 1, 0];
		let arr = [...new Set(array)].sort((a, b) => a - b);
		expect(arr).toEqual([0, 1, 5]);
	});
});

describe('buildTree() implementation', () => {
	test('buildTree() implementation for a 3 size tree with array length 4 ', () => {
		let array = [5, 4, 4, 1];
		let expectedListView = [4, [1, null, null], [5, null, null]];

		tree = new Tree(array);
		expect(tree.root.listView()).toEqual(expectedListView);
	});

	test('buildTree() implementation for a large tree', () => {
		let array = [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 17, 20, 7, 10, 12, 3];
		let expectedListView = [
			10,
			[5, [3, [1, null, null], [4, null, null]], [7, [6, null, null], [8, null, null]]],
			[15, [12, [11, null, null], [13, null, null]], [18, [17, null, null], [20, null, null]]],
		];

		tree = new Tree(array);
		expect(tree.root.listView()).toEqual(expectedListView);
		// console.log(prettyPrint(tree.root))
	});
});

describe('includes() implementation', () => {
	test('includes() implementation large tree', () => {
		let array = [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 17, 20, 7, 10, 12, 3];
		let expectedListView = [
			10,
			[5, [3, [1, null, null], [4, null, null]], [7, [6, null, null], [8, null, null]]],
			[15, [12, [11, null, null], [13, null, null]], [18, [17, null, null], [20, null, null]]],
		];

		tree = new Tree(array);
		// console.log(prettyPrint(tree.root));
		expect(tree.root.listView()).toEqual(expectedListView);
		expect(tree.includes(10)).toBe(true);
		expect(tree.includes(1)).toBe(true);
		expect(tree.includes(17)).toBe(true);
		expect(tree.includes(12)).toBe(true);
		expect(tree.includes(6)).toBe(true);
		expect(tree.includes(20)).toBe(true);
		expect(tree.includes(100)).toBe(false);
		expect(tree.includes(0)).toBe(false);
		expect(tree.includes(-5)).toBe(false);
		expect(tree.includes(2)).toBe(false);
	});
});

describe('insert() implementation', () => {
	test('insert() implementation for a 3 size tree with array length 4 ', () => {
		let array = [5, 4, 4, 1];
		let expectedListView = [4, [1, null, null], [5, null, null]];

		tree = new Tree(array);
		expect(tree.root.listView()).toEqual(expectedListView);
		// console.log(prettyPrint(tree.root));

		tree.insert(2);
		let expectedListView2 = [4, [1, null, [2, null, null]], [5, null, null]];

		expect(tree.root.listView()).toEqual(expectedListView2);
		tree.insert(2);
		expect(tree.root.listView()).toEqual(expectedListView2);
		// console.log(prettyPrint(tree.root));

		tree.insert(3);
		let expectedListView3 = [4, [1, null, [2, null, [3, null, null]]], [5, null, null]];
		expect(tree.root.listView()).toEqual(expectedListView3);
		// console.log(prettyPrint(tree.root));

		tree.insert(6);
		let expectedListView4 = [4, [1, null, [2, null, [3, null, null]]], [5, null, [6, null, null]]];
		expect(tree.root.listView()).toEqual(expectedListView4);
		// console.log(prettyPrint(tree.root));
	});

	test('insert() implementation for a 0 size tree', () => {
		let array = [];

		tree = new Tree(array);
		tree.insert(2);
		let expectedListView = [2, null, null];

		expect(tree.root.listView()).toEqual(expectedListView);
	});
});

describe('deleteItem() implementation', () => {
	test('deleteItem() implementation for a 3 size tree with array length 4 ', () => {
		let array = [5, 4, 4, 1];
		let expectedListView1 = [4, [1, null, null], [5, null, null]];

		tree = new Tree(array);
		expect(tree.root.listView()).toEqual(expectedListView1);

		tree.deleteItem(4);
		let expectedListView2 = [5, [1, null, null], null];
		expect(tree.root.listView()).toEqual(expectedListView2);

		tree.deleteItem(1);
		let expectedListView3 = [5, null, null];
		expect(tree.root.listView()).toEqual(expectedListView3);
	});

	test('deleteItem() implementation for a 3 size tree with array length 4 ', () => {
		let array = [5, 4, 4, 1];

		tree = new Tree(array);

		let expectedListView1 = [4, [1, null, null], [5, null, null]];
		expect(tree.root.listView()).toEqual(expectedListView1);

		let expectedListView2 = [5, [1, null, null], null];
		tree.deleteItem(4);
		expect(tree.root.listView()).toEqual(expectedListView2);

		let expectedListView3 = [5, null, null];
		tree.deleteItem(1);
		expect(tree.root.listView()).toEqual(expectedListView3);
		tree.deleteItem(1);
		expect(tree.root.listView()).toEqual(expectedListView3);
		tree.deleteItem(5);
		expect(tree.root).toBe(null);
	});
});

describe('levelOrderForEach() implementation', () => {
	test('levelOrderForEach() implementation for a size 6 tree ', () => {
		let array = [5, 4, 1, 2, 8, 10];

		const result = [];
		const resultRec = [];

		tree = new Tree(array);
		tree.levelOrderForEach((value) => result.push(value));
		tree.levelOrderForEachRec((value) => resultRec.push(value));
		expect(result).toEqual([5, 2, 10, 1, 4, 8]);
		expect(resultRec).toEqual([5, 2, 10, 1, 4, 8]);

		expect(() => {
			tree.levelOrderForEach();
		}).toThrow(new Error('callback function is required'));

		expect(() => {
			tree.levelOrderForEachRec();
		}).toThrow(new Error('callback function is required'));
	});
});

describe('in/pre/postOrderForEach() implementation', () => {
	test('in/pre/postOrderForEach() implementation for a size 6 tree ', () => {
		let array = [5, 4, 1, 2, 8, 10];
		tree = new Tree(array);

		const inOrderResult = [];
		tree.inOrderForEach((value) => inOrderResult.push(value));
		expect(inOrderResult).toEqual([1, 2, 4, 5, 8, 10]);
		expect(() => {
			tree.inOrderForEach();
		}).toThrow(new Error('callback function is required'));

		const preOrderResult = [];
		tree.preOrderForEach((value) => preOrderResult.push(value));
		expect(preOrderResult).toEqual([5, 2, 1, 4, 10, 8]);
		expect(() => {
			tree.preOrderForEach();
		}).toThrow('callback function is required');

		const postOrderResult = [];
		tree.postOrderForEach((value) => postOrderResult.push(value));
		expect(postOrderResult).toEqual([1, 4, 2, 8, 10, 5]);
		0;
		expect(() => {
			tree.postOrderForEach();
		}).toThrow('callback function is required');
	});
});

describe('height(), depth() implementation', () => {
	test('height(), depth on size 8 tree', () => {
		let array = [5, 4, 1, 2, 8, 10, 13, 15];
		tree = new Tree(array);
		// console.log(prettyPrint(tree.root))
		expect(tree.depth(5)).toBe(2);
		expect(tree.depth(2)).toBe(2);
		expect(tree.depth(10)).toBe(2);
		expect(tree.depth(8)).toBe(0);
		expect(tree.depth(4)).toBe(1);
		expect(tree.depth(1)).toBe(3);
		expect(tree.height(8)).toBe(3);
		expect(tree.height(4)).toBe(2);
		expect(tree.height(2)).toBe(1);
		expect(tree.height(5)).toBe(0);
		expect(tree.height(13)).toBe(1);
		expect(tree.height(15)).toBe(0);
		expect(tree.height(25)).toBe(undefined);
		expect(tree.height(0)).toBe(undefined);
	});

	test('height(), depth on size 1 tree', () => {
		let array = [5];
		tree = new Tree(array);
		// console.log(prettyPrint(tree.root));
		expect(tree.depth(5)).toBe(0);
		expect(tree.height(5)).toBe(0);
	});
});

describe('isBalanced() implementation', () => {
	test('isBalanced() on size 1 tree', () => {
		let array = [1];
		tree = new Tree(array);
		// console.log(prettyPrint(tree.root))
		expect(tree.isBalanced()).toBe(true);
	});

	test('isBalanced() on size 2 tree', () => {
		let array = [1, 2];
		tree = new Tree(array);
		// console.log(prettyPrint(tree.root))
		expect(tree.isBalanced()).toBe(true);
	});
	test('isBalanced() on size 3 tree', () => {
		let array = [1, 2, 4];
		tree = new Tree(array);
		// console.log(prettyPrint(tree.root))
		expect(tree.isBalanced()).toBe(true);
	});

	test('isBalanced() on size 5 tree', () => {
		let array = [1, 2, 4, 5];
		tree = new Tree(array);
		tree.insert(0);
		// console.log(prettyPrint(tree.root));
		expect(tree.isBalanced()).toBe(false);
		tree.insert(6)
		// console.log(prettyPrint(tree.root));
		expect(tree.isBalanced()).toBe(false);
		tree.insert(3)
		// console.log(prettyPrint(tree.root));
		expect(tree.isBalanced()).toBe(true);
	});
});

describe('rebalance() implementation', () => {
	test('isBalanced() on size 5 tree', () => {
		let array = [1, 2, 4, 5];
		tree = new Tree(array);
		tree.insert(0);
		console.log(prettyPrint(tree.root));
		expect(tree.isBalanced()).toBe(false);
		tree.insert(6)
		console.log(prettyPrint(tree.root));
		expect(tree.isBalanced()).toBe(false);
		tree.rebalance()
		expect(tree.isBalanced()).toBe(true);
		console.log(prettyPrint(tree.root));
	});
});
