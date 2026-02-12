export class Node {
	constructor(data, left = null, right = null) {
		this.data = data;
		this.left = left;
		this.right = right;
	}

	listView() {
		if (this.left !== null && this.right !== null) {
			return [this.data, this.left.listView(), this.right.listView()];
		} else if (this.left !== null && this.right == null) {
			return [this.data, this.left.listView(), null];
		} else if (this.left == null && this.right !== null) {
			return [this.data, null, this.right.listView()];
		} else if (this.left === null && this.right === null) {
			return [this.data, null, null];
		}
	}




}
