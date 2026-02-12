import { Node } from "./Node.js";

let node;

beforeEach(() => {
	node = new Node(5);
});

test("listView() implementation", () => {
	let leftNode = new Node(4);
	let rightNode = new Node(6);

    expect(node.listView()).toEqual([5, null, null]);
    	
    node.left = leftNode;
    expect(node.listView()).toEqual([5, [4, null, null], null]);
	node.right = rightNode;
    expect(node.listView()).toEqual([5, [4, null, null], [6, null, null]]);
});

describe("append() implementation", () => {
	test("adding to Linked List x2", () => {
		// list.append("key1", 5);
		// list.append("key2", 7);
		// const testNode2 = new Node("key2", 7);
		// const testNode1 = new Node("key1", 5, testNode2);
		// expect(list.headNode).toEqual(testNode1);
		// expect(list.headNode.nextNode).toEqual(testNode2);
	});
});
