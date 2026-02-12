import { Tree } from "./Tree.js";

let tree;

beforeEach(() => {
	// tree = new Tree()
});

test("Splitting left and right subtree", () => {
	let arr = [0, 1, 2, 3, 4];
	const rootIndex = 2;
	let left = arr.slice(0, rootIndex);
	let right = arr.slice(rootIndex + 1, arr.length);
	expect(left).toEqual([0, 1]);
	expect(right).toEqual([3, 4]);
});

describe("append() implementation", () => {
	test.skip("adding to Linked List x2", () => {});
});
