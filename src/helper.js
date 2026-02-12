export function prettyPrint(node, prefix = "", isLeft = true) {
		if (node == null) return "";

		let output = "";

		// Right subtree first (so tree prints sideways)
		output += prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);

		// Current node
		output += `${prefix}${isLeft ? "└── " : "┌── "}${node.data}\n`;

		// Left subtree
		output += prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);

		return output;
	}