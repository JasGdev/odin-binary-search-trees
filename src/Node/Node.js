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

	includes(value) {
		if (this.data == value) {
			return true;
		} else if (this.data < value) {
			if (this.right == null) {
				return false;
			}
			return this.right.includes(value);
		} else if (this.data > value) {
			if (this.left == null) {
				return false;
			}
			return this.left.includes(value);
		}
		return false;
	}

	insert(value) {
		if (this.includes(value)) {
			return;
		}

		// if value is bigger than current root
		if (this.data < value) {
			if (this.right == null) {
				this.right = new Node(value);
			}
			this.right.insert(value);
		}
		// if value is smaller than current root
		else if (this.data > value) {
			if (this.left == null) {
				this.left = new Node(value);
			}
			this.left.insert(value);
		}
	}
}
