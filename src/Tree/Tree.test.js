import { Tree } from "./Tree.js";
import { Node } from "../Node/Node.js";
import { prettyPrint } from "../helper.js";

let tree;

beforeEach(() => {});

describe("logic implementation", () => {
	test("Splitting left and right subtree", () => {
		let arr = [0, 1, 2, 3, 4];
		const rootIndex = 2;
		let left = arr.slice(0, rootIndex);
		let right = arr.slice(rootIndex + 1, arr.length);
		expect(left).toEqual([0, 1]);
		expect(right).toEqual([3, 4]);
	});

	test("sorting and removing duplicate from array", () => {
		let array = [5, 1, 1, 0];
		let arr = [...new Set(array)].sort((a, b) => a - b);
		expect(arr).toEqual([0, 1, 5]);
	});
});

describe("buildTree() implementation", () => {
	test("buildTree() implementation for a 3 size tree with array length 4 ", () => {
		let array = [5, 4, 4, 1];
		let expectedListView = [4, [1, null, null], [5, null, null]];

		tree = new Tree(array);
		expect(tree.root.listView()).toEqual(expectedListView);
	});

	test("buildTree() implementation for a large tree", () => {
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

describe("includes() implementation", () => {
	test("includes() implementation large tree", () => {
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
